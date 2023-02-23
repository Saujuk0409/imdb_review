import React from "react";
import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Logo from "../assests/logo copy.png";
import CustomInput from "./CustomInput";
import {useFormik } from "formik";
import * as yup from "yup";

const SigninImdb = () => {
//   const navigate = useNavigate();
//   const onSubmit = async (values, actions) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     actions.resetForm();
//   };
const formik=useFormik({

    initialValues:{

      Id:'',
      EmailId:'',
      password:''

    },
    validationSchema: yup.object({

        EmailId: yup.string()
  
          .email('Invalid email address')
  
          .required('Please Enter Email Id'),
        password: yup.string().required("Required").test(
            "regex",
            "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
            val => {
                let regExp = new RegExp(
                    "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                );
                return regExp.test(val);
            }
        )
  
      }),
  
      onSubmit:values=>{
  
        alert(JSON.stringify(values));
  
      }
  
    });

  return (
       <div className="sign-in">
            <img src={Logo} alt=""/>
            <div className="sign-inform">
                <p className="sign-inFormHead">Sign in</p>
                {/* <Formik
                initialValues={{ username: "", password: "", jobType: "", acceptedTos: false }}
                validationSchema={advancedSchema}
                onSubmit={onSubmit}>
                {({isSubmitting})=>(
                    <div className="form-container">
                    <form>
                    <CustomInput
                            label="Username"
                            name="username"
                            type="text"
                            placeholder="Enter Username"
                    />
                    <CustomInput
                            label="Password"
                            name="password"
                            type="text"
                            placeholder="Enter Password "
                    />
                    <button disabled={isSubmitting} type="submit">
                        Submit
                    </button>
                    </form>
                </div>  
                )}
                </Formik> */}
                <fiv>
                <form onSubmit={formik.handleSubmit}>
         <p>
           <label htmlFor="EmailId">Employee Email ID : </label>
           <input type="text" name="EmailId" id="EmailId" value={formik.values.EmailId}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  {formik.touched.EmailId && formik.errors.EmailId ? null : null}
                 
         </p>
         <p>
           <label htmlFor="password">Password : </label>
           <input type="text" name="Location" id="Location" value={formik.values.Location}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  {formik.touched.password && formik.errors.password ? <span style={{color:'red'}}>{formik.errors.Location}</span> : null}
                 
         </p>
         <button type="submit">Create</button>
  </form>
                </fiv>

            </div>
       </div>

    // <div className="sign-in-sign-up">
    //   <div className="form-page">
    //     {/* <Helmet>
    //       <body class="light-bg"></body>
    //     </Helmet> */}
    //     <Container>
    //       <img src={Logo} alt="logo" />
    //       <div className="form-container">
    //         <SignInForm />
    //         <div className="spacing"></div>

    //         <div className="divider-break">
    //           <span>New to IMDb?</span>
    //         </div>
    //         <button
    //           onClick={() => navigate("/sign-up")}
    //           className="create-account"
    //         >
    //           Create your IMDb Account
    //         </button>
    //       </div>
    //     </Container>
    //     <div className="divider-section">
    //       <div className="divider-inner"></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SigninImdb;