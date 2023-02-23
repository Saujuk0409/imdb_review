import React from 'react'
import {Link} from "react-router-dom";
import "../styles/styles.css";
function Signinbtn() {
  return (
    <div className='signinbtnDiv'>
        <Link to="/Signin">
        <button className='signinbtn' onClick={{}}>
        Sign In 
        </button>
        </Link>
    </div>
  )
}

export default Signinbtn