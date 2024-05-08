
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Relevantz from '../assets/Images/Relevantz.png';
import { emailRegex, passwordRegex, validationMessages } from '../utils/Validation';
function ForgotPassword() {
    const [time, setTime] = useState(60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => {
                if (prevTime === 0) {
                    clearInterval(timer);
                    return 0;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        const seconds = time % 60;
        return `00:${seconds.toString().padStart(2, '0')}`;

    }

    const location = useLocation();
    // const { email } = state;
    const email = location.state ? location.state.email : '';
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
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
                                    placeholder='Email' value={email} readOnly
                                />
                            </div>
                            <p>{errors.email?.message}</p>
                            <div>
                                <input
                                    {...register('receivepassword', {
                                        required: validationMessages.password.required,
                                        pattern: {
                                            value: passwordRegex,
                                            message: "Invalid password"
                                        }
                                    })}
                                    type='password'
                                    placeholder='Receive Password'
                                />
                            </div>
                            <p>{formatTime(time)}</p>
                            <p>{errors.receivepassword?.message}</p>
                            <div>
                                <input
                                    {...register('newpassword', {
                                        required: validationMessages.password.required,
                                        minLength: {
                                            value: 14,
                                            message: validationMessages.password.minLength
                                          },
                                          pattern: {
                                            value: passwordRegex,
                                            message: validationMessages.password.pattern
                                          }
                      
                                    })}
                                    type='password'
                                    placeholder='New Password'
                                />
                            </div>
                            <p>{errors.newpassword?.message}</p>
                            <div className='button-login'>
                                <button className='btn'>Update password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
