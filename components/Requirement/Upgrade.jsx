import React from 'react'

const Upgrade = ({requirement,handleRequirement,ReqData,toggle,handleToggle}) => {
  return (
    <div className="mt-[68px] max-w-[1135px] w-full ">
  <div className="flex items-center gap-[30px] ">
    <p className="text-[22px] leading-[25px] text-white">Upgrade requirement</p>
    <div className='w-[30px]  h-[30px] rounded-full shadow-stepShadow'><button type="button" onClick={()=>{handleRequirement(!requirement)}} className='w-[30px] flex justify-center items-center shadow-Shadow2 h-[30px] rounded-full'>
                      <svg className={`${requirement ?'rotate-180':"rotate-0"} transition-all duration-1000 ease-in-out `} width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5036 6.50031L5.8353 1.83704L1.16704 6.50031" stroke="#FFA31A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
</svg>
                           

                           </button></div>

  </div>
   <div className="flex flex-col gap-[30px] mt-[30px] justify-center w-full">
     {
       ReqData?.map((item,index)=>{
         return <div key={index+Math.random()} className="flex gap-5 items-end flex-col justify-center">

           <div className="flex gap-[30px] items-center w-full">
           <div className='w-[30px] h-[30px] rounded-md shadow-stepShadow'>
        <button onClick={()=>{handleToggle(index)}} className='w-[30px] h-[30px] flex items-center justify-center rounded-md shadow-Shadow2'>
        <svg className={`${toggle&&toggle[index]?'block':'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="19.219" height="12.611" viewBox="0 0 19.219 12.611">
  <path id="Path_5358" data-name="Path 5358" d="M2026.454,558.5l4,5,11-9" transform="translate(-2024.346 -552.389)" fill="none" stroke="#ffa31a" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
</svg>



        </button>

    </div>
    <img src={`/assets/images/requirements/${item.heading}.svg`} alt="" />
    <p className="text-xl text-white leading-[25px]">{item.money}</p>
           </div>
         <p className="text-lg max-w-[1075px] leading-[25px] text-light_text">{item.content}</p>

         </div>
       })
     }

   </div>
</div>
  )
}

export default Upgrade