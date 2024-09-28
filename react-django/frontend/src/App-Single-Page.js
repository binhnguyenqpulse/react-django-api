// This code to replace App.js to run single page

import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        username: '',
        successMessage: '',
        errorMessage: ''
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { firstname, lastname, username } = this.state;

        // Make POST request to Django backend to submit data
        axios.post('http://localhost:8000/react-items/', {
            firstname: firstname,
            lastname: lastname,
            username: username
        })
        .then(response => {
            this.setState({
                successMessage: 'Data submitted successfully!',
                errorMessage: '',
                firstname: '',
                lastname: '',
                username: ''
            });
        })
        .catch(error => {
            console.error('There was an error submitting the form!', error);
            this.setState({ errorMessage: 'Failed to submit data. Please try again.' });
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Enter Your Details</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Firstname:
                        <input
                            type="text"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Lastname:
                        <input
                            type="text"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>

                {/* Display success or error messages */}
                {this.state.successMessage && <p style={{ color: 'green' }}>{this.state.successMessage}</p>}
                {this.state.errorMessage && <p style={{ color: 'red' }}>{this.state.errorMessage}</p>}
            </div>
        );
    }
}

export default App;
