import React from 'react'
import quote from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/quotescreenshot.webp'
const QuoteCTA = () => {
  return (
  
      <div className="bg-[#161719]">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-[#00000052] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
           
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-[#D2B48C] sm:text-4xl">
                Ready to get started?
                <br />
                Try  Our Instant Quote Tool. 
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
               Select your stone, calculate your square footage, decide an amount, sign up & recieve a quote!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-[#D2B48C] px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a href="/contact" className="text-base font-semibold leading-7 text-white">
                  Contact Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={quote}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }


export default QuoteCTA