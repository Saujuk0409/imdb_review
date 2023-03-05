import React from 'react'
import img1 from "../../assests/news.jpg"
function TopnewsFFCard() {
  return (
    <div>
      <div className='FFcard' >
        <img src={img1} alt=""/>
        <div className='FFdetails'>
            <p style={{display:"block",fontSize:"1.8rem",marginLeft:"5%",marginTop:"9%"}}>Ben Affleck Shocks Customers as Dunkin’ Donuts Worker in Super Bowl Ad: ‘Welcome to Dunkin’!’ (Video)</p>
        </div>
    </div>
    </div>
  )
}

export default TopnewsFFCard
