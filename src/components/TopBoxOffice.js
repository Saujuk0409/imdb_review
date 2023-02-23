import React from 'react'
import BoxOfficeCard from './cards/BoxOfficeCard'

function TopBoxOffice() {
  return (
    <div className='watchcarousl'>
      {/* <h2 style={{color:"#F5C518"}}>Featured Today</h2> */}
      <div className='toppicks'>
            <div className='vl' style={{borderLeft:"2px solid #F5C518"}}></div>
            <h3>Top Box Office (US)</h3>
            <div className="wcarrows" style={{paddingLeft:"1%",paddingTop:"0.5%"}}>
                    <div class="wcleftarrow" role="presentation">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="current color" role="presentation">
                        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z" fill='#F5C518'></path>
                    </svg>
                    </div>
            </div>
        </div>
        <p style={{float:"left",color:"white",marginLeft:"-81%",marginTop:"1%",fontSize:"2.1rem",color:"grey",fontWeight:"400"}}>Weekend of February 3-5</p>
        <div className='ovcolumn1' style={{marginLeft:"-15%",height:"auto"}}>
            <BoxOfficeCard/>
            <BoxOfficeCard/>
            <BoxOfficeCard/>
        </div>
        <div className='boxovcolumn2' >
            <BoxOfficeCard/>
            <BoxOfficeCard/>
            <BoxOfficeCard/>
        </div>

    </div>
  )
}

export default TopBoxOffice
