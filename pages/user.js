import React, { useRef, useState } from 'react'
import GigListing from '../components/GigListing'
import Requirement from '../components/Requirement'
import Items from '../data/menuItem.json'
import BelowGig from '../data/Belowgig.json'
import Categories from '../data/trendingCategory.json'
import Deal from '../components/Landing/Deal'
import Why from '../components/Landing/Why'
import whyData from '../data/Why.json'
import categories from '../data/categories.json'
import Category from '../components/Landing/Category'
import FAQs from '../components/Landing/FAQs'
import SwiperCard from '../components/Landing/SwiperCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'

// Import Swiper styles
import "swiper/css";
import ServiceFoot from '../components/Requirement/ServiceFoot'

const Index = () => {
  const [isPlaying,setPlaying] =useState(false)
  const videoRef = useRef(null)

  return (
    <>
    <div className='w-full hidden md:flex  items-center py-5 md:py-7 lg:py-[30px] justify-center px-4 md:px-6 bg-[#292929] text-white text-lg md:text-xl lg:text-2xl lg:leading-[24px] '>
        <div className='w-full flex  items-center justify-between max-w-[1024px]'>
            {Items.length!==0 && Items.map(function (item,Index) {    
          return  <div key={Index + Math.random()} className='w-full flex items-center gap-2 xl:gap-3 '>
             <p >{item.heading}</p>
             <img src="/assets/images/header/toggle.svg" alt="toggle" />
             
            </div>})
}
        </div>

    </div>
<div className="pb-16 flex text-white flex-col mt-10 md:mt-14 lg:mt-16 xl:mt-20 items-center w-full">

   <div className='w-full max-w-[1400px] flex items-center justify-between gap-5 md:flex-row flex-col-reverse px-4 md:px-6'>
<div>
<div className=" gap-4 items-center flex md:text-left text-center  text-base md:text-lg md:leading-6 text-white">
        <img src="/assets/images/user/loudspeaker.png" alt="loudspeaker" />
        <p>Lorem ipsum dolor sit amet, consectetur Adipiscing</p>

    </div>
    <p className='text-3xl md:text-4xl lg:text-[55px] md:text-left text-center md:font-bold max-w-[442px] mt-10 md:mt-14 lg:mt-16 font-semibold text-white lg:leading-[50px]'>Good morning,</p>
    <p className='text-3xl md:text-4xl md:leading-[50px]  md:text-left text-center mt-4'>Raj   @007R</p>
    <div className='mt-4 md:mt-6 flex md:justify-start justify-center items-center gap-5'>
        <p className='text-base md:text-lg  md:text-left text-center md:leading-[30px] mt-[8px] text-site_yellow'>Free Member</p>
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
<img className='md:w-1/2' src="/assets/images/user/user.svg" alt="user" />

   </div>
  <div className='w-full mt-10 md:mt-14 lg:mt-16 xl:mt-20 max-w-[1400px] flex items-center justify-between gap-5 md:flex-row flex-col px-4 md:px-6'>
    <div className='flex justify-between gap-5 w-full max-w-[480px] lg:max-w-[650px]'>
      <img src="/assets/images/user/hero1.svg" alt=""  className='sm:max-w-max max-w-[100px] ' />
      <img src="/assets/images/user/hero2.svg" alt=""  className='sm:max-w-max max-w-[100px] ' />
      <img src="/assets/images/user/hero3.svg" alt=""  className='sm:max-w-max max-w-[100px] ' />
    </div>
    <div className="rounded-xl shadow-stepShadow">
          <button 
            className={`px-4 md:px-7 text-base md:text-lg  md:leading-7 font-medium shadow-Shadow2 py-[9px] md:py-4 
              text-site_yellow
             rounded-xl `}
          >
           Go to Dashboard
          </button>
        </div>

</div>
  <div className='w-full mt-10 md:mt-14 lg:mt-16 xl:mt-20 max-w-[1400px] flex items-center justify-between gap-5 md:flex-row flex-col px-4 md:px-6'>
  <div className="w-full max-w-[800px] px-4">

<div className="bg-[#292929] relative rounded-3xl shadow-Shadow2 md:items-start items-center md:flex-row flex-col-reverse px-4 md:px-6 lg:px-8  w-full max-w-[1260px] flex  justify-between mt-[83px] ">
  <img src="/assets/images/user/cross.svg" className='absolute top-6 right-6' alt="" />
  <div className="py-8 sm:py-[63px] ">
    <p className="text-2xl sm:text-[35px] font-bold leading-10 text-white">Profile incomplete</p>
    <p className="text-lg leading-5 text-light_text mt-2">Don’t leave things half backed</p>
    <div className="mt-[30px]  sm:max-w-[266px] rounded-xl shadow-stepShadow">
      <button className="rounded-xl text-lg sm:max-w-[266px] w-full  flex items-center justify-center font-medium leading-7 text-site_yellow py-3 sm:py-[18px] shadow-Shadow2">
      Update profile
      </button>
    </div>
  </div>
  <img src="/assets/images/user/puzzle.svg" className="md:mr-6 md:max-w-max max-w-[260px] md:mt-[-50px]" alt="" />
  


</div>
  </div>
  <div className='flex flex-col items-center'>

  <p className='text-light_text border-b border-b-site_yellow'>Dismiss</p>
    <p className='text-light_text border-b border-b-site_yellow'>All</p>
  </div>

</div>

   <Requirement/>
   <GigListing/>
  <div className='grid max-w-[1400px] md:w-full mt-10 md:mt-14 lg:mt-16 xl:mt-20 md:grid-cols-2 grid-cols-1 px-4 md:px-6 lg:grid-cols-3 gap-5'>
    {BelowGig?.length!=0 && BelowGig?.map(function (item,index){
      return     <div key={index} className='shadow-stepShadow max-w-[393px] w-full rounded-xl'>
      <div className='w-full pt-7 md:pt-9 pb-8 lg:pt-10 px-5 md:px-7 lg:px-[30px] rounded-xl shadow-Shadow2'>
    <div className='flex gap-5 md:gap-6 items-center '>
      <p className="text-lg md:text-xl lg:text-2xl lg:leading-[30px] md:font-bold font-semibold ">{item?.heading}</p>
      <img src={`/assets/images/user/${item?.type}`} alt="" />

    </div>
    <p className='mt-4 md:mt-6 text-sm md:text-base md:leading-5 text-light_text max-w-[312px]' >
      {item?.content}
    </p>
    <div className='mt-10  text-site_yellow text-sm flex gap-[15px] items-center '>
      <p>{item?.last}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="17.167" height="12.162" viewBox="0 0 17.167 12.162">
  <g id="Group_269" data-name="Group 269" transform="translate(-364 -2126.086)">
    <path id="Path_4188" data-name="Path 4188" d="M17.833,11.5l-4.667,4.667L8.5,11.5" transform="translate(364 2145.333) rotate(-90)" fill="none" stroke="#ffa31a" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
    <line id="Line_2" data-name="Line 2" x2={15} transform="translate(365 2132.167)" fill="none" stroke="#ffa31a" strokeLinecap="round" strokeWidth={2} />
  </g>
</svg>



    </div>
      </div>
    </div>
    })
    

  
}
<div className='relative max-w-[393px] w-full h-full rounded-xl' >
      <video onPause={()=>{setPlaying(false)}} onPlay= {()=>{setPlaying(true);}} ref={videoRef} src='/assets/video/video1.mp4' className='h-full rounded-xl w-full bg-[#4E638B]' controls={true}>
    

      </video>
  <img src="/assets/images/user/pause.svg" onClick={()=>videoRef?.current.play()} className={`${isPlaying?"hidden":"flex"} w-[76px] h-[76px] cursor-pointer absolute m-auto inset-0`} alt="" />



    </div>

   </div>

   <div className='mt-10 flex-col flex items-center md:items-start w-full max-w-[1400px] md:mt-14 lg:mt-16 xl:mt-20 px-4 md:px-6'>
      <div className='flex  w-full mb-10 md:mb-12 lg:mb-14 items-end justify-between gap-5 flex-row  '>

        <p className="font-bold text-2xl md:text-3xl xl:text-[55px] text-light_text md:max-w-[636px] xl:leading-[65px]">Trending Categories</p>
        <p className='text-light_text border-b border-b-site_yellow'>See All</p>
      </div>
      <div className='grid max-w-[393px] md:max-w-[1400px] w-full mt-10 md:mt-14 lg:mt-16 xl:mt-20  grid-cols-1 md:grid-cols-2 lg:gap-y-0 gap-y-8  lg:grid-cols-3 gap-5'>
        {
          Categories?.length!=0?Categories.map((item,index)=>{
            return <div key={Math.random()+index} className='max-w-[393px] pb-5 md:pb-7 lg:pb-8 pt-10 md:pt-12 px-5 md:px-7 lg:px-[30px] rounded-[10px]  shadow-Shadow2 relative w-full h-full'>
              <img src="/assets/images/user/sales.svg" className='absolute right-4 -top-4  ' alt="" />
              <img src={`/assets/images/user/category${index+1}.svg`} className="max-h-[128px]" alt="" />
              <p className='text-2xl md:text-3xl text-white font-semibold md:font-bold mt-7'>{item?.heading}</p>
              <div className='max-w-[285px] items-center w-full flex justify-between gap-5 mt-2'>
                <p className='text-2xl md:text-3xl lg:text-[40px] leading-5 font-semibold md:font-bold '>{item?.value}</p>
                <p className='text-light_text text-base md:text-lg '>{item?.disc}</p>


              </div>
              <div className='mt-5 w-full flex gap-4 items-center justify-between'>
                <div className='max-w-[156px] w-full shadow-stepShadow rounded-xl '>
                  <button className='py-[9px] md:py-3 lg:py-4 text-site_yellow w-full rounded-xl shadow-Shadow2  text-base md:text-lg md:leading-5'>Buy</button>

                </div>
                <div className='max-w-[156px] w-full shadow-stepShadow rounded-xl '>
                  <button className='py-[9px] md:py-3 lg:py-4 text-site_yellow w-full rounded-xl shadow-Shadow2  text-base md:text-lg md:leading-5'>Sell</button>

                </div>

              </div>
            </div>
          }):<p>NO items to show</p>
        }
      </div>
    <div>

    </div>
  </div>
  <div className='mt-10 w-full flex-col flex md:items-start items-center max-w-[1400px] md:mt-14 lg:mt-16 xl:mt-20 px-4 md:px-6'>
      <div className='flex w-full mb-10 md:mb-12 lg:mb-14 items-end justify-between gap-5 flex-row  '>

        <p className="font-bold text-2xl md:text-3xl xl:text-[55px] text-light_text md:max-w-[636px] xl:leading-[65px]">Best Selling Gigs </p>
        <p className='text-light_text border-b border-b-site_yellow'>See All</p>
      </div>
      <div className='grid max-w-[630px] md:max-w-[1400px] w-full mt-10 md:mt-14 lg:mt-16 xl:mt-20  grid-cols-1 md:grid-cols-2 gap-5'>
     <Deal  />
     <Deal/>
      </div>
    <div>

    </div>
  </div>
  <div className='w-full px-4 md:px-6 md:max-w-max  max-w-[630px]'>
  <div className=' w-full shadow-Shadow2 px-10 md:px-14 lg:px-[62px] pb-5 rounded-xl justify-between items-center flex md:flex-row flex-col-reverse  max-w-[1400px] mt-16 md:mt-20 xl:mt-[140px]  '>

<div className="max-w-[650px] w-full ">
  <p className='text-white md:text-left text-center  xl:text-[45px] text-2xl md:text-3xl lg:text-4xl lg:leading-[50px]'>Why refer only F<span className='text-[#15D807]'>.</span>R<span className='text-[#FFA31A]'>.</span>I<span className='text-[#4CD1F3]'>.</span>E<span className='text-[#B8CE21]'>.</span>N<span className='text-[#FB65AB]'>.</span>D<span className='text-[#B365E6]'>.</span>S? 
When you can Invite your <span className='text-site_yellow'>Gf,</span> 
<span className='text-site_yellow'> EX</span> or even <span className='text-site_yellow gap-2 inline-flex'>Crush <img src="/assets/images/user/smile.svg" alt="" /></span>      too.</p>
<p className='text-base md:text-left text-center  md:text-lg lg:text-xl lg:leading-5 mt-3 text-light_text max-w-[551px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed pretium dolor etiam.</p>
<div className='max-w-[427px] mt-7 w-full  justify-between flex-col sm:flex-row items-center gap-5 flex '>


<button className=" text-base md:text-lg md:leading-5 max-w-[180px] w-full flex justify-center py-[9px] md:py-3 lg:py-4 xl:py-5 bg-site_yellow rounded-xl">Refer Now</button>
<p className='text-base md:text-lg md:leading-5 inline-flex gap-3 items-center text-light_text'>Referrals earning: <span className='text-lg md:text-xl lg:text-2xl text-site_yellow'> 0 ₹</span></p>
</div>
</div>
<img src="/assets/images/user/manOnCoin.svg" className='md:w-1/2 max-h-[220px] md:max-h-max mt-5 md:mt-[-70px]' alt="" />

    </div>

  </div>
 
         {/* why us */}
         <div className="relative mt-[100px] w-full px-4 md:px-6 lg:px-8 xl:px-12 xl:mt-[199px] ">

<div>
  <h3 className="font-bold flex text-3xl text-center xl:text-[55px] items-end justify-center xl:leading-[50px]  text-white">Why Deals Jn <span><svg className="md:w-4 w-3 h-3 md:h-4 " xmlns="http://www.w3.org/2000/svg" width={224} height={224} viewBox="0 0 224 224">
    <g id="Ellipse_732" data-name="Ellipse 732" fill="#ffa31a" stroke="#ffa31a" strokeWidth={1}>
      <circle cx={112} cy={112} r={112} stroke="none" />
      <circle cx={112} cy={112} r="111.5" fill="none" />
    </g>
  </svg>



  </span></h3>
  <div className="relative flex justify-center">


    <div className="mt-[40px] xl:mt-[70px] w-full place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1260px] gap-[44px]">
      {
        whyData.map(({ heading, icon, content }) => {

          return <Why key={content + Math.random()} heading={heading} content={content} icon={icon} />

        })
      }
    </div>
  </div>

</div>
</div>
   {/* 50 categories */}
   <div className="relative w-full px-4 md:px-6 lg:px-8 xl:px-12 flex max-w-[1286px] lg:mt-[100px] mt-10 xl:mt-[150px] items-center flex-col ">

        <p className="max-w-[723px] text-center mb-[30px] lg:mb-[50px] xl:mb-[70px] sm:text-3xl text-2xl  lg:text-4xl xl:text-[55px] xl:leading-[65px] font-bold text-white">Get Best Deals in Over 50+
          Categories</p>

        <div className="grid gap-8  xl:gap-10 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* Category */}
          {
            categories.map(({ content, icon, heading }) => {
              return <Category key={icon + Math.random()} content={content} heading={heading} icon={icon} />

            })
          }

        </div>

      </div>

      {/* slider */}
      <div className="relative  w-full px-4 md:px-6 lg:px-8 xl:px-12 flex max-w-[1286px] lg:mt-[100px] mt-14 xl:mt-[150px] items-center flex-col ">
        <div className="mb-14 flex w-full justify-end">
        </div>
        <p className="max-w-[723px] text-center mb-[100px] lg:mb-[121px] xl:mb-[131px] sm:text-3xl text-2xl  lg:text-4xl xl:text-[55px] xl:leading-[65px] font-bold text-white">Don't Take Our Words,
          Take theirs.</p>
        <div className="relative  slider w-full flex justify-between">

          <div className="review-swiper-button-prev w-[30px] z-30 h-[30px]  absolute top-[50%] left-2 xl:left-[-33px] shadow-stepShadow rounded-full">
            <button className="flex items-center justify-center shadow-Shadow2 w-[30px] h-[30px] rounded-full ">
              <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.68671 1.50001L1.01971 6.16601L5.68671 10.833" stroke="#FFA31A" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
              </svg>


            </button>
          </div>

          <Swiper
            className="swiper"
            modules={[Navigation]}
            navigation={{
              nextEl: '.review-swiper-button-next',
              prevEl: '.review-swiper-button-prev',
            }}
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            effect={"coverflow"}
            breakpoints={{
              320: {
                slidesPerView: 1,

              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: true,


              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true

              }

            }}


          >
            <SwiperSlide>

              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>

              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>

              <SwiperCard />
            </SwiperSlide>

          </Swiper>
          <div className="review-swiper-button-next w-[30px] z-30 h-[30px] absolute top-[50%] right-3 xl:right-[-13px] shadow-stepShadow rounded-full">
            <button className="flex justify-center items-center shadow-Shadow2 w-[30px] h-[30px] rounded-full ">
              <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.68671 1.50001L6.35371 6.16601L1.68671 10.833" stroke="#FFA31A" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
              </svg>


            </button>
          </div>


        </div>


      </div>
      <FAQs />
      <div className='w-full flex justify-center max'>

      <ServiceFoot widthAuto={true}/>
      </div>
</div>

    </>

  )
}

export default Index