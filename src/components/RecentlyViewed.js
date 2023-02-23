import React from 'react'
import "../styles/styles.css"
import image1 from "../assests/smallimg.jpg"

function RecentlyViewed() {
  return (
    <div className='recentlyviewed' >
      <h1>Recently Viewed</h1>
      <div className='recentlyviewedcard'>
        <img src={image1} alt=""></img>
        <p>Captain America</p>
      </div>
    </div>
  )
}

export default RecentlyViewed
