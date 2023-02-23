import React, { useState,useEffect } from 'react'
import Banner from '../components/Banner'
import WatchlistCard from '../components/cards/Watchlist'
import Featured from '../components/Featured'
import Navbar from '../components/Navbar'
import Overview from '../components/Overview'
import Watchlist from '../components/cards/Watchlist'
import Slider from "../components/Slider"
import Sliders from '../components/Sliders'
import Addwatchlist from '../components/Addwatchlist'
import Fanfavs from '../components/Fanfavs'
import Morewatch from '../components/Morewatch'
import Exclusivediv from '../components/Exclusivevid'
import axios from 'axios'
import Exploreimp from '../components/Exploreimp'
import '../styles/styles.css'
import Exploremovies from '../components/Exploremovies'
import TopBoxOffice from '../components/TopBoxOffice'
import Comingsoon from '../components/Comingsoon'
import BornToday from '../components/BornToday'
import TopNews from '../components/TopNews'
import Footer from '../components/Footer'
import RecentlyViewed from '../components/RecentlyViewed'

function HomePage() {
  const [respdata,setRespdata]=useState("");
  useEffect(()=>{
    console.log("environement variable",process.env.REACT_APP_IP);
    axios
    .get(`${process.env.REACT_APP_IP}/imdbapi/home`)
    .then(function(resp){
        console.log("movie data",resp.data);
        const {data}=resp.data;
        if(data){
          setRespdata(data)
        }
        // return(resp.data);
      }) ;
  },[])
  return (
    <div className="homepage" style={{backgroundColor:"black"}}>
      <Navbar/>
      <Banner/>
      <Overview/>
      <Featured/>
      <Watchlist/>
      <Addwatchlist/>
      <Fanfavs/>
      <Morewatch/>
      <Exclusivediv/> 
      <Exploreimp/>
      {/* <Slider/>
       */}
       <Exploremovies/>
       <TopBoxOffice/>
       <Comingsoon/>
       <BornToday/>
       <TopNews/>
       <RecentlyViewed/>
       <Footer/>
    </div>
  )
}

export default HomePage
// import React, { FC, useEffect, useState } from 'react';
// import axios from 'axios';

// const NEWS = 'http://newsapi.org/v2/top-headlines?country=us';

// const SampleScreen: FC = () => {
//   const [news, setNews] = useState([]);
//   useEffect(() => {
//     const data = async () => {
//       try {
//         const res = await axios.get(NEWS);
//         const { articles } = res.data;
//         if (articles) {
//           setNews(articles);
//         }
//       } catch (err) {
//         throw new Error(err);
//       }
//     };
//     data();
//   }, []);
//   return (
//     <div>
//       {news.map(({ title, content, date }) => {
//         return (
//           <div key={date}>
//             <strong>{title}</strong>
//             <p>{content}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
