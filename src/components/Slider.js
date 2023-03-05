import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import WatchCard from "./cards/WatchCard";
// import { SliderData } from "./SliderData";
// import { ContentSliderData } from "./ContentSliderData";
import "../styles/styles.css"
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import image2 from "../assests/smallimg.jpg"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
} 
const items=[
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
    {
      image:"../../assests/smallimg.jpg",
      title:"What th",
      rating:"9.5"
    }
  ]
function ImageSlider() {
  let settings = {
    nextArrow:     <button><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-pager-icon" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg></button>,
    prevArrow: <button><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-pager-icon" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg></button>,
  };
  return (
      <Slide {...settings} style={{marginTop:"-10%",width:"80%"}}>
    <div className="slider">
      <div className='slide-container' style={{backgroundColor:"black",width:"80%"}}>
          <div className='each-silde-effect featuredcarousel' s>
                {
                  items.map((card,i)=>(
                    <WatchCard image={image2} title={card.title} rating={card.rating}/>
                  ))
                }
          </div>
  </div>
      </div>
      </Slide>

  // <div className='watchcarousl' style={{marginLeft:"-2%",backgroundColor:"black"}}>
  //     <div className='slide-container'>
  //         <Carousel {...settings} cols={6} rows={1} gap={10} loop showArrows={false} 
  //         >
  //               {
  //                   movies.map((card,index)=>(
  //                   <Carousel.Item>
  //                       <WatchCard image={image2} title={card.title} rating={card.rating}/>
  //                   </Carousel.Item>
  //                       )
  //                       )
  //                   }
  //         </Carousel>
  //         <Slide {...settings}  style={{marginTop:"-10%",width:"80%"}}>
  //             <div className='each-silde-effect featuredcarousel'>
  //               {
  //                 items.map((card,i)=>(
  //                   <WatchCard image={image2} title={card.title} rating={card.rating}/>
  //                   ))
  //                 }
  //               </div>
  //         </Slide>
  //     </div>

  //     </div>
  );
}

export default ImageSlider;
