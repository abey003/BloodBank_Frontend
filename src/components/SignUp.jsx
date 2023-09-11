import '../css/SignUp.css'
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { 
            register, 
            handleSubmit, 
            formState: { errors }, 
            watch 
        } = useForm();

  const onSubmit = async (data) => {
    try {

      data.userType = 'user';

      const response = await axios.post('http://localhost:15000/signup', data);
      alert(`${response.data.message}`);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert('Email already exists in the database');
      } else {
        //Temporary Message
        alert('SignUp Successfull');
      }
    }
  };

  return (
    <div
        className = 'SignUp'
    >
        <div 
            className = 'SignUpForm'
        >
            <h1>
                Signup
            </h1>
            <form 
                onSubmit = {handleSubmit(onSubmit)}
            >
                <TextField
                    required
                    id = 'name'
                    label = 'Name'
                    variant = 'outlined'
                    {...register('name', { required: 'Name is required.' })}
                    error = {Boolean(errors.name)}
                    helperText = {errors.name?.message}
                />
                <br /><br />
                <TextField
                    required
                    id = 'email'
                    label = 'Email'
                    variant = 'outlined'
                    {...register('email', { required: 'Email is required.' })}
                    error = {Boolean(errors.email)}
                    helperText = {errors.email?.message}
                />
                <br /><br />
                <TextField
                    required
                    id = 'password'
                    label = 'Password'
                    type = 'password'
                    variant = 'outlined'
                    {...register('password', { required: 'Password is required.' })}
                    error = {Boolean(errors.password)}
                    helperText = {errors.password?.message}
                />
                <br /><br />
                <TextField
                    required
                    id = 're_password'
                    label = 'Re-enter Password'
                    type = 'password'
                    variant = 'outlined'
                    {...register('re_password', {
                        required: 'Re-enter Password is required.',
                        validate: (value) => value === watch('password') || 'Passwords do not match'
                    })}
                    error = {Boolean(errors.re_password)}
                    helperText = {errors.re_password?.message}
                />
                <input 
                    type = "hidden" 
                    {...register('userType')} 
                    value="user" 
                />
                <br /><br />
                <Button
                    variant = 'contained' 
                    color='error'
                    type='submit'
                    className='btns'
                >
                    Create New Account
                </Button>
            </form>
            <p>
                Have a Account?
                <Link
                    to = '/Login'
                    style = {{
                                color : 'green',
                                textDecoration : 'none',
                                fontWeight: "bold"
                            }}
                > Login
                </Link>
            </p>
        </div>
    </div>
  );
};

export default SignUp;
