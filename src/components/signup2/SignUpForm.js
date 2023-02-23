// SignUpForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/User/UserAction';
import axios from 'axios';
import Logo from "../../assests/signInLogo.png";
import {Button } from "semantic-ui-react";
import OtpPage from '../OtpPage';
import "../../styles/styles.css"

const SignUpForm = () => {
  const [name,setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otptoggle,setOtptoggle] = useState(false);
  const [token,setToken]= useState()

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios
      .post(`${process.env.REACT_APP_IP}/imdbapi/signup`, {
        username: name,
        email: email,
        password: password,
      })
        .then(response => {
          // Call sign up action to update store with user data
          // console.log(response.data.token);
          // localStorage.setItem("token",response.data.token);
          console.log("otp response is ",response);
          setToken(response.data)
          dispatch(signUp(response.data));
          // Navigate to OTP verification page
          // ...
          setOtptoggle(!otptoggle);

        })
        .catch(error => {
          console.log('Sign up error:', error);
        });
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    if(!name){
      validationErrors.name = 'Name is required';
    }
    if (!email || !isValidEmail(email)) {
      validationErrors.email = 'Please enter a valid email address';
    }
    if (!password || password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long';
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }
    return validationErrors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
      !otptoggle ?(
        <div className='signup-page'>
          <div className='main-card'>
              <div className='signup-image'>
              <img src={Logo} alt="" />
              </div>
              {errors.name && errors.email && errors.password && errors.confirmPassword &&
                <div className='errors-div'>
                  {<h3>There was a problem</h3>}
                  {errors.name && <p className='error'>{errors.name}</p>}
                  {errors.email && <p className="error">{errors.email}</p>}
                  {errors.password && <p className="error">{errors.password}</p>}
                  {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              </div>}
          </div>
          <div className='sign-in-card4'>
          <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
  
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
  
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        /><br></br>
        <Button type="submit" onClick={handleSubmit} style={{
                  marginTop: "10%",
                  marginBottom: "5%",
                  width: "82%",
                  marginRight: "6%",
                  backgroundColor: "rgb(251, 192, 0)",
                  border: "0.8px solid rgb(251, 192, 0)",
                  borderRadius: "5px",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  padding: "8px",
                }}>Sign Up</Button>
        <hr style={{ marginTop: "1.5%" }}></hr>
            <div
              style={{
                marginBottom: "3%",
                fontSize: "1.5rem",
                paddingLeft: "6%",
                textAlign:"left"
              }}
            >
              Already have an account <a href="/signinImdb">Sign in</a>
            </div>
      </form>
      <hr
            style={{ marginTop: "3%", boxSizing: "border-box", width: "50%" }}
          ></hr>
          <div className="ftrcontent">
            <span>
              <a href="">Help</a>
            </span>
            <span>
              <a href="">Continue of use</a>
            </span>
            <span>
              <a href="">Privacy Notice</a>
            </span>
          </div>
          <div className="cpywrite">
            <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
          </div>
          </div>
        </div>
      ):<OtpPage email={email} name={name} password={password}token={token}/>)
    }
  ;
;

export default SignUpForm;
