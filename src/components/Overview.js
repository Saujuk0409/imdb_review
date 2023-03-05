import { listClasses } from "@mui/material";
import BookmarkBorderSharpIcon from "@mui/icons-material/BookmarkBorderSharp";
import React from "react";
import { useState, useEffect } from "react";
import "../styles/styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assests/smallimg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/styles.css";
const images = [
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
];

function Overview() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  const [data, setData] = useState([]);
  function fetchData() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&include_adult=false"
      )
      .then((res) => {
        setData(res.data.results);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const width = window.innerWidth <= 1125;
  return (
    <div className="OverviewSection">
      <div className="ovcolumn1">
        {/* <Carousel useKeyboardArrows={true}>
            {images.map((URL,index) => (
                <div className='slide'>
                    <img src={URL} key={index} alt=""/>
                </div>
            ))}
        </Carousel> */}
        {/* <div className='Slides'>
            {images.map((URL,index) => {
                return(
                    <div className='slide'>
                    {index === current && <img src={URL} key={index} alt=""/>}
                    <div className='info'>
                        <h1>Movie name</h1>
                        <p>Movie title</p>
                        <p>3:05</p>
                    </div>
                </div>
                )
            })}
        </div>
        <div className='navigation'>
           <div onClick={prevSlide}><span className="material-icons"></span></div>
            <div onClick={nextSlide}></div>
        </div>
      </div>
      <div className='ovcolumn2'>
            <h3 style={{color:"yellow"}}>up next</h3>
            <div className='movierow1'>

            </div> */}
        <Carousel
          className="carousel"
          // showThumbs={false}
          autoPlay={false}
          transitionTime={width ? 100 : 1000}
          infiniteLoop={true}
          showStatus={false}
          stopOnHover={false}
          useKeyboardArrows
          showArrows={true}
          showIndicators={false}
        >
          {data?.map((movie, index) => {
            return (
              <div className="home-backdrop" key={index}>
                <Link to={`/movie/${movie?.id}`}>
                  <div className="overlay">
                    <div className="movieinfo" style={{ marginLeft: "5%" }}>
                      {width ? (
                        <p className="overview">
                          {movie?.overview.slice(0, 118) + "..."}
                        </p>
                      ) : (
                        <p className="overview">
                          {movie?.overview.slice(0, 218) + "..."}
                        </p>
                      )}
                      <h1 style={{bottom:"5%"}}>{movie?.title}</h1>
                      {/* <p>description</p> */}
                      
                    </div>
                    <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--play-circle-outline-large-inline sc-84f23e63-5 bhPUbc slide-caption-play-icon" id="iconContext-play-circle-outline-large-inline" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg>
                  </div>
                </Link>
                {width === false ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                    style={{background:"linear-gradient(transparent 0%, transparent 65%, rgba(0, 0, 0, 0.7) 77%, rgb(0, 0, 0) 85%, rgb(0, 0, 0) 100%);"}}
                  />
                ) : (
                  <img
                    className="posterimg"
                    src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    alt={movie?.title}
                    style={{background:"linear-gradient(transparent 0%, transparent 65%, rgba(0, 0, 0, 0.7) 77%, rgb(0, 0, 0) 85%, rgb(0, 0, 0) 100%);"}}
                  />
                )}
                {/* style={{marginLeft:"-63%"}} */}
                {/* <div className="arrows">
                    <div class="leftarrow" role="presentation">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-left-inline ipc-icon--inline ipc-pager-icon" id="iconContext-chevron-left-inline" viewBox="0 0 24 24" fill="white" role="presentation">
                            <path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
                    </svg>
                </div>
            </div> */}
                <div className="overlappingCard">
                    <img src={image1} alt="moviecard" ></img>
                  <div className="watchlistsvg">
                    <svg
                      class="ipc-watchlist-ribbon__bg"
                      width="80%"
                      height="4.5vh"
                      viewBox="0 0 24 34"
                      fill="rgb(122, 118, 118)"
                      xmlns="http://www.w3.org/2000/svg"
                      role="presentation"
                      style={{ position: "relative", marginLeft: "-80%" }}
                    >
                      <polygon
                        class="ipc-watchlist-ribbon__bg-ribbon"
                        fill="white"
                        points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                      ></polygon>
                      <polygon
                        class="ipc-watchlist-ribbon__bg-hover"
                        points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                      ></polygon>
                      <polygon
                        class="ipc-watchlist-ribbon__bg-shadow"
                        points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
                      ></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      class="ipc-icon ipc-icon--add ipc-icon--inline"
                      viewBox="0 0 24 24"
                      fill="white"
                      role="presentation"
                      style={{
                        position: "absolute",
                        marginLeft: "-48%",
                        marginTop: "5%",
                      }}
                    >
                      <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                    </svg>
                  </div>
                  {/* <BookmarkBorderSharpIcon style={{marginLeft:"75%",fontSize:"2.5rem"}}/> */}
                  
                
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="ovcolumn2">
        <p className="upNext"> up next</p>
        <div className="sideName">
          <img src={image1} alt="moviesidecrd" style={{ backgroundColor: "white" }} />

          <div className="details-ov2">
            <div className="PlaybtnTime" style={{marginLeft:"-70%"}}>
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                class="ipc-icon ipc-icon--play-circle-outline-large-inline ipc-icon--inline sc-d4cb23a2-14 ejjmJF editorial-play-icon"
                id="iconContext-play-circle-outline-large-inline"
                viewBox="0 0 24 24"
                fill="white"
                role="presentation"
              >
                <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
              </svg>
              <span
                className="sc-d4cb23a2-12 jrigMh"
                style={{
                  color: "white",
                  marginLeft: "2%",
                  fontSize: "2rem",
                }}
              >
                2:26
              </span>
            </div>
            <div className="detailsTitle">
              <p clasName="detailsdesc">
                Adam Sandler and Jennifer Aniston Are Back
              </p>
              {/* <br /> */}
              <p style={{ color: "rgb(201, 196, 196)", fontSize: "1.5rem" }}>Watch the 'Murder Mystery 2' Trailer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
