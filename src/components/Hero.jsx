import heroimg from '/src/assets/untitleddesign.webp'
import logo from '/src/assets/logo.webp'
import CallToAction from '/src/DesignToolCTA.jsx'
import About from './About'

import QuoteCTA from './QuoteCTA'

import WhyUs from './WhyUs'

import ProjectCard from './ProjectCard'
import Member from './Member'





export default function Hero() {

  return (

    <div className="bg-[#161719]  ">

      {/* ADD NAVBAR ABOVE */}
      <main>
        <div className='h-[50%]'>
          {/* Hero card */}
          <div className="relative  ">
            <div className="absolute inset-x-0 bottom-0 h-1/2 " />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover opacity-40"
                    src={heroimg}
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-[] background--custom mix-blend-multiply" />
                </div>
                <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
                  <div className='flex justify-center align-middle'>
                    <img
                      className="w-[30%]"
                      src={logo}
                      alt="Your Company"
                    />
                  </div>
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl w-[100%] text-[#D2B48C] italic">
                    Where
                    Quality
                    Matters
                  </h1>

                  <p className="mx-auto mt-6 max-w-lg text-center text-sm text-[white] sm:max-w-3xl">
                    From custom design, stone selection, fabrication down to installation.
                  </p>

                  <p className="mx-auto mt-2 max-w-lg text-center text-sm text-[#d2b48c] sm:max-w-3xl drop-shadow-lg">Exceptional quality || Competitive Prices || Customer Satisfaction. </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <a
                        href="https://precision_stoneworks.quotekitchenandbath.com/kitchen#/materials/countertops/countertop"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-black font-medium shadow-sm hover:bg-[#d2b48c] hover:text-white sm:px-8"
                      >
                        Instant Quote
                      </a>
                      <a
                        href="https://precision_stoneworks.quotekitchenandbath.com/kitchen#/visualizer"
                        className="flex items-center justify-center rounded-md border border-transparent bg-[#D2B48C] bg-opacity-60 px-4 py-3 font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                      >
                        Kitchen Visualizer
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProjectCard />
            <Member />
            <WhyUs />
          <QuoteCTA />
          <CallToAction />
          
          </div>

       
        </div>
      </main>
    </div>
  )
}
