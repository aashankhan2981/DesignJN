import React from 'react'
import Gigs from './Gigs'
import GigData from '../data/Gigs.json'
const GigListing = () => {
  return (
    <div className='mt-10 w-full max-w-[1400px] md:mt-14 lg:mt-16 xl:mt-20 '>
        <div className='flex   mb-10 md:mb-12 lg:mb-14 items-end justify-between gap-5 md:flex-row flex-col px-4 md:px-6'>

         <p className="font-bold text-2xl md:text-3xl xl:text-[55px] text-light_text md:max-w-[636px] xl:leading-[65px]">Your Gigs</p>
         <p className='text-light_text border-b border-b-site_yellow'>See All</p>
        </div>
        <div className='grid-cols-2 grid gap-5 items-center w-full'>
            <Gigs gig ={GigData}/>
        </div>
    </div>
  )
}

export default GigListing