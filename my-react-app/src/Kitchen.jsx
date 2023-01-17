import React from 'react'
import PhotoGallery from 'react-photo-gallery'
import { kitchenphotos } from './components/Photos'

const Kitchen = () => {
  return (
    <div className="hero relative mx-auto mb-20 max-w-screen-xl py-8 px-4  text-center lg:py-16 lg:px-12">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#D2B48C] md:text-5xl lg:text-6xl ">
        {' '}
        Our Kitchen Designs
      </h1>

      <div className="flex justify-between p-5">
        <a
          href="https://precision_stoneworks.quotekitchenandbath.com/kitchen#/materials/countertops/countertop"
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
      </div>
      <PhotoGallery photos={kitchenphotos} />
    </div>
  )
}

export default Kitchen
