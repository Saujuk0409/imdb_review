import React from 'react'
import img1 from "../../assests/images/userslist.jpg"
function UserListCard(props) {
  return (
    <div className='user-list-card' style={{border:"1px solid rgb(225, 220, 220)"}}>
       <div className='ulcolumn1'>
            <p className='ul-1p'>{props.title}</p>
            <p className='ul-2p'>{props.subtitle}</p>
     </div>
       <div className='user-list-column2'>
            <img src={img1} alt="userlistimg"/>
       </div>
    </div>
  )
}

export default UserListCard
