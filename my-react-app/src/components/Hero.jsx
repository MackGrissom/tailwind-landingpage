import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import heroimg from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/Untitled design.png'
import { BsThreeDots } from 'react-icons/all'
import { MdOutlineCountertops, MdOutlineBathroom } from 'react-icons/all'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/logo.png'
import Partners from './Partners'
import CallToAction from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/DesignToolCTA.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Kitchen from '../Kitchen'
import Bathroom from '../Bathroom'
import Other from '../Other'
import Contact from '../Contact'
import DesignCTA from './DesignCta'
import QuoteCTA from './QuoteCTA'



const solutions = [
  {
    name: 'Kitchens',
    description: 'The kitchen has become the new focal point & gathering place in the home.The countertops are an essential piece of the new modern kitchen',
    href: '#',
    icon: MdOutlineCountertops,
  },
  {
    name: 'Bathrooms',
    description: 'The bathroom is one of the most frequently visited rooms in the home and as such has become a space where homeowners want to put their personal touch with regards to design.  Our countertop specialists are happy to help ',
    href: '#',
    icon: MdOutlineBathroom,
  },
  {
    name: 'Other',
    description: "While kitchens and bathrooms are the most common areas for granite, marble, quartzite, quartz, soapstone and limestone, we see clients utilizing stone in a variety of other locations in the home.",
    href: '#',
    icon: BsThreeDots,
  },

]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Hero() {
  return (

    <div className="bg-[#161719]">





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
                    className="h-full w-full object-cover opacity-80"
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

                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-[white] sm:max-w-3xl">
                    From custom design, stone selection, fabrication down to installation. Our mission is simple: we’re committed to exceptional quality, competitive prices, and, above all, customer satisfaction.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <a
                        href="#"
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
          <DesignCTA />
          <CallToAction />
          <QuoteCTA />
          <About />
          <Partners />
          </div>

          {/* Logo cloud */}
          {/* <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
              <p className="text-center text-white font-semibold text-gray-500">
                Our Trusted Partners
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}
