import React, { useContext } from 'react'
import "./Intro.css"
import Github from "../../Images/github.png"
import Facebook from "../../Images/Facebook.png"
import linkedIn from "../../Images/linkedin.png"
import Blue from "../../Images/Vector1.png"
import Yellow from "../../Images/Vector2.png"
import Boy from "../../Images/boy.png"
import Glassesemoji from "../../Images/glassesimoji.png"
import Crown from "../../Images/crown.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Thumbup from "../../Images/thumbup (1).png"
import { ThemeContext } from '../Context/Context'
import {motion} from "framer-motion"
const Intro= () => {

const transition={duration:3,type:"spring"}

  const theme=useContext(ThemeContext)
const darkMode=theme.state.darkmode
  return (
    <div className='intro' >
        <div className="i-left">
            <div className="i-name">
                <span  style={{
      background:darkMode ? "black" : "",
      color:darkMode ? "red": ""
    }}>Hy ! We Are </span>
                <span>WEBTECH</span>
                <span>Web Developer with high level of experience</span>
            </div>
           
            <button className='button i-button'>Hire me</button>
           <div className="i-icons">
            <img src={Github} alt="Github" />
            <img src={linkedIn} alt="LinkedIn" />
            <img src={Facebook} alt="" />
           </div>
        </div>
        <div className="i-right">
       <img src={Blue} alt="" />
       <img src={Yellow} alt="" />
       <img src={Boy} alt="" />
       <motion.img initial={{left:"-36%"}}
       whileInView={{left:"-24%"}}
       transition={transition}
       src={Glassesemoji} alt="" />
    <motion.div 
    
    initial={{top:"-4%",left:"74%"}}
    whileInView={{left:"68%"}}
    transition={transition}    

    className="floating-Div"
    style={{top:"-4%",left:"68%",color:darkMode ? "red": ""}}>
    <FloatingDiv crown={Crown} txt1="web" txt2="Developer"/>
    </motion.div>
    
<motion.div 
 className="floating-Div"
 initial={{left:"4%",top:"23.4rem"}}
 whileInView={{left:"24%"}}
 transition={transition}   

style={{top:"23rem",left:"11rem",color:darkMode ? "red": ""}}>
  <FloatingDiv crown={Thumbup} txt1="Best Design" txt2="award"/>
</motion.div>
   {/* blur div */}
    
    <div className='blur' style={{background:"rgb(238 210 255)"}}>

    </div>
      
   <div className="blur"
   style={{background:"#C1F5FF",
            top:"17rem",
            width:"21rem",
              height:"11rem",
              left:"-9rem" }}  
   ></div>
      
      
      
       
        </div>

    </div>
  )
}


export default Intro