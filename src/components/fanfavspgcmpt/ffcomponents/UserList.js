import React from 'react'
import UserListCard from '../../cards/UserListCard'
import img1 from "../../../assests/images/userslist.jpg"
import { Button } from 'semantic-ui-react'

const userdetails = [
    {
        id:1,
        image:img1,
        title:"south Movies",
        subtitle:"Updated 1 year ago . 16 titles",
    },
    {
        id:2,
        image:img1,
        title:"Bollywood",
        subtitle:"Updated 1 year ago . 16 titles",
    },
    {
        id:3,
        image:img1,
        title:"New on Netflix this week",
        subtitle:"Updated 1 year ago . 16 titles",
    },
    {
        id:4,
        image:img1,
        title:"New on Netflix this week",
        subtitle:"Updated 1 year ago . 16 titles",
    },
    {
        id:5,
        image:img1,
        title:"New on Netflix this week",
        subtitle:"Updated 1 year ago . 16 titles",
    },
    {
        id:6,
        image:img1,
        title:"New on Netflix this week",
        subtitle:"Updated 1 year ago . 16 titles",
    },
    {
        id:7,
        image:img1,
        title:"New on Netflix this week",
        subtitle:"Updated 1 year ago . 16 titles",
    },
]
function UserList() {
  return (
    <div className='moretoexplorepg' style={{paddingTop:"15%"}}>
      <div className='toppicks'>
            {/* <div className='vl' style={{borderLeft:"2px solid #F5C518",paddingRight:"5%"}}></div> */}
            <h3 style={{color:"black",whiteSpace:"nowrap",paddingLeft:"10%",fontSize:"3rem",fontWeight:"500"}}>Users List</h3>
            <div className="wcarrows" style={{paddingLeft:"10%",paddingTop:"3.5%"}}>
                    <div class="wcleftarrow" role="presentation">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="current color" role="presentation">
                        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z" fill='black'></path>
                    </svg>
                    </div>
            </div>
        </div>
        {/* <p className='side-heading'>Related lists from IMDb users</p> */}
        <p className='side-sub-heading' style={{paddingBottom:"2%"}}>Related lists from IMDb users</p>
        <Button className='create-list-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--add ipc-btn__icon ipc-btn__icon--pre" id="iconContext-add" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg> 
            create a list</Button>
        <div style={{paddingTop:"7%"}}>
           { userdetails.map((card,index)=>(
            //    <MoretoexploreCard sno={card.sno} name={card.name} percent={card.percent}/>
                <UserListCard id={card.id} image={card.image} title={card.title} subtitle={card.subtitle}/>
            ))}
        </div>
    </div>
  )
}

export default UserList
