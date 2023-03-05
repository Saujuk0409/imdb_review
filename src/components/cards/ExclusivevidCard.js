import React from 'react'

function ExclusivevidCard(props) {
  
  return (
    <div className='featuredcard'>
      <img src={props.image} alt=""/>
      <div className="overlay__content" style={{marginLeft:"-45%",marginTop:"-4%",background:"background: linear-gradient(180deg,transparent 0,transparent 65%,rgba(0,0,0,.35) 83.5%,rgba(0,0,0,.75));"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="ipc-icon ipc-icon--play-circle-outline ipc-lockup-overlay__icon" id="iconContext-play-circle-outline" viewBox="0 0 24 24" fill="white" role="presentation">
        <path d="M10.8 15.9l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1a.5.5 0 0 0-.8.4v7c0 .41.47.65.8.4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
        <span className="overlay__text" style={{color:"white",fontSize:"2rem",fontWeight:"500"}}>7.28</span>
      </div>
      <div className='carddesc'>
            <a href=''>{props.desc}</a>
      </div>
    </div>
  )
}

export default ExclusivevidCard
