import React from 'react'
import Link from 'next/link'
import data from '../data/footerData.json'
const Footer = () => {
  return (
    <div className='lg:max-w-[1337px] mb-5 w-full lg:px-10 md:px-6 px-4 '>
        <div className='flex lg:gap-0 gap-8 lg:flex-row flex-col items-center xl:items-start pb-[56px]  border-b border-[#888888] mb-5  relative justify-between'>
        <div className='max-w-[356px] flex flex-col items-center lg:items-start w-full'>
            <Link href={'/'}>
         <img src="/assets/images/header/logo.svg" className='max-w-[119px]' alt="logo" />
            </Link>
         <p className='mt-[10px] lg:text-left text-center text-light_text text-lg leading-5'>Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Sed pretium
dolor etiam elementum.</p>
        </div>
        <img src="/assets/images/footer/dots.svg" className='xl:flex hidden absolute  left-[33%] top-1/2 ' alt="" />
        <div className='flex sm:flex-nowrap flex-wrap items-start w-full xl:w-auto justify-between lg:justify-start gap-y-7 sm:gap-y-0 gap-5 md:gap-8 lg:gap-10 xl:gap-[50px] 2xl:gap-[67px]'>
            {data?.map((item,index)=>{
                return <div key={index+Math.random()}>
                <p className='text-lg mb-4 sm:mb-7 xl:mb-[35px] leading-[25px] text-white'>{item.heading}</p>
                <div className='flex flex-col gap-[15px]'>
                {item.items.map((value)=>{
                    
                  return  <p className='text-lg text-light_text leading-[25px]'>{value}</p>
                }) 
 }
                </div>
            </div>
            })}
           
        </div>
        </div>
        <div className='justify-between sm:flex-row flex-col gap-y-5 items-center flex'>
            <div className='flex gap-[5px] items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={18} viewBox="0 0 16 18">
  <g id="Group_723" data-name="Group 723" transform="translate(-453.5 -9666.499)">
    <g id="Ellipse_726" data-name="Ellipse 726" transform="translate(453.5 9668.499)" fill="none" stroke="#ffa31a" strokeWidth={1}>
      <circle cx={8} cy={8} r={8} stroke="none" />
      <circle cx={8} cy={8} r="7.5" fill="none" />
    </g>
    <text id="c" transform="translate(461.5 9679.499)" fill="#ffa31a" fontSize={12} fontFamily="Poppins-Regular, Poppins"><tspan x="-3.642" y={0}>c</tspan></text>
  </g>
</svg>



            <p className='text-site_yellow text-[15px] leading-[23px]'>7R India 2021-2025</p>
            </div>
            <div className='flex gap-5 items-center'>
                <img src="/assets/images/footer/fb.svg" alt="" />
                <img src="/assets/images/footer/twitter.svg" alt="" />
                <img src="/assets/images/footer/gmail.svg" alt="" />
                <img src="/assets/images/footer/linkdin.svg" alt="" />

            </div>
        </div>

    </div>
  )
}

export default Footer