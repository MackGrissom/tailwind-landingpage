/* This example requires Tailwind CSS v3.0+ */
import whyus from "/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/whyus.webp"

export default function WhyUs() {
    return (
        <div className="relative bg-[#161719]">
            <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                <img
                    className="h-full w-full object-cover rounded"
                    src={whyus}
                    alt=""
                />
            </div>
            <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
                <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                    <h2 className="text-base font-semibold leading-7 text-[#D2B48C]">Why Choose Precision Stoneworks?</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white">Because Quality Matters</p>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                        Since 1999, Precision Stoneworks has proudly served residential builders, commercial contractors, remodelers and DIY clients throughout Atlanta and the North Georgia region. We are a full service company equipped with a knowledgeable and skilled team who will work with you through each step in the process, down to the final installation. From custom design, stone selection, fabrication down to installation, our artisans and craftsmen collectively have over 150 years of experience in the stone & quartz counter top business. Our mission is simple: we’re committed to exceptional quality, competitive prices, and, above all, customer satisfaction
                    </p>
                    <div className="mt-8">
                        <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-black font-medium shadow-sm hover:bg-[#d2b48c] hover:text-white sm:px-8"
                        >
                            Learn More About Us 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
