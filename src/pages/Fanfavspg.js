import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import VideoPlayer from '../components/fanfavspgcmpt/VideoPlayer';
import FanfavsDetails from '../components/fanfavspgcmpt/FanfavsDetails';
import Movies from '../components/fanfavspgcmpt/ffcomponents/Movies';
import Footer from '../components/Footer';
import { useState, useEffect } from "react";
import axios from "axios";


function Fanfavspg() {

  const [movies,setMovies]=useState();
  useEffect(()=>{
    // console.log("environement variable",process.env.REACT_APP_IP);
    const token = localStorage.getItem('token');
    axios
    .get(`${process.env.REACT_APP_IP}/imdbapi/movies/${token}`, { params : { token }})
    .then(function(resp){
        console.log("movie data fro my id",resp.data);
        const {data}=resp.data;
        console.log("destructured full movies data",{data})
        if(data){
          setMovies(data.coverpic)
          console.log("featured today data is",movies);
        }
        return(resp.data);
      }) ;
  },[])

  return (
    <div className='watchlistpage'>
      <Navbar />
      <Banner/>
      <VideoPlayer/>
      <FanfavsDetails />
      <Footer/>
    </div>
  )
}

export default Fanfavspg;