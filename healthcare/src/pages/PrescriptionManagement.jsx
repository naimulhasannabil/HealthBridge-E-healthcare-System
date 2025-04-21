import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const PrescriptionManagement = ({ userType }) => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      date: '15 May 2023',
      doctor: 'Dr. Sarah Johnson',
      medicines: [
        { name: 'Amoxicillin', dosage: '500mg', frequency: 'Every 8 hours', duration: '7 days' },
        { name: 'Ibuprofen', dosage: '200mg', frequency: 'As needed', duration: '3 days' }
      ],
      notes: 'Take with food. Complete full course of antibiotics.'
    },
    {
      id: 2,
      date: '5 May 2023',
      doctor: 'Dr. Robert Williams',
      medicines: [
        { name: 'Loratadine', dosage: '10mg', frequency: 'Once daily', duration: '30 days' }
      ],
      notes: 'For seasonal allergies. May cause drowsiness.'
    }
  ]);

  const [newMedicine, setNewMedicine] = useState({
    name: '',
    dosage: '',
    frequency: '',
    duration: ''
  });

  const [showNewForm, setShowNewForm] = useState(false);
  const [notes, setNotes] = useState('');

  const handleMedicineChange = (e) => {
    const { name, value } = e.target;
    setNewMedicine(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addMedicine = () => {
    const newPrescription = {
      id: prescriptions.length + 1,
      date: new Date().toLocaleDateString(),
      doctor: userType === 'doctor' ? 'You' : 'Dr. Sarah Johnson',
      medicines: [newMedicine],
      notes: notes
    };
    setPrescriptions([newPrescription, ...prescriptions]);
    setNewMedicine({
      name: '',
      dosage: '',
      frequency: '',
      duration: ''
    });
    setNotes('');
    setShowNewForm(false);
  };

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

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar menuItems={menuItems[userType]} userType={userType === 'patient' ? 'Patient' : 'Doctor'} />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Prescription Management</h1>
          {userType === 'doctor' && (
            <button 
              onClick={() => setShowNewForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Create New Prescription
            </button>
          )}
        </div>
        
        {showNewForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">New Prescription</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Medicine Name</label>
                <input
                  type="text"
                  name="name"
                  value={newMedicine.name}
                  onChange={handleMedicineChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dosage</label>
                <input
                  type="text"
                  name="dosage"
                  value={newMedicine.dosage}
                  onChange={handleMedicineChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                <input
                  type="text"
                  name="frequency"
                  value={newMedicine.frequency}
                  onChange={handleMedicineChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={newMedicine.duration}
                  onChange={handleMedicineChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              ></textarea>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setShowNewForm(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button 
                onClick={addMedicine}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Save Prescription
              </button>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {prescriptions.map((prescription) => (
            <div key={prescription.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-blue-50">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Prescription #{prescription.id}</h3>
                  <div className="text-sm text-gray-500">{prescription.date}</div>
                </div>
                <p className="text-sm text-gray-600">Prescribed by {prescription.doctor}</p>
              </div>
              
              <div className="p-4">
                <h4 className="font-medium text-gray-800 mb-2">Medicines:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {prescription.medicines.map((medicine, idx) => (
                        <tr key={idx}>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{medicine.name}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{medicine.dosage}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{medicine.frequency}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{medicine.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {prescription.notes && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-800 mb-1">Doctor's Notes:</h4>
                    <p className="text-sm text-gray-600">{prescription.notes}</p>
                  </div>
                )}
              </div>
              
              <div className="px-4 py-3 bg-gray-50 text-right">
                {userType === 'patient' ? (
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Download Prescription
                  </button>
                ) : (
                  <div className="space-x-3">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 font-medium">
                      Delete
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

export default PrescriptionManagement;