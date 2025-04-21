import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const VideoConsultation = ({ userType }) => {
  const [isCallStarted, setIsCallStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const menuItems = {
    patient: [
      { name: 'Dashboard', path: '/patient', icon: 'home' },
      { name: 'Appointments', path: '/patient/appointments', icon: 'calendar' },
      { name: 'Medical Records', path: '/patient/records', icon: 'document-text' },
      { name: 'Prescriptions', path: '/patient/prescriptions', icon: 'receipt' },
      { name: 'Find Doctors', path: '/patient/doctors', icon: 'user-group' },
      { name: 'Video Consult', path: '/patient/consult', icon: 'video-camera' },
      { name: 'Settings', path: '/patient/settings', icon: 'cog' },
    ],
    doctor: [
      { name: 'Dashboard', path: '/doctor', icon: 'home' },
      { name: 'Appointments', path: '/doctor/appointments', icon: 'calendar' },
      { name: 'Patients', path: '/doctor/patients', icon: 'user-group' },
      { name: 'Schedule', path: '/doctor/schedule', icon: 'clock' },
      { name: 'Prescriptions', path: '/doctor/prescriptions', icon: 'receipt' },
      { name: 'Video Consult', path: '/doctor/consult', icon: 'video-camera' },
      { name: 'Profile', path: '/doctor/profile', icon: 'user' },
    ]
  };

  const startCall = () => {
    setIsCallStarted(true);
  };

  const endCall = () => {
    setIsCallStarted(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar menuItems={menuItems[userType]} userType={userType === 'patient' ? 'Patient' : 'Doctor'} />
      
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Video Consultation</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          {!isCallStarted ? (
            <div className="text-center">
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Ready to start your consultation?</h2>
                <p className="text-gray-600">You're about to start a video call with Dr. Sarah Johnson</p>
              </div>
              
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/42.jpg" 
                    alt="Doctor" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <button 
                onClick={startCall}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
              >
                Start Video Call
              </button>
            </div>
          ) : (
            <div>
              <div className="relative bg-black rounded-lg overflow-hidden mb-6" style={{ height: '500px' }}>
                {/* Doctor's video feed (main) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p>Dr. Sarah Johnson</p>
                  </div>
                </div>
                
                {/* Patient's video feed (small) */}
                <div className="absolute bottom-4 right-4 w-1/4 h-1/4 bg-gray-800 rounded-md overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-white">You</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-3 rounded-full ${isMuted ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300 transition`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMuted ? "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" : "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"}/>
                  </svg>
                </button>
                
                <button 
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className={`p-3 rounded-full ${isVideoOff ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300 transition`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isVideoOff ? "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" : "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}/>
                  </svg>
                </button>
                
                <button 
                  onClick={endCall}
                  className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Consultation Notes</h3>
                <textarea 
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Add notes during the consultation..."
                ></textarea>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoConsultation;