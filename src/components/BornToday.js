import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Carousel from "better-react-carousel";
import BorntodayCard from "./cards/BorntodayCard";

// const videos = [
//     {
//         image:"../assests/comingsoon.jpg",
//         name:"Angelina Joel",
//         age:"40"
//     },
//     {
//         image:"../assests/comingsoon2.jpg",
//         name:"Angelina Joel",
//         age:"40"
//     },
//     {
//         image:"../assests/comingsoon.jpg",
//         name:"Angelina Joel",
//         age:"40"
//     },
//     {
//         image:"../assests/comingsoon2.jpg",
//         name:"Angelina Joel",
//         age:"40"
//     },
//     {
//         image:"../assests/comingsoon2.jpg",
//         name:"Angelina Joel",
//         age:"40"
//     },
//     {
//         image:"../assests/comingsoon.jpg",
//         name:"Angelina Joel",
//         age:"40"
//     },
//     {
//         image:"../assests/comingsoon.jpg",
//         name:"Angelina Joel",
//         age:"40"
//     },
// ]

function BornToday() {
  let settings = {
    nextArrow: (
      <button
        className="nextarrow"
        style={{
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.553)",
          marginTop: "-5%",
        }}
      >
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
      <button
        className="prevarrow"
        style={{
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.553)",
          marginTop: "-5%",
        }}
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          class="ipc-icon ipc-icon--chevron-left-inline ipc-icon--inline ipc-pager-icon"
          id="iconContext-chevron-left-inline"
          viewBox="0 0 24 24"
          fill="white"
          role="presentation"
        >
          <path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
        </svg>
      </button>
    ),
  };

  const [videos, setVideos] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_IP}/imdbapi/bornday`)
      .then(function (resp) {
        console.log("born today data is", resp.data);
        const { data } = resp.data;
        if (data) {
          setVideos(data.coverpic);
          console.log("bontoday destructured data is", { data });
        }
        return resp.data;
      });
  }, []);
  return videos ? (
    <>
      <div className="watchcarousl">
        <div className="topicks-div">
          <div className="toppicks">
            <div
              className="vl"
              style={{ borderLeft: "2px solid #F5C518" }}
            ></div>
            <h3>Born Today</h3>
            <div
              className="wcarrows"
              style={{ paddingLeft: "1%", paddingTop: "0.5%" }}
            >
              <div class="wcleftarrow" role="presentation">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron"
                  id="iconContext-chevron-right-inline"
                  viewBox="0 0 24 24"
                  fill="current color"
                  role="presentation"
                >
                  <path
                    d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="sub-head">
            <p
              style={{
                paddingTop: "1%",
                textAlign: "left",
                fontSize: "2.1rem",
                color: "grey",
                fontWeight: "400",
                marginLeft: "0.5%",
              }}
            >
              Weekend of Feb 9-10
            </p>
          </div>
        </div>
        {/* <div className='featuredcarousel' style={{width:"100%",marginLeft:"-1%",marginTop:"-0.1%"}}>
      <Carousel cols={6} rows={1} gap={10} loop showArrows={false} style={{width:"70%"}}>
            {
                videos.map((card,index)=>(
                <Carousel.Item>
                    <BorntodayCard image={card.img} name={card.name} age={card.age}/>
                </Carousel.Item>
                    )
                    )
                }
      </Carousel>
  </div> */}
      </div>
      <div className="scroller">
        <Slide
          {...settings}
          slidesToScroll={6}
          slidesToShow={6}
          style={{ height: "100vh" }}
        >
          {videos &&
            videos.map((card, index) => (
              <BorntodayCard
                image={card.picture}
                name={card.name}
                age={card.age}
              />
            ))}
        </Slide>
      </div>
    </>
  ) : (
    <div style={{ color: "white" }}>loading............</div>
  );
}

export default BornToday;
