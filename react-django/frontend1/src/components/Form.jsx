import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import '../styles/Form.css';
import LoadingIndicator from './LoadingIndicator';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";

function Form({ route, method }) {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === 'login' ? 'Login' : 'Register';
  

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        // For registration, validate that password and confirmPassword match
        if (method === 'register' && password !== confirmPassword) {
            alert("Passwords do not match.");
            setLoading(false);
            return;
        }


        try {
            const data = method === 'register' 
                ? { username, first_name: firstName, last_name: lastName, email, password } 
                : { username, password };
                
            const res = await api.post(route, data);
            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate('/');
            } else {
                navigate('/login');
            }
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='form-page'>
        <div className='form-heading'>
            <h1>Signup Form</h1>
            <p>{method === "login" ? "Login to your account" : "Create your account"}</p>
            <p>
            {method === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
            <Link to={method === "login" ? "/register" : "/login"} className='form-link'>
            {method === "login" ? "Register" : "Login"}
            </Link>
            </p>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
            <div className='form-label-input'>
            <label>Username</label>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            </div>
            {method === 'register' && (
                <>
                <div className='form-label-input'>
                    <label>First Name</label>
                    <input
                        className="form-input"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                    />
                    </div>
                <div className='form-label-input'>
                <label>Last Name</label>
                    <input
                        className="form-input"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                    />
                </div>
            <div className='form-label-input'>
                <label>Email</label>
                <input
                    className="form-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    />
            </div>
                    {/* <input
                        className="form-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    /> */}
                </>
            )}

<div className='form-label-input'>
<label>Password</label>
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />

</div>
{method === 'register' && (
                <>
            <div className='form-label-input'>
            <label> Confirm Password</label>
                    <input
                        className="form-input"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                    />
            </div>
                </>
            )}
        
            {loading && <LoadingIndicator />}
            <div className='form-btn-group'>
            <button className="form-button" type="submit">
                {name} Now
            </button>
            <button className="form-cancel-button">
                Cancel
            </button>

            </div>

        </form>
        </div>
    );
}

export default Form;
