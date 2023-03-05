import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react';
import image1 from "../assests/amazonbanner.jpg"
import "../styles/styles.css"

function Banner() {

  const [respdata,setRespdata]=useState("");
   useEffect(()=>{
    axios
    .get(`${process.env.REACT_APP_IP}/imdbapi/advertisement`)
    .then(function(resp){
        console.log(resp.data);
        const {data}=resp.data;
        if(data){
          setRespdata(data)
        }
        // return(resp.data);
      }) ;
  },[])
    const [image,setImage]=useState('');
    // setImage = () =>{
    //     axios.get("https://localhost:3000/images",{
    //         resposeType:"arraybuffer"
    //     })
    //     .then((res)=>{
    //         const base64 = btoa(
    //             new Uint8Array(res.data).reduce(
    //               (data, byte) => data + String.fromCharCode(byte),
    //               ''
    //             )
    //         )
    //         setImage(base64)
    //     })
    // }
  return (
    <div className='bannerImage'>
        {/* <img src={`data:;base64,${image}`}/> */}
        {/* {respdata.map(({image})=>{
            return(
              <img src={image1} alt=""/>

            );
        })} */}
        <img src={image1} alt="banner"/>
    </div>
  )
}

export default Banner
