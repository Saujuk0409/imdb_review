import React from 'react'
import img1 from "../../../assests/episodes.jpg"
import "../../../styles/styles.css"

function Episodes() {
  return (
    <div className='episode-wrapper'>
        {/* <div> */}
            <img src={img1} alt="episodes"></img>
        {/* </div> */}
        <div className='episode-info'>
            <p className='episode-info-p'>NEXT EPISODES</p>
            <div className='episode-info-flex'>
                <div style={{marginTop:"2%"}}>
                    <svg className="ipc-watchlist-ribbon__bg" width="24px" height="34px" fill='#cdc7c7' viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
                        <polygon class="ipc-watchlist-ribbon__bg-ribbon" fill="#000000" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                        <polygon class="ipc-watchlist-ribbon__bg-hover" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                        <polygon class="ipc-watchlist-ribbon__bg-shadow" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon>
                    </svg>
                    <div className="ipc-watchlist-ribbon__icon" role="presentation" style={{marginTop:"-140%"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--add ipc-icon--inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg></div>
                </div>
                <div className='season-no'>
                    <p className='season-no-1'>S1 . E6 Imposter Syndrome</p>
                    <p className='season-no-2'>Fri,  Feb 24, 2023</p>
                </div>
            </div>
            <p className='episode-desp'>At Alice's urging, Jimmy agrees to host a party. Gaby struggles with her post-divorce libido. Liz recommends medical marijuana to Paul.</p>
        </div>
    </div>
  )
}

export default Episodes
