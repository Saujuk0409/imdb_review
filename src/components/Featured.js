import React from 'react'
import  '../styles/styles.css'
import { useState , useEffect} from 'react'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image2 from "../assests/featuredimg.jpg"
import FeatuedCard from './cards/FeatuedCard'
import Carousel from 'better-react-carousel'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
  useNavigate,
  createSearchParams,
} from 'react-router-dom';

// const movies = [
//     { id:1,
//       category:"list",
//       desc:"we all want somthing good in life",
//       url:'https://www.youtube.com/watch?v=YSNsZQf_CPM'
//     },
//     {    id:2,
//         category:"phots",
//         desc:"we all want somthing good in life",
//         url:'https://www.youtube.com/watch?v=YSNsZQf_CPM'
//     },
//     { id:3,
//       category:"list",
//       desc:"we all want somthing good in life",
//       url:'https://www.youtube.com/watch?v=YSNsZQf_CPM'
//     },
//     {  id:4,
//       category:"list",
//       desc:"we all want somthing good in life",
//       url:'https://www.youtube.com/watch?v=YSNsZQf_CPM'
//     },
//     { id:5,
//       category:"list",
//       desc:"we all want somthing good in life",
//       url:'https://www.youtube.com/watch?v=YSNsZQf_CPM'
//     }
// ]

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  // onChange: (oldIndex, newIndex) => {
  //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  // }

}
let settings = {
  leftArrow:     <button><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-pager-icon" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg></button>,
  rightArrow: <button><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-pager-icon" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg></button>,
};
function Featured() {
  const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    // const length = movies.length;
  
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
    // console.log("environement variable",process.env.REACT_APP_IP);
    axios
    .get(`${process.env.REACT_APP_IP}/imdbapi/featuredtoday`)
    .then(function(resp){
        console.log("movie data",resp.data);
        const {data}=resp.data;
        console.log("destructured data",{data})
        if(data){
          setMovies(data.coverpic)
          console.log("featured today data is",movies);
        }
        return(resp.data);
      }) ;
  },[])
    // function next() {
    //   setCurrent(current === length - 1 ? 0 : current + 1);
    // }
  
    // function prev() {
    //   setCurrent(current === 0 ? length - 1 : current - 1);
    // }
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
      <div className='featureddiv' style={{width:"90%",alignItems:"center"}}>
    <h1 style={{color:"#F5C518"}}>Featured Today</h1>
    <div className='featuredcarousel'>
        {/* <Carousel cols={2} rows={1} gap={10} loop showArrows={false} style={{width:"70%"}}>
              {
                 movies && movies.map((card,index)=>(
                  <Carousel.Item>Movies.map
                      <FeatuedCard id={card.id} image={card.picture.link} desc={card.title} cat={card.type} />
                      </Carousel.Item>
                      )
                      )
                  }
        </Carousel> */}

    </div>
    <div className="scroller" style={{width:"60%",marginLeft:"14%",marginTop:"3%"}}>
      <Slide {...settings} slidesToScroll={2} slidesToShow={2} style={{height:"100vh"}}>
        {
            movies && movies.map((card,index)=>(
                      <FeatuedCard id={card.id} image={card.picture.link} desc={card.title} cat={card.type} open={isOpen} notOpen={()=>setIsOpen(false)}/>
                      )
                      )
                  }
      </Slide>
    </div>
  </div>
    </>
    
  )
}                                                                                         

export default Featured

  {/* <button
  className="gallery_next"
  onClick={next}
  type="button"
  >
  <i className="fa fa-chevron-right" />
  </button> */}
        {/* <img src={image2} alt=""/> */}
    {/* <Carousel.Item>
    <img src={image2} alt=""/>
    </Carousel.Item>
    <Carousel.Item>
    <img src={image2} alt=""/>
    </Carousel.Item> */}