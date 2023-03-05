import React from 'react'
import  '../styles/styles.css'
import image2 from "../assests/featuredimg.jpg"
import FeatuedCard from './cards/FeatuedCard'
import Carousel from 'better-react-carousel'
import WatchCard from './cards/WatchCard'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ExclusivevidCard from './cards/ExclusivevidCard'
import { useState , useEffect} from 'react'
import axios from 'axios'

const movies = [
    { category:"list",
      desc:"we all want somthing good in life"
    },
    {
        category:"phots",
        desc:"we all want somthing good in life"
    },
    { category:"list",
      desc:"we all want somthing good in life"
    },
    { category:"list",
      desc:"we all want somthing good in life"
    },
    { category:"list",
      desc:"we all want somthing good in life"
    }
]
function Exclusivediv() {

  const [movies,setMovies]=useState();
  useEffect(()=>{
    axios
    .get(`${process.env.REACT_APP_IP}/imdbapi/exclusive`)
    .then(function(resp){
        console.log("Exclusive data",resp.data);
        const {data}=resp.data;
        console.log("destructured data for exclusive",{data})
        if(data){
          setMovies(data);
          // console.log("In theaters data is",movies);
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
      <div className='watchcarousl' style={{paddingTop:"2%"}}>
      <h1 style={{color:"#F5C518",left:"0%",marginLeft:"-80%"}}>Exclusive Videoes</h1>
      <div className='toppicks' style={{marginTop:"2.6%"}}>
            <div className='vl' style={{borderLeft:"5px solid #F5C518"}}></div>
            <h3>IMDb Originals</h3>
            <div className="wcarrows" style={{paddingLeft:"1%",paddingTop:"0.5%"}}>
                    <div class="wcleftarrow" role="presentation">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="current color" role="presentation">
                        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z" fill='#F5C518'></path>
                    </svg>
                    </div>
            </div>
      </div>
      <p style={{float:"left",color:"white",marginLeft:"-85%",marginTop:"0%",fontSize:"2.3rem",color:"grey",fontWeight:"400"}}>Somtimes near you</p>
    </div>
      {/* <div className='featuredcarousel' style={{width:"75%"}}>
          <Carousel cols={3} rows={1} gap={10} loop showArrows={false} style={{width:"100%"}}>
                {
                    movies.map((card,index)=>(
                    <Carousel.Item>
                        <ExclusivevidCard image={image2} desc={card.desc}/>
                    </Carousel.Item>
                        )
                        )
                    }
          </Carousel>

      </div> */}
      <div className="scroller" style={{width:"70%",marginLeft:"12%",marginTop:"1%"}}>
    <Slide {...settings} slidesToScroll={3} slidesToShow={3} style={{height:"100vh"}}>
        {
            movies && movies.map((card,index)=>(
              <ExclusivevidCard image={card.poster} desc={card.title}/>
                      )
                      )
                  }
    </Slide>
    </div>
    {/* </div> */}
    {/* <div className="scroller" style={{width:"100%",marginTop:"3%"}}>
    <Slide {...settings} slidesToScroll={6} slidesToShow={6} style={{height:"100vh"}}>
        {
            movies && movies.map((card,index)=>(
              <ExclusivevidCard image={image2} desc={card.desc}/>
                      )
                      )
                  }
    </Slide> */}
    {/* </div> */}
    </>
  )
}                                                                                         

export default Exclusivediv

