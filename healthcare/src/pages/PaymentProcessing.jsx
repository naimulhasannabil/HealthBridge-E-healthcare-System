import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const PaymentProcessing = ({ userType }) => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      date: '15 May 2023',
      amount: '$150',
      status: 'Completed',
      method: 'Credit Card',
      appointment: 'Consultation with Dr. Sarah Johnson'
    },
    {
      id: 2,
      date: '5 May 2023',
      amount: '$75',
      status: 'Refunded',
      method: 'PayPal',
      appointment: 'Follow-up with Dr. Robert Williams'
    },
    {
      id: 3,
      date: '20 April 2023',
      amount: '$200',
      status: 'Pending',
      method: 'Bank Transfer',
      appointment: 'Annual Checkup'
    }
  ]);

  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: '',
    method: 'credit_card',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const processPayment = () => {
    const newPayment = {
      id: payments.length + 1,
      date: new Date().toLocaleDateString(),
      amount: `$${paymentDetails.amount}`,
      status: 'Completed',
      method: paymentDetails.method === 'credit_card' ? 'Credit Card' : 
              paymentDetails.method === 'paypal' ? 'PayPal' : 'Bank Transfer',
      appointment: 'Consultation with Dr. Sarah Johnson'
    };
    setPayments([newPayment, ...payments]);
    setPaymentDetails({
      amount: '',
      method: 'credit_card',
      cardNumber: '',
      expiry: '',
      cvv: ''
    });
    setShowPaymentForm(false);
  };

  const menuItems = {
    patient: [
      { name: 'Dashboard', path: '/patient', icon: 'home' },
      { name: 'Appointments', path: '/patient/appointments', icon: 'calendar' },
      { name: 'Medical Records', path: '/patient/records', icon: 'document-text' },
      { name: 'Prescriptions', path: '/patient/prescriptions', icon: 'receipt' },
      { name: 'Payments', path: '/patient/payments', icon: 'currency-dollar' },
      { name: 'Video Consult', path: '/patient/consult', icon: 'video-camera' },
      { name: 'Settings', path: '/patient/settings', icon: 'cog' },
    ],
    admin: [
      { name: 'Dashboard', path: '/admin', icon: 'home' },
      { name: 'Users', path: '/admin/users', icon: 'user-group' },
      { name: 'Doctors', path: '/admin/doctors', icon: 'user' },
      { name: 'Appointments', path: '/admin/appointments', icon: 'calendar' },
      { name: 'Payments', path: '/admin/payments', icon: 'currency-dollar' },
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
            {userType === 'patient' ? 'My Payments' : 'Payment Processing'}
          </h1>
          {userType === 'patient' && (
            <button 
              onClick={() => setShowPaymentForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Make Payment
            </button>
          )}
        </div>
        
        {showPaymentForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">New Payment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
                <input
                  type="number"
                  name="amount"
                  value={paymentDetails.amount}
                  onChange={handlePaymentChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                <select
                  name="method"
                  value={paymentDetails.method}
                  onChange={handlePaymentChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="credit_card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank_transfer">Bank Transfer</option>
                </select>
              </div>
              
              {paymentDetails.method === 'credit_card' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={paymentDetails.cardNumber}
                      onChange={handlePaymentChange}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        value={paymentDetails.expiry}
                        onChange={handlePaymentChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="MM/YY"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={paymentDetails.cvv}
                        onChange={handlePaymentChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => setShowPaymentForm(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button 
                onClick={processPayment}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Process Payment
              </button>
            </div>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Payment History</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment</th>
                  {userType === 'admin' && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{payment.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{payment.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        payment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.method}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{payment.appointment}</td>
                    {userType === 'admin' && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-gray-600 hover:text-gray-900">Refund</button>
                      </td>
                    )}
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

export default PaymentProcessing;