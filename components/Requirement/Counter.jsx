import React from 'react'

const Counter = ({setCount,count,width}) => {
  return (
    <div  className={`flex ${width?'gap-4 md:gap-7' :"gap-4"} justify-between md:max-w-max max-w-[204px] items-center px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[18px]  shadow-input rounded-[10px] w-full `} >
    <button className='w-7 h-7 rounded-full'  type='button' onClick={()=>{setCount(count-1)}}>

    <img  className='w-7 h-7 rounded-full' src="/assets/images/requirements/minus.svg" alt="" />
    </button>
    <p>{count}</p>
    <button type='button' onClick={()=>{setCount(count+1)}}>
    <img src="/assets/images/requirements/plus.svg" alt="" />

    </button>
    </div>
  )
}

export default Counter