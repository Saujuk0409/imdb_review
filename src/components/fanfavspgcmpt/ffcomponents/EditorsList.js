import React from 'react'
import UserListCard from '../../cards/UserListCard'
import img1 from "../../../assests/images/userslist.jpg"

const userdetails = [
    {
        id:1,
        image:img1,
        title:"New on Netflix this week",
        subtitle:"Updated 1 year ago . 16 titles",
    },
    {
        id:2,
        image:img1,
        title:"New on Netflix this week",
        subtitle:"Updated 1 year ago . 16 titles",
    },
    {
        id:3,
        image:img1,
        title:"New on Netflix this week",
        subtitle:"Updated 1 year ago . 16 titles",
    }
]

function EditorsList() {
    return (
      <div className='moretoexplorepg' style={{paddingTop:"15%"}}>
        <div className='toppicks'>
              {/* <div className='vl' style={{borderLeft:"2px solid #F5C518",paddingRight:"5%"}}></div> */}
              <h3 style={{color:"black",whiteSpace:"nowrap",paddingLeft:"10%",fontSize:"3rem",fontWeight:"500"}}>Editors List</h3>
          </div>
          {/* <p className='side-heading'>Related lists from IMDb users</p> */}
          <p className='side-sub-heading'>Related lists from IMDb users</p>
          <div>
             { userdetails.map((card,index)=>(
              //    <MoretoexploreCard sno={card.sno} name={card.name} percent={card.percent}/>
                  <UserListCard id={card.id} image={card.image} title={card.title} subtitle={card.subtitle}/>
              ))}
          </div>
      </div>
    )
  }
  
  export default EditorsList