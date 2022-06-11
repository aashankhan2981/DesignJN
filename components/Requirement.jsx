import React from 'react'
import Deal from './Landing/Deal'

const Requirement = () => {
  return (
    <div className='mt-10 w-full flex-col flex items-center lg:tems-start  max-w-[1400px] px-4 md:px-6 md:mt-14 lg:mt-16 xl:mt-20 '>
        <div className='flex  w-full mb-10 md:mb-12 lg:mb-14 items-end justify-between gap-5 flex-row  '>

         <p className="font-bold text-2xl md:text-3xl xl:text-[55px] text-light_text md:max-w-[636px] xl:leading-[65px]">Your Requirements</p>
         <p className='text-light_text border-b border-b-site_yellow'>See All</p>
        </div>
        <div className='grid-cols-1 lg:grid-cols-2  grid gap-5 items-center lg:w-full'>
            <Deal title={'Mobile Recharge'} id={'SR#123'} updateDesign={true}  description={'Need Prepaid Mobile Recharge Of Airtel 3 Month Plan '}/>
            <Deal title={'Mobile Recharge'} id={'SR#123'} updateDesign={true} topheading={true} description={'Need Prepaid Mobile Recharge Of Airtel 3 Month Plan '}/>
        </div>
    </div>
  )
}

export default Requirement