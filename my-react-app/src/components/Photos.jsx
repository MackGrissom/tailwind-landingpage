// kitchen photos
import Kitchen1 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen1.webp'
import Kitchen2 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen2.webp'
import Kitchen3 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen3.webp'
import Kitchen4 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen4.webp'
import Kitchen5 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen5.webp'
import Kitchen6 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen6.webp'
import Kitchen7 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen7.webp'
import Kitchen8 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen8.webp'
import Kitchen9 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen9.webp'
import Kitchen10 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen10.webp'
import Kitchen11 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen11.webp'
import Kitchen12 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen12.webp'
// kitchen section items
import bathroom1 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom1.webp'
import bathroom2 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom2.webp'
import bathroom3 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom3.webp'
import bathroom4 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom4.webp'
import bathroom5 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom5.webp'
import bathroom6 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom6.webp'
import bathroom7 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom7.webp'
import bathroom8 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom8.webp'
import bathroom9 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom9.webp'
import bathroom10 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom10.webp'
import bathroom11 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom11.webp'
import bathroom12 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom12.webp'
// other section photos
import other1 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/other/other1.webp'
import other2 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/other/other2.webp'
import other3 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/other/other3.webp'
import other4 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/other/other4.webp'
import Carousel from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/components/Carousel.jsx'


export const kitchenphotos = [
    {
        src: bathroom1,
        width: 4,
        height: 3
    },
    {
        src: bathroom2,
        width: 1,
        height: 1
    },
    {
        src: bathroom3,
        width: 3,
        height: 4
    },
    {
        src: bathroom4,
        width: 3,
        height: 4
    },
    {
        src: bathroom5,
        width: 3,
        height: 4
    },
    {
        src: bathroom6,
        width: 4,
        height: 3
    },
    {
        src: bathroom7,
        width: 3,
        height: 4
    },
    {
        src: bathroom8,
        width: 4,
        height: 3
    },
    {
        src: bathroom9,
        width: 4,
        height: 3
    },
    {
        src: bathroom10,
        width: 4,
        height: 3
    },
    {
        src: bathroom11
       
    },
    {
        src: bathroom12,
       
    }
]
export const bathroomphotos = [
    {
        src: Kitchen1,
        width: 4,
        height: 3
    },
    {
        src: Kitchen2,
        width: 1,
        height: 1
    },
    {
        src: Kitchen3,
        width: 3,
        height: 4
    },
    {
        src: Kitchen4,
        width: 3,
        height: 4
    },
    {
        src: Kitchen5,
        width: 3,
        height: 4
    },
    {
        src: Kitchen6,
        width: 4,
        height: 3
    },
    {
        src: Kitchen7,
        width: 3,
        height: 4
    },
    {
        src: Kitchen8,
        width: 4,
        height: 3
    },
    {
        src: Kitchen9,
        width: 4,
        height: 3
    },
    {
        src: Kitchen10,
        width: 4,
        height: 3
    },
    {
        src: Kitchen11,
        width: 4,
        height: 3
    },
    {
        src: Kitchen12,
        width: 4,
        height: 3
    }
]

export const otherphotos = [
    {
        src: other1,
       
    },

    {
        src: other2,
       
    },

    {
        src: other3,
      
    },
    {
        src: other4,
      
    },
]
import React from 'react'
import PhotoGallery from 'react-photo-gallery'


const Kitchens = () => {
  return (
    <div className="hero relative mx-auto mb-20 max-w-screen-xl  px-4  text-center  lg:px-12 flex flex-wrap  pt-20 mt-20">
     <div className="bg-[#161719] pt-20">
                <div className="mx-auto mb-0 pb-0 max-w-7xl py-5 px-6 sm:py-4 pt-10 lg:px-8">
                    <div className="text-center ">
                        {/* <h2 className="text-lg font-semibold text-[white]">At Precision Stoneworks, Quality Matters</h2> */}
                        <p className="mt-1 text-4xl font-bold tracking-tight text-[#D2B48C] sm:text-5xl lg:text-6xl">
                            Our Portfolio
                        </p>
                        <p className="mx-auto mt-5 max-w-xl text-l text-gray-500">
                            Click Below To Take A Look At Our Work </p>
                        
                            
                        <Carousel />
                    </div>
                </div>
            </div>
     {/* <PhotoGallery photos={kitchenphotos} /> */}
     
    </div>
  )
}

export default Kitchens