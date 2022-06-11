import React from 'react'
import Gigs from './Gigs'
import GigData from '../data/Gigs.json'
const GigListing = () => {
  return (
  <div className='mt-10 w-full flex flex-col md:items-start items-center max-w-[1400px] md:mt-14 lg:mt-16 xl:mt-20 px-4 md:px-6'>
      <div className='flex w-full  mb-10 md:mb-12 lg:mb-14 items-end justify-between gap-5 flex-row '>

        <p className="font-bold text-2xl md:text-3xl xl:text-[55px] text-light_text md:max-w-[636px] xl:leading-[65px]">Your Gigs</p>
        <p className='text-light_text border-b border-b-site_yellow'>See All</p>
      </div>
      <div className= 'grid-cols-1 md:grid-cols-2 grid gap-5 items-center md:w-full'>
          <Gigs gig ={GigData}/>
          <Gigs gig ={GigData}/>
      </div>
  </div>
  )
}

export default GigListing