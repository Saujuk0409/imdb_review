import React from 'react'
import img1 from "../../assests/news.jpg"
function TopNewsCard(props) {
  return (
    <div className='tncard' >
        <img src={img1} alt=""/>
        <div className='tndetails'>
            <p style={{display:"block",color:"white",fontSize:"1.8rem",marginRight:"5%",marginTop:"9%"}}>Ben Affleck Shocks Customers as Dunkin’ Donuts Worker in Super Bowl Ad: ‘Welcome to Dunkin’!’ (Video)</p>

        </div>
    </div>
  )
}

export default TopNewsCard
