import React,{useState} from 'react'
import ServiceFoot from '../components/Requirement/ServiceFoot'
import Steps from '../data/ReqDetailSteps.json'
const Index = () => {
    const [ActiveStep,setActive] = useState(1)
   return (
    <div className="max-w-[1291px] mb-[200px]  mt-[70px] md:mt-[86px] lg:px-10 md:px-6 px-4 w-full ">
  <p className="font-bold xl:text-[55px]  text-center md:text-3xl text-xl  sm:text-2xl  lg:text-4xl xl:leading-[65px]  text-white">
  Requirement Details
      </p>
      <div className='flex mt-9 md:mt-12 lg:mt-14 sm:flex-row flex-col gap-5  w-full justify-between items-center'>
          <div className='flex sm:w-1/2 items-center   gap-5 md:gap-6 xl:gap-10  '>
              <button className='border border-[#15D807] w-full max-w-[140px] py-[9px] sm:py-3 md:py-[14px] flex items-center justify-center rounded-full text-base text-[#15D807] md:leading-7 md:text-lg'>Open</button>
              <p className=' text-lg md:text-xl md:leading-[26px] text-white font-medium md:font-semibold  md:max-w-[374px]'>Need Airtel Mobile Recharge of ₹299</p>
          </div>
          <button className='bg-[#FFA31A] md:py-4 2xl:py-5 py-3 text-base md:text-lg md:leading-7 text-white rounded-md px-5 md:px-7 xl:px-8 flex items-center gap-1 '>
              <img src="/assets/images/requirements/diamond.svg" alt="diamond" />
              Promote
          </button>
          <div>

          </div>

      </div>
      <div className='flex mt-9 md:mt-12 lg:mt-14  md:flex-nowrap flex-wrap gap-5  w-full justify-between items-center'>
          {Steps?.map((item)=>{
              return <div  key={item.step + " step "}>
              <img src={`/assets/images/requirements/step${item.step}${ActiveStep==item.step?'fill':''}.svg`} className="xl:max-w-max lg:max-w-[200px] md:max-w-[165px] max-w-[137px]" alt={`steps`+item.step} />
              <p className={`text-lg md:text-xl text-center xl:text-2xl ${item.step==ActiveStep?'text-white':'text-light_text'}`}>{item?.heading1}</p>
              <p className={`${item.step==ActiveStep?'text-white':'text-light_text'} text-center ${item.step==1?'text-lg md:text-xl text-center xl:text-2xl':'text-lg leading-7'}`}>{item?.heading2}</p>
          </div>
        })}
          
    </div>
    <div className='flex mt-9 md:mt-12 lg:mt-14 sm:flex-nowrap flex-wrap  gap-5  w-full justify-between items-start text-base sm:text-lg md:text-xl xl:text-2xl text-white xl:leading-6'>
        <div className='flex sm:w-1/2 items-start   gap-5 md:gap-6 xl:gap-10 '>
            <p>ID#123</p>
            <p>Recharge & Bill / Mobile Recharge</p>
        </div>
        <p>Posted 22 July 2022, 09:44 PM</p>
    </div>
    {/* third seciton */}
    <div className='flex mt-9 sm:flex-row flex-col md:mt-12 lg:mt-14  gap-5  w-full justify-between items-center text-lg md:text-xl xl:text-2xl text-white xl:leading-6'>
        <div className='flex sm:w-1/2 items-center   gap-5 md:gap-6 xl:gap-10 '>
        <button className='border border-light_text w-full max-w-[140px] py-[14px] flex items-center justify-center rounded-full px-6 text-base text-light_text md:leading-7 md:text-lg'>Public</button>

        <button className='border border-site_yellow w-full max-w-[140px] py-[14px] flex items-center justify-center rounded-full px-6 text-base text-site_yellow md:leading-7 md:text-lg'>Urgent</button>

        </div>
        <p><span className='text-[#FF0000]'>Expires</span>  in 00:00:30 </p>
    </div>
    {/* fourth section */}
    <div className=' mt-9 md:mt-12 lg:mt-14 flex justify-center    w-full '>
        <img src="/assets/images/requirements/reqbackground.svg" className='w-full object-contain object-center' alt="req background" />
</div>
{/* fifth section */}
<div className='mt-[30px] max-w-[906px] w-full '>
    <p className='text-lg md:text-xl md:leading-[25px] text-light_text'>Description</p>
    <p className='text-sm leading-4 text-white mt-5 sm:mt-6 md:mt-8 ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium dolor etiam elementum. Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Sed pretium dolor etiam elementum. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Se pretium dolor etiam elementum. </p>

</div>
{/* sixth section */}
<div className='mt-[60px] md:mt-20 xl:mt-24 max-w-[337px] w-full flex items-end justify-between gap-4'>
    <div>
        <p className='text-lg mb-7 md:text-xl md:leading-6 text-light_text'>Value</p>
        <p className='text-xl md:text-2xl md:leading-5 text-white'>₹ 200</p>


    </div>

     <div>
    <p className='text-xl md:text-2xl md:leading-5 text-white'>X</p>
         
     </div>
     <div>
        <p className='text-lg mb-7 md:text-xl md:leading-6 text-light_text'>Quantity</p>
        <p className='text-xl md:text-2xl md:leading-5 text-white'>2</p>


    </div>
</div>
<div className=''>
        <p className='text-lg mt-10 xl:mt-12 mb-7 md:text-xl md:leading-6 text-light_text'>Total amount </p>
        <p className='text-xl md:text-2xl md:leading-5 text-white'>₹ 400</p>


    </div>
{/* Attract bids */}
<div className='flex max-w-[739px] sm:flex-row flex-col w-full gap-4 justify-between mt-9 md:mt-12 items-center'>
    <img src="/assets/images/requirements/attractbid.svg" alt="attract bid" />
    <div className='flex flex-col gap-1 '>
        <p className='text-white text-xl sm:text-2xl lg:text-[28px] '>7</p>
        <p className='text-light_text text-lg md:text-xl md:leading-7 '>Bids</p>
    </div>
    <div className='flex flex-col gap-1 '>
        <p className='text-white text-xl sm:text-2xl lg:text-[28px] '>₹ 150</p>
        <p className='text-light_text text-lg md:text-xl md:leading-7 '>Highest</p>
    </div>
    <div className='flex flex-col gap-1 '>
        <p className='text-white text-xl sm:text-2xl lg:text-[28px] '>₹ 120</p>
        <p className='text-light_text text-lg md:text-xl md:leading-7 '>Lowest</p>
    </div>

</div>

<div className='max-w-[496px] mt-10 md:mt-14 lg:mt-16 gap-5 sm:text-lg md:text-xl md:leading-6  w-full flex flex-col '>
    <div className='flex justify-between w-full gap-2 items-center'>
     <p className='text-light_text'>Asked question:</p>
     <p className='text-white'>What is source of recharge?</p>
    </div>
    <div className='flex justify-between w-full items-center'>
    <p className='text-light_text'>GST information:</p>
     <p className='text-white'>7RIndia   ABCD1234567890</p>

</div>

</div>
{/* Second last section */}
<div className='flex mt-10 max-w-[1050px] md:mt-14 sm:flex-row flex-col  justify-between gap-5 items-center w-full'>
    <div className='max-w-[439px] w-full shadow-stepShadow rounded-xl'>
        <button className='rounded-xl flex items-center justify-center w-full text-site_yellow shadow-Shadow2 py-3 md:py-4'>
        Edit Requirement


        </button>
    </div>
    <div className='max-w-[439px] w-full shadow-stepShadow rounded-xl'>
        <button className='rounded-xl flex items-center justify-center w-full text-site_yellow shadow-Shadow2 py-3 md:py-4'>
        Delete Requirement


        </button>
    </div>
    <button className='text-lg md:text-xl md:leading-6 text-[#745FEA] flex justify-center items-center gap-4'>
        <img src="/assets/images/requirements/share.svg" alt="share icon" />
        Share
    </button>

</div>
<ServiceFoot/>
    </div>
  )
}

export default Index