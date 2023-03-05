import React from 'react'
import "../../styles/styles.css"

function PhotosCard(props) {
  return (
    <div className='wlcard' style={{marginLeft:"5%"}}>
      <img src={props.image} alt="photos" style={{width:"100%",height:"15vh"}}/>
    </div>
  )
}

export default PhotosCard
