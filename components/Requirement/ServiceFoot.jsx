import React from 'react'

const ServiceFoot = ({widthAuto}) => {
  return (
<div className={`${ widthAuto? "w-auto":"w-full"} px-4`}>

    <div className="bg-[#292929] rounded-3xl shadow-Shadow2 md:items-start items-center md:flex-row flex-col-reverse px-4 md:px-6 lg:px-8 xl:px-12  w-full max-w-[1260px] flex  justify-between mt-[83px] ">
      <div className="py-8 sm:py-[63px] sm:pl-10">
        <p className="text-2xl sm:text-[35px] font-bold leading-10 text-white">Help us improve this page</p>
        <p className="text-lg leading-5 text-light_text mt-2">Appreciate what you Liked, Criticise what you didn't.</p>
        <div className="mt-[30px]  sm:max-w-[266px] rounded-xl shadow-stepShadow">
          <button className="rounded-xl text-lg sm:max-w-[266px] w-full  flex items-center justify-center font-medium leading-7 text-site_yellow py-3 sm:py-[18px] shadow-Shadow2">
          Give feedback here
          </button>
        </div>
      </div>
      <img src="/assets/images/requirements/chat.svg" className="md:mr-6 md:max-w-max max-w-[260px] md:mt-[-70px]" alt="" />
      


    </div>
      </div>
  )
}

export default ServiceFoot