import React from "react";
import Logo from "../assests/signInLogo.png";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "../styles/styles.css";
import { Link, useNavigate } from "react-router-dom";
// import "../styles/signup.css"

function Signup() {
  const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
  const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [mailErr, setMailErr] = useState(false);
  const [pswErr, setPswErr] = useState(false);
  const [pswmatch, setPswmatch] = useState(false);
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //     userRef.current.focus();
  //   }, []);

  //   useEffect(() => {
  //     setValidName(USER_REGEX.test(user));
  //   }, [user]);

  // useEffect(() => {
  //   console.log(PWD_REGEX.test(pwd));
  //   setValidMatch(pwd === matchPwd);
  // }, []);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const v1 = USER_REGEX.test(user);
      const v2 = PWD_REGEX.test(pwd);
      if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
      }

      try {
        const response = await axios.post(
          "/api-endpoint",
          JSON.stringify({ user, pwd }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        setSuccess(true);
        //clear state and controlled inputs
        setUser("");
        setPwd("");
        setMatchPwd("");
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 409) {
          setErrMsg("Username Taken");
        } else {
          setErrMsg("Registration Failed");
        }
        errRef.current.focus();
      }
    };
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setUser(e.target.value);
    } else if (e.target.name === "mail") {
      setMail(e.target.value);
    } else if (e.target.name === "paswrd") {
      setPwd(e.target.value);
    } else if (e.target.name === "confirm_pwd") {
      setMatchPwd(e.target.value);
    }
  };
  const onSubmitsignup = async (e) => {
    e.preventDefault();
    const v1 = regex.test(mail);
    const v2 = PWD_REGEX.test(pwd);
    // try{
    const response = await axios
      .post(`${process.env.REACT_APP_IP}/imdbapi/signup`, {
        username: user,
        email: mail,
        password: pwd,
      })
      .then((res) => 
      {localStorage.setItem("token",res.data.token);
      // alert(res.data);
      navigate('/otpauth',{
        state:{
          email:mail,
          username:user,
          password:pwd
        }
      });
      return res.data;
      // console.log(res)
    });
    setSuccess(true);
    setErrMsg("");
    // localStorage.setItem("token",res.data.token)
    // console.log("Error");
    // }
    // catch{
    if (!v1) {
      setErrMsg("Inalid Email");
      setMailErr(true);
    }
    if (!v2) {
      setErrMsg("pwd not crt");
      setPswErr(true);
    }
    if (pwd !== matchPwd) {
      setErrMsg("password not matched");
      setPswmatch(true);
    }
    if (user === "") {
      setErrMsg("Enter Name");
    }
  };

  return (
    <div className="signup-page">
      <div className="main-card">
        <img src={Logo} alt="" />
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
        </p>
        <div classname="sign-in-card4">
          <form>
            <div className="signinhead">
              <p className="createact">Create account</p>
            </div>
            <label>Your Name</label>
            <input
              placeholder="First and Last Name"
              type="text"
              value={user}
              ref={userRef}
              name="name"
              onChange={handleChange}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <label>Email</label>
            <input
              placeholder=""
              type="email"
              name="mail"
              value={mail}
              onChange={handleChange}
              
            />
            <label>Password</label>
            <input
              placeholder="atleast 8 characters"
              type="password"
              name="paswrd"
              value={pwd}
              required
              onChange={(e) => setPwd(e.target.value)}
              
            />
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm_pwd"
              id="confirm_pwd"
              onChange={handleChange}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
            />
            <Link to="/signup">
              <Button
                type="submit"
                onClick={onSubmitsignup}
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
            </Link>
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
  );
}

export default Signup;
//     <section>
// <p
//   ref={errRef}
//   className={errMsg ? "errmsg" : "offscreen"}
//   aria-live="assertive"
// >
//   {errMsg}
// </p>
// <h1>Register</h1>
// <form className="form" onSubmit={handleSubmit}>
//   <label htmlFor="username">
//     Username:
//   </label>
//   <input
//     type="text"
//     id="username"
//     ref={userRef}
//     autoComplete="off"
//     onChange={(e) => setUser(e.target.value)}
//     value={user}
//     required
//     aria-invalid={validName ? "false" : "true"}
//     aria-describedby="uidnote"
//     onFocus={() => setUserFocus(true)}
//     onBlur={() => setUserFocus(false)}
//   />
//   <p
//     id="uidnote"
//     className={
//       userFocus && user && !validName
//         ? "instructions"
//         : "offscreen"
//     }
//   >
//     4 to 24 characters.
//     <br />
//     Must begin with a letter.
//     <br />
//     Letters, numbers, underscores, hyphens allowed.
//   </p>
//   <label htmlFor="password">
//     Password:
//   </label>
//   <input
//     type="password"
//     id="password"
//     onChange={(e) => setPwd(e.target.value)}
//     value={pwd}
//     required
//     aria-invalid={validPwd ? "false" : "true"}
//     aria-describedby="pwdnote"
//     onFocus={() => setPwdFocus(true)}
//     onBlur={() => setPwdFocus(false)}
//   />
//   <p
//     id="pwdnote"
//     className={
//       pwdFocus && !validPwd
//         ? "instructions"
//         : "offscreen"
//     }
//   >
//     8 to 24 characters.
//     <br />
//     Must include uppercase and lowercase letters, a
//     number and a special character.
//     <br />
//     Allowed special characters:{" "}
//     <span aria-label="exclamation mark">
//       !
//     </span>{" "}
//     <span aria-label="at symbol">@</span>{" "}
//     <span aria-label="hashtag">#</span>{" "}
//     <span aria-label="dollar sign">$</span>{" "}
//     <span aria-label="percent">%</span>
//   </p>
//   <label htmlFor="confirm_pwd">
//     Confirm Password:
//   </label>
//   <input
//     type="password"
//     id="confirm_pwd"
//     onChange={(e) => setMatchPwd(e.target.value)}
//     value={matchPwd}
//     required
//     aria-invalid={validMatch ? "false" : "true"}
//     aria-describedby="confirmnote"
//     onFocus={() => setMatchFocus(true)}
//     onBlur={() => setMatchFocus(false)}
//   />
//   <p
//     id="confirmnote"
//     className={
//       matchFocus && !validMatch
//         ? "instructions"
//         : "offscreen"
//     }
//   >
//     Must match the first password input field.
//   </p>
//   <button
//     disabled={
//       !validName || !validPwd || !validMatch
//         ? true
//         : false
//     }
//   >
//     Sign Up
//   </button>
// </form>
// <p>
//   Already registered?
//   <br />
//   <span className="line">
//     {/*put router link here*/}
//     {/* <a href="#">Sign In</a> */}
//   </span>
// </p>
//     </section>
