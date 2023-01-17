import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'



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
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    {/* Current: "border-[#D2B48C] text-[#D2B48C]", Default: "border-transparent text-[#D2B48C] hover:border-gray-300 hover:text-gray-700" */}
                                    <Link
                                        to='/'
                                        className="inline-flex items-center border-b-2 border-[#D2B48C] px-1 pt-1 text-sm font-medium text-[#D2B48C]"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to='/projects'
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#D2B48C] hover:border-gray-300 hover:text-gray-700"
                                    >
                                        Our Projects
                                    </Link>
                                    <Link
                                        to='partners'
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#D2B48C] hover:border-gray-300 hover:text-gray-700"
                                    >
                                        Our Partners
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
                                        to='/contact'
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-[#D2B48C] hover:border-gray-300 hover:text-gray-700"
                                    >
                                        Contact Us
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
                                href="#"
                                className="block border-l-4 border-[#D2B48C] bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                            >
                                Dashboard
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#D2B48C] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                                Team
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#D2B48C] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                                Projects
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#D2B48C] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                                Calendar
                            </Disclosure.Button>
                        </div>
                    
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
