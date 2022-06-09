import React from 'react'
import Items from '../data/menuItem.json'
const Index = () => {
  return (
    <>
    <div className='w-full flex items-center py-5 md:py-7 lg:py-[30px] justify-center px-4 md:px-6 bg-[#292929] text-white text-lg md:text-xl lg:text-2xl lg:leading-[24px] '>
        <div className='w-full flex  items-center justify-between max-w-[1024px]'>
            {Items.length!==0 && Items.map(function (item,Index) {    
          return  <div key={Index + Math.random()} className='w-full flex items-center gap-2 xl:gap-3 '>
             <p >{item.heading}</p>
             <img src="/assets/images/header/toggle.svg" alt="toggle" />
             
            </div>})
}
        </div>

    </div>
<div className="flex text-white flex-col mt-10 md:mt-14 lg:mt-16 xl:mt-20 items-center w-full">

   <div className='w-full max-w-[1400px] flex items-center justify-between gap-5 md:flex-row flex-col px-4 md:px-6'>
<div>
<div className=" gap-4 items-center flex   text-base md:text-lg md:leading-6 text-white">
        <img src="/assets/images/user/loudspeaker.png" alt="loudspeaker" />
        <p>Lorem ipsum dolor sit amet, consectetur Adipiscing</p>

    </div>
    <p className='text-3xl md:text-4xl lg:text-[55px] md:font-bold max-w-[442px] mt-10 md:mt-14 lg:mt-16 font-semibold text-white lg:leading-[50px]'>Good morning,</p>
    <p className='text-3xl md:text-4xl md:leading-[50px] mt-4'>Raj   @007R</p>
    <div className='mt-4 md:mt-6 flex items-center gap-5'>
        <p className='text-base md:text-lg md:leading-[30px] mt-[8px] text-site_yellow'>Free Member</p>
        <img src="/assets/images/user/king.svg" className=''alt="king" />

    </div>
    <div className='mt-8 md:mt-10 flex items-center justify-between max-w-[434px] '>
        <div className='gap-5 flex items-center'>
          <img src="/assets/images/user/bitcoin.png" className=''alt="bitcoin" />
          <p className='text-lg md:text-xl '>3 BidCoins Left</p>
        </div>
        <div className="rounded-xl shadow-stepShadow">
          <button 
            className={`px-4 md:px-7 text-base md:text-lg  md:leading-7 font-medium shadow-Shadow2 py-[9px] md:py-4 
              text-white
             rounded-xl `}
          >
            Topup
          </button>
        </div>

    </div>
</div>

   </div>
</div>

    </>

  )
}

export default Index