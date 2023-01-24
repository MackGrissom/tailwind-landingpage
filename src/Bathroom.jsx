
import bathroom1 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom1.webp'
import bathroom2 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom2.webp'
import bathroom3 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom3.webp'
import bathroom4 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom4.webp'
import bathroom5 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom5.webp'
import bathroom6 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom6.webp'
import bathroom7 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom7.webp'
import bathroom8 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom8.webp'
import bathroom9 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom9.webp'
import bathroom10 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom10.webp'
import bathroom11 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom11.webp'
import bathroom12 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom12.webp'
import logo from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/logo.png'
import Gallery from 'react-photo-gallery'

const photos = [
  {
    src: bathroom1,
    width: 4,
    height: 3
  },
  {
    src: bathroom2,
    width: 1,
    height: 1
  },
  {
    src: bathroom3,
    width: 4,
    height: 3
  },
  {
    src: bathroom4,
    width: 1,
    height: 1
  },
  {
    src: bathroom5,
    width: 4,
    height: 3
  },
  {
    src: bathroom6,
    width: 1,
    height: 1
  },
  {
    src: bathroom7,
    width: 4,
    height: 3
  },
  {
    src: bathroom8,
    width: 1,
    height: 1
  },
  {
    src: bathroom9,
    width: 4,
    height: 3
  },
  {
    src: bathroom10,
    width: 1,
    height: 1
  },
  {
    src: bathroom11,
    width: 4,
    height: 3
  },
  {
    src: bathroom12,
    width: 1,
    height: 1
  }
];

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
        Our Bathroom Designs
      </h1>
  
      <div className="flex justify-between p-5">
        <a
          href="https://precision_stoneworks.quotebathroomandbath.com/bathroom#/materials/countertops/countertop"
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
          href="/other"
          className="px- mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="bg-primary-600 rounded-full px-4 py-1.5 text-xs text-white">
            {' '}
          </span>{' '}
          <span className="text-sm font-medium"> See Other Designs</span>
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
      <div className="flex justify-center align-middle pt-0 mt-0">
      <p className='text-white w-[100%]'>Whether your tastes are traditional, farm chic, modern or industrial let Precision Stoneworks work with you to find the granite, marble, quartzite, quartz or soapstone to help define the space.  Our countertop specialists can help answer all your questions with regards to stone benefits & features, surface treatments, edge options to help put your personal touch on your new countertops. </p>
      </div>
    </div>

   
    <Gallery photos={photos} />;


    </>
  )
}

export default Bathroom