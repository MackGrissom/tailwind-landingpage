import Kitchen1 from '/src/assets/kitchen/kitchen1.webp'
import Kitchen2 from '/src/assets/kitchen/kitchen2.webp'
import Kitchen3 from '/src/assets/kitchen/kitchen3.webp'
import Kitchen4 from '/src/assets/kitchen/kitchen4.webp'
import Kitchen5 from '/src/assets/kitchen/kitchen5.webp'
import Kitchen6 from '/src/assets/kitchen/kitchen6.webp'
import Kitchen7 from '/src/assets/kitchen/kitchen7.webp'
import Kitchen8 from '/src/assets/kitchen/kitchen8.webp'
import Kitchen9 from '/src/assets/kitchen/kitchen9.webp'
import Kitchen10 from '/src/assets/kitchen/kitchen10.webp'
import Kitchen11 from '/src/assets/kitchen/kitchen11.webp'
import Kitchen12 from '/src/assets/kitchen/kitchen12.webp'
// kitchen section items
import bathroom1 from '/src/assets/bathroom/bathroom1.webp'
import bathroom2 from '/src/assets/bathroom/bathroom2.webp'
import bathroom3 from '/src/assets/bathroom/bathroom3.webp'
import bathroom4 from '/src/assets/bathroom/bathroom4.webp'
import bathroom5 from '/src/assets/bathroom/bathroom5.webp'
import bathroom6 from '/src/assets/bathroom/bathroom6.webp'
import bathroom7 from '/src/assets/bathroom/bathroom7.webp'
import bathroom8 from '/src/assets/bathroom/bathroom8.webp'
import bathroom9 from '/src/assets/bathroom/bathroom9.webp'
import bathroom10 from '/src/assets/bathroom/bathroom10.webp'
import bathroom11 from '/src/assets/bathroom/bathroom11.webp'
import bathroom12 from '/src/assets/bathroom/bathroom12.webp'
// other section photos
import other1 from '/src/assets/other/other1.webp'
import other2 from '/src/assets/other/other2.webp'
import other3 from '/src/assets/other/other3.webp'
import other4 from '/src/assets/other/other4.webp'

import { useState } from "react";

export const allPhotos = [
  {
    src: bathroom1,
    category: ["bathroom"],
    id: 1

  },
  {
    src: bathroom2,
    category: ["bathroom"],
    id: 2

  },
  {
    src: bathroom3,
    category: ["bathroom"],
    id: 3
  },
  {
    src: bathroom4,
    category: ["bathroom"],
    id: 4
  },
  {
    src: bathroom5,
    category: ["bathroom"],
    id: 5
  },
  {
    src: bathroom6,
    category: ["bathroom"],
    id: 6
  },
  {
    src: bathroom7,
    category: ["bathroom"],
    id: 7
  },
  {
    src: bathroom8,
    category: ["bathroom"],
    id: 8
  },
  {
    src: bathroom9,
    category: ["bathroom"],
    id: 9
  },
  {
    src: bathroom10,
    category: ["bathroom"],
    id: 10
  },
  {
    src: bathroom11,
    category: ["bathroom"],
    id: 11
  },
  {
    src: bathroom12,
    category: ["bathroom"],
    id: 12
  },
  {
    src: Kitchen1,
    category: ["kitchen"],
    id: 1

  },
  {
    src: Kitchen2,
    category: ["kitchen"],
    id: 2
  },
  {
    src: Kitchen3,
    category: ["kitchen"],
    id: 3
  },
  {
    src: Kitchen4,
    category: ["kitchen"],
    id: 4
  },
  {
    src: Kitchen5,
    category: ["kitchen"],
    id: 5
  },
  {
    src: Kitchen6,
    category: ["kitchen"],
    id: 6
  },
  {
    src: Kitchen7,
    category: ["kitchen"],
    id: 7
  },
  {
    src: Kitchen8,
    category: ["kitchen"],
    id: 8
  },
  {
    src: Kitchen9,
    category: ["kitchen"],
    id: 9
  },
  {
    src: Kitchen10,
    category: ["kitchen"],
    id: 10
  },
  {
    src: Kitchen11,
    category: ["kitchen"],
    id: 11
  },
  {
    src: Kitchen12,
    category: ["kitchen"],
    id: 12
  },
  {
    src: other1,
    category: ["other"],
    id: 1
  },

  {
    src: other2,
    category: ["other"],
    id: 1
  },

  {
    src: other3,
    category: ["other"],
    id: 1
  },
  {
    src: other4,
    category: ["other"],
    id: 1
  },
]



const Projects = () => {
  const [photos, setPhotos] = useState(allPhotos);
  const handleBtns = (e) => {
    const word = e.target.value;
    const photosShown = photos.filter((photo) => photos.category.includes(word));

    if (word === "ALL") {
      setPhotos(allPhotos);
    } else setPhotos(photosShown);
  };
  return (
    <div >
      <div className='flex'>
        <div className="text-center ">

          {/* <h2 className="text-lg font-semibold text-[white]">At Precision Stoneworks, Quality Matters</h2> */}
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-[#D2B48C] sm:text-5xl lg:text-6xl">
            Our Portfolio
          </h1>
        </div>
        {/* Kitchen Photos */}
      
      

          <section>
            <button onClick={handleBtns} type="button" value="ALL" className='bg-black p-4 text-white'>
              VIEW ALL
            </button>
            <button onClick={handleBtns} type="button" value="Kitchen" className='bg-black p-4 text-white'>
              Kitchen
            </button>
            <button onClick={handleBtns} type="button" value="Bathroom" className='bg-black p-4 text-white'>
              Bathrooms
            </button>
            <button onClick={handleBtns} type="button" value="Other" className='bg-black p-4 text-white'>
              Other
            </button>
          </section>

          <section>
            {photos.map((photo) => (
              <div key={photo.id}>
                <img src={photo.src} />
                <br />
              </div>
            ))}
          </section>
      </div>





      <div className="text-center ">

        {/* <h2 className="text-lg font-semibold text-[white]">At Precision Stoneworks, Quality Matters</h2> */}
        <p className="mt-1 text-4xl font-bold tracking-tight text-[#D2B48C] sm:text-5xl lg:text-6xl mb-20">
          Our Portfolio
        </p>
      </div>
      {/* Kitchen Photos */}
      <div className="text-left pl-40 mb-0 pb-0">
        <button className='bg-black rounded'>
          <h2 className="text-lg font-semibold text-[white]">Take A Look At Our Quality</h2>
          <p className="mt-1 text-4xl font-bold tracking-tight text-[#D2B48C] sm:text-5xl lg:text-6xl">
            Kitchens
          </p>
        </button>
      </div>
      <section class="overflow-hidden text-gray-700 p-0 ">
        {/* {photos.map((photo) => {




        })} */}
        <div class="container px-5  mx-auto lg:pt-24 lg:px-32 !p-20">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-1/2 p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Kitchen1} />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Kitchen2} />
              </div>
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Kitchen3} />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Kitchen4} />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Kitchen5} />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Kitchen6} />
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-1/2 p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Kitchen7} />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Kitchen8} />
              </div>
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Kitchen9} />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Kitchen10} />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Kitchen11} />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={Kitchen12} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Projects