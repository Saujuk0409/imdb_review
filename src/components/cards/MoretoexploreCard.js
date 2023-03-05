import React from 'react'
import "../../styles/styles.css"

function MoretoexploreCard(props) {
  return (
    <div className='more-to-explore-card'>
      <hr style={{width:"900%"}}></hr>
      <div className='details-wrapper'>
        <div className='name-percent'>
            <div className='no-and-name'>
                <div className='sno'>{props.sno}</div>
                <div className='mname'><p>{props.name}</p></div>
            </div>
            <div>
                <p className='mpercent'>{props.percent}</p>
            </div>
        </div>
        <div className='arrow' style={{paddingLeft:"300%",float:"right",paddingTop:"50%"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--chevron-right" id="iconContext-chevron-right" viewBox="0 0 24 24" fill="gray" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default MoretoexploreCard
