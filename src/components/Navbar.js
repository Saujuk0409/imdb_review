import React, { useState } from "react";
import "../styles/styles.css";
import image1 from "../assests/IMDB_Logo_2016.svg.png";
import Menupage from "./Menupage";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import image2 from "../assests/imdbPro.png"
import Signinbtn from "./Signinbtn";

function Navbar() {
  const [isShown, setIsshown] = useState(false);

  //   const handleclick = (e) => {
  //       e.preventDefault();
  //       setIsshown=(true);
  //       console.log("CLicked")
  //   }

  return (
    <>
      <div className="navbar">
        <div className="navbarcontents" >
        <img className="img1" src={image1}></img>
        <div className="MenuToggleBtn" onclick="event.target.requestFullscreen()"  >
          <button onClick={() => { setIsshown(true); }} className="menubtn" style={{ color: "white", padding: "20px" , height:"40px", width:"110px",fontSize:"20px"}}>
          <MenuIcon style={{ color: "white", paddingRight: "3%",fontSize:"3rem"}} />
            Menu
          </button>
          <Menupage open={isShown} onClose={() => setIsshown(false)}></Menupage>
        </div>
        <SearchBar/>
        <button className="imdbpro">
            <img className="img2" src={image2} alt="imdbpro"></img>
        </button>
        <div className="vl"></div>
        <div className="watchlist">
        <svg width="30" height="31" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--watchlist ipc-btn__icon ipc-btn__icon--pre" id="iconContext-watchlist" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z" fill="currentColor"></path>
        <path d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z" fill="white"></path>
        </svg>
        Watchlist
        </div>
        <Signinbtn/>
        </div>
      </div>

      <div className="mqnavbar">
        <div className="navbarcontents" >
        <div className="MenuToggleBtn" onclick="event.target.requestFullscreen()"  >
          <button onClick={() => { setIsshown(true); }} className="menubtn">
            <MenuIcon style={{ color: "white", marginLeft: "10%",fontSize:"6rem"}} />
          </button>
          <Menupage open={isShown} onClose={() => setIsshown(false)}></Menupage>
        </div>
        <img className="img1" src={image1}></img>
        {/* <SearchBar/> */}
        <Signinbtn/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
{/* {isShown? <Menupage/>:""} */}
