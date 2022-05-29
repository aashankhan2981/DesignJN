import React from 'react'
import Image from 'next/image'
import dots from '../../public/assets/images/landing/dots.svg'

const Hero = () => {
  return (
    <div className='flex   w-full justify-center relative flex-col pb-32   2xl:pb-36 3xl:pb-[187px]   items-center'>
        <div className='absolute sm:flex hidden  mx-4 top-3 lg:top-6 xl:top-11 2xl:top-28  left-[40%]'>
     <Image src={dots} alt="dots"  />
        </div>
        <div className='flex lg:flex-row relative flex-col-reverse items-center gap-4 xl:gap-5 justify-center w-full'>
            <img src="/assets/images/landing/background_lines.svg" className='absolute top-[25%]  z-0' alt="lines" />
            <div className='relative pl-6  lg:pl-14 z-10'>

                <h1 className='font-bold max-w-[625px] text-white lg:block hidden lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-[65px] lg:leading-[40px] xl:leading-[55px] 2xl:leading-[70px]'><span className='text-site_yellow'>Deals</span> Aisi Aisi,<br/>ki Dil <span className='text-site_yellow'>Garden<br/> Garden</span> ho Jaaye... </h1>
                <h1 className='font-bold max-w-[625px] text-3xl md:text-4xl leading-10 text-center text-white block lg:hidden '><span className='text-site_yellow'>Deals</span> Aisi Aisi, ki Dil <span className='text-site_yellow'>Garden Garden</span> ho Jaaye... </h1>
                <p className='text-light_text text-lg leading-[25px] text-center lg:text-left lg:mt-8 mt-6 lg:max-w-[417px] lg:pr-7 2xl:pr-0 xl:pr-4'>Listening to your needs and answering with an innovative solution</p>
               <div className='flex justify-center xsm:flex-row flex-col lg:mt-8 mt-6 xl:gap-7 lg:gap-6 items-center gap-6 md:gap-8  2xl:gap-9 lg:justify-start'> 
               <button className='text-white    font-medium bg-gradient-to-l from-[#FFA31A] to-[#FEB12E] rounded-xl px-3 py-5 text-lg leading-7'>Browse Categories </button>
               <button className='text-white      font-medium  text-lg leading-7'>How it Works?  </button>
               </div>
               <div className='flex justify-center'>

                <img src="/assets/images/landing/plus.svg" className='mt-7  lg:mt-12 xl:mt-20 2xl:mt-[120px]' alt="plus icon" />
               </div>
            </div>

        <img src='/assets/images/landing/boywithsofa.svg' alt='boy pic' className= 'md:pr-6 md:px-0 px-4  relative z-10 max-h-[500px] xl:max-h-[600px] 2xl:max-h-[696px]  3xl:max-h-[796px]'  />

        </div>
        
    </div>
  )
}

export default Hero