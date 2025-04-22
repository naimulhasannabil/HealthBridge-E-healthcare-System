import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Clock } from 'lucide-react';

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

  const upcomingAppointments = [
    {
      date: '15 May',
      doctor: 'Dr. Sarah Johnson',
      type: 'Cardiology Consultation',
      status: 'Confirmed',
      time: '10:00 AM - 10:30 AM',
    },
    {
      date: '18 May',
      doctor: 'Dr. Michael Chen',
      type: 'Neurology Consultation',
      status: 'Pending',
      time: '2:30 PM - 3:00 PM',
    },
  ];

  const pastAppointments = [
    {
      date: '5 May',
      doctor: 'Dr. Robert Williams',
      type: 'General Checkup',
      status: 'Completed',
      time: '9:00 AM - 9:30 AM',
    },
  ];

  const statusColors = {
    Confirmed: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Cancelled: 'bg-red-100 text-red-700',
    Completed: 'bg-gray-100 text-gray-800',
  };

  const AppointmentCard = ({ appointment }) => (
    <div className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50 transition">
      <div className="flex items-start">
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-4">
          {appointment.date}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{appointment.doctor}</h3>
          <p className="text-sm text-gray-500">{appointment.type}</p>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1.5" />
            {appointment.time}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between h-full">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[appointment.status]}`}>
          {appointment.status}
        </span>
        <button className="text-blue-600 hover:text-blue-900 text-sm mt-2">View</button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar menuItems={patientMenu} userType="Patient" />

      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Appointments</h1>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            + Book Appointment
          </button>
        </div>

        {/* Upcoming Appointments */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Upcoming Appointments</h2>
            <select className="text-sm bg-gray-100 border border-gray-300 rounded-md py-1 px-3 focus:outline-none">
              <option>All</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
          {upcomingAppointments.length > 0 ? (
            <div className="space-y-4">
              {upcomingAppointments.map((appt, i) => (
                <AppointmentCard key={i} appointment={appt} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No upcoming appointments.</p>
          )}
        </section>

        {/* Past Appointments */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Past Appointments</h2>
          {pastAppointments.length > 0 ? (
            <div className="space-y-4">
              {pastAppointments.map((appt, i) => (
                <AppointmentCard key={i} appointment={appt} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No past appointments found.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default PatientAppointments;
