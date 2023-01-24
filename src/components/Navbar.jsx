import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import logo from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/logo.png'


import { ChevronDownIcon } from '@heroicons/react/20/solid'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-[#161719] shadow pb-5">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
                                    {/* Current: "border-[#D2B48C] text-[#D2B48C]", Default: "border-transparent text-[#D2B48C] hover:border-gray-300 hover:text-gray-700" */}
                                    <Link
                                        to='/'
                                        className="inline-flex items-center border-b-2 border-[#D2B48C] px-1 pt-1 text-sm font-medium text-[#D2B48C]"
                                    >
                                        Home
                                    </Link>
                                    <Menu as="div" className="relative inline-block text-left">
      
        <Menu.Button className="inline-flex items-center  border-[#D2B48C] px-1 pt-1 text-sm font-medium text-[#D2B48C] mt-5">
          Portfolio
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>


      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#161719] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-[#d2b48c]">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/kitchen"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-[#d2b48c]',
                    'block px-4 py-2 text-sm border-b border-[#d2b48c]'
                  )}
                >
                 Kitchens
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/bathroom"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-[#d2b48c]',
                    'block px-4 py-2 text-sm border-b border-[#d2b48c]'
                  )}
                >
                 Bathrooms
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/other"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-[#d2b48c]',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Other
                </a>
              )}
            </Menu.Item>
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

                                    
                                    <Link
                                        to='partners'
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#D2B48C] hover:border-gray-300 hover:text-gray-700"
                                    >
                                        Partners
                                    </Link>
                                    <a
                                        href="https://precision_stoneworks.quotekitchenandbath.com/kitchen#/materials/countertops/countertop"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#D2B48C] hover:border-gray-300 hover:text-gray-700"
                                    >
                                        Instant Quote
                                    </a>
                                    <a
                                        href="https://precision_stoneworks.quotekitchenandbath.com/kitchen#/visualizer"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#D2B48C] hover:border-gray-300 hover:text-gray-700"
                                    >
                                        Design Tool
                                    </a>
                                    <Link
                                        to='contact'
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#D2B48C] hover:border-gray-300 hover:text-gray-700"
                                    >
                                        Contact
                                    </Link>
                                    <Link
                                        to='about'
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#D2B48C] hover:border-gray-300 hover:text-gray-700"
                                    >
                                        About
                                    </Link>
                                   
                                   
                                </div>
                            </div>
                           
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-[#D2B48C] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D2B48c]">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pt-2 pb-3">
                            {/* Current: "bg-indigo-50 border-[#D2B48C] text-indigo-700", Default: "border-transparent text-[#D2B48C] hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                           
                            <Disclosure.Button
                                as="a"
                               
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#D2B48C] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                               <Link to='/'> Home </Link>
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                               
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#D2B48C] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                               <Link to='/projects'> Projects </Link>
                            </Disclosure.Button>
                         
                            <Disclosure.Button
                                as="a"
                               
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#D2B48C] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                               <Link to='/projects'> Projects </Link>
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                               
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#D2B48C] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                               <Link to='/partners'> Partners </Link>
                            </Disclosure.Button>
                            <Disclosure.Button
                                href="https://precision_stoneworks.quotekitchenandbath.com/kitchen#/materials/countertops/countertop"
                               
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#D2B48C] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                              Instant Quote
                            </Disclosure.Button>
                         
                            <Disclosure.Button
                                href="https://precision_stoneworks.quotekitchenandbath.com/kitchen#/visualizerp"
                               
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#D2B48C] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                              Design Tool
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                               
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#D2B48C] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                               <Link to='contact'> Contact Us </Link>
                            </Disclosure.Button>
                         
                        </div>
                    
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
