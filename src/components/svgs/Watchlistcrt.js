import React from 'react'

function Watchlistcrt() {
  return (
    <div class="ipc-watchlist-ribbon ipc-focusable ipc-watchlist-ribbon--m ipc-watchlist-ribbon--baseAlt ipc-watchlist-ribbon--onImage ipc-watchlist-ribbon--inWatchlist ipc-poster__watchlist-ribbon poster-card-watchlist-ribbon" aria-label="remove from watchlist" role="button" tabindex="0" style={{position:"absolute",marginTop:"-10%",marginLeft:"-60%"}}>
        <svg class="ipc-watchlist-ribbon__bg" width="40px" height="65px" fill='#F5C518' viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <polygon class="ipc-watchlist-ribbon__bg-ribbon" fill="#000000" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
            <polygon class="ipc-watchlist-ribbon__bg-hover" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
            <polygon class="ipc-watchlist-ribbon__bg-shadow" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon>
        </svg>
    <div class="ipc-watchlist-ribbon__icon" role="presentation" style={{marginTop:"-130%"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--done ipc-icon--inline" viewBox="0 0 24 24" fill="currentColor" role="presentation">
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M9 16.2l-3.5-3.5a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0L9 16.2z"></path>
    </svg>
    </div>
    </div>
  )
}

export default Watchlistcrt
