import React from 'react'

function StoryLine() {
  return (
    <div>
       <div className='toppicks'>
            <div className='vl' style={{borderLeft:"2px solid #F5C518"}}></div>
            <h3 style={{color:"black"}}>Story Line</h3>
            <div className="wcarrows" style={{paddingLeft:"1%",paddingTop:"1.1%"}}>
                    <div class="wcleftarrow" role="presentation">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="current color" role="presentation">
                        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z" fill='black'></path>
                    </svg>
                    </div>
            </div>
        </div>
        <div>
          <p className='sldesc'>Charlie has an extraordinary ability to determine when someone is lying. She hits the road with her Plymouth Barracuda and with every stop encounters a new cast of characters and strange crimes she can't help but investigate and solve.</p>
        </div>
        <div className='sltags'>
        <p>Criminal investigation</p>
        <p>female protogonist</p>
        <p>american Woman</p>
        </div>
        <div className='movie-cast-crew'>
            <hr ></hr>
            <div>
                <p style={{fontSize:"2.3rem",fontWeight:"400"}}><a href=''>Plot Summary : </a><a href='' style={{fontWeight:"400"}}>Add Summary</a></p>
            </div>
            <hr></hr>
            <div className='slGenre' >
              <p><bold>Genre</bold></p>
              <p><a href="">crime</a></p>
              <p><a href="">Drama</a></p>
              <p><a href="">Mystery</a></p>
            </div>
            <hr></hr>
            <div className='all-casts' style={{display:"flex"}}>
                <p style={{fontWeight:"500",fontSize:"2.3rem",paddingRight:"5%"}}><bold>Certificate : </bold></p><p>Tvia</p>
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

export default StoryLine
