import React from 'react'
import "../../styles/styles.css"
import image2 from "../../assests/featuredimg.jpg"


function ComingsoonCard(props) {
  return (
    <div className='featuredcard'>
      <img src={image2} alt="" />
      <div className="overlay__content">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="ipc-icon ipc-icon--list ipc-lockup-overlay__icon" id="iconContext-list" viewBox="0 0 24 24" fill="current color" role="presentation">
            <g fill="rgb(198, 195, 195)">
                <path d="M0 0h24v24H0V0z"></path>
                <path opacity=".87" d="M0 0h24v24H0V0z"></path>
            </g>
            <path d="M4 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1zm-3 5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1z"></path>
        </svg>
        <span className="overlay__text">List</span>
      </div>
      <div className='carddesc'>
            <a href=''>{props.desc}</a>
      </div>
    </div>
  )
}

export default ComingsoonCard
