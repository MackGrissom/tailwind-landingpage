import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer'
import  ScrollToTop  from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/ScrollToTop.jsx'
import ContactCard from './ContactCard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <App />
      <ContactCard />
      <Footer/>
    </BrowserRouter>,
  </React.StrictMode>
)