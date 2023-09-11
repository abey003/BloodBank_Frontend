import axios from 'axios';
import '../css/Contact.css';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

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
        console.error(error);
            alert('Login Successful');
        }
    };

  return (
    <div
        className = 'Contact'
    >
        <div
            className = 'ContactForm'
        >
            <h1>
                CONTACT US
            </h1>
            <p style={{ fontWeight: "bold", font: "30px" }}>
              Designed and developed by Abey
              <br />
              Copyright &copy; 2023. All rights reserved
              <br />
              To know more visit my 
              <a 
                style={{ 
                          textDecoration: "none", 
                          color: "green" 
                      }} 
                          href='https://abeyportfolio.netlify.app/'
              > Portfolio</a>
            </p>
        </div>
    </div>
  )
}

export default Contact