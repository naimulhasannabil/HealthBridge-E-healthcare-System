import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Bridging Patients and Doctors Digitally
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Empower your health journey with virtual consultations, seamless scheduling, and secure medical records – all in one platform.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register" className="bg-white text-blue-700 px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-100 transition duration-300">
              Get Started
            </Link>
            <Link to="/login" className="border border-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition duration-300">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Appointment Scheduling",
                icon: (
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                ),
                desc: "Book appointments with doctors easily and manage your time efficiently."
              },
              {
                title: "Virtual Consultations",
                icon: (
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                desc: "Consult with healthcare professionals securely from the comfort of your home."
              },
              {
                title: "Medical Records",
                icon: (
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                ),
                desc: "Keep your medical data organized, accessible, and safe in one place."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
                <div className="flex justify-center text-blue-600 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-6">About HealthBridge</h2>
            <p className="text-gray-700 mb-4">
              HealthBridge is a transformative digital healthcare solution that simplifies your access to medical services.
              Our intuitive platform allows patients to connect with doctors seamlessly, schedule appointments, and securely store and access their health records.
            </p>
            <p className="text-gray-700">
              We're driven by the mission to enhance healthcare accessibility, efficiency, and user convenience by embracing technology that truly cares.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Doctor with tablet"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
