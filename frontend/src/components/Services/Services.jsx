import React from 'react'
import WebApp from "../../icons/ServiceImg2.png";
import WebLanding from "../../icons/ServiceImg1.png";
import MobileApp from "../../assets/mobileApp.png"
import ServicesImage from "../../assets/service.png"
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img src={ServicesImage} alt="Services" className="" style={{marginBottom:"-0.5rem",marginTop:"3.25rem"}} />
        <h3 className="text-[42px] text-black" style={{fontWeight:"700",lineHeight:"59px",textAlign:"center"}}>Service Overview</h3>
      </div>
      <div className="centrecards flex flex-col md:flex-row mt-6 px-5 font-red-rose space-y-6 md:space-y-0 md:space-x-6 mb-10">
       <div className="border border-[#E1E1E1] widthDec p-4 rounded-lg flex-1 px-5 py-4 shadow-drop-custom">
          <div className="flex items-center mb-4" style={{width:"300px",height:"200px",display:"flex",justifyContent:"center"}}>
            <img src={WebLanding} alt="Website & Landing Page" className="w-12 h-12 mr-4" style={{width:"100%",height:"100%"}}/>
          </div>
            <h5 className="text-lg font-semibold">Website & Landing Page</h5>
          <p className='text-[#667085] text-sm'>As a top-rated UI/UX designer, I create visually appealing and engaging logos and landing pages. Leveraging my expertise in website UX/UI design, I deliver optimal and pleasant browsing experiences for your users.</p>
        </div>
        <div className="border border-[#E1E1E1] widthDec p-4  rounded-lg flex-1 px-5 py-4 shadow-drop-custom" style={{flexDirection:"column"}}>
          <div className="flex items-center mb-4" style={{width:"300px",height:"200px",display:"flex",justifyContent:"center"}} >
            <img src={WebApp} alt="Web App & Dashboard" className="w-12 h-12 mr-4" style={{width:"100%",height:"100%"}}  />
          </div>
         <div className="">
         <h5 className="text-lg font-semibold">Web App & Dashboard</h5>
          <p className='text-[#667085] text-sm'>As a leading UX/UI designer, I specialize in crafting fully functional interfaces for a variety of web applications. For me, problem-solving meets visual impact. I unite products and users, design and experiences, to deliver exceptional results.</p>
         </div>
        </div>
        <div className="border border-[#E1E1E1] widthDec p-4 rounded-lg flex-1 px-5 py-4 shadow-drop-custom">
          <div className="flex items-center mb-4" style={{width:"300px",height:"200px",display:"flex",justifyContent:"center"}}>
            <img src={MobileApp} alt="Mobile App" className="w-12 h-12 mr-4" />
          </div>
            <h5 className="text-lg font-semibold">Mobile App</h5>
          <p className='text-[#667085] text-sm'>Leveraging my expertise in iOS and Android, I'll elevate your application by creating interactive, user-friendly Android apps with Material Design and sleek, minimal iOS interfaces aligned with Apple's design language.</p>
        </div>
      </div>
    </>
  )
}

export default Services
