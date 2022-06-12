import React, { useState } from 'react'
import Gig from '../components/Discover/Gig'
import Deal from '../components/Discover/Gig2'
import ServiceFoot from '../components/Requirement/ServiceFoot'
import GigData from '../data/Discovery.json'

const Discover = () => {
    const tabs = [{heading:'All',value:'all'},{heading:'Gigs',value:'gigs'},{heading:'Requirements',value:'requirements'},{heading:'Community posts',value:'community-posts'}]
    const [Activetab,setActivetab] = useState(tabs[0])
  return (
    <div className='flex flex-col items-center w-full'>
    <div className="max-w-[1291px]  mb-[200px]   mt-[70px] md:mt-[86px] lg:px-10 md:px-6 px-4 w-full ">
  <p className="font-bold xl:text-[55px]  text-center md:text-3xl text-xl  sm:text-2xl  lg:text-4xl xl:leading-[65px]  text-white">
  Discover
      </p>
      <div className='max-w-[672px] mt-10  md:mt-12 lg:mt-14 w-full flex justify-between items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl md:leading-[26px] text-white'>
{ tabs?.map((tab)=>{

 return   <p key={tab.value} onClick={()=>{setActivetab(tab);}} className={`${Activetab.value==tab.value?'text-site_yellow':'text-white'} cursor-pointer`}>{tab.heading}</p>
})}
      </div>
    <div className='max-w-[753px] mt-8 w-full lg:mt-[35px] shadow-stepShadow'>
    <div className=' px-4 md:px-6 py-5 md:py-7 shadow-Shadow2  w-full flex justify-between items-center gap-4 text-lg md:text-xl md:leading-[26px] text-white'>
<div className='flex gap-5 items-center '>
    <p className='text-base md:text-lg md:leading-4 '>Category</p>
    <p className='text-sm md:text-base sm:block hidden  text-light_text'>All</p>

</div>

<div className='flex gap-5 items-center '>
    <div className='flex gap-2 md:gap-[10px] items-center '>

    <p className='text-base md:text-lg md:leading-4 '>Sort By</p>
 <svg xmlns="http://www.w3.org/2000/svg" width="14.829" height="8.414" viewBox="0 0 14.829 8.414">
  <path id="Path_4188" data-name="Path 4188" d="M12,6,6,0,0,6" transform="translate(13.414 7.414) rotate(180)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
</svg>


    </div>
    <p className='text-sm sm:block hidden md:text-base  text-light_text'>By Newest</p>

</div>
<div className='flex gap-5 items-center '>
    <div className='flex gap-2 md:gap-[10px] items-center '>

    <p className='text-base md:text-lg md:leading-4 '>Filter</p>
<svg xmlns="http://www.w3.org/2000/svg" width="16.25" height="16.25" viewBox="0 0 16.25 16.25">
  <path id="Path_5426" data-name="Path 5426" d="M18.347,4.806H17.29a2.709,2.709,0,0,0-5.108,0H3.9a.9.9,0,1,0,0,1.806h8.279a2.709,2.709,0,0,0,5.108,0h1.057a.9.9,0,1,0,0-1.806ZM14.736,6.611a.9.9,0,1,0-.9-.9A.9.9,0,0,0,14.736,6.611ZM3,11.125a.9.9,0,0,1,.9-.9H4.96a2.709,2.709,0,0,1,5.108,0h8.279a.9.9,0,1,1,0,1.806H10.068a2.709,2.709,0,0,1-5.108,0H3.9A.9.9,0,0,1,3,11.125Zm4.514.9a.9.9,0,1,0-.9-.9A.9.9,0,0,0,7.514,12.028ZM3.9,15.639a.9.9,0,0,0,0,1.806h8.279a2.709,2.709,0,0,0,5.108,0h1.057a.9.9,0,1,0,0-1.806H17.29a2.709,2.709,0,0,0-5.108,0Zm11.736.9a.9.9,0,1,1-.9-.9A.9.9,0,0,1,15.639,16.542Z" transform="translate(-3 -3)" fill="#fff" fillRule="evenodd" />
</svg>



    </div>
    <p className='text-sm md:text-base sm:block hidden text-light_text'>(2)</p>

</div>
</div>
    </div>
<div className='flex justify-center items-center'>
<div className='grid grid-cols-1 mt-10  md:mt-12 lg:mt-14 lg:grid-cols-2 w-full sm:w-auto lg:w-full md:gap-6 gap-5 xl:gap-10'>
  {GigData?.length!=0?  GigData.map((gig,index)=>{
    return <Gig  gig={gig} key={index+Math.random()}/>
  }) : <p>No Gigs to display</p>

  }
<Deal sale={true} amount={'₹ 450'} availabe={{check:true,first:"Available",second:"Now"}} />
<Deal amount={'₹ 300'} availabe={'2 in Queue'} />
    </div>
</div>
   
 
      <ServiceFoot/>
      </div>


    </div>
  )
}

export default Discover