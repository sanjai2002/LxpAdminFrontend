import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import '../Styles/Loginpage.css';
import Relevantz from '../assets/Images/Relevantz.png'
import { loginUser } from '../actions/loginAction';
import { Link } from 'react-router-dom';
import { emailRegex, passwordRegex, validationMessages } from '../utils/Validation';

const Loginpage = () => {
 
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    dispatch(loginUser(data));
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
              <div>
                <input
                  {...register('password', {
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
                  placeholder='Password'
                />
              </div>
              <Link to={'/email'} >Forgot password?</Link>
              <p>{errors.password?.message}</p>
              <div className='button-login'>
                <button className='btn'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
