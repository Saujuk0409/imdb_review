import React from 'react'

function Morewatch() {
  return (
    <div className='watchcarousl'>
        <div className='toppicks' style={{marginLeft:"-8%"}}>
            <div className='vl' style={{borderLeft:"2px solid #F5C518"}}></div>
            <h3>More to watch</h3>
            <div className="wcarrows" style={{paddingLeft:"1%",paddingTop:"0.5%"}}>
                    <div class="wcleftarrow" role="presentation">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="current color" role="presentation">
                        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z" fill='#F5C518'></path>
                    </svg>
                    </div>
            </div>
        </div>
        <p style={{float:"left",color:"white",marginLeft:"-51%",marginTop:"1%",fontSize:"2.1rem",color:"grey",fontWeight:"400"}}>IMDb helps you select the perfect next show or movie to watch.</p>
        <div className='watchmorebtns' style={{marginLeft:"3%"}}>
                <button>watch guide</button>
                <button>Most Popular</button>
        </div>
    </div>
  )
}

export default Morewatch
// IMDb helps you select the perfect next show or movie to watch.