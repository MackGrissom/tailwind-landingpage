import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CallToAction from './DesignToolCTA';
import Kitchen from './Kitchen';


function App() {
  return (
    <div className='background--custom'>
      <Hero />
      {/* <Tabs/> */}
      <About />
      <Kitchen />
      <CallToAction />
      <Footer />
    </div>
  )
}
export default App;