import Category from "../components/Landing/Category";
import Deal from "../components/Landing/Deal";
import Hero from "../components/Landing/Hero";
import Process from "../components/Landing/Process";
import Steps from "../components/Landing/Steps";
import Why from "../components/Landing/Why";
import whyData from '../data/Why.json'
import categories from '../data/categories.json'
import SwiperCard from "../components/Landing/SwiperCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper'

// Import Swiper styles
import "swiper/css";

export default function Home() {
  return (
    <div className="bg-site_black max-w-[1920px] pt-8 flex flex-col items-center  w-full" >
      <Hero />
      <div className="flex  gap-14 px-6 sm:flex-row flex-col max-w-[700px] lg:max-w-[1050px] xl:max-w-[1200px] 2xl:max-w-[1383px]  flex-wrap justify-center xl:justify-between  w-full">
        <img src="/assets/images/landing/forbes.svg" alt="logos" />
        <img src="/assets/images/landing/shopify.svg" alt="logos" />
        <img src="/assets/images/landing/geek.svg" alt="logos" />
        <img src="/assets/images/landing/tech.svg" alt="logos" />
        <img src="/assets/images/landing/betakit.svg" alt="logos" />
      </div>
      <Steps />
      <div className="2xl:mt-[290px] relative px-6 md:px-8 xl:px-14 pb-[60px] xl:pb-[120px] rounded-xl  max-w-[900px] lg:max-w-[1000px] xl:max-w-[1420px] w-full xl:mt-[230px] lg:mt-[150px] mt-[100px]">
        <div className="bg-[#292929] xl:flex-row flex-col-reverse relative flex justify-between px-[40px] lg:px-[100px] rounded-[30px] py-[50px] lg:py-[95px]">
          <img src="/assets/images/landing/surag.svg" className="absolute top-[-5%] md:top-[-7%] left-[-2%]" alt="" />
          <div className="">


            <h2 className="md:max-w-[535px] font-bold md:text-left text-center md:w-auto w-full lg:text-[60px] text-4xl leading-[50px]  lg:leading-[70px] text-white">Find Best Deals in Your Way</h2>
            <div className="mt-[59px] flex md:flex-row flex-col gap-10 items-center">
              <div className="shadow-stepShadow rounded-[30px]">

                <div className="p-8 rounded-[30px] shadow-Shadow2">
                  <p className="text-xl md:text-2xl leading-8 text-white">Need Anything?</p>
                  <p className="text-base leading-[22px]  text-light_text max-w-[313px] mt-8 mb-14">Want any deal? Just Post Requirement & Get it done in lowest price OR Buy gig quickly to save bucks on all deals.</p>
                  <div className="flex items-center text-sm leading-[18px] text-site_yellow gap-5">
                    <p >Discover</p>
                    <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.4995 1.00005L16.1628 5.66831L11.4995 10.3366" stroke="#FFA31A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 5.6665H16" stroke="#FFA31A" strokeWidth={2} strokeLinecap="round" />
                    </svg>



                  </div>
                </div>
              </div>
              <div className="shadow-stepShadow rounded-[30px]">
                <div className="p-8 rounded-[30px] shadow-Shadow2 ">
                  <p className=" text-xl md:text-2xl leading-8 text-white">Have Something</p>
                  <p className="text-base leading-[22px]  text-light_text max-w-[313px] mt-8 mb-14">Want any deal? Just Post Requirement & Get it done in lowest price OR Buy gig quickly to save bucks on all deals.</p>
                  <div className="flex items-center text-sm leading-[18px] text-site_yellow gap-5">
                    <p >Create gig</p>
                    <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.4995 1.00005L16.1628 5.66831L11.4995 10.3366" stroke="#FFA31A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 5.6665H16" stroke="#FFA31A" strokeWidth={2} strokeLinecap="round" />
                    </svg>



                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="hidden xl:flex justify-center">
            <img className="xl:absolute top-[-12%] right-10 2xl:right-20" src="/assets/images/landing/lady.svg" alt="" />
          </div>

        </div>


        <div>

        </div>

      </div>
      {/* getting super discount */}
      <Process />
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


            <img src="/assets/images/landing/circle.svg" className="absolute md:flex hidden top-[-4%] left-0 xl:left-[2%] 2xl:left-[8%] 3xl:left-[10%]" alt="" />
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
      {/* browse */}
      <div className="relative  px-4 md:px-6 lg:px-8 xl:px-12  w-full max-w-[1260px] flex flex-col items-center xl:mt-[200px] mt-[130px] ">
        <div className="flex justify-between w-full items-center">

          <div className="max-w-[1260px] w-full">

            <p className="font-bold text-3xl xl:text-[55px] text-white max-w-[567px] xl:leading-[65px]">Browse From Best of
              the Deals</p>
          </div>
          <button>

            <svg className="md:block hidden absolute top-0 right-6 xl:right-0 2xl:right-auto" xmlns="http://www.w3.org/2000/svg" width="119.954" height="47.779" viewBox="0 0 119.954 47.779">
              <path id="Union_45" data-name="Union 45" d="M40.005,119.951a1.259,1.259,0,0,1-.892-.366l-15.22-15.22-15.22,15.22a1.305,1.305,0,0,1-1.815,0l-6.479-6.5a1.257,1.257,0,0,1,0-1.8L22.986,88.667a1.274,1.274,0,0,1,1.8,0l22.622,22.687a1.274,1.274,0,0,1,0,1.8l-6.5,6.5a1.261,1.261,0,0,1-.822.305ZM24.864,101.659l15.22,15.22,4.7-4.681L23.893,91.437,3.069,112.2l4.776,4.681,15.22-15.22a1.274,1.274,0,0,1,1.8,0ZM6.858,90.355l-6.479-6.5a1.257,1.257,0,0,1,0-1.8L22.986,59.453a1.274,1.274,0,0,1,1.8,0L47.408,82.06a1.274,1.274,0,0,1,0,1.8l-6.5,6.5a1.288,1.288,0,0,1-1.8,0l-15.22-15.22L8.673,90.355a1.305,1.305,0,0,1-1.815,0ZM24.864,72.428l15.22,15.22,4.7-4.681L23.893,62.143,3.069,82.967l4.776,4.681,15.22-15.22a1.274,1.274,0,0,1,1.8,0ZM6.858,60.822l-6.479-6.5a1.257,1.257,0,0,1,0-1.8L22.986,29.9a1.306,1.306,0,0,1,1.8,0L47.408,52.528a1.274,1.274,0,0,1,0,1.8l-6.5,6.5a1.321,1.321,0,0,1-.907.366,1.276,1.276,0,0,1-.892-.366L23.893,45.6,8.673,60.822a1.29,1.29,0,0,1-1.815,0ZM24.864,42.975l15.22,15.22,4.7-4.775L23.893,32.611,3.069,53.42l4.776,4.775,15.22-15.22a1.274,1.274,0,0,1,1.8,0ZM6.858,31.289l-6.479-6.5a1.257,1.257,0,0,1,0-1.8L22.986.372a1.274,1.274,0,0,1,1.8,0L47.408,23a1.274,1.274,0,0,1,0,1.8l-6.5,6.5a1.288,1.288,0,0,1-1.8,0l-15.22-15.22L8.673,31.289a1.305,1.305,0,0,1-1.815,0ZM24.864,13.442l15.22,15.22,4.7-4.775L23.893,3.078,3.069,23.887l4.776,4.775,15.22-15.22a1.274,1.274,0,0,1,1.8,0Z" transform="translate(0 47.779) rotate(-90)" fill="#f7971e" opacity="0.41" />
            </svg>
          </button>


        </div>
        <div className="flex md:flex-row flex-col mt-8 max-w-[1260px] md:justify-between gap-5 md:gap-0 w-full  md:items-center">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="rounded-xl shadow-stepShadow">

              <button className={` px-4 md:px-7 text-base md:text-lg  md:leading-7 font-medium shadow-Shadow2 py-[9px] md:py-4 ${true ? 'border border-[#745FEA] text-[#745FEA]' : 'text-white'} rounded-xl `}>Featured</button>
            </div>

            <div className="rounded-xl shadow-stepShadow">

              <button className={`px-4 md:px-7 text-base md:text-lg  md:leading-7 font-medium shadow-Shadow2 py-[9px] md:py-4 ${false ? 'border border-[#745FEA] text-[#745FEA]' : 'text-white'} rounded-xl `}>Featured</button>
            </div>

            <div className="rounded-xl shadow-stepShadow">

              <button className={`px-4 md:px-7 text-base md:text-lg  md:leading-7 font-medium shadow-Shadow2 py-[9px] md:py-4 ${false ? 'border border-[#745FEA] text-[#745FEA]' : 'text-white'} rounded-xl `}>Featured</button>
            </div>


          </div>
          <div className="w-full md:w-auto flex justify-end items-center">

            <button className="py-[9px] md:py-5  max-w-[180px] px-4 md:px-6 bg-site_yellow text-white font-medium text-base md:text-lg md:leading-7 rounded-xl">Start browsing</button>
          </div>
        </div>
        <div className="grid w-full gap-10 mt-10 grid-cols-1 lg:grid-cols-2">
          <Deal />
          <Deal />
          <Deal />
          <Deal />

        </div>

      </div>
      {/* 50 categories */}
      <div className="relative w-full px-4 md:px-6 lg:px-8 xl:px-12 flex max-w-[1286px] lg:mt-[100px] mt-10 xl:mt-[150px] items-center flex-col ">
        <img src="/assets/images/landing/arrowbars.svg" className="absolute max-h-[100px] lg:flex hidden left-6 xl:left-0 top-[-7%]" alt="" />

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
      <div className="relative w-full px-4 md:px-6 lg:px-8 xl:px-12 flex max-w-[1286px] lg:mt-[100px] mt-14 xl:mt-[150px] items-center flex-col ">
        <div className="mb-14 flex w-full justify-end">
          <img src="/assets/images/landing/karry.svg" alt="karry" />
        </div>
        <p className="max-w-[723px] text-center mb-[100px] lg:mb-[121px] xl:mb-[131px] sm:text-3xl text-2xl  lg:text-4xl xl:text-[55px] xl:leading-[65px] font-bold text-white">Don't Take Our Words,
          Take theirs.</p>
          <div className="relative slider w-full flex justify-between">
            <button className=" review-swiper-button-prev w-[40px] h-[40px] absolute top-[50%] left-[-33px]">
              <img src="/assets/images/landing/swiperprev.svg" className="w-full h-full" alt="" />
            </button>
            <Swiper 
            modules={[Navigation]}
            navigation={{
              nextEl: '.review-swiper-button-next',
              prevEl: '.review-swiper-button-prev',
            }}
             spaceBetween={40}
             slidesPerView={3}
             onSlideChange={() => console.log('slide change')}
             onSwiper={(swiper) => console.log(swiper)}
             loop={true}
             effect={"coverflow"}
             breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween:20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
            }}
             centeredSlides={true}
              
            
            >
              <SwiperSlide>

     <SwiperCard/>
              </SwiperSlide>
              <SwiperSlide>

<SwiperCard/>
         </SwiperSlide>
         <SwiperSlide>

<SwiperCard/>
         </SwiperSlide>
            </Swiper>
            <button className="review-swiper-button-next w-[30px] h-[30px] absolute top-[50%] right-[-13px]">
              <img src="/assets/images/landing/swipernext.svg" className="w-full h-full" alt="" />
            </button>

          </div>


      </div>
    </div>
  )
}
