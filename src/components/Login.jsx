import axios from 'axios';
import '../css/Login.css';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        const response = await axios.post('http://localhost:15000/login', { email, password });
        // Assuming the backend API returns a response with a 'success' field indicating the result
        if (response.data.success && response.data.usertype === 'admin' ) {
            // Password matches
            alert('Admin Login')
        }
        else if (response.data.success && response.data.usertype === 'user' ) {
            // Password matches
            alert('User Login')
        } else {
            // Password does not match
            alert('Invalid email or password');
        }
        } catch (error) {
            //Temporary Message
        console.error(error);
            alert('Login Successful');
        }
    };

  return (
    <div
        className = 'Login'
    >
        <div
            className = 'LoginForm'
        >
            <h1>
                WELCOME USER
            </h1>
            <form 
                onSubmit = {handleSubmit}
            >
                <TextField
                    required
                    id = 'email'
                    label = 'Email'
                    variant = 'outlined'
                    value={email}
                    onChange={handleEmailChange}
                />
                <br />
                <br />
                <TextField
                    required
                    id = 'password'
                    label = 'Password'
                    type = 'password'
                    variant = 'outlined'
                    value={password}
                    onChange={handlePasswordChange}
                />
                <br />
                <br />
                <Button
                    variant = 'contained' 
                    color='error'
                    type='submit'
                    className='btns'
                >
                    Login
                </Button>
            </form>
            <p>
                Don't Have a Account? 
                <Link
                    to = '/SignUp'
                    style = {{
                                color : 'green',
                                textDecoration : 'none',
                                fontWeight: "bold"
                            }}
                > Sign Up
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Login