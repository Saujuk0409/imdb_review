import React, { useState } from 'react'
// import ResendOtp from './ResendOtp';
import Logo from "../../assests/signInLogo.png";
import { useNavigate } from "react-router-dom";
import { createUser, getProfile } from '../../api/authentication/User';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slice/UserSlice';

function Otp({ userInfo, changeValidity }) {

    const searchParams = new URLSearchParams(document.location.search);
    const [isValid, setValidity] = useState(true);
    const [otp, setOtp] = useState();
    const [btnText, setBtnText] = useState("VERIFY");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const createAccount = async () => {
        setBtnText("VERIFY...");
        setValidity(true);
        // const data={...userInfo, otp, phone:userInfo.mobileNumber};
        console.log({ email: userInfo.email, password: userInfo.password, otp });
        const msg = await createUser({ email: userInfo.email, password: userInfo.password, otp});
        if (!msg) {
            setBtnText("VERIFY");
            setValidity(false);
        }
        else {
            const userInfo = await getProfile();
            dispatch(setUser(userInfo));
            localStorage.setItem("!@#$%^&*(user_id)*&^%$#@!", userInfo.data.profile.user_id);
            if (searchParams.get('id')) {
                setTimeout(() => navigate({ pathname: '/', search: `?id=${searchParams.get('id')}` }), 3000);
            }
            else {
                setTimeout(() => navigate('/getstarted'), 3000);
            }
        }

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
              <p style={{fontSize:"0.8rem",fontWeight:"300",paddingRight:"1%"}}>To verify your email, we've sent a One Time Password (OTP) to {userInfo.email.slice(0, 2)}</p>
            </div>
            <label>Enter otp</label>
            <input
                placeholder=""
                type="text"
                onChange={(e) => { setOtp(e.target.value) }}
                value={otp}
              />
               {!isValid && <div className="field-msg" style={{ marginTop: "5px" }}>
                <span className="error" style={{ color: "red", fontSize: "13px", fontFamily: "zoho-puvi-regular" }}>Please enter a valid OTP</span>
            </div>}   
            <button
              type="submit"
              onClick={createAccount}
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
            {/* <p style={{fontSize:"0.8rem", marginTop:"-3%",marginBottom:"5%", paddingLeft:"35%"}}><a href='' onClick={resendOTP} >Resend otp</a></p> */}
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

export default Otp
