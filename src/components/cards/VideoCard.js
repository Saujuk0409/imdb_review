import React from 'react'
import "../../styles/styles.css"
// import {photos1,photos2,photos3,photos4,photos5,photos6,photos7} from "../../assests/images"

function VideoCard(props) {
  return (
    <div className='featuredcard' >
      <img src={props.image} alt=""/>
      <div className="overlay__content">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--play-circle-outline ipc-lockup-overlay__icon" id="iconContext-play-circle-outline" viewBox="0 0 24 24" fill="black" role="presentation"><path d="M10.8 15.9l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1a.5.5 0 0 0-.8.4v7c0 .41.47.65.8.4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
        <span className="overlay__text" style={{color:"black",paddingLeft:"0%"}}>{props.time}</span>
      </div>
      <div className='carddesc' style={{color:"black"}}>
            <a href='' style={{color:"black"}}>{props.title}</a>
      </div>  
    </div>
  )
}

export default VideoCard
