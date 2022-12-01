import React from 'react'
import "./Toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import { useContext } from 'react'
import { ThemeContext } from '../Context/Context'
const Toggle = () => {

const theme=useContext(ThemeContext)
const darkMode=theme.state.darkmode



  return (
    <div className='toggle' onClick={()=>{theme.dispatch({type:"toggle"})}}>
          <Moon/>
        <Sun/>
      
            <div className="t-button"
              
            style={darkMode? {left:"2px"}:{right:"2px"}}
            >
            
            </div>
    </div>
  )
}

export default Toggle