import React from 'react'
import kitchen1 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/kitchen/kitchen1.webp'
import bathroom1 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/bathroom/bathroom1.webp'
import other1 from '/home/mackgrissom/code/MackGrissom/tw-precision/src/assets/other/other4.webp'

const ProjectCard = () => {
  return (
    <>
    <div className="mx-auto mb-0 pb-0 max-w-7xl py-5 px-6 sm:py-4 pt-10 lg:px-8">
                    <div className="text-center ">
                        {/* <h2 className="text-lg font-semibold text-[white]">At Precision Stoneworks, Quality Matters</h2> */}
                        <p className="mt-1 text-4xl font-bold tracking-tight text-[#D2B48C] sm:text-5xl lg:text-6xl">
                            Our Portfolio
                        </p>
                        <p className="mx-auto mt-5 max-w-xl text-l text-gray-500">
                            Click Below To Take A Look At Our Work </p>
                        
                    </div>
                </div>
    <div className="md:flex sm:block   justify-around mt-10">
    {/* card 1 */}
<div class="max-w-sm bg-[#161719] rounded-lg shadow  ">
    <a href="/kitchen">
        <img class="rounded-t-lg h-80 " src={kitchen1} alt="" />
    </a>
    <div class="p-5 bg-[#d2b48c] bg-opacity-40 rounded ">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#d2b48c] ">Kitchen Designs</h5>
        </a>
        <p class="mb-3 font-normal text-white text-sm">The kitchen has become the new focal point & gathering place in the home, it is where family and friends come to meet, entertain and simply spend time together. 
        <br/>
        </p>
        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-[#D2B48C] bg-opacity-60 px-4 py-3 font-medium text-black shadow-sm hover:bg-opacity-70 sm:px-8">
            See More
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
    {/* card 2 */}
<div class="max-w-sm bg-[#161719] rounded-lg shadow  ">
    <a href="/bathroom">
        <img class="rounded-t-lg h-80 " src={bathroom1} alt="" />
    </a>
    <div class="p-5 bg-[#d2b48c] bg-opacity-40 rounded ">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#d2b48c] ">Bathroom Designs</h5>
        </a>
        <p class="mb-3 font-normal text-white text-[12.4px]">The bathroom is one of the most frequently visited rooms in the home and as such has become a space where homeowners want to put their personal touch with regards to design.</p>
        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-[#D2B48C] bg-opacity-60 px-4 py-3 font-medium text-black shadow-sm hover:bg-opacity-70 sm:px-8 pb-4">
            See More
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
    {/* card 3 */}
<div class="max-w-sm bg-[#161719] rounded-lg shadow  ">
    <a href="/other">
        <img class="rounded-t-lg h-80 " src={other1} alt="" />
    </a>
    <div class="p-5 bg-[#d2b48c] bg-opacity-40 rounded ">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#d2b48c] ">Other Designs</h5>
        </a>
        <p class="mb-3 font-normal text-white text-sm">While kitchens and bathrooms are the most common & traditional areas, we see clients utilizing stone in a variety of other locations in the home.</p>
        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-[#D2B48C] bg-opacity-60 px-4 py-3 font-medium text-black shadow-sm hover:bg-opacity-70 sm:px-8">
            See More
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>


</div>
</>
  )
}

export default ProjectCard