import React from 'react'
import img1 from "../../assests/news.jpg"
function TopNewsCard(props) {
  return (
    <div className='tncard' >
        <img src={props.image} alt=""/>
        <div className='tndetails'>
            <p style={{display:"block",color:"white",fontSize:"1.8rem",marginRight:"5%",marginTop:"9%"}}>{props.title}</p>
        </div>
    </div>
  )
}

export default TopNewsCard
