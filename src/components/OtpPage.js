import React from 'react'
import Logo from "../assests/signInLogo.png";
import axios from 'axios';
import { useState,useEffect } from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
import { generateOTP,getUsername,verifyOTP } from '../helpers/Helper';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthStore } from  '../store/store'

function OtpPage(props) {
  
//  const {username}= useAuthStore(state=>state.Auth)   
const [otp, setOtp]=useState("");
const navigate = useNavigate(); 
const email=props.email;
const name=props.name;
const password=props.password;
const token=props.token
// const location= useLocation();
// const email=location.state.mail
// const username = location.state.name
// const password = location.state.password

const handleotp= (e)=>{
    setOtp(e.target.value);
}
const handleSubmit = async (e)=>{
       e.preventDefault();
       try{
        let {data,status} = await verifyOTP({email,otp});
        console.log(status);
        if(status===200)
        {
          toast.success('Verify Successfully!') 
          console.log(data);
           localStorage.setItem("token",data);
           localStorage.setItem("name",name);
           localStorage.setItem("email",email)
            const response=await axios.post(`${process.env.REACT_APP_IP}/imdbapi/verify`,{name,password,email,data})
            console.log(response);
            return navigate('/'
            ,{
              state:{
                email:email,
                username:name,
                password:password,
              }
            }
            )
        } 
    }
        catch (error) {
            return toast.error('Wront OTP! Check email again!')
          }
}

function resendOTP(){

    let sentPromise = generateOTP(email);

    toast.promise(sentPromise ,
      {
        loading: 'Sending...',
        success: <b>OTP has been send to your email!</b>,
        error: <b>Could not Send it!</b>,
      }
    );

    sentPromise.then((OTP) => {
      console.log(OTP)
    });
    
  }

  return (  
    <div className='otppage'>
        <div className='main-card'>
            <img src={Logo} alt="logo"/>
            <div classname="sign-in-card4" style={{color:"black"}}>
            {/* <input type="text" value={mail} onChange={Changemail}></input> */}
          <form >
            <div className="signinhead">
              <p style={{fontsize:"1.9rem",fontWeight:"400",paddingTop:"9%"}}>Verify email address</p>
              <p style={{fontSize:"0.8rem",fontWeight:"300",paddingRight:"1%"}}>To verify your email, we've sent a One Time Password (OTP) to {email}</p>
            </div>
            <label>Enter otp</label>
            <input
                placeholder=""
                type="email"
                onChange={handleotp}
                value={otp}
              />
            <button
              type="submit"
              onClick={handleSubmit}
              style={{
                marginTop: "5%",
                width: "82%",
                marginRight: "6%",
                backgroundColor: "#f0c14b",
                border: "1px solid #f0c14b",
                borderRadius: "5px",
                fontSize: "1rem",
                fontWeight: "400",
              }}
            >
              Sign in
            </button>
            <p style={{fontSize:"0.7rem",marginRight:"5%", marginTop:"7%"}}>By creating an IMDb account, you agree to the IMDb </p>
            <p style={{fontSize:"0.7rem", marginTop:"-3%"}}><a href=''>Conditions of Use</a></p>
            <p style={{fontSize:"0.8rem", marginTop:"-3%",marginBottom:"5%", paddingLeft:"35%"}}><a href='' onClick={resendOTP} >Resend otp</a></p>
          </form>
          <hr style={{ marginTop: "1.5%", boxSizing: "border-box" }}></hr>
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
    </div>
  )
}

export default OtpPage
// <img src={Logo} alt="" />
{/* <form>
<h3>Verify email address</h3>
<p>To verify your email we have sent a One Time Password (OTP) to {props.mail}</p>
    <label>Enter Otp</label>
    <input
    name="otp"
    value={otp}
    onChange={handleotp}
    >
    </input>
<button>
    create your Imdb account
</button>
<p>By creating an IMDb account, you agree to the IMDb <a>Conditions of Use</a>
</p>
<a href="">Resend otp</a>
</form> */}