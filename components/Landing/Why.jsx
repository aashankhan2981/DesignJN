import React from 'react'
const Why = ({icon,heading,content}) => {
  return (
    <div className='max-w-[282px] h-full max-h-[340px] w-full rounded-[30px] shadow-stepShadow'>
        <div className='w-full relative rounded-[30px] h-full shadow-Shadow2  flex flex-col items-center py-[54px]'>
          <img src="/assets/images/landing/mask.png" className="absolute z-0 top-0 right-0" alt="" />


        <img src={`/assets/images/landing/${icon}.svg`} className="relative z-20" alt={icon} />
        <p className='mt-5 text-white text-center max-w-[176px] font-bold text-2xl leading-7'>{heading}</p>
        <p className='mt-[10px] text-light_text text-center max-w-[152px] text-lg leading-5'>{content}</p>

        </div>
    </div>
  )
}

export default Why