
import logo from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/logo.png'
export default function About() {
  return (
    <div className="overflow-hidden bg-[#161719] py-16">
      <div className="mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <h2 className="text-lg font-semibold text-[white]">About Us</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-[#D2B48C] sm:text-4xl">
          Precision Stoneworks at a Glance
          </p>
        </div>
        <div className="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
          <p className="text-lg text-gray-500">
          Since 1999, Precision Stoneworks has proudly served residential builders, commercial contractors, remodelers and DIY clients throughout Atlanta and the North Georgia region. We are a full service company equipped with a knowledgeable and skilled team who will work with you through each step in the process, down to the final installation. From custom design, stone selection, fabrication down to installation, our artisans and craftsmen collectively have over 150 years of experience in the stone & quartz counter top business. 
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-[#D2B48C] mx-auto text-gray-500 lg:max-w-none">
              <p>
              Our mission is simple: we’re committed to:
              </p>
              <ul role="list" className='list-none'>
                <li>Exceptional Quality</li>
                <li>Competitve Prices</li>
                <li>Customer Satisfaction</li>
              </ul>
              <p>
              The process of building a home, a neighborhood, or a neighborhood involves the cooperation and coordination of many moving parts. At Precision Stoneworks, we know that stone fabrication and installation are just one piece of the puzzle. We understand the importance of deadlines, and we pride ourselves in producing the highest quality work at competitive prices. Whether design, slab selection, templates, fabrication or installation our team makes your project our top priority.
              </p>
              <h3 className='!text-[#D2B48C]'>Not All Stone Fabricators Are Equal</h3>
              <p>
              With building booming across the region, Precision Stoneworks, still takes the time to focus on the individual requirements for our clients.  Located in Buford, Georgia, we offer affordable & competitive prices on Granite, Marble, Quartzite, Quartz, and Soapstone. Precision Stoneworks makes it our priority to deliver high quality countertops at competitive prices. For more information about our products and services, give us a call, or feel free to stop by newly remodeled showroom today and speak with one of our stone specialists about your upcoming project. 
              </p>
            </div>
            <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#D2B48C] px-5 py-3 text-base font-medium text-white hover:bg-[#D2B48C]"
                >
                  Contact Us
                </a>
              </div>
              <div className="ml-4 rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-[#D2B48C]-600 hover:bg-gray-50"
                >
                  Learn About Our Stone
                </a>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
            </svg>
            <blockquote className="relative rounded-lg bg-[#D2B48c] shadow-lg opacity-100">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img
                  src={logo}
                  className="h-8"
                />
                <div className="relative mt-8 text-lg font-medium text-gray-700">
                  
                  <p className="relative pl-6 text-black">
                  "Precision Stoneworks did an amazing job! From the moment we stopped by their showroom until installation of our quartz bathroom countertops... we were 100% satisfied with choosing this company...."
                  </p>
                  
                </div>
              </div>
              
               <div className='block'>
                <span className="ml-5 font-semibold leading-6 text-[white] sm:ml-5 sm:pl-1 flex wrap align-middle justify-center column pb-10 block">
                  <span className="font-semibold text-black sm:inline">- Debbie T</span>{' '}
                 
                  <br/>
                  <a className='text-[blue] ml-5 block' href='https://www.google.com/search?q=precision+stoneworks&oq=preci&aqs=chrome.0.69i59j69i57j69i61j69i60l3.1590j0j9&sourceid=chrome&ie=UTF-8#lrd=0x88f59253aa15547f:0x6c9195aeb7543d34,1'>See More Reviews</a> 
                </span>
                </div>
            
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
