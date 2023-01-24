import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Kitchen from './Kitchen';
import Projects from "./components/Projects";
import Contact from "./Contact";
import Bathroom from "./Bathroom";
import Other from "./Other";


function App() {
  return (
  <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/kitchen' element={<Kitchen/>}/>
        <Route path='/bathroom' element={<Bathroom/>}/>
        <Route path='/other' element={<Other/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/partners' element={<Partners/>}/>
    </Routes>

    
      
      
    </>
  )
}
export default App;

// App order brainstorm:
// Hero (add CTA)
// 