import React from 'react';
import Sidebar from '../../components/Sidebar';

const DoctorSchedule = () => {
  const doctorMenu = [
    { name: 'Dashboard', path: '/doctor', icon: 'home' },
    { name: 'Appointments', path: '/doctor/appointments', icon: 'calendar' },
    { name: 'Patients', path: '/doctor/patients', icon: 'user-group' },
    { name: 'Schedule', path: '/doctor/schedule', icon: 'clock' },
    { name: 'Prescriptions', path: '/doctor/prescriptions', icon: 'receipt' },
    { name: 'Video Consult', path: '/doctor/consult', icon: 'video-camera' },
    { name: 'Profile', path: '/doctor/profile', icon: 'user' },
  ];

  const timeSlots = [
    { time: '9:00 AM - 9:30 AM', patient: 'John Smith', type: 'Follow-up' },
    { time: '10:00 AM - 10:30 AM', patient: 'Sarah Johnson', type: 'New Patient' },
    { time: '11:00 AM - 11:30 AM', patient: 'Michael Brown', type: 'Annual Checkup' },
    { time: '2:00 PM - 2:30 PM', patient: 'Emily Davis', type: 'Consultation' },
    { time: '3:00 PM - 3:30 PM', patient: 'Robert Wilson', type: 'Follow-up' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar menuItems={doctorMenu} userType="Doctor" />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Schedule</h1>
          <div className="flex space-x-4">
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
              <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <span className="px-4 py-2 font-medium">May 15, 2023</span>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
              Next
              <svg className="w-5 h-5 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Today's Appointments</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Add Time Slot
              </button>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {timeSlots.map((slot, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 transition">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                    {slot.time.split(' ')[0]}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">{slot.patient}</h3>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Confirmed
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{slot.type}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      <span className="font-medium">Time: </span>{slot.time}
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0 space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 font-medium">Start</button>
                    <button className="text-gray-500 hover:text-gray-700">Reschedule</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Weekly Availability</h2>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-7 gap-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div key={day} className="text-center">
                  <div className="font-medium text-gray-900 mb-2">{day}</div>
                  <div className="text-sm text-gray-500">9:00 AM - 5:00 PM</div>
                  <button className="mt-2 text-xs text-blue-600 hover:text-blue-800">
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSchedule;