import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";

import other1 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/other/other1.webp'
import other2 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/other/other2.webp'
import other3 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/other/other3.webp'
import other4 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/other/other4.webp'
import logo from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/logo.png'

const Bathroom = () => {
  return (
    <>
    <div className="relative mx-auto mb-0 pb-0 max-w-screen-xl px-4  text-center lg:px-12">
    <div className='flex justify-center align-middle'>
                    <img
                      className="w-[30%]"
                      src={logo}
                      alt="Your Company"
                    />
                  </div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#D2B48C] md:text-5xl lg:text-6xl ">
        {' '}
        Our Other Designs
      </h1>
     
      <div className="flex justify-between p-5">
        <a
          href="https://precision_stoneworks.quoteotherandbath.com/other#/materials/countertops/countertop"
          className="px- mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="bg-primary-600 rounded-full px-4 py-1.5 text-xs text-white">
            Ready?{' '}
          </span>{' '}
          <span className="text-sm font-medium"> Get A Quote Now</span>
          <svg
            className="ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        
        <a
          href="/kitchen"
          className="px- mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="bg-primary-600 rounded-full px-4 py-1.5 text-xs text-white">
            {' '}
          </span>{' '}
          <span className="text-sm font-medium"> See Kitchen Designs</span>
          <svg
            className="ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        
      </div>
      <div className="flex justify-center align-middle pt-0 mt-0 mb-10">
      <p className='text-white w-[100%]'>Whether your tastes are traditional, farm chic, modern or industrial let Precision Stoneworks work with you to find the granite, marble, quartzite, quartz or soapstone to help define the space.  Our countertop specialists can help answer all your questions with regards to stone benefits & features, surface treatments, edge options to help put your personal touch on your new countertops. </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-evenly w-[100vw] h-[100]" >
      {/*           Carousel1 others           1 */}
      <div className="flex align-middle justify-center mb-20">
      </div>
      <div className="container mx-auto">
      
        <div className="flex items-center justify-center w-full h-full  px-4  border-[#d2b48c]  ">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonBack>

              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden mt-0 pt-0">
                <Slider>
                  <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={other1} alt="black chair and white table" className="object-fit object-center w-full " />

                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={other2} alt="sitting area" className="object-cover object-center w-full" />

                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={other3} alt="sitting area" className="object-cover object-center w-full" />

                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={other4} alt="sitting area" className="object-cover object-center w-full" />

                      </div>
                    </Slide>
                   
                
                  </div>
                </Slider>
              </div>
              <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for tablet and medium size devices */}
          <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={other1} alt="black chair and white table" className="object-cover object-center w-full" />

                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={other2} alt="sitting area" className="object-cover object-center w-full" />

                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={other3} alt="sitting area" className="object-cover object-center w-full" />

                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={other4}  alt="sitting area" className="object-cover object-center w-full" />

                      </div>
                    </Slide>
                    
                    
                   
                  </div>
                </Slider>
              </div>
              <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for mobile and Small size Devices */}
          <CarouselProvider className="block md:hidden  " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700 mt-0 mb-0 pt-0 pb-0">
                    <Slide index={0}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={other1}  alt="black chair and white table" className="object-cover object-center w-full" />

                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={other2}  alt="sitting area" className="object-cover object-center w-full" />

                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={other3} alt="sitting area" className="object-cover object-center w-full" />

                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src={other4} alt="sitting area" className="object-cover object-center w-full" />

                      </div>
                    </Slide>
                   
                    
                  </div>
                </Slider>
              </div>
              <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>

    

    </>
  )
}

export default Bathroom