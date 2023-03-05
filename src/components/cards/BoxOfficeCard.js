import React from 'react'
import "../../styles/styles.css"
function BoxOfficeCard() {
  return (
    <div className='bocard'>
      <div className='sno'>1</div>
      <div className='bovl'></div>
      <div className='cardWrapper'>
        <div className='svgwrapper'>
            <div class="ipc-watchlist-ribbon ipc-focusable ipc-watchlist-ribbon--m ipc-watchlist-ribbon--baseAlt sc-4007e48d-2 afeTZ" aria-label="add to watchlist" role="button" tabindex="0">
                <svg class="ipc-watchlist-ribbon__bg" width="70px" height="55px" fill="#504c4c7c" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
                    <polygon class="ipc-watchlist-ribbon__bg-ribbon" fill="#000000" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                    <polygon class="ipc-watchlist-ribbon__bg-hover" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                    <polygon class="ipc-watchlist-ribbon__bg-shadow" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon>
                </svg>
            <div class="ipc-watchlist-ribbon__icon" role="presentation" style={{marginTop:"-60%"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="ipc-icon ipc-icon--add ipc-icon--inline" viewBox="0 0 24 24" fill="white" role="presentation">
                    <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                </svg>
            </div>
        </div>
        </div>
        <div className='botitlewrapper'>
            <p className='bomovietitle'>Knock at the Cabin</p>
            <p className='movieprice'>$14M</p>
        </div>
        <a class="ipc-icon-link boxOffice-showtimes-link ipc-icon-link--baseAlt ipc-icon-link--onAccent2" title="Knock at the Cabinshowtimes link" role="button" tabindex="0" aria-label="Knock at the Cabinshowtimes link" aria-disabled="false" href="/showtimes/title/tt15679400/?ref_=hm_cht_1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--ticket" id="iconContext-ticket" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                <path d="M19.678 6.95l1.414 1.414a1 1 0 0 1 0 1.414L9.778 21.092a1 1 0 0 1-1.414 0L6.95 19.678a2 2 0 1 0-2.829-2.829l-1.414-1.414a1 1 0 0 1 0-1.414L14.021 2.707a1 1 0 0 1 1.414 0l1.414 1.414a2 2 0 1 0 2.829 2.829z"></path>
            </svg>
        </a>
      </div>
    </div>
  )
}

export default BoxOfficeCard
