import React from 'react'
import {useState} from 'react'
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from 'react-icons'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const pricingCards=[
    {
      image:"../../assests/smallimg.jpg",
      title:"What the hell",
      rating:"7.5"
    },
    {
      image:"../../assests/smallimg.jpg",
      title:"What the",
      rating:"8.0"
    },
    {
      image:"../../assests/smallimg.jpg",
      title:"What th",
      rating:"9.5"
    },
    {
      image:"../../assests/smallimg.jpg",
      title:"What ",
      rating:"9.8"
    },
    {
      image:"../../assests/smallimg.jpg",
      title:"What th",
      rating:"9.5"
    },
    {
      image:"../../assests/smallimg.jpg",
      title:"What th",
      rating:"9.5"
    },
    
  ]
function Sliders() {

  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    // removes default buttons

    responsive: [
        {
          breakpoint: 1024,
          settings: {
           slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
           slidesToShow: 1,
          }
         }
      ],
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  }

  const hotelCards = [
    // ...
  ]

  return (
    <div className='content' style={{backgroundColor:"black",width:"60%"}}>
      <div className='controls'>
        <button onCLick={sliderRef?.slickPrev}>
          <FaAngleLeft  />
        </button>
        <button onCLick={sliderRef?.slickNext}>
          <FaAngleRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {pricingCards.map((card, index) => (
          <div key={index}>
            <img src={card.image}></img>
            <h2>{card.title}</h2>
            <p>{card.rating}</p>
            {/* <ul>
              {card.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul> */}
            <button>Buy Now</button>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Sliders
