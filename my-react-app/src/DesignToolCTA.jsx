import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import designTool from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/DesignTool.png'
export default function CallToAction() {
  return (
    <div className="relative bg-[#161719]">
      <div className="h-56 bg-[#161719]sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src={designTool}
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-gray-300">Having trouble deciding which stone suits you?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</p>
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
