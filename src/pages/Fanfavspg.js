import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import VideoPlayer from '../components/fanfavspgcmpt/VideoPlayer';

function Fanfavspg() {
  return (
    <div className='watchlistpage'>
      <Navbar/>
      <Banner/>
      <VideoPlayer/>
    </div>
  )
}

export default Fanfavspg;