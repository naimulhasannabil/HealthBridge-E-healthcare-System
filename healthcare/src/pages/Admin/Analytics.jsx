import React from 'react';
import Sidebar from '../../components/Sidebar';

const AdminAnalytics = () => {
  const adminMenu = [
    { name: 'Dashboard', path: '/admin', icon: 'home' },
    { name: 'Users', path: '/admin/users', icon: 'user-group' },
    { name: 'Doctors', path: '/admin/doctors', icon: 'user' },
    { name: 'Appointments', path: '/admin/appointments', icon: 'calendar' },
    { name: 'Medical Records', path: '/admin/records', icon: 'document-text' },
    { name: 'Payments', path: '/admin/payments', icon: 'currency-dollar' },
    { name: 'Reports', path: '/admin/reports', icon: 'chart-bar' },
    { name: 'Settings', path: '/admin/settings', icon: 'cog' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar menuItems={adminMenu} userType="Admin" />
      
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">System Analytics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">User Growth</h3>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Line chart showing user growth over time</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Appointments</h3>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Bar chart showing appointment statistics</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">User Distribution</h3>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Pie chart showing user types distribution</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue</h3>
            <div className="h-96 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Area chart showing revenue over time</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Doctor Performance</h3>
            <div className="h-96 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Bar chart showing doctor ratings and appointments</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-md font-medium text-gray-900">New user registered</h4>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <p className="text-sm text-gray-500">John Smith (Patient) joined the platform</p>
              </div>
            </div>
            
            <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-md font-medium text-gray-900">Appointment completed</h4>
                  <span className="text-sm text-gray-500">5 hours ago</span>
                </div>
                <p className="text-sm text-gray-500">Dr. Sarah Johnson consulted with Michael Brown</p>
              </div>
            </div>
            
            <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-md font-medium text-gray-900">Payment received</h4>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <p className="text-sm text-gray-500">$150 for consultation ID #12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;