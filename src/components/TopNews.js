import React from 'react'
import image2 from "../assests/comingsoon.jpg"
import Carousel from 'better-react-carousel'
import TopNewsCard from './cards/TopNewsCard'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState , useEffect} from 'react'
import axios from 'axios'


const movies = [
    {
      image:"../../assests/smallimg.jpg",
      title:"What the hell",
      rating:"7.5"
    },
    {
      image:"../../assests/smallimg.jpg",
      title:"What the",
      rating:"8.0"
    },
    {
      image:"../../assests/smallimg.jpg",
      title:"What th",
      rating:"9.5"
    },
    {
      image:"../../assests/smallimg.jpg",
      title:"What ",
      rating:"9.8"
    },
    {
      image:"../../assests/smallimg.jpg",
      title:"What th",
      rating:"9.5"
    },
    {
      image:"../../assests/smallimg.jpg",
      title:"What th",
      rating:"9.5"
    },
  ]


function TopNews() {
  // const [movies,setMovies]=useState();
  //     useEffect(()=>{
  //     axios
  //     .get(`${process.env.REACT_APP_IP}/imdbapi/news`)
  //     .then(function(resp){
  //         console.log("news data",resp.data);
  //         const {data}=resp.data;
  //         console.log("destructured data for news is",{data})
  //         if(data){
  //           setMovies(data)
  //           console.log("news data is",movies);
  //         }
  //         return(resp.data);
  //       }) ;
  //   },[])

  let settings = {
    nextArrow: (
      <button className="nextarrow" style={{ paddingLeft: "2%",backgroundColor:"rgba(0, 0, 0, 0.553)",marginTop:"-2%"}}>
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
      <button className="prevarrow" style={{ paddingLeft: "2%",backgroundColor:"rgba(0, 0, 0, 0.553)",marginTop:"-2%" }}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-left-inline ipc-icon--inline ipc-pager-icon" id="iconContext-chevron-left-inline" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg>
      </button>
    ),
  };  
  return (
    <>
    <div className='comingsoon' style={{marginTop:"2%"}}>
    <div className='topicks-div'>
        <div className='toppicks'>
            <div className='vl' style={{borderLeft:"2px solid #F5C518"}}></div>
            <h3>Top News</h3>
            <div className="wcarrows" style={{paddingLeft:"1%",paddingTop:"1%"}}>
              <div class="wcleftarrow" role="presentation">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="current color" role="presentation">
                  <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z" fill='white'></path>
                </svg>
              </div>
            </div>
        </div>
        <div className='sub-head'>
          <p style={{paddingTop:"1%",textAlign:"left",fontSize:"2.1rem",color:"grey",fontWeight:"400",marginLeft:"0.5%"}}>This week's top TV and movies</p>
        </div>
      </div>  
        {/* <div className='wlcardcontainer' style={{marginLeft:"-2%"}}> */}
      {/* <div className='SliderWrapper'>
          <Carousel cols={3} rows={1} gap={10} loop showArrows={false} 
          >
                {
                    movies.map((card,index)=>(
                    <Carousel.Item>
                        <TopNewsCard image={image2} title={card.title} rating={card.rating}/>
                    </Carousel.Item>
                        )
                        )
                    }
          </Carousel>
      </div> */}

      {/* </div> */}
    </div>
    <div className="scroller" style={{paddingTop:"-2%"}}>
    <Slide {...settings} slidesToScroll={3} slidesToShow={3} style={{height:"100vh"}}>
        {
            movies && movies.map((card,index)=>(
              <TopNewsCard image={card.picId} title={card.title} rating={card.rating}/>
                      )
                      )
                  }
    </Slide>
    </div>
      <div className='btns' style={{marginLeft:"13%"}}>
      <button className='tnbtn'>Top News</button>
      <button className='tnbtn'>Movie News</button>
      <button className='tnbtn'>Tv News</button>
      <button className='tnbtn'>Celebrity News</button>
      </div>
    </>
  )
}

export default TopNews
// style={{width:"70%",marginLeft:"11%",marginTop:"0%"}}