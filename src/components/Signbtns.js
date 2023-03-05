import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Signbtns(props) {
  const user = useSelector((state)=> state.user)
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