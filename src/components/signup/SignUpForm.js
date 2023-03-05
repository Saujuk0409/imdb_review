import React, { useState } from 'react';
import SignupBox from "./SignupBox";
import Logo from "../../assests/signInLogo.png";
import Otp from "./Otp";

export default function SignUpForm() {
    const [userInfo, setUserInfo] = useState({});
    const [isValid, setValidity] = useState(false);

    const changeValidity = (data) => {
        setValidity((isValid) => !isValid);
        setUserInfo(data);
    }
    return <>
        <div className="signup-form">
            <div className="product">
                <a href="#">
                <img src={Logo} alt="imdblogo" />
                </a>
            </div>
            {/* <h3>Get your team started.</h3> */}
            {isValid?<Otp changeValidity={changeValidity} userInfo={userInfo}></Otp>: <SignupBox changeValidity={changeValidity}></SignupBox>}
            {/* {isValid ? <Otp changeValidity={changeValidity} userInfo={userInfo}></Otp> : <SignUpBox changeValidity={changeValidity}></SignUpBox>} */}

            {/* <SignupBox setValidity={setValidity}></SignupBox>
            <Otp></Otp> */}

        </div>
    </>;
}