import React from 'react'

const Process = () => {
  return (
    <div className="mt-7 flex flex-col px-4 md:px-6  items-center">
    <p className="font-bold text-4xl leading-[50px] md:text-[55px] text-center md:leading-[70px] text-white max-w-[1027px]">Getting Best Discount is Supper Easy</p>
     <p className="text-base leading-[25px] mt-[37px] text-light_text max-w-[757px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas aenean diam varius euismod amet, donec eget cursus. </p>
     <img src="/assets/images/landing/sketch.svg" alt="" className="md:flex hidden" />
     <div className="flex flex-col md:hidden mt-10">
          <div className="flex flex-col pb-8 items-center ">

       <p className="text-2xl text-white font-semibold">Post</p>
       <img src="/assets/images/landing/post.svg" className="mt-[-20px]" alt="post" />
       <p className="text-lg text-white mt-[-30px]">Post requirements</p>
          <img src="/assets/images/landing/arrow.svg" className="mt-7" alt="" />
          </div>

          <div className="flex flex-col pb-8 items-center ">

<p className="text-2xl text-white font-semibold">Receive</p>
<img src="/assets/images/landing/recieve.svg" className="mt-[-20px]" alt="post" />
<p className="text-lg text-white mt-[-30px]">Receive
quick bids</p>
 <img src="/assets/images/landing/arrow.svg" className="mt-7" alt="" />
 </div>

 <div className="flex flex-col pb-8 items-center ">

<p className="text-2xl text-white font-semibold">Select</p>
<img src="/assets/images/landing/select.svg" className="mt-[-20px]" alt="post" />
<p className="text-lg text-white mt-[-30px]">Chat & select sellers</p>
 <img src="/assets/images/landing/arrow.svg" className="mt-7" alt="" />
 </div>

 <div className="flex flex-col pb-8 items-center ">

<p className="text-2xl text-white font-semibold">Approve</p>
<img src="/assets/images/landing/approved.svg" className="mt-[-20px]" alt="post" />
<p className="text-lg text-white mt-[-20px]">Get deal done & approve paymeents</p>
 </div>

     </div>
  </div>
  )
}

export default Process