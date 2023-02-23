import React , {useEffect} from 'react'
import  '../../styles/styles.css'
import { useState } from 'react'
import image2 from "../../assests/smallimg.jpg"
// import FeatuedCard from './cards/FeatuedCard'
import Carousel from 'better-react-carousel'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import WatchCard from './WatchCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/Actions';
// import {Slide} from 'react-slideshow-image'
// import 'react-slideshow-image/dist/styles.css'

const moviess = [
  {
    id:1,
    image:"../../assests/smallimg.jpg",
    title:"What the hell",
    rating:"7.5"
  },
  {
    id:2,
    image:"../../assests/smallimg.jpg",
    title:"What the",
    rating:"8.0"
  },
  {
    id:3,
    image:"../../assests/smallimg.jpg",
    title:"What th",
    rating:"9.5"
  },
  {
    id:4,
    image:"../../assests/smallimg.jpg",
    title:"What ",
    rating:"9.8"
  },
  {
    id:5,
    image:"../../assests/smallimg.jpg",
    title:"What th",
    rating:"9.5"
  },
  {
    id:6,
    image:"../../assests/smallimg.jpg",
    title:"What th",
    rating:"9.5"
  },
]
function Watchlist() {

  const { movies } = useSelector((state) => state.movies);
	const dispatch = useDispatch();

	const fetchMoviesAct = async () => {
		try {
			// const data = await MoviesApi.getMovies();
			dispatch(fetchMovies(moviess));
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchMoviesAct();
	}, []);

    // const [current, setCurrent] = useState(0);
    // const length = movies.length;
  
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
    <div className='watchcarousl'>
      {/* <h2 style={{color:"#F5C518"}}>Featured Today</h2> */}
      <div className='toppicks'>
            <div className='vl' style={{borderLeft:"2px solid #F5C518"}}></div>
            <h3>Top Picks</h3>
            <div className="wcarrows" style={{paddingLeft:"1%",paddingTop:"0.5%"}}>
                    <div class="wcleftarrow" role="presentation">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="current color" role="presentation">
                        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z" fill='#F5C518'></path>
                    </svg>
                    </div>
            </div>
        </div>
        <p style={{float:"left",color:"white",marginLeft:"-78%",marginTop:"1%",fontSize:"2.1rem",color:"grey",fontWeight:"400"}}>This week's top TV and movies</p>
      {/* <div className='wlcardcontainer' style={{marginLeft:"-2%"}}> */}
      {/* <div className='SliderWrapper'>
          <Carousel {...settings} cols={6} rows={1} gap={10} loop showArrows={false} 
          >
                {
                    moviess.map((card,index)=>(
                    <Carousel.Item>
                        <WatchCard image={image2} title={card.title} rating={card.rating}/>
                    </Carousel.Item>
                        )
                        )
                    }
          </Carousel>
      </div> */}

      {/* </div> */}
    </div>
    <div className="scroller" style={{width:"70%",marginLeft:"14%",marginTop:"3%"}}>
    <Slide {...settings} slidesToScroll={6} slidesToShow={6} style={{height:"100vh"}}>
        {
            moviess && moviess.map((card,index)=>(
                      <WatchCard id={card.id} image={card.image} desc={card.title} cat={card.type}/>
                      )
                      )
                  }
    </Slide>
    </div>
    </>
  )
}                                                                                         

export default Watchlist