'use client'; 

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import axios from 'axios'; 

export default function UpdateUserForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: '',
    role: ''
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  

    try {
      await axios.post('http://localhost:4000/api/user/register', formData);  
      console.log(formData);  // Log form data
      alert(`Submitted: ${formData.firstName} ${formData.lastName}, ${formData.location}`);
      
      // Navigate after successful form submission
      router.push('/UserTable');
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Failed to submit the form. Please try again.');  // Handle error
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-50">
      <div style={{ width: "400px", marginTop: '10px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"  // Ensure this matches state key
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"  // Ensure this matches state key
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Role</label>
            <input
              type="text"
              className="form-control"
              id="role"
              name="role"  // Ensure this matches state key
              placeholder="Enter last name"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <select
              className="form-control"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select location</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Noida">Noida</option>
              <option value="Delhi">Delhi</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Mohali">Mohali</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
