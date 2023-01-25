import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import designTool from '/src/assets/DesignTool.png'
export default function CallToAction() {
  return (
    <div className="relative bg-[161719]  mb-40 mt-40">
      <div className="h-56 bg-[#161719]sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover rounded "
          src={designTool}
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl  px-6 lg:px-8">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
        <h2 className='text-white'>Need Some Inspiration?</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-[#d2B48c] sm:text-2xl">Use Our Kitchen Vizualizer Design Tool </p>
          <p className="mt-3 text-lg text-gray-300">
          Our kitchen visualizer provides you with an interactive, easy to use kitchen remodeling design experience. Our tools are loaded with multiple room layouts to choose from and you can customize with hundreds of kitchen countertop materials so you can truly visualize your space with a new look. Save your design and share it to your email, Facebook, Twitter, or Pinterest. Don’t forget you can also try our online instant quote tool!
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Try Our Design Tool
                <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
