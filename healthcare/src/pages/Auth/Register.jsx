import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'patient',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const registerData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      };

      await axios.post('http://localhost:8000/auth/register', registerData);

      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.detail || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-blue-50 flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
        <p className="text-sm text-center text-gray-500 mt-1">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>

        {error && <p className="mt-4 text-red-600 text-sm text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="text-sm font-medium text-gray-700">Register as</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center px-4 py-2 text-white text-sm font-semibold rounded-md ${
                loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
