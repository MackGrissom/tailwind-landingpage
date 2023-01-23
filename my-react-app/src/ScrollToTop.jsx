

import React, {useState} from 'react';
import {RxDoubleArrowUp} from 'react-icons/rx';
import { Button } from './components/Styles';
  
const ScrollToTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className=''>
    <Button className='md:ml-none ml-[140px] lg:ml-0 sm-ml-0'>
     <RxDoubleArrowUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} 
     className='animate-bounce'
     />
    </Button>
    </div>
  );
}
  
export default ScrollToTop;