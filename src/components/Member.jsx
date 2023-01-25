import React from 'react'
import p1 from '/src/assets/partners/1.webp'
import p2 from '/src/assets/partners/2.webp'
import p3 from '/src/assets/partners/3.webp'

const Member = () => {
  return (
    <div className="flex justify-center align-center  w-full ">
        
    <div className="">
    <div className="text-center  w-100">
                        {/* <h2 className="text-lg font-semibold text-[white]">At Precision Stoneworks, Quality Matters</h2> */}
                        <p className="mt-1 text-md font-bold tracking-tight text-gray-700 sm:text-md ">
                            Proud Members Of
                        </p>
</div>
      <div className="flex align-middle text-center w-[100%] justify-evenly">
        
          <img className="w-[20%]" src={p1} alt="Tuple" />
        
       
          <img className="w-[20%] " src={p2} alt="Mirage" />
       
       
          <img className="w-[20%]" src={p3} alt="StaticKit" />
       
       
      </div>
    </div>
  </div>
  )
}

export default Member