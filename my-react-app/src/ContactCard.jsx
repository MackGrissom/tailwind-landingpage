import React from 'react'

const ContactCard = () => {
  return (
  <div className="bg-none">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-bold text-[#d2b48c] sm:text-3xl sm:tracking-tight">Get in touch</h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-[#d2b48c]">Contact Us</h3>
                <dl className="mt-2 text-base text-[white]">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd> <a href='mailto:contact@precisionstoneworks.com'>contact@precisionstoneworks.com </a></dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (770) 271-6908</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-[#d2b48c]">Our Address</h3>
                <dl className="mt-2 text-base text-white">
                  <div>
                    <dt className="sr-only">address</dt>
                    <dd> <a href='https://www.google.com/maps/dir//precision+stoneworks/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88f59253aa15547f:0x6c9195aeb7543d34?sa=X&ved=2ahUKEwi32anhuN78AhWgRDABHW30CuIQ9Rd6BAhnEAU'>1090 Parkway Industrial Park Dr.
Buford, GA 30518 </a></dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-[#d2b48c]">Hours</h3>
                <dl className="mt-2 text-base text-white">
                  <div>
                    <dt className="sr-only">Hours</dt>
                    <dd> <p>Monday – Thursday <br/>
                      7:00 AM to 4:00 PM
Friday 7:00 AM to 3:30 PM <br/>


</p></dd>
                  </div>
                  
                </dl>
              </div>
             
            </div>
            
        </div>
      </div>
    </div>
    <div className="flex align-middle justify-center pb-10">
    <strong className='text-[#d2b48c] align-middle text-center text-sm'>*Please note: Visits to our showroom and granite fabrication shop are by appointment only.</strong>
    </div>
          </div>
  )
}

export default ContactCard