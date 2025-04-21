import React from 'react';
import Sidebar from '../../components/Sidebar';

const PatientMedicalRecords = () => {
  const patientMenu = [
    { name: 'Dashboard', path: '/patient', icon: 'home' },
    { name: 'Appointments', path: '/patient/appointments', icon: 'calendar' },
    { name: 'Medical Records', path: '/patient/records', icon: 'document-text' },
    { name: 'Prescriptions', path: '/patient/prescriptions', icon: 'receipt' },
    { name: 'Find Doctors', path: '/patient/doctors', icon: 'user-group' },
    { name: 'Video Consult', path: '/patient/consult', icon: 'video-camera' },
    { name: 'Settings', path: '/patient/settings', icon: 'cog' },
  ];

  const records = [
    {
      id: 1,
      date: '15 May 2023',
      type: 'Lab Results',
      doctor: 'Dr. Sarah Johnson',
      description: 'Blood test results - Complete Blood Count'
    },
    {
      id: 2,
      date: '10 May 2023',
      type: 'Diagnosis',
      doctor: 'Dr. Robert Williams',
      description: 'Annual physical examination report'
    },
    {
      id: 3,
      date: '5 May 2023',
      type: 'X-Ray',
      doctor: 'Dr. Michael Chen',
      description: 'Chest X-ray results'
    },
    {
      id: 4,
      date: '20 April 2023',
      type: 'Prescription',
      doctor: 'Dr. Emily Davis',
      description: 'Medication for allergy treatment'
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar menuItems={patientMenu} userType="Patient" />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Medical Records</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Upload New Record
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">All Records</h2>
              <div className="relative">
                <select className="appearance-none bg-gray-100 border border-gray-300 rounded-md pl-3 pr-8 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Types</option>
                  <option>Lab Results</option>
                  <option>Diagnosis</option>
                  <option>X-Ray</option>
                  <option>Prescription</option>
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
            {records.map((record) => (
              <div key={record.id} className="p-4 hover:bg-gray-50 transition">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">{record.type}</h3>
                      <span className="text-sm text-gray-500">{record.date}</span>
                    </div>
                    <p className="text-sm text-gray-500">{record.description}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {record.doctor}
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button className="text-blue-600 hover:text-blue-900 font-medium">View</button>
                    <button className="ml-4 text-gray-500 hover:text-gray-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientMedicalRecords;