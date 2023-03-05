import React from 'react'
import "../../styles/styles.css"

function Watchlistplus() {
  return (
    <div class="ipc-watchlist-ribbon ipc-focusable ipc-watchlist-ribbon--m ipc-watchlist-ribbon--baseAlt ipc-watchlist-ribbon--onImage ipc-poster__watchlist-ribbon poster-card-watchlist-ribbon" aria-label="add to watchlist" role="button" tabindex="0" style={{position:"absolute",marginTop:"-0.3%"}}
         >
            <svg class="ipc-watchlist-ribbon__bg" fill="#4845457c" width="40px" height="65px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
                <polygon class="ipc-watchlist-ribbon__bg-ribbon" fill="#504c4c7c" width="40px" height="40px"points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon><polygon class="ipc-watchlist-ribbon__bg-hover" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
            <polygon class="ipc-watchlist-ribbon__bg-shadow" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049" fill='#504c4c7c'></polygon></svg>
        <div class="ipc-watchlist-ribbon__icon" role="presentation" style={{marginTop:"-130%"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" class="ipc-icon ipc-icon--add ipc-icon--inline" viewBox="0 0 24 24" fill="white" role="presentation">
                <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
         </div>
      </div>
  )
}

export default Watchlistplus
