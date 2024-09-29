import React, { useState } from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import NavBar from '../../component/Navbar/NavBar';
import './ProfileUpdatePage.css';

function ProfileUpdatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      role: ''
    });
  };

  return (
    <div className="container1">
      <NavBar />
      <div className="container2">
        <div className="container21"><Sidebar /></div>
        <div className="container22">
          <div className="mainContent">
            <div className="heading">
              <h2>Update Profile</h2>
              <p>Update your profile with these fields.</p>
            </div>
            <div className="profileUpdateForm">
              <form className="profileForm" onSubmit={handleSubmit}>
                <div className="formGroup">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="role">Role</label>
                  <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="">Select your role</option>
                    <option value="Developer">Developer</option>
                    <option value="Manager">Manager</option>
                    <option value="Designer">Designer</option>
                  </select>
                </div>

                <div className="formActions">
                  <button type="submit" className="updateBtn">Update Profile</button>
                  <button type="button" className="styles.resetBtn" onClick={handleReset}>Reset</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
