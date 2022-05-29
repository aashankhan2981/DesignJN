import React from 'react'

const Category = ({heading,content,icon}) => {
  return (
    <div className="rounded-[30px] md:max-w-[402px] justify-self-center  w-full shadow-stepShadow">

    <div className="md:max-w-[402px] px-8    shadow-stepShadow rounded-[30px] w-full py-10 lg:py-[53px]">
      <div className="flex md:justify-center gap-5 w-full items-center">
        <img src={`/assets/images/landing/${icon}.svg`} alt="" />
        <div className='max-w-[213px['>

<p className="font-bold text-2xl leading-7 text-white">{heading}</p>
<p className="text-lg leading-5 mt-[5px] text-light_text">{content}</p>
  </div>
      </div>
    


    </div>
    </div>
  )
}

export default Category