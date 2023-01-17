/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

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




const products = [
    {
      id: 1,
      imageSrc:Kitchen1,
      imageAlt: 'kitchen photo',
      
    },
    {
      id: 2,
      imageSrc: Kitchen2,
      imageAlt: 'kitchen photo',
      
    },
    {
      id: 3,
      imageSrc: Kitchen3,
      imageAlt: 'kitchen photo',
      
    },
    {
      id: 4,
      imageSrc: Kitchen4,
      imageAlt: 'kitchen photo',
      
    },
    {
      id: 5,
      imageSrc: Kitchen5,
      imageAlt: 'kitchen photo',
      
    },
    {
      id: 6,
      imageSrc: Kitchen6,
      imageAlt: 'kitchen photo',
      
    },
    {
      id: 7,
      imageSrc: Kitchen7,
      imageAlt: 'kitchen photo',
      
    },
    {
      id: 8,
      imageSrc: Kitchen8,
      imageAlt: 'kitchen photo',
      
    },
    {
      id: 9,
      imageSrc: Kitchen9,
      imageAlt: 'kitchen photo',
      
    },
    {
      id: 10,
      imageSrc: Kitchen10,
      imageAlt: 'kitchen photo',
      
    },
    {
      id: 11,
      imageSrc: Kitchen11,
      imageAlt: 'kitchen photo',
      
    },
    {
      id: 12,
      imageSrc: Kitchen12,
      imageAlt: 'kitchen photo',
      
    },
    // More products...
  ]

  
  export default function Kitchen() {
    return (
<>
    




      <div className="bg-[#161719]">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#D2B48c]">Our Kitchen Designs</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    )
  }
  