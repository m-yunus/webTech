
import { useContext } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import { ThemeContext } from './Components/Context/Context';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Service from './Components/Services/Service';
import Testimonial from './Components/Testimonial/Testimonial';
import Works from './Components/Works/Works';

function App() {
  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkmode;
  return (
    <div className="App"
    style={{
      background:darkMode ? "black" : "",
      color:darkMode ? "white": ""
    
    }}
    >
   <Navbar/>
   <Intro/>
   <Service/>
   <Experience/>
   <Works/>
   <Portfolio/>
   <Testimonial/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;
