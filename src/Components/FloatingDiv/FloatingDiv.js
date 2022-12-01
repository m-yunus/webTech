import React from 'react'
import "./FloatingDiv.css"
const FloatingDiv = ({crown,txt1,txt2}) => {
  return (
    <div className='floatingdiv'>
      
  
      <img src={crown}  style={{top:"-20%",left:"-10%"}} alt="" />
    
   <span style={{fontsize:"16px",top:"10%",right:"-10%"}}>
  <h1 >{txt1}
       <br/>
       {txt2}</h1>
     
   </span>
  
  
      </div>
      
  
   
        
        
   
  )
}

export default FloatingDiv