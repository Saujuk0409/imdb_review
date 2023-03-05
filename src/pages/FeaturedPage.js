import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../assests/featuredpgbanner.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import WatchCard from "../components/cards/WatchCard";
import img2 from "../assests/fpimg.jpg";
import {useNavigate} from "react-router-dom";

const images = [
  {
    id: 1,
    image: "../assests/smallimg.jpg",
    desc: "qwertyuio asdfghjkl qwertyuio zxcvbnm yhn ertghjk okjh",
  },
  {
    id: 1,
    image: "../assests/smallimg.jpg",
    desc: "qwertyuio asdfghjkl qwertyuio zxcvbnm yhn ertghjk okjh",
  },
  {
    id: 1,
    image: "../assests/smallimg.jpg",
    desc: "qwertyuio asdfghjkl qwertyuio zxcvbnm yhn ertghjk okjh",
  },
  {
    id: 1,
    image: "../assests/smallimg.jpg",
    desc: "qwertyuio asdfghjkl qwertyuio zxcvbnm yhn ertghjk okjh",
  },
];
function FeaturedPage() {
  const naviagte=useNavigate();
  const[open,setOpen]=useState(true);

  let settings = {
    nextArrow: (
      <button className="nextarrow" style={{ paddingLeft: "0.5%" }}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-pager-icon"
          id="iconContext-chevron-right-inline"
          viewBox="0 0 24 24"
          fill="white"
          role="presentation"
        >
          <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
        </svg>
      </button>
    ),
    prevArrow: (
      <button className="nextarrow" style={{ paddingLeft: "0.5%" }}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-pager-icon"
          id="iconContext-chevron-right-inline"
          viewBox="0 0 24 24"
          fill="white"
          role="presentation"
        >
          <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
        </svg>
      </button>
    ),
  };
  const handleClick=()=>{
    naviagte('/');
  }
  return (
    <>
      <div className="featuredtodaypg">
        <div className="featuredtodaynavbar">
          <div
            className="closeToggleBtn"
            onclick="event.target.requestFullscreen()"
          >
            <button
              className="menubtn"
              onClick={handleClick}
              style={{
                color: "white",
                padding: "20px",
                height: "40px",
                width: "110px",
                fontSize: "20px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class="ipc-icon ipc-icon--clear ipc-btn__icon ipc-btn__icon--pre"
                id="iconContext-clear"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
              </svg>
              close
            </button>
          </div>
          <img src={img1} alt=""></img>
          <div className="sharelinks">
            <p style={{ color: "#F5C518" }}>9 of 20</p>
            <a
              data-testid="mv-gallery-button"
              class="ipc-icon-link ipc-icon-link--baseAlt ipc-icon-link--onBase"
              title="gallery"
              role="button"
              tabindex="0"
              aria-label="gallery"
              aria-disabled="false"
              href="/list/ls562245100/?ref_=ls_mv_sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class="ipc-icon ipc-icon--grid-view"
                id="iconContext-grid-view"
                viewBox="0 0 24 24"
                fill="white"
                role="presentation"
              >
                <path d="M4.8 14h2.4c.44 0 .8-.3.8-.667v-2.666C8 10.3 7.64 10 7.2 10H4.8c-.44 0-.8.3-.8.667v2.666c0 .367.36.667.8.667zm0-6h2.4c.44 0 .8-.3.8-.667V4.667C8 4.3 7.64 4 7.2 4H4.8c-.44 0-.8.3-.8.667v2.666C4 7.7 4.36 8 4.8 8zm0 12h2.4c.44 0 .8-.3.8-.667v-2.666C8 16.3 7.64 16 7.2 16H4.8c-.44 0-.8.3-.8.667v2.666c0 .367.36.667.8.667zm6 0h2.4c.44 0 .8-.3.8-.667v-2.666c0-.367-.36-.667-.8-.667h-2.4c-.44 0-.8.3-.8.667v2.666c0 .367.36.667.8.667zm6 0h2.4c.44 0 .8-.3.8-.667v-2.666c0-.367-.36-.667-.8-.667h-2.4c-.44 0-.8.3-.8.667v2.666c0 .367.36.667.8.667zm-6-6h2.4c.44 0 .8-.3.8-.667v-2.666c0-.367-.36-.667-.8-.667h-2.4c-.44 0-.8.3-.8.667v2.666c0 .367.36.667.8.667zm0-6h2.4c.44 0 .8-.3.8-.667V4.667C14 4.3 13.64 4 13.2 4h-2.4c-.44 0-.8.3-.8.667v2.666c0 .367.36.667.8.667zm5.2 2.667v2.666c0 .367.36.667.8.667h2.4c.44 0 .8-.3.8-.667v-2.666c0-.367-.36-.667-.8-.667h-2.4c-.44 0-.8.3-.8.667zm0-6v2.666c0 .367.36.667.8.667h2.4c.44 0 .8-.3.8-.667V4.667C20 4.3 19.64 4 19.2 4h-2.4c-.44 0-.8.3-.8.667z"></path>
              </svg>
            </a>
            <button
              className="ipc-icon-button sharemenu-iconbutton ipc-icon-button--baseAlt ipc-icon-button--onBase"
              title="share on social media"
              type="button"
              tabindex="0"
              aria-label="share on social media"
              aria-disabled="false"
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class="ipc-icon ipc-icon--share"
                id="iconContext-share"
                viewBox="0 0 24 24"
                fill="white"
                role="presentation"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Slide {...settings} slidesToScroll={1} slidesToShow={1}>
            {images.map((card, i) => (
              <div className="slideimage">
                <img src={img2} alt="" style={{maxWidth:"auto",height:"91.3vh"}}></img>
                {!open && (
                  <button className="infobtn" title="Open" role="button" tabindex="0" aria-label="Open" aria-disabled="false" onClick={()=>{setOpen(true)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--info" id="iconContext-info" viewBox="0 0 24 24" fill="white" role="presentation">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                  </svg>
                 </button>
                )}     
                 {open && (
                <div className="featuredinfo">
                    <div className="fpcolumn1">
                        <p className="months">February picks: The movies and TV you can't miss</p>
                        <p className="mnameseason">"<a href="">You</a>" | Season 4, Part 1 Premieres on Netflix Thursday, Feb. 9</p>
                        <p className="genre">Genre: Crime, Drama</p>
                        <p className="mdesp">After successfully faking his death to escape a homicidal marriage, Joe Goldberg (Penn Badgley) is headed to London for Season 4 of this hit Netflix series. Privileged friends, a new "love interest," and a mysterious serial killer are all in the mix for the perpetually infatuated antihero. We’re excited to see Lukas Gage ("Euphoria", "The White Lotus") join the cast.</p>
                    </div>
                    <div className="fpvl"></div>
                    <div className="fpcolumn2">
                      <p className="people">People <a href=""> Penn Badgley</a></p>
                      <p className="people">Titles <a href="">You</a></p>
                      <p className="copyryt">© 2022 Netflix, Inc.</p>
                    </div>
                <button className="closebtn" title="Close" role="button" tabindex="0" aria-label="Close" aria-disabled="false" onClick={()=>setOpen(false)} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--clear" id="iconContext-clear" viewBox="0 0 24 24" fill="white" role="presentation">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
                  </svg>
                </button>
                </div>
                 )}
              </div>
            ))}
        </Slide>
      </div>
    </>
  );
}

export default FeaturedPage;
{
  /* <Slide {...settings} style={{marginTop:"-10%",width:"80%"}}>
{images.map((card,i)=>(
  <img src={card.image}></img>
  ))}
</Slide> */
}
{
  /* <Slide {...settings} style={{marginTop:"-10%",width:"80%"}}>
  <div className='picdiv'>
    {images.map((card,i)=>(
  <div className='cardinfo'>
    <img src={card.image}></img>
    <p>{card.desp}</p>
  </div>

))}
</div>
</Slide> */
}
