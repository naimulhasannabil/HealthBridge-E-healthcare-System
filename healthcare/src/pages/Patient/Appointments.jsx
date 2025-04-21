import React from 'react';
import Sidebar from '../../components/Sidebar';

const PatientAppointments = () => {
  const patientMenu = [
    { name: 'Dashboard', path: '/patient', icon: 'home' },
    { name: 'Appointments', path: '/patient/appointments', icon: 'calendar' },
    { name: 'Medical Records', path: '/patient/records', icon: 'document-text' },
    { name: 'Prescriptions', path: '/patient/prescriptions', icon: 'receipt' },
    { name: 'Find Doctors', path: '/patient/doctors', icon: 'user-group' },
    { name: 'Video Consult', path: '/patient/consult', icon: 'video-camera' },
    { name: 'Settings', path: '/patient/settings', icon: 'cog' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar menuItems={patientMenu} userType="Patient" />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Appointments</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Book New Appointment
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Upcoming Appointments</h2>
              <div className="relative">
                <select className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            <div className="p-4 hover:bg-gray-50 transition">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  15 May
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">Dr. Sarah Johnson</h3>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Confirmed
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Cardiology Consultation</p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    10:00 AM - 10:30 AM
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <button className="text-blue-600 hover:text-blue-900 font-medium">View</button>
                </div>
              </div>
            </div>
            
            <div className="p-4 hover:bg-gray-50 transition">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  18 May
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">Dr. Michael Chen</h3>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Neurology Consultation</p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    2:30 PM - 3:00 PM
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <button className="text-blue-600 hover:text-blue-900 font-medium">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Past Appointments</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            <div className="p-4 hover:bg-gray-50 transition">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-semibold">
                  5 May
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">Dr. Robert Williams</h3>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      Completed
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">General Checkup</p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    9:00 AM - 9:30 AM
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <button className="text-blue-600 hover:text-blue-900 font-medium">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;