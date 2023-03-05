import React from 'react'
import MoretoexploreCard from '../../cards/MoretoexploreCard'


const cardDetails=[
    {
        sno:1,
        name:"Tu Joothi hai makhar",
        percent:"16.78%",
    },
    {
        sno:2,
        name:"Tu Joothi hai makhar",
        percent:"16.78%",
    },
    {
        sno:3,
        name:"Tu Joothi hai makhar",
        percent:"16.78%",
    },
    {
        sno:4,
        name:"Tu Joothi hai makhar",
        percent:"16.78%",
    },
    {
        sno:5,
        name:"Tu Joothi hai makhar",
        percent:"16.78%",
    },
    {
        sno:6,
        name:"Tu Joothi hai makhar",
        percent:"16.78%",
    },
    {
        sno:7,
        name:"Tu Joothi hai makhar",
        percent:"16.78%",
    },
    {
        sno:8,
        name:"Tu Joothi hai makhar",
        percent:"16.78%",
    },
    {
        sno:9,
        name:"Tu Joothi hai makhar",
        percent:"16.78%",
    },
    {
        sno:10,
        name:"Tu Joothi hai makhar",
        percent:"16.78%",
    },
]
function Moretoexplore() {
  return (
    <div className='moretoexplorepg'>
      <div className='toppicks'>
            <div className='vl' style={{borderLeft:"2px solid #F5C518",paddingRight:"5%"}}></div>
            <h3 style={{color:"black",whiteSpace:"nowrap"}}>More to explore</h3>
        </div>
        <p className='side-heading'>Most anticipated Indian movies and shows</p>
        <p className='side-sub-heading'>Percentage shows amount of top page views.</p>
        <div>
           { cardDetails.map((card,index)=>(
               <MoretoexploreCard id={card.id} sno={card.sno} name={card.name} percent={card.percent}/>
            ))}
        </div>
    </div>
  )
}

export default Moretoexplore
