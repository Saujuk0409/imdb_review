import React from 'react'
import "../../styles/styles.css"

function FFtopCasts(props) {
  return (
    <div className='tcCard'>
        <div className='tc-image'>
            <img src={props.image} alt="topcasts"/>
        </div>
        <div className='tc-name-role'>
            <p className='actor-name'>{props.name}</p>
            <p className='actor-role'>{props.role}</p>
        </div>
    </div>
  )
}

export default FFtopCasts;
