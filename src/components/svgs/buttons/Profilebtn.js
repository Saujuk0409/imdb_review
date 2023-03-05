import React from 'react'
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Profilebtn(props) {
    const [open,setOpen]= useState(false);

    const handleButtonClick = ()=>{
        setOpen(!open);
    }

  return (
    <div class="dropdown-pro">
  <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:"2rem",fontWeight:"500"}}>
    {/* {props.name} */}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--account-circle ipc-btn__icon ipc-btn__icon--pre" id="iconContext-account-circle" viewBox="0 0 24 24" fill="white" role="presentation" style={{marginRight:"10%"}}><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"></path></svg>
    Saujanya
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>

  </ul>
</div>
  )
}

export default Profilebtn
