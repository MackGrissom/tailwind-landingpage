import Content from './components/Content';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CallToAction from './DesignToolCTA';
import Kitchen from './Kitchen';

import Tabs from './components/Tabs';
function App() {
  return (
    <div className='background--custom'>
      <Hero />
      {/* <Tabs/> */}
      <Content />
      <Kitchen />
      <CallToAction />
      <Footer />
    </div>
  )
}
export default App;