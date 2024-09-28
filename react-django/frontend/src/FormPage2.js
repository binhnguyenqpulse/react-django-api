import React from 'react';

// Component for the form page to capture firstname, lastname, and username
const FormPage2 = ({ formData, setFormData, handleSubmit }) => {
    return (
        <div>
            <h2>Enter your Details</h2>

            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={formData.username}
                    onChange={e => setFormData({...formData, username: e.target.value})}
                    placeholder="Enter Username"
                />
            </div>

            <div>
                <label>Firstname:</label>
                <input
                    type="text"
                    value={formData.first_name}
                    onChange={e => setFormData({...formData, first_name: e.target.value})}
                    placeholder="Enter Firstname"
                />
            </div>

            <div>
                <label>Lastname:</label>
                <input
                    type="text"
                    value={formData.last_name}
                    onChange={e => setFormData({...formData, last_name: e.target.value})}
                    placeholder="Enter Lastname"
                />
            </div>

            <div>
                <label>Password:</label>
                <input
                    type="text"
                    value={formData.password}
                    onChange={e => setFormData({...formData, password: e.target.value})}
                    placeholder="Enter password"
                />
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter Email"
                />
            </div>

            <div>
                <label>PM?:</label>
                <input
                    type="checkbox"
                    checked={formData.project_manager}  // Use checked for boolean value
                    onChange={e => setFormData({...formData, project_manager: e.target.checked})}
                />
            </div>


            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default FormPage2;
