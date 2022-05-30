import React from 'react'
import Link from 'next/link'
import  data  from '../../data/steps.json'
const Steps = () => {
    return (
        <div className='relative mt-32 flex items-center flex-col xl:flex-row w-full max-w-[1271px] gap-10  2xl:gap-16 px-4 md:px-6  xl:px-14 2xl:px-0 2xl:mt-36 3xl:mt-[187px]'>
                <img src="/assets/images/landing/dotdots.svg" className='sm:flex hidden absolute bottom-[30%] xl:top-5 right-10 lg:right-40' alt="dots" />
        <div className='flex items-center flex-col sm:flex-row w-full justify-center xl:w-1/2  xl:gap-8 gap-10 2xl:gap-10'>

            <div className=' flex flex-col max-w-[290px]  w-full xl:gap-8 gap-6 2xl:gap-10 '>
                {data.data.map(({ heading, count, icon }, index) => {
                    
                    return index < 2 && <div key={index + Math.random()} className={` max-h-[325px] bg-site_black gap-5 shadow-stepShadow rounded-xl flex flex-col items-center max-w-[290px] w-full py-8 xl:py-12 2xl:py-16`}>
                        <img src={`/assets/images/landing/${icon}.svg`} alt="union" />
                        <div className='flex flex-col items-center'>

                            <p className='text-xl leading-6 text-light_text'>{heading}</p>
                            <h3 className='font-bold text-[45px] leading-9 text-white mt-2'>{count}</h3>
                        </div>
                    </div>
                })
                
                
            }


            </div>

            <div className=' flex flex-col  max-w-[290px]  w-full sm:mt-16  xl:gap-8 gap-6 2xl:gap-10 '>
                {data.data.map(({ heading, count, icon }, index) => {
                    
                    return index >= 2 && <div key={index + Math.random()} className={` max-h-[325px] bg-site_black gap-5 shadow-stepShadow rounded-xl flex flex-col items-center max-w-[290px] w-full py-8 xl:py-12 2xl:py-16`}>
                        <img src={`/assets/images/landing/${icon}.svg`} alt="union" />
                        <div className='flex flex-col items-center'>

                            <p className='text-xl leading-6 text-light_text'>{heading}</p>
                            <h3 className='font-bold text-[45px] leading-9 text-white mt-2'>{count}</h3>
                        </div>
                    </div>
                })
                
                
            }


            </div>
            </div>
            <div className='sm:max-w-[453px]  relative flex flex-col items-center'>
                <p className='text-white text-center sm:text-left font-semibold text-3xl sm:text-4xl leading-10 sm:leading-[60px]  md:text-[45px]  md:leading-[70px] '>Use code <span className=' sm:max-w-[298px] h-[100px] md:h-[123px] relative flex items-center justify-center z-20'>
                    <img src="/assets/images/landing/welcomebox.svg" className='absolute max-w-[298px] max-h-20 sm:max-h-28 md:max-h-max  sm:left-0 z-0' alt="" />
                    <span className='z-20 text-center sm:text-left relative'> Welcome</span>
                </span>
to receive <span className='text-site_yellow'>₹100</span>  in wallet.</p>
<div className='mt-14 flex sm:flex-row flex-col items-center  xl:gap-7 gap-5 2xl:gap-9'>

           <p className='text-2xl leading-6 text-white'><span className='text-[#FF0000]'>Expires</span> in 00:59 Min </p>
           <button className='bg-gradient-to-l md:px-9 from-[#FFA31A]  md:leading-7 font-medium text-white flex py-[9px]   text-base sm:text-lg sm:leading-[27px] px-3  items-center to-[#FEB12E] rounded-xl'><Link href={'/register'} >Signup Now</Link> </button>
</div>
<img className='mt-20' src="/assets/images/landing/crosses.svg" alt="" />
            </div>
        </div>
    )
}

export default Steps