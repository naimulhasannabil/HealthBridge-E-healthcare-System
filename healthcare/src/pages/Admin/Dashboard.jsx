import React from 'react';
import Sidebar from '../../components/Sidebar';

const AdminDashboard = () => {
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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
                <p className="text-2xl font-bold">1,245</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Active Doctors</h3>
                <p className="text-2xl font-bold">87</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Today's Appointments</h3>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
                <p className="text-2xl font-bold">$24,589</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Users</h2>
            <div className="space-y-4">
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" className="h-full w-full" />
                </div>
                <div className="ml-4">
                  <h3 className="text-md font-medium text-gray-900">Emily Johnson</h3>
                  <p className="text-sm text-gray-500">Registered: 2 days ago</p>
                </div>
                <div className="ml-auto">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </div>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="h-full w-full" />
                </div>
                <div className="ml-4">
                  <h3 className="text-md font-medium text-gray-900">Michael Brown</h3>
                  <p className="text-sm text-gray-500">Registered: 1 week ago</p>
                </div>
                <div className="ml-auto">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </div>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" className="h-full w-full" />
                </div>
                <div className="ml-4">
                  <h3 className="text-md font-medium text-gray-900">Sarah Wilson</h3>
                  <p className="text-sm text-gray-500">Registered: 3 days ago</p>
                </div>
                <div className="ml-auto">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-right">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All Users</button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Appointments</h2>
            <div className="space-y-4">
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                  10:00
                </div>
                <div className="ml-4">
                  <h3 className="text-md font-medium text-gray-900">Dr. Smith & John Doe</h3>
                  <p className="text-sm text-gray-500">Cardiology Consultation</p>
                </div>
                <div className="ml-auto">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                </div>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                  11:30
                </div>
                <div className="ml-4">
                  <h3 className="text-md font-medium text-gray-900">Dr. Johnson & Emily Clark</h3>
                  <p className="text-sm text-gray-500">Annual Checkup</p>
                </div>
                <div className="ml-auto">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">In Progress</span>
                </div>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                  14:00
                </div>
                <div className="ml-4">
                  <h3 className="text-md font-medium text-gray-900">Dr. Lee & Michael Brown</h3>
                  <p className="text-sm text-gray-500">Follow-up Visit</p>
                </div>
                <div className="ml-auto">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Scheduled</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-right">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All Appointments</button>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">System Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">System Health</h3>
              <div className="flex items-center">
                <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">90%</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Storage Used</h3>
              <div className="flex items-center">
                <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '65%' }}></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">65%</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Active Sessions</h3>
              <p className="text-lg font-semibold text-gray-800">142</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Uptime</h3>
              <p className="text-lg font-semibold text-gray-800">99.9%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;