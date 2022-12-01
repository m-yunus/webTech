import React from 'react'
import "./Works.css"
import Amazon from "../../Images/amazon.png"
import Shopify from "../../Images/Shopify.png"
import Fiver from "../../Images/fiverr.png"
import Upwork  from "../../Images/Upwork.png"
import Facebook from "../../Images/Facebook.png"
import {motion} from "framer-motion"

const Works = () => {
  return (
    <div className='works'>
        <div className="awesome">
    <span>Works for all these</span>
    <span>Brands & Clients</span>
    <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing <br />
         elit. In quas repellat, deleniti quod voluptate modi.
         <br /> In quas repellat, deleniti quod voluptate modi.
       <br />  In quas repellat, deleniti quod voluptate modi.
    </span>
   
    <button className='button s-button' style={{fontSize:"15px"}}>Hire me</button>
    <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
</div>
{/* 
right side */}
<div className="w-right">
  <motion.div
  
  initial={{rotate:90}}
  whileInView={{rotate:0}}
  viewport={{margin:"-40px"}}
  transition={{duration:3,type:"spring"}}
  
  
  className='w-maincircle'>
  <div className="w-secCircle">
    <img src={Shopify} alt="" />
  </div>
  <div className="w-secCircle">
    <img src={Fiver} alt="" />
  </div>
  <div className="w-secCircle">
    <img src={Upwork} alt="" />
  </div>
  <div className="w-secCircle">
    <img src={Amazon} alt="" />
  </div>
  <div className="w-secCircle">
    <img src={Facebook} alt="" />
  </div>
  </motion.div>

 {/* background circles */}

  <div className="w-backcircle bluecircle"></div>
  <div className="w-backcircle yellowcircle"></div>


</div>
    </div>
  )
}

export default Works