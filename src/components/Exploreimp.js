import React, { useEffect, useState } from 'react'
import '../styles/styles.css'
import Carousel from 'better-react-carousel'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image2 from "../assests/featuredimg.jpg"
import WatchCard from '../components/cards/WatchCard'

const movies = [
  {
    image:"../../assests/smallimg.jpg",
    title:"What the hell",
    rating:"7.5",
    type:"primevideo"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What the",
    rating:"8.0",
    type:"primevideo"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What th",
    rating:"9.5",
    type:"primevideo"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What ",
    rating:"9.8",
    type:"netflix"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What th",
    rating:"9.5",
    type:"jiocinema"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What th",
    rating:"9.5",
    type:"netflix"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What the hell",
    rating:"7.5",
    type:"netflix"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What the",
    rating:"8.0",
    type:"netflix"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What th",
    rating:"9.5",
    type:"erosnow"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What ",
    rating:"9.8",
    type:"netflix"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What th",
    rating:"9.5",
    type:"netflix"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What th",
    rating:"9.5",
    type:"netflix"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What the hell",
    rating:"7.5",
    type:"mxplayer"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What the",
    rating:"8.0",
    type:"mxplayer"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What th",
    rating:"9.5",
    type:"hotstar"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What ",
    rating:"9.8",
    type:"voot"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What th",
    rating:"9.5",
    type:"mxplayer"
  },
  {
    image:"../../assests/smallimg.jpg",
    title:"What th",
    rating:"9.5",
    type:"mxplayer"
  },

]

function Exploreimp() {

  const [array,setArray] = useState("null")
  const [filteredarray,setFilteredarray]= useState()

  useEffect(()=>{
    setArray(movies)
    setFilteredarray(movies.filter(e=>e.target==="primevideo"))
  },[])

  const filterdata = (value)=>{
    console.log(value)
      if(value==='primevideo'){
        var a = array.filter(e=>e.type==="primevideo");
        setFilteredarray(a)
      }
      else if(value==='netflix'){
        setFilteredarray(movies.filter(e=>e.type==="netflix"))
      }
      else if(value==='hotstar'){
        setFilteredarray(movies.filter(e=>e.type==="hotstar"))
      }
      else if(value==='mxplayer'){
        setFilteredarray(movies.filter(e=>e.type==="mxplayer"))
      }
      else if(value==='jiocinema'){
        setFilteredarray(movies.filter(e=>e.type==="jiocinema"))
      }
      else if(value==='sonyliv'){
        setFilteredarray(movies.filter(e=>e.type==="sonyliv"))
      }
      else if(value==='erosnow'){
        setFilteredarray(movies.filter(e=>e.type==="erosnow"))
      }
      else{
        setFilteredarray(movies.filter(e=>e.type==="voot"))
      }
  }
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
    <div className="watchcarousl" style={{backgroundColor:"black",paddingTop:"2%"}}>
      <h1 style={{color:"#F5C518"}}>Explore what's streaming</h1>
      <div className='movieoptions'>
        <span  onClick={()=>{filterdata('primevideo')}}>Prime video</span>
        <span onClick={()=>{filterdata('netflix')}}>Netflix</span>
        <span onClick={()=>{filterdata('hotstar')}}>Hotstar</span>
        <span onClick={()=>{filterdata('mxplayer')}}>Mx Player</span>
        <span onClick={()=>{filterdata('jiocinema')}}>Jio Cinema</span>
        <span onClick={()=>{filterdata('sonyliv')}}>SonyLiv</span>
        <span onClick={()=>{filterdata('erosnow')}}>ErosNow</span>
        <span onClick={()=>{filterdata('voot')}}>VOOT</span>
      </div>
      {/* <div className='wlcardcontainer' style={{marginLeft:"-2%"}}>
      <div className='SliderWrapper'>
        
          <Carousel cols={6} rows={1} gap={10} loop showArrows={false} style={{width:"70%"}}>
                {
                    filteredarray && filteredarray.map((card,index)=>(
                    <Carousel.Item>
                        <WatchCard image={image2} title={card.title} rating={card.rating}/>
                    </Carousel.Item>
                        )
                        )
                    }
          </Carousel>
          </div>

      </div> */}
    </div>
    {/* <div className="scroller" style={{width:"70%",marginLeft:"14%",marginTop:"3%"}}> */}
    <Slide {...settings} slidesToScroll={6} slidesToShow={6} style={{height:"100vh"}}>
        {
             filteredarray && filteredarray.map((card,index)=>(
                  <WatchCard image={image2} title={card.title} rating={card.rating}/>
                  )
                  )
                  }
    </Slide>
  {/* </div> */}
    </>
  )
}

export default Exploreimp
