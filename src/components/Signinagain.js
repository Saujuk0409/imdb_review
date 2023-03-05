import React, { useState } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import Logo from "../assests/signInLogo.png";
import "../styles/styles.css";
import { style } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slice/UserSlice";
import axios from "axios";
import OtpPage from "./OtpPage";

export default function Signinagain() {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const [state, setState]=useState();
  const [mail,setMail]=useState("")
  const [password,setPassword]=useState("")
  const [open, setOpen]=useState(false);
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const Changemail= (e)=>{
    e.preventDefault();
    setMail(e.target.value);
  }
  const changepsw=(e)=>{
    e.preventDefault();
    setPassword(e.target.value);
  }    
 
  const onhandleSubmit = async (e) => {
    e.preventDefault();
    console.log(mail,password);
    const response = await axios.post(`${process.env.REACT_APP_IP}/imdbapi/login`,{email:mail,password:password});
    console.log(response);
    if(response.status===200){
      navigate('/');
      const token = localStorage.getItem('token');
      console.log("token is",token)
      const resp = await axios.post(`${process.env.REACT_APP_IP}/imdbapi/profile/${token}`,{params:{token}});
      console.log("Profile api ",resp);
      //setState(resp.data.id);
      setState({type:'SET_NAME',payload:"saujanya"});
      dispatch(setUser(setState));
    }
    // dispatch({type:'LOGIN'});
    // .
    // then(function(resp){
    //   console.log(resp);
    // }) ;

  };
  return (
    <div className="sign-in">
      <div className="main-card">
        <img src={Logo} alt="" />
        <div classname="sign-in-card4" style={{color:"black"}}>
            <div className="signinhead">
              <p>Sign in</p>
            </div>
          {/* <input type="text" value={mail} onChange={Changemail}></input> */}
          <form >
              <label>Email</label>
              <input
                placeholder=""
                type="email"
                onChange={Changemail}
                value={mail}
              />
            {errors.email && (
              <p style={{ fontSize: "0.7rem", marginTop: "1%", color: "red" }}>
                <bold>!</bold> Enter your Email or mobile phone number
              </p>
            )}
                    <label style={{display:"flex"}}>Password</label>
                    <a href="/otpauth" style={{float:"right",display:"flex",marginTop:"-5%",fontSize:"0.7rem",fontWeight:"400",paddingRight:"10%"}} onClick={() => setOpen(true)}  >forgot password</a>
                    {/* {
                        open && <OtpPage email={mail}/>
                    } */}
                    {/* <Link to="/otpauth" >
                    </Link> */}
                    <input
                        placeholder=''
                        type="password"
                        value={password}
                        onChange={changepsw}
                    />
                {errors.password && <p style={{
                  fontSize: "0.7rem",
                  marginTop: "1%",
                  color: "red",
                  marginBottom: "-2%",
                }} >Please check the Password</p>}
            <Button
              type="submit"
              onClick={onhandleSubmit}
              style={{
                marginTop: "6%",
                padding:"4%",
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
            </Button>
            <div className="ui-checkbox">
              <input type="checkbox" name="example" />
              <label>Keep me signed in </label>
            </div>
            <div className="divider-break">
              <span>New to IMDb?</span>
            </div>
            <Link to="/signup">
            <Button
              type="submit"
              style={{
                marginTop: "4%",
                padding:"4%",
                marginBottom: "5%",
                width: "82%",
                marginRight: "6%",
                backgroundColor: "#eff0f3",
                border: "0.8px solid black",
                borderRadius: "5px",
                fontSize: "1rem",
                fontWeight: "400",
                padding: "8px",
              }}
            >
              Create your IMDb account
            </Button>
            </Link>
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
  );
}
