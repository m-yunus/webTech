import React from 'react'
import Card from '../Card/Card'
import "./Services.css"
import Heartemoji from "../../Images/heartemoji.png"
 import Glasses from "../../Images/glasses.png"
 import Resume from "../../Images/YUNUS.pdf"
 import {motion} from "framer-motion"
const Service = () => {
  const transition={duration:2,type:"spring"}
  return (
    <div className='services' id='Services'>
        {/* left side */}
     
<div className="awesome">
    <span>My Awesome</span>
    <span>Services</span>
    <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing <br />
         elit. In quas repellat, deleniti quod voluptate modi.
    </span>
    <a href={Resume} download>
    <button className='button s-button' style={{fontSize:"15px"}}>Download CV</button></a>
    <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
</div>
{/* right side */}
    <div className="cards">
    <motion.div
    
    whileInView={{marginLeft:"25rem"}}
    initial={{marginLeft:"75%"}}
    transition={transition}
    
    style={{marginLeft:"25rem"}}>
      <Card
      emoji={Heartemoji}
      heading={"Design"}
      detail={"Figma,Sketch,photoshop,Adobe"}
      />
    </motion.div>
 <div style={{marginTop:"13rem",marginLeft:"-39rem"}}>
  <Card 
  emoji={Glasses}
  heading={"Developer"}
  detail={"Html,Css,Javascript"}
  
  />
 </div>
 <div style={{marginTop:"20rem",marginLeft:"5rem"}}>
 <Card 
  emoji={Glasses}
  heading={"Developer"}
  detail={"Html,Css,Javascript"}
  
  />
 </div>
    </div>
    </div>
  )
}

export default Service