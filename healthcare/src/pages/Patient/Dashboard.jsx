import React from 'react';
import Sidebar from '../../components/Sidebar';

const PatientDashboard = () => {
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
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar menuItems={patientMenu} userType="Patient" />

      <div className="flex-1 p-4 md:p-8 overflow-x-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Patient Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {/* Card Template */}
          {[
            {
              title: "Upcoming Appointments",
              count: 2,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              ),
              color: "bg-blue-100 text-blue-600"
            },
            {
              title: "Recent Prescriptions",
              count: 3,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              ),
              color: "bg-green-100 text-green-600"
            },
            {
              title: "Medical Records",
              count: 5,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              ),
              color: "bg-purple-100 text-purple-600"
            }
          ].map(({ title, count, icon, color }, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className={`p-3 rounded-full mr-4 ${color}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
                  <p className="text-2xl font-bold">{count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-8 overflow-x-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Appointments</h2>
          <div className="min-w-[600px]">
            <table className="w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Doctor</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Time</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    name: "Dr. Sarah Johnson",
                    specialty: "Cardiologist",
                    img: "https://randomuser.me/api/portraits/women/42.jpg",
                    date: "15 May 2023",
                    time: "10:00 AM",
                    status: "Confirmed",
                    statusColor: "bg-green-100 text-green-800"
                  },
                  {
                    name: "Dr. Michael Chen",
                    specialty: "Neurologist",
                    img: "https://randomuser.me/api/portraits/men/32.jpg",
                    date: "18 May 2023",
                    time: "2:30 PM",
                    status: "Pending",
                    statusColor: "bg-yellow-100 text-yellow-800"
                  }
                ].map((appt, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-4 whitespace-nowrap flex items-center">
                      <img className="h-10 w-10 rounded-full mr-3" src={appt.img} alt={appt.name} />
                      <div>
                        <div className="font-medium text-gray-900">{appt.name}</div>
                        <div className="text-gray-500">{appt.specialty}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-700">{appt.date}</td>
                    <td className="px-4 py-4 text-gray-700">{appt.time}</td>
                    <td className="px-4 py-4">
                      <span className={`px-2 inline-flex text-xs font-semibold rounded-full ${appt.statusColor}`}>
                        {appt.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button className="text-blue-600 hover:text-blue-900">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "New Appointment", iconPath: "M12 6v6m0 0v6m0-6h6m-6 0H6", color: "bg-blue-100 text-blue-700" },
              { label: "My Schedule", iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", color: "bg-green-100 text-green-700" },
              { label: "Medical Records", iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", color: "bg-purple-100 text-purple-700" },
              { label: "Video Consult", iconPath: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", color: "bg-orange-100 text-orange-700" }
            ].map((action, idx) => (
              <button key={idx} className={`${action.color} p-4 rounded-lg flex flex-col items-center hover:brightness-95 transition`}>
                <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.iconPath} />
                </svg>
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
