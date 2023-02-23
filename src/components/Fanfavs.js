import React from 'react'
import  '../styles/styles.css'
import { useState ,useEffect } from 'react'
import image2 from "../assests/featuredimg.jpg"
import FeatuedCard from './cards/FeatuedCard'
import Carousel from 'better-react-carousel'
import WatchCard from './cards/WatchCard'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from 'axios'

// const movies = [
//   {
//     image:"../../assests/smallimg.jpg",
//     title:"What the hell",
//     rating:"7.5"
//   },
//   {
//     image:"../../assests/smallimg.jpg",
//     title:"What the",
//     rating:"8.0"
//   },
//   {
//     image:"../../assests/smallimg.jpg",
//     title:"What th",
//     rating:"9.5"
//   },
//   {
//     image:"../../assests/smallimg.jpg",
//     title:"What ",
//     rating:"9.8"
//   },
//   {
//     image:"../../assests/smallimg.jpg",
//     title:"What th",
//     rating:"9.5"
//   },
//   {
//     image:"../../assests/smallimg.jpg",
//     title:"What th",
//     rating:"9.5"
//   },
// ]
function Featured() {
    const [current, setCurrent] = useState(0);
    // const length = movies.length;
  
    // function next() {
    //   setCurrent(current === length - 1 ? 0 : current + 1);
    // }
  
    // function prev() {
    //   setCurrent(current === 0 ? length - 1 : current - 1);
    // }

    const [movies,setMovies]=useState([]);
  useEffect(()=>{
    console.log("environement variable",process.env.REACT_APP_IP);
    axios
    .get(`${process.env.REACT_APP_IP}/imdbapi/fanfavorites`)
    .then(function(resp){
        console.log("movie data of fanfavs",resp.data);
        const {data}=resp.data;
        console.log("destructured data of fafavs",data.movies)
        if(data){
          setMovies(data.movies)
          console.log("fanfavs data is",movies);
        }
        return(resp.data);
      }) ;
  },[])
  let settings = {
    nextArrow: (
      <button className="nextarrow" style={{ paddingLeft: "2%",backgroundColor:"rgba(0, 0, 0, 0.553)",marginTop:"-5%"}}>
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
      <button className="prevarrow" style={{ paddingLeft: "2%",backgroundColor:"rgba(0, 0, 0, 0.553)",marginTop:"-5%" }}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-left-inline ipc-icon--inline ipc-pager-icon" id="iconContext-chevron-left-inline" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg>
      </button>
    ),
  };  
  return (
    <>
    <div className='watchcarousl'>
      {/* <h2 style={{color:"#F5C518"}}>Featured Today</h2> */}
      <div className='toppicks'>
            <div className='vl' style={{borderLeft:"2px solid #F5C518"}}></div>
            <h3>Fan Favorites</h3>
            <div className="wcarrows" style={{paddingLeft:"1%",paddingTop:"0.5%"}}>
                    <div class="wcleftarrow" role="presentation">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="current color" role="presentation">
                        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z" fill='#F5C518'></path>
                    </svg>
                    </div>
            </div>
        </div>
        <p style={{float:"left",color:"white",marginLeft:"-78%",marginTop:"1%",fontSize:"2.1rem",color:"grey",fontWeight:"400"}}>This week's top TV and movies</p>
    </div>
    <div className="scroller" style={{width:"70%",marginLeft:"14%",marginTop:"3%"}}>
    <Slide {...settings} slidesToScroll={6} slidesToShow={6} style={{height:"100vh"}}>
        {
            movies && movies.map((card,index)=>(
                      <WatchCard id={card.id} image={card.image} desc={card.title} cat={card.type}/>
                      )
                      )
                  }
    </Slide>
    </div>
    </>
  )
}                                                                                         

export default Featured


{/* <div className='watchcarousl'>
        <div className='toppicks'>
            <div className='vl' style={{borderLeft:"2px solid #F5C518"}}></div>
            <h3>Fan Favorites</h3>
            <div className="wcarrows" style={{paddingLeft:"1%",paddingTop:"0.5%"}}>
                    <div class="wcleftarrow" role="presentation">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="current color" role="presentation">
                        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z" fill='#F5C518'></path>
                    </svg>
                    </div>
            </div>
        </div>
        <p style={{float:"left",color:"white",marginLeft:"-78%",marginTop:"1%",fontSize:"2.1rem",color:"grey",fontWeight:"400"}}>This week's top TV and movies</p>
        <div className='wlcardcontainer'>
          <div className='SliderWrapper'>
          // {/* <Carousel cols={2} rows={1} gap={10} loop showArrows={true} > */}
          //       {
          //         items.map((item,i)=>(
          //           // <Carousel.Item>
          //           < WatchCard key={i} title={item.title} image={item.image} rating={item.rating}/>
          //           // </Carousel.Item>
          //         ))
          //       }
          // {/* </Carousel> */}
          // </div>
          {/* <button className="goToPrev" onClick={goToPrevSlide}>
        <FaAngleLeft />
      </button>
      <button className="goToNext" onClick={goToNextSlide}>
        <FaAngleRight />
      </button> */}
        // </div>
    // </div> 