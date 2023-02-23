import React from 'react'

function Addwatchlist() {
  return (
    <div className='watchcarousl'>
        
        <div className='toppicks'>
            <div className='vl' style={{borderLeft:"2px solid #F5C518"}}></div>
            <h3>From your Watchlist</h3>
            <div className="wcarrows" style={{paddingLeft:"1%",paddingTop:"0.5%"}}>
                    <div class="wcleftarrow" role="presentation">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="current color" role="presentation">
                        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z" fill='#F5C518'></path>
                    </svg>
                    </div>
            </div>
        </div>
        {/* <p style={{float:"left",color:"white",marginLeft:"-78%",marginTop:"2%",fontSize:"2.1rem",color:"grey",fontWeight:"400"}}>TV shows and movies just for you</p> */}
        <div className='watchlistdetails'>
        <div class="ipc-watchlist-ribbon ipc-focusable ipc-watchlist-ribbon--m ipc-watchlist-ribbon--baseAlt sc-128667ef-1 eeevoX from-your-watchlist__ribbon" aria-label="Sign in to access your Watchlist" role="button" tabindex="0" >
            <svg class="ipc-watchlist-ribbon__bg" width="40px" height="40px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
                <polygon class="ipc-watchlist-ribbon__bg-ribbon" fill="rgb(40, 37, 37)" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                <polygon class="ipc-watchlist-ribbon__bg-hover" fill="rgb(40, 37, 37)" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                <polygon class="ipc-watchlist-ribbon__bg-shadow" fill="rgb(40, 37, 37)" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon></svg>
            <div class="ipc-watchlist-ribbon__icon" role="presentation" style={{position:"absolute",paddingLeft:"36.9%",marginTop:"-1.8%"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--add ipc-icon--inline" viewBox="0 0 24 24" fill="white" role="presentation">
                <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z">
                </path></svg>
            </div>
        </div>
            <p>Sign in to access your watchlist</p>
            <p>Save shows and movies to keep track of what you want</p>
            <button style={{fontSize:"2rem",fontWeight:"500"}}>Sign in to IMDb</button>
        </div>
      
    </div>
  )
}

export default Addwatchlist
