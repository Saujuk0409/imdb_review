import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Logo from "../../assests/signInLogo.png";
import { emailOtp, checkEmail } from '../../api/authentication/User.js';
import { validateEmail } from '../../validation/email';
import { validatePassword } from '../../validation/password';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "semantic-ui-react";

export default function     SignupBox({ changeValidity }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpsw,setConfirmpsw] = useState("");
    const [emailExists, setEmailExists] = useState(false);
    const [errorMsg, setErrorMsg] = useState({ email: true, pswrd: true,confirmpassword:true, mobileNo: true, isChecked: true });

    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }

    const checkValidity = () => {
        const error = {}
        !validateEmail(email) ? error.email = false : error.email = true;

        !validatePassword(password) ? error.pswrd = false : error.pswrd = true;

        // !validateMobileNumber(mobileNumber) ? error.mobileNo = false : error.mobileNo = true;
        confirmpsw !== password ? error.confirmpassword=false:error.confirmpassword=true ;
        // mobileNumber.length > 10 || mobileNumber.length < 10 ? error.mobileNo = false : error.mobileNo = true;
        // console.log(!validateMobileNumber(mobileNumber));
        // !checked ? error.isChecked = false : error.isChecked = true;
        console.log(error)

        setErrorMsg(() => { return { ...error } })
        return error;
    }
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
        else if (e.target.name === "confirmpassword") {
            setConfirmpsw(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        const error = checkValidity();
        if (error.email && error.pswrd && error.confirmpassword) {
            let emailExists = await checkEmail({ email })
            if (emailExists) {
                console.log(emailExists);
                emailOtp({ email });
                setTimeout(() => changeValidity({ email, password}), 2000);
            }
            else {
                setEmailExists(true);
            }
        }
    }
    return <>
         <div className="signup-page">
      <div className="main-card">
        <img src={Logo} alt="" />
        <div classname="sign-in-card4">
          <form method="post">
            <div className="signinhead">
              <p className="createact">Create account</p>
            </div>
            <label>Your Name</label>
            <input
              placeholder="First and Last Name"
              type="text"
              name="name"
              onChange={handleChange}
              />
            {!errorMsg.email && 
                    <div className="field-msg">
                        <span id="email-error" className="error jqval-error">Please enter a name</span>
                    </div>}
            <label>Email</label>
            <input id="email" name="email" placeholder="Email" type="email" value={email} onChange={handleChange} onKeyDown={handleKeyDown}/>
            {/* {!errorMsg.email && 
                <div className="field-msg">
                    <span id="email-error" className="error jqval-error">Please enter a valid email address</span>
                </div>} */}
            {/* {emailExists && <span id="email-error" className="error jqval-error">An account already exists for this email address. <a href="#" onClick={() => navigate('/signin')} tabIndex="-1">Sign in</a> or use a different email address to sign up.</span>} */}
            <label>Password</label>
            <input
              placeholder="atleast 8 characters" id="password" name="password" type="password" value={password} onChange={handleChange} />
            {!errorMsg.pswrd && <div className="field-msg"><span id="password-error" className="error jqval-error">Password cannot be less than 8 characters, should contains special character, one uppercase letter, one number</span></div>}
            <label>Confirm Password</label>
            <input
              id="confirmpassword" name="confirmpassword" type="password" value={confirmpsw} onChange={handleChange}
            />
            {!errorMsg.pswrd && <div className="field-msg"><span id="password-error" className="error jqval-error">Password cannot be less than 8 characters, should contains special character, one uppercase letter, one number</span></div>}
              <Button
                type="submit"
                onClick={handleSubmit}
                style={{
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
                }}
              >
                Create your IMDb account
              </Button>
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
    </div>
    </>;
}