import React, { useEffect, useState } from 'react';
import { FaHome, FaCar, FaUser, FaCreditCard, FaBusinessTime, FaGraduationCap } from 'react-icons/fa';

function Profile() {
  const [selectedLoanType, setSelectedLoanType] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  // API configuration - Update these values according to your backend
  const API_CONFIG = {
    baseURL: 'http://localhost:5000', // Make sure this matches your server URL
    endpoints: {
      submit: '/api/loan/submit',
      health: '/health'
    },
    // Replace with your actual API key - ask your backend team for this
    apiKey: 'loan-app-api-key-2024' // Example key, replace with actual one
  };

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    address: '',
    pincode: '',
    city: '',
    district: '',
    state: '',
    employmentType: '',
    monthlyIncome: '',
    loanAmount: '',
    loanTenure: '',
    loanPurpose: '',
    panNumber: '',
    aadharNumber: '',
    companyName: '',
    designation: '',
    workExperience: ''
  });

  // ... (loanTypes array remains the same as your original code)
  const loanTypes = [
    {
      id: 'personal',
      name: 'Personal Loan',
      icon: <FaUser className="text-3xl" />,
      amount: 'Up to ₹5,00,000',
      interest: '11.5% p.a.',
      tenure: 'Up to 5 years',
      description: 'For all your personal needs - travel, medical, wedding, or any emergency'
    },
    {
      id: 'home',
      name: 'Home Loan',
      icon: <FaHome className="text-3xl" />,
      amount: 'Up to ₹50,00,000',
      interest: '8.5% p.a.',
      tenure: 'Up to 20 years',
      description: 'Buy your dream home with flexible repayment options'
    },
    {
      id: 'vehicle',
      name: 'Vehicle Loan',
      icon: <FaCar className="text-3xl" />,
      amount: 'Up to ₹20,00,000',
      interest: '9.5% p.a.',
      tenure: 'Up to 7 years',
      description: 'Get your dream car or bike with easy EMI options'
    },
    {
      id: 'business',
      name: 'Business Loan',
      icon: <FaBusinessTime className="text-3xl" />,
      amount: 'Up to ₹1,00,00,000',
      interest: '12.5% p.a.',
      tenure: 'Up to 10 years',
      description: 'Expand your business with customized loan solutions'
    },
    {
      id: 'education',
      name: 'Education Loan',
      icon: <FaGraduationCap className="text-3xl" />,
      amount: 'Up to ₹25,00,000',
      interest: '10.5% p.a.',
      tenure: 'Up to 15 years',
      description: 'Invest in your education with moratorium period'
    },
    {
      id: 'credit-card',
      name: 'Credit Card',
      icon: <FaCreditCard className="text-3xl" />,
      amount: 'Up to ₹5,00,000',
      interest: '3.5% per month',
      tenure: 'Flexible',
      description: 'Premium credit cards with exciting rewards and benefits'
    }
  ];

  // Auto-scroll to form when it appears
  useEffect(() => {
    if (showForm) {
      const formElement = document.getElementById('loan-application-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [showForm]);

  const handleLoanSelection = (loanType) => {
    setSelectedLoanType(loanType);
    setShowForm(true);
    setSubmissionMessage('');
    
    // Reset form data for new application
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      address: '',
      pincode: '',
      city: '',
      district: '',
      state: '',
      employmentType: '',
      monthlyIncome: '',
      loanAmount: '',
      loanTenure: '',
      loanPurpose: '',
      panNumber: '',
      aadharNumber: '',
      companyName: '',
      designation: '',
      workExperience: ''
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    // Basic validation
    if (!formData.fullName.trim()) {
      setSubmissionMessage('❌ Please enter your full name');
      return false;
    }
    if (!formData.mobile.match(/^\d{10}$/)) {
      setSubmissionMessage('❌ Please enter a valid 10-digit mobile number');
      return false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setSubmissionMessage('❌ Please enter a valid email address');
      return false;
    }
    if (!formData.panNumber.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)) {
      setSubmissionMessage('❌ Please enter a valid PAN number (Format: ABCDE1234F)');
      return false;
    }
    if (!formData.aadharNumber.match(/^\d{12}$/)) {
      setSubmissionMessage('❌ Please enter a valid 12-digit Aadhar number');
      return false;
    }
    if (!formData.loanAmount || formData.loanAmount <= 0) {
      setSubmissionMessage('❌ Please enter a valid loan amount');
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionMessage('');

    try {
      // Prepare the data for API submission
      const submissionData = {
        ...formData,
        loanType: selectedLoanType.name,
        loanTypeId: selectedLoanType.id,
        applicationDate: new Date().toISOString(),
        status: 'pending'
      };

      console.log('Submitting loan application:', submissionData);
      console.log('API URL:', `${API_CONFIG.baseURL}${API_CONFIG.endpoints.submit}`);

      // API call with API key in headers
      const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.submit}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_CONFIG.apiKey}`,
          'X-API-Key': API_CONFIG.apiKey,
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const result = await response.json();
      console.log('Success response:', result);
      
      setSubmissionMessage('✅ Loan application submitted successfully! Our executive will contact you within 24 hours.');
      
      // Reset form after successful submission
      setTimeout(() => {
        setShowForm(false);
        setSelectedLoanType(null);
        setSubmissionMessage('');
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          address: '',
          pincode: '',
          city: '',
          district: '',
          state: '',
          employmentType: '',
          monthlyIncome: '',
          loanAmount: '',
          loanTenure: '',
          loanPurpose: '',
          panNumber: '',
          aadharNumber: '',
          companyName: '',
          designation: '',
          workExperience: ''
        });
      }, 5000);

    } catch (error) {
      console.error('Error submitting loan application:', error);
      
      // More specific error messages
      if (error.message.includes('Failed to fetch')) {
        setSubmissionMessage('❌ Cannot connect to server. Please check if the backend server is running on port 5000.');
      } else if (error.message.includes('401')) {
        setSubmissionMessage('❌ Authentication failed. Please check the API key.');
      } else if (error.message.includes('404')) {
        setSubmissionMessage('❌ API endpoint not found. Please check the server URL.');
      } else {
        setSubmissionMessage(`❌ Failed to submit application: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Test API connection function
  const testApiConnection = async () => {
    try {
      console.log('Testing API connection to:', `${API_CONFIG.baseURL}${API_CONFIG.endpoints.health}`);
      const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.health}`);
      if (response.ok) {
        const health = await response.json();
        console.log('✅ API is connected and healthy:', health);
        return true;
      } else {
        console.warn('⚠️ API health check failed with status:', response.status);
        return false;
      }
    } catch (error) {
      console.error('❌ API connection failed:', error);
      return false;
    }
  };

  // Test connection on component mount
  useEffect(() => {
    testApiConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center text-blue-900">
          Apply for Loan
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Choose from our wide range of loan products designed for your needs
        </p>

        {/* Loan Types Grid - Same as before */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {loanTypes.map((loan) => (
            <div 
              key={loan.id}
              className={`bg-white p-6 rounded-xl shadow-md cursor-pointer border-2 transition-all duration-300 hover:shadow-lg ${
                selectedLoanType?.id === loan.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => handleLoanSelection(loan)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-600">
                  {loan.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  {loan.name}
                </h2>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold text-green-600">{loan.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest:</span>
                  <span className="font-semibold text-blue-600">{loan.interest}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tenure:</span>
                  <span className="font-semibold text-purple-600">{loan.tenure}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm">
                {loan.description}
              </p>
              
              <div className="mt-4 text-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Loan Application Form */}
        {showForm && selectedLoanType && (
          <div id="loan-application-form" className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-blue-600">
                {selectedLoanType.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedLoanType.name} Application
                </h2>
                <p className="text-gray-600">Fill in your details to apply for {selectedLoanType.name}</p>
              </div>
            </div>

            {submissionMessage ? (
              <div className={`text-center py-4 px-4 rounded-lg mb-4 ${
                submissionMessage.includes('✅') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                <p className="text-lg font-semibold">{submissionMessage}</p>
                {submissionMessage.includes('Cannot connect') && (
                  <p className="text-sm mt-2">
                    Make sure your server is running at: <code className="bg-gray-100 px-2 py-1 rounded">{API_CONFIG.baseURL}</code>
                  </p>
                )}
              </div>
            ) : null}

            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleFormChange} 
                      required 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Mobile Number *</label>
                    <input 
                      type="tel" 
                      name="mobile" 
                      value={formData.mobile} 
                      onChange={handleFormChange} 
                      required 
                      pattern="[0-9]{10}"
                      maxLength="10"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                      placeholder="Enter 10-digit mobile number"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Email ID *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleFormChange} 
                      required 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">PAN Number *</label>
                    <input 
                      type="text" 
                      name="panNumber" 
                      value={formData.panNumber} 
                      onChange={handleFormChange} 
                      required 
                      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                      placeholder="Enter PAN number (e.g., ABCDE1234F)"
                      style={{textTransform: 'uppercase'}}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Aadhar Number *</label>
                    <input 
                      type="text" 
                      name="aadharNumber" 
                      value={formData.aadharNumber} 
                      onChange={handleFormChange} 
                      required 
                      pattern="[0-9]{12}"
                      maxLength="12"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                      placeholder="Enter 12-digit Aadhar number"
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Address Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Full Address *</label>
                    <textarea 
                      name="address" 
                      value={formData.address} 
                      onChange={handleFormChange} 
                      required 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                      rows="3" 
                      placeholder="Enter your complete address"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block mb-2 text-gray-700 font-medium">Pincode *</label>
                      <input 
                        type="text" 
                        name="pincode" 
                        value={formData.pincode} 
                        onChange={handleFormChange} 
                        required 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                        placeholder="Pincode"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-gray-700 font-medium">City *</label>
                      <input 
                        type="text" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleFormChange} 
                        required 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-gray-700 font-medium">District *</label>
                      <input 
                        type="text" 
                        name="district" 
                        value={formData.district} 
                        onChange={handleFormChange} 
                        required 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                        placeholder="District"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-gray-700 font-medium">State *</label>
                      <input 
                        type="text" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleFormChange} 
                        required 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Employment & Loan Details */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Employment & Loan Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Employment Type *</label>
                    <select 
                      name="employmentType" 
                      value={formData.employmentType} 
                      onChange={handleFormChange} 
                      required 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white"
                    >
                      <option value="">Select Employment Type</option>
                      <option value="salaried">Salaried</option>
                      <option value="self-employed">Self Employed</option>
                      <option value="business">Business</option>
                      <option value="professional">Professional</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Monthly Income (₹) *</label>
                    <input 
                      type="number" 
                      name="monthlyIncome" 
                      value={formData.monthlyIncome} 
                      onChange={handleFormChange} 
                      required 
                      min="0"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                      placeholder="Monthly income"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Loan Amount Required (₹) *</label>
                    <input 
                      type="number" 
                      name="loanAmount" 
                      value={formData.loanAmount} 
                      onChange={handleFormChange} 
                      required 
                      min="0"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                      placeholder="Desired loan amount"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">Loan Tenure (months) *</label>
                    <input 
                      type="number" 
                      name="loanTenure" 
                      value={formData.loanTenure} 
                      onChange={handleFormChange} 
                      required 
                      min="1"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                      placeholder="Loan tenure in months"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-gray-700 font-medium">Loan Purpose *</label>
                    <textarea 
                      name="loanPurpose" 
                      value={formData.loanPurpose} 
                      onChange={handleFormChange} 
                      required 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                      rows="2" 
                      placeholder="Purpose of the loan"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-bold text-lg text-white transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : 'Submit Loan Application'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;