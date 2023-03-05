import React from 'react'
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Profilebtn from './svgs/buttons/Profilebtn';
import "../styles/styles.css";
function Signinbtn() {
  const user= useSelector((state)=> state.user)
  return (
    // user ?  <Profilebtn user={user.name}/> :
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