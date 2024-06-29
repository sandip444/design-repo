import React from 'react'
import WebApp from "../../assets/webApp.png"
import WebLanding from "../../assets/webLanding.png"
import MobileApp from "../../assets/mobileApp.png"
import ServicesImage from "../../assets/service.png"

const Services = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <img src={ServicesImage} alt="Services" className="mb-2 mt-5"/>
      <h3 className="text-[42px] font-semibold text-black">Service Overview</h3>
    </div>
      <div className="flex flex-col md:flex-row mt-6 px-5 font-red-rose space-y-6 md:space-y-0 md:space-x-6">
        <div className="border border-[#E1E1E1] p-4 rounded-lg flex-1 px-5 py-4 shadow-drop-custom">
          <div className="flex items-center mb-4">
            <img src={WebApp} alt="Web App & Dashboard" className="w-12 h-12 mr-4"/>
            <h5 className="text-lg font-semibold">Web App & Dashboard</h5>
          </div>
          <p className='text-[#667085] text-sm'>As a leading UX/UI designer, I specialize in crafting fully functional interfaces for a variety of web applications. For me, problem-solving meets visual impact. I unite products and users, design and experiences, to deliver exceptional results.</p>
        </div>
        <div className="border border-[#E1E1E1] p-4 rounded-lg flex-1 px-5 py-4 shadow-drop-custom">
          <div className="flex items-center mb-4">
            <img src={WebLanding} alt="Website & Landing Page" className="w-12 h-12 mr-4"/>
            <h5 className="text-lg font-semibold">Website & Landing Page</h5>
          </div>
          <p className='text-[#667085] text-sm'>As a top-rated UI/UX designer, I create visually appealing and engaging logos and landing pages. Leveraging my expertise in website UX/UI design, I deliver optimal and pleasant browsing experiences for your users.</p>
        </div>
        <div className="border border-[#E1E1E1] p-4 rounded-lg flex-1 px-5 py-4 shadow-drop-custom">
          <div className="flex items-center mb-4">
            <img src={MobileApp} alt="Mobile App" className="w-12 h-12 mr-4"/>
            <h5 className="text-lg font-semibold">Mobile App</h5>
          </div>
          <p className='text-[#667085] text-sm'>Leveraging my expertise in iOS and Android, I'll elevate your application by creating interactive, user-friendly Android apps with Material Design and sleek, minimal iOS interfaces aligned with Apple's design language.</p>
        </div>
      </div>
    </>
  )
}

export default Services
