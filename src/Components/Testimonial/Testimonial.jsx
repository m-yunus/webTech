import React from 'react'
import "./Testimonial.css"
import { Swiper,SwiperSlide } from 'swiper/react'
import ProfilePic1 from  "../../Images/profile1.jpg"
import profilepic2 from "../../Images/profile2.jpg"
import profilepic3 from "../../Images/profile3.jpg"
import profilepic4 from "../../Images/profile4.jpg"
import profilepic5 from "../../Images/profile5.jpg"
import {Pagination} from "swiper"
import "swiper/css/pagination"
import "swiper/css"
const Testimonial = () => {

   const  clients=[
    {
        img:ProfilePic1,
        review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, rem fuga labore voluptatibus distinctio voluptatem tempore asperiores quisquam similique nisi neque molestias ",

    },
    {
        img:profilepic2,
        review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam a repudiandae, dicta exercitationem error assumenda ipsum maiores fuga dignissimos"
    },
    {
        img:profilepic3,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nesciunt maxime assumenda accusamus suscipit natus!',


    },
    {
        img: profilepic4,
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, magnam! Maiores enim obcaecati reiciendis fugiat!'

    },
    {
        img: profilepic5,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro in necessitatibus, libero quisquam iure voluptas?",

    }



    ]


  return (
    <div className='t-wrapper' id="Testimonial">
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work </span>
            <span>From me</span>
            <div className="blur t-blur1" style={{background:"purple"}}></div>
            <div className="blur t-blur2" style={{background:"skyblue"}}></div>
        </div>
        {/* slider */}
        <Swiper
        
      modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}

        >
            
            {clients.map((items,index)=>{
                return (
                <SwiperSlide key={index}>
                    <div className="testimonial">

                    <img src={items.img} alt="het" />
                        <span>{items.review}</span>


                    </div>
                   
                </SwiperSlide>
                )
            })}
           
        </Swiper>


    </div>
  )
}

export default Testimonial