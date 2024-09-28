import React from 'react';

// Component for the form page to capture firstname, lastname, and username
const FormPage1 = ({ formData, setFormData, handleSubmit }) => {
    return (
        <div>
            <h2>Enter your Details</h2>

            <div>
                <label>Firstname:</label>
                <input
                    type="text"
                    value={formData.firstname}
                    onChange={e => setFormData({ ...formData, firstname: e.target.value })}
                    placeholder="Enter Firstname"
                />
            </div>

            <div>
                <label>Lastname:</label>
                <input
                    type="text"
                    value={formData.lastname}
                    onChange={e => setFormData({ ...formData, lastname: e.target.value })}
                    placeholder="Enter Lastname"
                />
            </div>

            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={formData.username}
                    onChange={e => setFormData({ ...formData, username: e.target.value })}
                    placeholder="Enter Username"
                />
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default FormPage1;
