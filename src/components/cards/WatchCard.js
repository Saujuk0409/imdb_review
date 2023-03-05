import React, { useState,useEffect } from 'react'
import "../../styles/styles.css"
import img1 from "../../assests/smallimg.jpg"
import { useSelector, useDispatch } from 'react-redux';
import { RemoveFromWatchlistAction,addWatchlist } from '../../store/Actions'
import Watchlistplus from '../svgs/Watchlistplus';
import Watchlistcrt from '../svgs/Watchlistcrt';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function WatchCard(props,{movie}) {

   const navigate= useNavigate();
   const [Watch,setWatch]=useState(false);
  const moviesList = (id) =>
    navigate({
      pathname: '/fanfavs',
      search: `?movieId=${id}`,
    });

    const { watchlist } = useSelector((state) => state.movies);
	const dispatch = useDispatch();
  return (
    <div className='wlcard' onClick={moviesList}>
        
         <div style={{position:"absolute",marginTop:"-1.5%",marginLeft:"-2.6%"}}>
            <div class="ipc-watchlist-ribbon ipc-focusable ipc-watchlist-ribbon--m ipc-watchlist-ribbon--baseAlt ipc-watchlist-ribbon--onImage ipc-poster__watchlist-ribbon poster-card-watchlist-ribbon" aria-label="add to watchlist" role="button" tabindex="0" style={{position:"absolute",marginTop:"-2%"}}>
            {/* <svg class="ipc-watchlist-ribbon__bg" fill="#4845457c" width="40px" height="65px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
                <polygon class="ipc-watchlist-ribbon__bg-ribbon" fill="#504c4c7c" width="40px" height="40px"points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon><polygon class="ipc-watchlist-ribbon__bg-hover" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
            <polygon class="ipc-watchlist-ribbon__bg-shadow" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049" fill='#504c4c7c'></polygon></svg> */}
        <div class="ipc-watchlist-ribbon__icon" role="presentation" style={{marginTop:"-130%"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" class="ipc-icon ipc-icon--add ipc-icon--inline" viewBox="0 0 24 24" fill="white" role="presentation">
                <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
         </div>
            </div>
         </div>
        <img src={props.image} alt="watchcardimage"/>
        
        <div className='wldetails'>
            <span className="star">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--star-inline" id="iconContext-star-inline" viewBox="0 0 24 24" fill="#F5C518" role="presentation">
                    <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                </svg>
            </span>
            <p style={{display:"block",color:"grey",fontSize:"1.8rem",marginRight:"5%",marginTop:"9%"}}>{props.rating}</p>
            <button className="starbtn">
                <span className="starsvg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="ipc-icon ipc-icon--star-border-inline" id="iconContext-star-border-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                        <path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path>
                    </svg>
                </span>
            </button>
        </div>
        <a href='' className='movietitle'><p >{props.title}</p></a>
        <div className='posteractions' >
        <button className="wlbtn" style={{backgroundColor:"rgb(37, 34, 34)",display:"flex"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--add ipc-btn__icon ipc-btn__icon--pre" id="iconContext-add" viewBox="0 0 24 24" fill="#5799ef" role="presentation">
                <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
            <div className='wlbtnname' style={{color:"#5799EF",backgroundColor:"rgb(44, 42, 42)"}}>Watchlist</div>
        </button>
        <button className="wlbtn" style={{backgroundColor:"transparent",display:"flex",paddingTop:"2%",marginTop:"4%"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--play-arrow ipc-btn__icon ipc-btn__icon--pre" id="iconContext-play-arrow" viewBox="0 0 24 24" fill="white" role="presentation">
            <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path></svg>
            <div className='wlbtnname' style={{color:"white",marginBottom:"10%"}}>Trailer</div>
        </button>
        </div>
    </div>
  )
}

export default WatchCard
