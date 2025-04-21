import React from 'react';
import Sidebar from '../../components/Sidebar';

const DoctorPatients = () => {
  const doctorMenu = [
    { name: 'Dashboard', path: '/doctor', icon: 'home' },
    { name: 'Appointments', path: '/doctor/appointments', icon: 'calendar' },
    { name: 'Patients', path: '/doctor/patients', icon: 'user-group' },
    { name: 'Schedule', path: '/doctor/schedule', icon: 'clock' },
    { name: 'Prescriptions', path: '/doctor/prescriptions', icon: 'receipt' },
    { name: 'Video Consult', path: '/doctor/consult', icon: 'video-camera' },
    { name: 'Profile', path: '/doctor/profile', icon: 'user' },
  ];

  const patients = [
    {
      id: 1,
      name: 'John Smith',
      age: 42,
      gender: 'Male',
      lastVisit: '15 May 2023',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      age: 35,
      gender: 'Female',
      lastVisit: '12 May 2023',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Michael Brown',
      age: 28,
      gender: 'Male',
      lastVisit: '5 May 2023',
      status: 'Inactive'
    },
    {
      id: 4,
      name: 'Emily Davis',
      age: 50,
      gender: 'Female',
      lastVisit: '20 April 2023',
      status: 'Active'
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar menuItems={doctorMenu} userType="Doctor" />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Patients</h1>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search patients..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Add New Patient
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Patient List</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Age
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Visit
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {patients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={`https://randomuser.me/api/portraits/${patient.gender === 'Male' ? 'men' : 'women'}/${patient.id}.jpg`} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{patient.age}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{patient.gender}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{patient.lastVisit}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        patient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                      <button className="text-gray-600 hover:text-gray-900">Message</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatients;