import React from 'react'
import { Link } from 'react-router-dom'
function Signbtns(props) {
  return (
    <div className='Signinbtndiv'>
        <button className='Signinbtn'style={props.style} >
            {props.img ==""? (<></>): <img src={props.img}/>}
            <span>{props.name}</span>
        </button>
    </div>
  )
}

export default Signbtns