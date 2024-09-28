import React, { useState } from 'react';
import axios from 'axios';

const FormPage3 = () => {
    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/react-items/', { username })
            .then(res => console.log('Data submitted successfully'))
            .catch(err => console.error('Error submitting form', err));
    };

    return (
        <div>
            <h2>Enter Username</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormPage3;
