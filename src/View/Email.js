import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import '../Styles/Loginpage.css';
import Relevantz from '../assets/Images/Relevantz.png'
import { useNavigate, useLocation } from 'react-router-dom';
import { emailRegex,validationMessages } from '../utils/Validation';
function Email() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const navigate = useNavigate();
    const onSubmit = data => {
        setTimeout(() => {
            navigate('/forgotpassword', { state: { email: data.email } });
        }, 2000);
        console.log(data);
    };
    return (
        <>
            <div className='login-app'>
                <div className='login-container'>
                    <div className="loginform-container">
                        <div className="login-header">
                            <img src={Relevantz} alt="Logo" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input
                                   {...register('email', {
                                    required: validationMessages.email.required,
                                    pattern: {
                                      value: emailRegex,
                                      message: validationMessages.email.pattern
                                    }
                                  })}
                                  type='text'
                                  placeholder='Email'
                                />
                            </div>
                            <p>{errors.email?.message}</p>
                            <div className='button-login'>
                                <button className='btn'>Send Email</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Email;