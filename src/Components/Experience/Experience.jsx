import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Context'
import "./Experience.css"
const Experience = () => {

  const theme=useContext(ThemeContext)
const darkMode=theme.state.darkmode
  return (
    <div className='Experience' id='Experience' style={{
      
      color:darkMode ? "red": ""
    }}>
        <div className='acheivement'>
            <div className="circle">
                8+
            </div>
            <span>years</span>
            <span>Experience</span>
            </div>
            <div className='acheivement'>
            <div className='circle'>
              20+

            </div>
            <span>COmpleted </span>
            <span>Projects</span>
         
            </div>
            <div className='acheivement'>
            <div className='circle'>
              5+

            </div>
            <span>Company</span>
              <span>Experience</span>
         
            </div>

        </div>
 
  )
}

export default Experience