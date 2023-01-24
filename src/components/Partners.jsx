import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import partner1 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/partners/partner1.webp'
import partner2 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/partners/partner2..webp'
import partner3 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/partners/partner3.webp'
import partner4 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/partners/partner4.webp'
import partner5 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/partners/partner5.webp'
import partner6 from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/partners/partner6.webp'
import logo from '/home/mackgrissom/code/MackGrissom/tw-precision/my-react-app/src/assets/logo.png'


const partners = [
  {
    name: 'Consentino Atlanta',
    hours: 'Hours: Appointment Required',
    address: '1741 Wilwat Drive,Norcross, GA 30093 ',
    telephone: '770-409-9621',
    imageUrl:partner1,
      map: 'https://www.google.com/maps/place/Cosentino+Center+Atlanta/@33.906529,-84.2135517,17z/data=!3m1!4b1!4m5!3m4!1s0x88f5a6c1e4ba38f5:0x6d6bd926b9ed7635!8m2!3d33.906529!4d-84.211363?shorturl=1',
      site:'https://www.cosentino.com/usa/'
  },
  {
    name: 'Levantina',
    hours: 'Mon-Fri 8AM-5PM Sat 10AM-2PM',
    address: '2499 Newpoint Parkway Suite #300Lawrenceville, GA 30043',
    telephone: '(678) 436-5439',
    imageUrl:partner2,
      map: 'https://www.google.com/maps/dir//33.972691,-84.086791/@33.9726712,-84.1568311,12z/data=!4m4!4m3!1m0!1m1!4e1?hl=en',
      site:'https://www.levantina.com/us/levantina-stone-center-atlanta/'
  },
  {
    name: 'Stone Showcase',
    hours: 'Mon-Fri 8AM-5PM Sat By Appointment Only',
    address: '4455 Commerce Drive, Suite 109 Buford, GA 30518',
    telephone: '(678) 546-6166',
    imageUrl:partner3,
      map: 'https://www.google.com/maps?q=stone+showcase,+buford,+ga&hl=en&sll=33.957261,-84.209776&sspn=0.009451,0.013797&vpsrc=0&hq=stone+showcase,&hnear=Buford,+Gwinnett,+Georgia&t=m&z=13',
      site:'https://www.stoneshowcase.net/'
  },
  {
    name: 'Daltile',
    hours: 'Mon-Fri 8AM-4:30PM Sat 9AM-1PM',
    address: '1630 Satellite Boulevard, Suite 570 Duluth, GA 30097',
    telephone: '(770) 623-9477',
    imageUrl:partner4,
      map: 'https://www.google.com/maps?q=daltile,+30097&daddr=1630+Satellite+Blvd+%23+570,+Duluth,+GA+30097-6220+(Dal-Tile)&hl=en&view=map&geocode=CXn_UZYWHenOFZHEBgId8P38-iHJacm_gBPrhg&t=m&z=16&vpsrc=0',
      site:'https://locations.daltile.com/ga/atlanta/375/'
  },
  {
    name: 'MSI Stone',
    hours: 'Mon-Fri: 8AM - 5PM Sat: 9AM - 12PM',
    address: '7950 Troon Circle Austell, GA 30168',
    telephone: '678-803-0800',
    imageUrl:partner5,
      map: 'https://www.google.com/maps/place/M+S+International,+Inc./@33.761104,-84.569474,17z/data=!3m1!4b1!4m5!3m4!1s0x88f51f2bfe223149:0x129431d2d126a282!8m2!3d33.761104!4d-84.56728?shorturl=1',
      site:'https://www.msisurfaces.com/atlanta-countertop-showroom-distribution/'
  },
  {
    name: 'AGM Imports',
    hours: 'Mon-Fri: 8AM - 5PM Sat: 9AM - 12PM',
    address: '1280 Lakes Parkway, Suite 150 Lawrenceville, GA 30043',
    telephone: '(678) 376-7733',
    imageUrl:partner6,
      map: 'https://www.google.com/maps?q=1280+Lakes+Parkway,+Suite+150+Lawrenceville,+GA+30043&hl=en&sll=33.877467,-84.219675&sspn=0.605415,0.883026&vpsrc=0&hnear=1280+Lakes+Pkwy+%23150,+Lawrenceville,+Georgia+30043&t=m&z=16',
      site:'https://agmimports.com/'
  },
  // More partners...
]


const Partners = () => {
    return (
      <>
      <div className='flex justify-center align-middle'>
                    <img
                      className="w-[30%]"
                      src={logo}
                      alt="Your Company"
                    />
                  </div>
      <div className="text-center mb-10 w-100">
                        {/* <h2 className="text-lg font-semibold text-[white]">At Precision Stoneworks, Quality Matters</h2> */}
                        <p className="mt-1 text-4xl font-bold tracking-tight text-[#D2B48C] sm:text-5xl lg:text-6xl">
                            Our Trusted Partners
                        </p>
                        <p className="mx-auto mt-5 text-l text-gray-500 w-[60%]">
                        Below are some of Precision Stoneworks wholesale suppliers for both granite, marble and quartz slabs. 

We try to keep the hours and contact info up to date, but please check the wholesaler website to be sure. Most are open on weekends, but it is best to call ahead to make an appointment.

Please keep in mind that wholesalers aren’t in a position to estimate installed costs and won’t be able to discuss slab pricing. When you select the slabs and let the wholesaler know you’re our customer they’ll send us the wholesale pricing. Precision Stoneworks will then contact you to provide a written estimate for you.</p>
                            </div>
      <ul hours="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
      {partners.map((partner) => (
        <a href={partner.site}>
        <li
          key={partner.address}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded" src={partner.imageUrl} alt="" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{partner.name}</h3>
            <h2 className="mt-6 text-sm font-medium text-gray-900">{partner.telephone}</h2>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <a className="text-sm text-[blue]" href={partner.map}>View On Map</a>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  {partner.hours}
                </span>
                <span> </span>
              </dd>
            </dl>
          </div>
          <div>
            
          </div>
        </li>
      </a>
      ))}
    </ul>
    </>
    );
};

export default Partners;
