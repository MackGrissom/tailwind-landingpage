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
import Bathroom from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom.webp'
import kitchen from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen.webp'
import Other from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/other.webp'
const products = [
    {
        id: 1,
        name: 'Kitchens',
        href: '#',
        price: '$13',
        description: '3 sizes available',
        imageSrc: kitchen,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 2,
        name: 'Bathroom',
        href: '#',
        price: '$64',
        description: 'Walnut',
        imageSrc: Bathroom,
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
        id: 3,
        name: 'Focus Carry Case',
        href: '#',
        imageSrc: Other,
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    // More products...
]

export default function Example() {
    return (

        <>
            <div className="bg-[#161719]">
                <div className="mx-auto mb-0 pb-0 max-w-7xl py-5 px-6 sm:py-5 pt-10 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-lg font-semibold text-[white]">Ready to See Exceptional Quality?</h2>
                        <p className="mt-1 text-4xl font-bold tracking-tight text-[#D2B48C] sm:text-5xl lg:text-6xl">
                            Our Portfolio
                        </p>
                        <p className="mx-auto mt-5 max-w-xl text-l text-gray-500">
                            Take a look at our project galler,  get inspired for your next big project
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#161719]">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 id="products-heading" className="sr-only">
                        Categories
                    </h2>

                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {products.map((product) => (
                            <a key={product.id} href={product.href} className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <h3>{product.name}</h3>
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
