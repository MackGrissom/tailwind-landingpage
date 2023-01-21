export default function Example() {
    return (

        <>
            <div className="bg-[#161719] pt-20">
                <div className="mx-auto mb-0 pb-0 max-w-7xl py-5 px-6 sm:py-4 pt-10 lg:px-8">
                    <div className="text-center">
                        {/* <h2 className="text-lg font-semibold text-[white]">At Precision Stoneworks, Quality Matters</h2> */}
                        <p className="mt-1 text-4xl font-bold tracking-tight text-[#D2B48C] sm:text-5xl lg:text-6xl">
                            Our Portfolio
                        </p>
                        <p className="mx-auto mt-5 max-w-xl text-l text-gray-500">
                            Take a look at our work,  discover inspiration and get ready for your next big project
                        </p>
                    </div>
                </div>
            </div>
            
{/* Image Cards for portfolio sections */}
            <div class="py-4 lg:flex justify-evenly p-7">

                {/* card 1 */}
    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div bg-[url('/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen8.webp')] hover:bg-[url('/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/kitchen/kitchen8.webp')] m-2 w-[20%] pl-0 pr-0 mr-0 ml-0">
        <div>
       
       
        </div>
        <div class="absolute">
      
       <div class=" text-center">
          <a href='/kitchen'> <button class="text-center rounded-lg p-4 bg-[#D2B48C]  text-white font-bold text-lg hover:bg-white hover:text-black">Kitchen Designs</button></a>
           </div>
    </div>
    </div>

    {/* card 2 */}
    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div bg-[url('/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom1.webp')] hover:bg-[url('/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/bathroom/bathroom1.webp')] m-2 w-[20%] pl-0 pr-0 mr-0 ml-0">
        <div>
       
       
        </div>
        <div class="absolute">

       <div class=" text-center">
          <a href='/bathroom'> <button class="text-center rounded-lg p-4 bg-[#D2B48C]  text-white font-bold text-lg hover:bg-white hover:text-black">Bathroom Designs</button></a>
           </div>
    </div>
    </div>
   
{/* card 3 */}
<div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div bg-[url('/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/other/other4.webp')] m-2 w-[20%] pl-0 pr-0 mr-0 ml-0">
        <div>
        <div  class="w-full image-cover rounded-t-md" >
         
        </div>
       
        </div>
        <div class="absolute">
       
       <div class="text-center">
          <a href='/other'> <button class="text-center rounded-lg p-4 bg-[#D2B48C]  text-white font-bold text-lg hover:bg-white hover:text-black">Other Designs</button></a>
           </div>
    </div>
    </div>





</div>

        </>
    )
}
