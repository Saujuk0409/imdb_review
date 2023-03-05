import React from 'react'
import "../../styles/styles.css"
import img1 from "../../assests/smallimg.jpg"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveFromWatchlistAction,addWatchlist } from '../../store/Actions'
import Watchlistplus from '../svgs/Watchlistplus';
import Watchlistcrt from '../svgs/Watchlistcrt';
import { useNavigate } from 'react-router-dom';

function MoreLikeThisCard(props) {
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
     <div className='moviescard' onClick={moviesList} style={{backgroundColor:"white",boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",height:"auto"}}>
          <button style={{position:"absolute",marginTop:"-1.5%",marginLeft:"-2.6%"}}
          >
             <Watchlistplus/>
             {/* {Watch?<Watchlistcrt/> : <Watchlistplus/>} */}
       </button>
         <img src={img1} alt="watchcardimage"/>
         
         <div className='wldetails' >
             <span className="star">
                 <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--star-inline" id="iconContext-star-inline" viewBox="0 0 24 24" fill="#F5C518" role="presentation">
                     <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                 </svg>
             </span>
             <p style={{display:"block",color:"grey",fontSize:"1.8rem",marginRight:"5%",marginTop:"9%"}}>{props.rating}</p>
             <button className="starbtn">
                 <span className="starsvg">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="ipc-icon ipc-icon--star-border-inline" id="iconContext-star-border-inline" viewBox="0 0 24 24" fill="blue" role="presentation">
                         <path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path>
                     </svg>
                 </span>
             </button>
         </div>
         <a href='' className='movietitle' style={{color:"black"}}><p style={{color:"black"}}>{props.title}</p></a>
         <div className='posteractions' >
         <button className="wlbtn" style={{backgroundColor:"rgb(235, 233, 233)",display:"flex",padding:"5%",paddingLeft:"10%"}}>
             <div className='wlbtnname' style={{color:"#5799EF",backgroundColor:"transparent"}}>Watch Options</div>
         </button>
         <button className="wlbtn" style={{backgroundColor:"transparent",display:"flex",paddingTop:"2%",marginTop:"4%",right:"0"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--info" id="iconContext-info" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
         </button>
         </div>
     </div>
   )
}

export default MoreLikeThisCard
