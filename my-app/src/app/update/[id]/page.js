"use client";

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter,useParams } from 'next/navigation';
import axios from 'axios';
import styles from './style.module.css';

export default function UpdateUserForm() {
    const router = useRouter();
    const params = useParams();
    const { id } = params;
    console.log(id )
  
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      location: '',
      role: '',
    });
  
    useEffect(() => {
      const fetchUserData = async () => {
        if (id) {  // Check if id is available
          try {
            const response = await axios.get(`http://localhost:4000/api/user/${id}`);
            setFormData(response.data); // Set form data with fetched user data
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        }
      };
  
      fetchUserData();
    }, [id]);  // Add id as a dependency
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.patch(`http://localhost:4000/api/user/update/${id}`, formData);
        alert('User updated successfully');
        router.push('/UserTable'); // Redirect after successful update
      } catch (error) {
        console.error('Error updating user:', error);
        alert('Failed to update user. Please try again.');
      }
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.formCard}>
          <h2 className={styles.title}>Update User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className={styles.formLabel}>First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="lastName" className={styles.formLabel}>Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="role" className={styles.formLabel}>Role</label>
              <input
                type="text"
                className="form-control"
                id="role"
                name="role"
                placeholder="Enter role"
                value={formData.role}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="location" className={styles.formLabel}>Location</label>
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
  
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    );
  }