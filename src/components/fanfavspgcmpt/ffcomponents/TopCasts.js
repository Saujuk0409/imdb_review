import React from 'react'
import tc1 from "../../../assests/tc1.jpg"
import tc2 from "../../../assests/tc2.jpg"
import tc3 from "../../../assests/tc3.jpg"
import tc4 from "../../../assests/tc4.jpg"
import FFtopCasts from '../../cards/FFtopCasts'
import "../../../styles/styles.css"

const tccarddetails = [
    {
        imgage:tc1,
        name:"Allu arjun",
        role:"Hero",
    },
    {
        imgage:tc1,
        name:"Allu arjun",
        role:"Hero",
    },
    {
        imgage:tc1,
        name:"Allu arjun",
        role:"Hero",
    },
    {
        imgage:tc1,
        name:"Allu arjun",
        role:"Hero",
    },
    {
        imgage:tc1,
        name:"Allu arjun",
        role:"Hero",
    },
    {
        imgage:tc1,
        name:"Allu arjun",
        role:"Hero",
    },
    {
        imgage:tc1,
        name:"Allu arjun",
        role:"Hero",
    },
    {
        imgage:tc1,
        name:"Allu arjun",
        role:"Hero",
    },
    {
        imgage:tc1,
        name:"Allu arjun",
        role:"Hero",
    },
    {
        imgage:tc1,
        name:"Allu arjun",
        role:"Hero",
    },
]

function TopCasts() {
  return (
    <div className='topcasts'>
      <div className='toppicks'>
            <div className='vl' style={{borderLeft:"2px solid #F5C518"}}></div>
            <h3 style={{color:"black ",fontSize:"4rem"}}>Top Casts</h3>
            <div className="wcarrows" style={{paddingLeft:"1%",paddingTop:"0.5%"}}>
              <div class="wcleftarrow" role="presentation">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="current color" role="presentation">
                  <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z" fill='black'></path>
                </svg>
              </div>
            </div>
        </div>
        <div className='tccontainer'>
             {/* {
                tccarddetails && tccarddetails.map((card,index)=>{
                 <FFtopCasts image={card.image} name={card.name} role={card.role}/> 
                })
            }  */}
            <FFtopCasts  image={tc1} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc2} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc3} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc4} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc1} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc4} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc2} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc3} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc1} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc3} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc2} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc1} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc1} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc4} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc1} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc2} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc3} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc1} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc4} name={"Allu Arjun"} role={"Pushpa Raj"}/>
            <FFtopCasts image={tc2} name={"Allu Arjun"} role={"Pushpa Raj"}/>
        </div>
        <div className='movie-cast-crew'>
            <hr ></hr>
            <div>
                <p style={{fontSize:"2.3rem",fontWeight:"500"}}><bold>Director : </bold><a href='' style={{fontWeight:"400"}}>Rian Johnson</a></p>
            </div>
            <hr></hr>
            <div className='all-casts' style={{display:"flex"}}>
                <p style={{fontWeight:"500",fontSize:"2.3rem"}}><bold>All Casts and Crew</bold></p>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="ipc-icon ipc-icon--chevron-right" id="iconContext-chevron-right" viewBox="0 0 24 24" fill="black" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg>
            </div>
            <hr></hr>
            <div  className='production' style={{display:"flex"}}>
                <p style={{fontWeight:"500",fontSize:"2.3rem"}}><bold>Production , box Office & more at IMDbPro</bold></p>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="ipc-icon ipc-icon--launch" id="iconContext-launch" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M16 16.667H8A.669.669 0 0 1 7.333 16V8c0-.367.3-.667.667-.667h3.333c.367 0 .667-.3.667-.666C12 6.3 11.7 6 11.333 6h-4C6.593 6 6 6.6 6 7.333v9.334C6 17.4 6.6 18 7.333 18h9.334C17.4 18 18 17.4 18 16.667v-4c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667V16c0 .367-.3.667-.667.667zm-2.667-10c0 .366.3.666.667.666h1.727L9.64 13.42a.664.664 0 1 0 .94.94l6.087-6.087V10c0 .367.3.667.666.667.367 0 .667-.3.667-.667V6h-4c-.367 0-.667.3-.667.667z"></path></svg>
            </div>
        <hr></hr>
        </div>
    </div>
  )
}

export default TopCasts
