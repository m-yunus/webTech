import React from 'react'
import "./Portfolio.css"
import {Swiper,SwiperSlide} from "swiper/react"
import Sidebar from "../../Images/sidebar.png"
import Musicapp from "../../Images/musicapp.png"
import HOC from "../../Images/hoc.png"
import Ecommercwe from "../../Images/ecommerce.png"
import "swiper/css"

const Portfolio = () => {
  return (
    <div className='portfolio' id="Portfolio">
{/* Heading */}
<span>Recent Projects</span>
<span>Portfolio</span>


      {/* slider */}

  <Swiper spaceBetween={30} slidesPerView={3}
  grabCursor={true}
  className="portfolio-slider"
  >
    <SwiperSlide>

<img src={Sidebar} alt="" />

    </SwiperSlide>
    <SwiperSlide>

<img src={Musicapp} alt="" />

    </SwiperSlide>
    <SwiperSlide>

<img src={Ecommercwe} alt="" />

    </SwiperSlide>
    <SwiperSlide>

<img src={HOC} alt="" />

    </SwiperSlide>
  </Swiper>
  


    </div>
  )
}

export default Portfolio