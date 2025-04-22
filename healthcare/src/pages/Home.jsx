import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Home = () => {
  const features = [
    {
      icon: (
        <svg className="w-14 h-14 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Appointment Scheduling',
      description: 'Book appointments with doctors easily and manage your schedule efficiently.'
    },
    {
      icon: (
        <svg className="w-14 h-14 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Virtual Consultations',
      description: 'Connect with doctors through secure video calls and chat from anywhere.'
    },
    {
      icon: (
        <svg className="w-14 h-14 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Medical Records',
      description: 'Securely store and access your medical history, prescriptions, and test results.'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-32 px-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionizing Healthcare at Your Fingertips
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connecting patients with doctors digitally, enabling secure records, and offering seamless consultations anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Get Started
            </Link>
            <Link 
              to="/login" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-12">Our Key Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                className="shadow-xl rounded-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {feature.description}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">About HealthBridge</h2>
            <p className="text-gray-700 mb-4">
              HealthBridge is your all-in-one digital healthcare platform. We aim to bring doctors and patients closer, improving the healthcare experience.
            </p>
            <p className="text-gray-700">
              Access medical records securely, book virtual consultations, and streamline your health journey with us.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Healthcare professionals" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Digital Healthcare Revolution</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Thousands of patients and doctors are already benefiting from HealthBridge's innovative platform. It's time for you to experience the future of healthcare.
          </p>
          <div className="flex justify-center gap-6">
            <Link 
              to="/register" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Join Now
            </Link>
            <Link 
              to="/doctors" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Find Doctors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
