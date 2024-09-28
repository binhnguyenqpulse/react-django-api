import React, { useState } from 'react';
import axios from 'axios';

const FormPage1 = () => {
    const [firstname, setFirstname] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/react-items/', { firstname })
            .then(res => console.log('Data submitted successfully'))
            .catch(err => console.error('Error submitting form', err));
    };

    return (
        <div>
            <h2>Enter Firstname</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Firstname:
                    <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormPage1;
