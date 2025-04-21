import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const FeedbackSystem = ({ userType }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      date: '15 May 2023',
      doctor: 'Dr. Sarah Johnson',
      rating: 5,
      comment: 'Excellent consultation. Dr. Johnson was very thorough and explained everything clearly.',
      status: 'Published'
    },
    {
      id: 2,
      date: '10 May 2023',
      doctor: 'Dr. Robert Williams',
      rating: 4,
      comment: 'Good experience overall, but had to wait a bit longer than expected.',
      status: 'Published'
    },
    {
      id: 3,
      date: '5 May 2023',
      doctor: 'Dr. Michael Chen',
      rating: 3,
      comment: 'Average consultation. Could have been more detailed.',
      status: 'Pending'
    }
  ]);

  const [newFeedback, setNewFeedback] = useState({
    doctor: '',
    rating: 5,
    comment: ''
  });

  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitFeedback = () => {
    const feedback = {
      id: feedbacks.length + 1,
      date: new Date().toLocaleDateString(),
      doctor: newFeedback.doctor,
      rating: parseInt(newFeedback.rating),
      comment: newFeedback.comment,
      status: 'Pending'
    };
    setFeedbacks([feedback, ...feedbacks]);
    setNewFeedback({
      doctor: '',
      rating: 5,
      comment: ''
    });
    setShowFeedbackForm(false);
  };

  const menuItems = {
    patient: [
      { name: 'Dashboard', path: '/patient', icon: 'home' },
      { name: 'Appointments', path: '/patient/appointments', icon: 'calendar' },
      { name: 'Medical Records', path: '/patient/records', icon: 'document-text' },
      { name: 'Prescriptions', path: '/patient/prescriptions', icon: 'receipt' },
      { name: 'Feedback', path: '/patient/feedback', icon: 'annotation' },
      { name: 'Video Consult', path: '/patient/consult', icon: 'video-camera' },
      { name: 'Settings', path: '/patient/settings', icon: 'cog' },
    ],
    admin: [
      { name: 'Dashboard', path: '/admin', icon: 'home' },
      { name: 'Users', path: '/admin/users', icon: 'user-group' },
      { name: 'Doctors', path: '/admin/doctors', icon: 'user' },
      { name: 'Appointments', path: '/admin/appointments', icon: 'calendar' },
      { name: 'Feedback', path: '/admin/feedback', icon: 'annotation' },
      { name: 'Reports', path: '/admin/reports', icon: 'chart-bar' },
      { name: 'Settings', path: '/admin/settings', icon: 'cog' },
    ]
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar menuItems={menuItems[userType]} userType={userType === 'patient' ? 'Patient' : 'Admin'} />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {userType === 'patient' ? 'My Feedback' : 'Feedback Management'}
          </h1>
          {userType === 'patient' && (
            <button 
              onClick={() => setShowFeedbackForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Feedback
            </button>
          )}
        </div>
        
        {showFeedbackForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Submit Feedback</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Doctor</label>
                <select
                  name="doctor"
                  value={newFeedback.doctor}
                  onChange={handleFeedbackChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Doctor</option>
                  <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                  <option value="Dr. Robert Williams">Dr. Robert Williams</option>
                  <option value="Dr. Michael Chen">Dr. Michael Chen</option>
                  <option value="Dr. Emily Davis">Dr. Emily Davis</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setNewFeedback({...newFeedback, rating: star})}
                      className="focus:outline-none"
                    >
                      <svg
                        className={`w-8 h-8 ${star <= newFeedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Feedback</label>
              <textarea
                name="comment"
                value={newFeedback.comment}
                onChange={handleFeedbackChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Share your experience..."
              ></textarea>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => setShowFeedbackForm(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button 
                onClick={submitFeedback}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Feedback #{feedback.id}</h3>
                  <div className="text-sm text-gray-500">{feedback.date}</div>
                </div>
                <p className="text-sm text-gray-600">For {feedback.doctor}</p>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-5 h-5 ${star <= feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{feedback.rating} out of 5</span>
                </div>
                
                <p className="text-gray-700">{feedback.comment}</p>
              </div>
              
              <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  feedback.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {feedback.status}
                </span>
                
                {userType === 'admin' && (
                  <div className="space-x-3">
                    {feedback.status === 'Pending' && (
                      <>
                        <button className="text-green-600 hover:text-green-800 font-medium">
                          Approve
                        </button>
                        <button className="text-red-600 hover:text-red-800 font-medium">
                          Reject
                        </button>
                      </>
                    )}
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      View Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSystem;