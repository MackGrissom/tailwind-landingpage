import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
 import heroimg from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/Untitled design.png'
import {BsThreeDots} from 'react-icons/all'
import {MdOutlineCountertops, MdOutlineBathroom} from 'react-icons/all'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/logo.png'
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
const navigation = [
  { name: 'Instant Quote', href: '#' },
  { name: 'Design Tool', href: '#' },
  { name: 'About Us', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Hero() {
  return (
    <div className="bg-[#161719]">
      <header className=''>
        <Popover className="relative bg-[#161719]">
          <div className="mx-auto flex max-w-7xl items-center justify-between py-6 px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Precision Stoneworks</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src={logo}
                  alt=""
                />
              </a>
            </div>

            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-[white] hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D2B48C]">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            {/* Pop out nav bar */}
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                       
                        'text-[white] group inline-flex items-center rounded-md bg-none  font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-[#D2B48C] focus:ring-offset-2'
                      )}
                    >
                      <span>Our Designs</span>
                      <ChevronDownIcon
                        className={classNames(
                          'text-[#D2B48C]',
                          'ml-2 h-5 w-5 group-hover:gold'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2 !text-white">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-[#161719] px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2 !text-white">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:[#d2b48c] "
                              >

                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#D2B48C] text-white sm:h-12 sm:w-12">
                                  <item.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                                  <p className="text-white font-medium text-white">{item.name}</p>
                                  <p className="mt-1 text-sm text-white">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-medium text-[white] hover:text-[#D2B48C]">
                  {item.name}
                </a>
              ))}
            </Popover.Group>

          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#161719] shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div >
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D2B48C]">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#D2B48C] text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4  font-medium text-[white]">{item.name}</div>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className=" font-medium text-[white] hover:text-[#dfb48c]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                 
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

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
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl w-[100%] text-white">
                    Where &nbsp;
                    <span className="text-[#D2B48C]">Quality&nbsp;
                    Matters</span>
                    
                  </h1>
                  
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-[white] sm:max-w-3xl">
                  From custom design, stone selection, fabrication down to installation. Our mission is simple: we’re committed to exceptional quality, competitive prices, and, above all, customer satisfaction.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-white font-medium text-[#d2b48c] shadow-sm hover:bg-[#d2b48c] hover:text-white sm:px-8"
                      >
                        Get started
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-[#D2B48C] bg-opacity-60 px-4 py-3 text-white font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-gray-100">
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
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}
