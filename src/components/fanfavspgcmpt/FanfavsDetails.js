import React from 'react'
import img1 from "../../assests/comingsoon.jpg"
import SingleCard from '../cards/SingleCard'
import EditorsList from './ffcomponents/EditorsList'
import Episodes from './ffcomponents/Episodes'
import MoreLikeThis from './ffcomponents/MoreLikeThis'
import Moretoexplore from './ffcomponents/Moretoexplore'
import Movies from './ffcomponents/Movies'
import News from './ffcomponents/News'
import Photos from './ffcomponents/Photos'
import StoryLine from './ffcomponents/StoryLine'
import TopCasts from './ffcomponents/TopCasts'
import UserList from './ffcomponents/UserList'
import UserPolls from './ffcomponents/UserPolls'
import Videos from './ffcomponents/Videos'

function FanfavsDetails() {
  return (
    <div className='details'>
        <section style={{border:"#F5C518"}}>
            <div className='topnomflex'>
                <div className='toprat6'>
                    <p>Top Rated Tv 6</p>
                </div>
                <div className='awardsandnominees'>
                        <p style={{fontWeight:"500",paddingRight:"10%"}}>Awards</p>
                        <p>Nominees</p>
                </div>
            </div>
        </section>
        <div className='ff-details-flex'>
            <div className='ff-details-column1'>
                <div className='toppicks'>
            <div className='vl' style={{borderLeft:"2px solid #F5C518"}}></div>
            <h3 style={{color:"black"}}>Episodes</h3>
            <div className="wcarrows" style={{paddingLeft:"1%",paddingTop:"0.5%"}}>
                    <div class="wcleftarrow" role="presentation">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="current color" role="presentation">
                        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z" fill='#F5C518'></path>
                    </svg>
                    </div>
            </div>
                </div>
                <Episodes/>
                <Videos/>
                <Movies/>
                <Photos/>
                <TopCasts/>
                <MoreLikeThis/>
                <StoryLine/>
                <News/>
            </div>
            <div className='ff-details-column2'>
                <Moretoexplore/>
                <SingleCard image={img1} desc="Oscars 2023: Where to Watch the Best Picture Nominees" ca="List"/>
                <EditorsList/>
                <SingleCard image={img1} desc="Oscars 2023: Where to Watch the Best Picture Nominees" ca="List"/>
                <UserList/>
                <UserPolls/>    
                <SingleCard image={img1} desc="Oscars 2023: Where to Watch the Best Picture Nominees" ca="List"/>
            </div>
        </div>
    </div>
  )
}

export default FanfavsDetails
