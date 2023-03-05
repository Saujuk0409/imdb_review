import React from 'react'
import "../../styles/styles.css"
import img1 from "../../assests/featuredimg.jpg"

function BorntodayCard(props) {
  return (
    <div className='wlcard' style={{backgroundColor:"black"}} >
        <img src={props.image} alt="" style={{borderRadius:"50%",width:"100%",height:"18vh"}}/>
        
        <div className='wldetails'>
            <p style={{display:"block",color:"white",marginTop:"9%",marginLeft:"20%",fontSize:"2rem",fontWeight:"400"}}>{props.name}</p>
            <p style={{display:"block",color:"grey",fontSize:"2rem",marginTop:"30%",marginLeft:"-40%",fontWeight:"400"}}>{props.age}</p>
        </div>
    </div>
  )
}

export default BorntodayCard
