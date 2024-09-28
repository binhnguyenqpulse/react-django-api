import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import FormPage1 from './FormPage1';  // Import the FormPage1 component
import FormPage2 from './FormPage2';  // Import the FormPage2 component

function App() {
    const [formData, setFormData] = useState({
        // // React Items
        // firstname: '',
        // lastname: '',
        // username: ''

        // User account
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        project_manager: false
    });


    const [statusMessage, setStatusMessage] = useState(null);  // State for success/error message

    const handleSubmit = () => {
        console.log('Form Submitted', formData);

        // Axios POST request to send data to the Django backend
        axios.post('http://localhost:8000/user-accounts/', formData)
            .then(response => {
                console.log('Data saved successfully:', response.data);
                setStatusMessage('Data saved successfully!');  // Set success message
            })
            .catch(error => {
                console.error('There was an error!', error);
                setStatusMessage('Error saving data! Please try again.');  // Set error message
            });
    };

    return (
        <div className="App">
            <h1>Fill out the form</h1>
            {/*/!* Call FormPage1 and pass the necessary props *!/*/}
            {/*<FormPage1 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />*/}

            {/* Call FormPage2 and pass the necessary props */}
            <FormPage2 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />

            {/* Conditionally render success or error message */}
            {statusMessage && (
                <div style={{ marginTop: '20px', color: statusMessage.includes('Error') ? 'red' : 'green' }}>
                    {statusMessage}
                </div>
            )}
        </div>
    );
}

export default App;
