import React from 'react'
import SwiperCard from '../components/Landing/SwiperCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'

// Import Swiper styles
import "swiper/css";
export const Slider = () => {
  return (
    <div  className=" relative  w-full px-4 md:px-6 lg:px-8 xl:px-12 flex max-w-[1286px] lg:mt-[100px] mt-14 xl:mt-[150px] items-center flex-col ">
        <div className="mb-14 flex w-full justify-end">
        </div>
        <p className="max-w-[723px] text-center mb-[100px] lg:mb-[121px] xl:mb-[131px] sm:text-3xl text-2xl  lg:text-4xl xl:text-[55px] xl:leading-[65px] font-bold text-white">Don't Take Our Words,
          Take theirs.</p>
        <div id='firstSlider' className="relative  slider w-full flex justify-between">

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
  )
}
