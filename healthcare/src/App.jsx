import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Patient Pages
import PatientDashboard from './pages/Patient/Dashboard';
import PatientAppointments from './pages/Patient/Appointments';
import PatientMedicalRecords from './pages/Patient/MedicalRecords';
import PrescriptionManagement from './pages/PrescriptionManagement';
import PaymentProcessing from './pages/PaymentProcessing';
import FeedbackSystem from './pages/FeedbackSystem';
import VideoConsultation from './pages/VideoConsultation';

// Doctor Pages
import DoctorDashboard from './pages/Doctor/Dashboard';
import DoctorPatients from './pages/Doctor/Patients';
import DoctorSchedule from './pages/Doctor/Schedule';

// Admin Pages
import AdminDashboard from './pages/Admin/Dashboard';
import AdminUsers from './pages/Admin/Users';
import AdminAnalytics from './pages/Admin/Analytics';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Patient Routes */}
            <Route path="/patient" element={<PatientDashboard />} />
            <Route path="/patient/appointments" element={<PatientAppointments />} />
            <Route path="/patient/records" element={<PatientMedicalRecords />} />
            <Route path="/patient/prescriptions" element={<PrescriptionManagement userType="patient" />} />
            <Route path="/patient/payments" element={<PaymentProcessing userType="patient" />} />
            <Route path="/patient/feedback" element={<FeedbackSystem userType="patient" />} />
            <Route path="/patient/consult" element={<VideoConsultation userType="patient" />} />

            {/* Doctor Routes */}
            <Route path="/doctor" element={<DoctorDashboard />} />
            <Route path="/doctor/appointments" element={<PatientAppointments />} />
            <Route path="/doctor/patients" element={<DoctorPatients />} />
            <Route path="/doctor/schedule" element={<DoctorSchedule />} />
            <Route path="/doctor/prescriptions" element={<PrescriptionManagement userType="doctor" />} />
            <Route path="/doctor/consult" element={<VideoConsultation userType="doctor" />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/doctors" element={<DoctorPatients />} />
            <Route path="/admin/appointments" element={<PatientAppointments />} />
            <Route path="/admin/payments" element={<PaymentProcessing userType="admin" />} />
            <Route path="/admin/feedback" element={<FeedbackSystem userType="admin" />} />
            <Route path="/admin/reports" element={<AdminAnalytics />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;