import React from 'react'

const Card = ({lastImage,available,hoverd,step3,tag}) => {
  return (
    <div className='lg:max-w-[535px] w-full rounded-[26px] shadow-stepShadow'>
    <div className='relative w-full  px-4 md:px-6 xl:px-7  pt-14 pb-5 md:pb-7 md:pt-[75px] w-fulll rounded-[26px] shadow-Shadow2 '>
      { tag!='none'&&  <img src={`/assets/images/requirements/${tag?tag:'recommended'}.svg`} className='top-0 left-0 absolute' alt="" />}
        {step3 && <button className='absolute right-5 top-5'><svg id="Component_16_28" data-name="Component 16 – 28" xmlns="http://www.w3.org/2000/svg" width={6} height={26} viewBox="0 0 6 26">
  <path id="Path_4176" data-name="Path 4176" d="M12.889,8.778A2.889,2.889,0,1,0,10,5.889,2.889,2.889,0,0,0,12.889,8.778Zm0,14.444a2.889,2.889,0,1,0,2.889,2.889A2.889,2.889,0,0,0,12.889,23.222Zm0-10.111A2.889,2.889,0,1,0,15.778,16,2.889,2.889,0,0,0,12.889,13.111Z" transform="translate(-9.889 -3)" fill="#fff" />
  <circle id="Ellipse_729" data-name="Ellipse 729" cx={3} cy={3} r={3} transform="translate(0 10.111)" fill="#ffa31a" />
</svg>

</button> }
         <div className='flex sm:flex-row flex-col  sm:justify-between items-center sm:items-start gap-4 relative w-full'>
             <div className='flex gap-3 items-center  '>

             <div className='h-[59px] w-[59px] rounded-full'> <img src="/assets/images/requirements/cardprofile.svg" alt="profile image" /> </div>
             <div>

             <p className='text-lg md:text-xl md:text-6 text-white font-semibold'>Buyer's Name</p>
             <p className='text-sm text-site_yellow '>@username</p>
             </div>
            

            <img src="/assets/images/requirements/fifty_percent.svg" alt="fifty percent" />
             </div>
             <div className='sm:w-auto w-full flex flex-col gap-[10px] '>

             <div className='flex gap-2 sm:flex-row flex-col  items-center'>
                 <img src="/assets/images/requirements/stars.svg" className='xl:max-w-max max-w-[70px]' alt="" />
                 <p className='text-[11px] text-light_text'>(55 Reviews)</p>

             </div>
             <div className='flex  items-center sm:w-auto w-full justify-between gap-4'>
                 <div className='flex   gap-[6px] items-center'>

       <svg xmlns="http://www.w3.org/2000/svg" width="16.607" height="16.607" viewBox="0 0 16.607 16.607">
  <path id="Path_5422" data-name="Path 5422" d="M40.3,23.992A8.313,8.313,0,0,0,32,32.3v7a1.3,1.3,0,0,0,1.3,1.3h7a8.3,8.3,0,0,0,0-16.607Zm-3.986,9.632a1,1,0,1,1,1-1,1,1,0,0,1-1,1Zm3.986,0a1,1,0,1,1,1-1,1,1,0,0,1-1,1Zm3.986,0a1,1,0,1,1,1-1,1,1,0,0,1-1,1Z" transform="translate(-32 -23.992)" fill="gray" />
</svg>

<p className='text-xs text-light_text'>60%</p>
                 </div>
                 <div className='flex gap-[6px] items-center'>
<svg xmlns="http://www.w3.org/2000/svg" width="13.412" height="17.619" viewBox="0 0 13.412 17.619">
  <path id="Path_5424" data-name="Path 5424" d="M9.684.625A.854.854,0,0,0,8.456,1.688c.995,2.336.733,3.45.489,3.9a1.216,1.216,0,0,1-.853.631c-.46.085-.807-.824-.813-.83a.848.848,0,0,0-.733-.568.858.858,0,0,0-.818.438c-1.506,2.745-1.9,5.32-1.177,7.662a9.255,9.255,0,0,0,4.3,5.1.834.834,0,0,0,.381.091A.844.844,0,0,0,9.8,17.9a.859.859,0,0,0,.239-.932c-.261-.71-.722-2.768.233-3.774a8.831,8.831,0,0,0,1.273-1.66c2.285,3.592,1.063,4.717,1.04,4.746-.006,0-.006.006-.011.006a.855.855,0,0,0,.966,1.41c0-.006.006-.006.011-.011C16.323,15.75,17.687,13.5,17.607,11,17.437,5.428,10,.819,9.684.625Z" transform="translate(-4.198 -0.501)" fill="gray" />
</svg>



<p className='text-xs text-light_text'>6</p>
     </div>
     <div className='flex gap-[6px] items-center'>

<svg xmlns="http://www.w3.org/2000/svg" width="16.607" height="16.607" viewBox="0 0 16.607 16.607">
<path id="Path_5422" data-name="Path 5422" d="M40.3,23.992A8.313,8.313,0,0,0,32,32.3v7a1.3,1.3,0,0,0,1.3,1.3h7a8.3,8.3,0,0,0,0-16.607Zm-3.986,9.632a1,1,0,1,1,1-1,1,1,0,0,1-1,1Zm3.986,0a1,1,0,1,1,1-1,1,1,0,0,1-1,1Zm3.986,0a1,1,0,1,1,1-1,1,1,0,0,1-1,1Z" transform="translate(-32 -23.992)" fill="gray" />
</svg>
<p className='text-xs text-light_text'>55</p>
     </div>


             </div>
  
             </div>


         </div>


     {step3?
     <div className='w-full mt-8 flex gap-4 justify-between items-center'>
         <div>
        <p className='text-xl sm:text-2xl lg:text-3xl xl:text-5xl text-white font-bold'> ₹ 150 </p> 
        <p className='text-sm md:text-base text-light_text'>in 15 min</p>
         </div>
         <div className='flex gap-4 items-center'>
         <div className=' rounded-xl shadow-stepShadow'>
    <button  className='text-sm text-light_text flex gap-2 items-center px-4 md:px-6 py-2 md:py-[10px]  rounded-xl shadow-Shadow2'>
    <img src="/assets/images/requirements/cross.svg" alt="cross" />
    Reject
    </button>

</div>
<div className=' rounded-xl shadow-stepShadow'>
    <button  className='text-sm text-light_text flex gap-2 items-center px-4 md:px-6 py-2 md:py-[10px]  rounded-xl shadow-Shadow2'>
    <img src="/assets/images/requirements/tick.svg" alt="tick" />
    Accept
    </button>

</div>

         </div>

     </div>
     :
     <div className='mt-5 md:mt-7 lg:mt-8 flex flex-wrap  gap-4 md:gap-5 items-center'>
    <p className='text-base md:text-lg md:leading-6 text-white'>Available for </p>
<div className=' rounded-xl shadow-stepShadow'>
    <button  className='text-sm text-light_text px-4 py-2 md:py-[10px]  rounded-xl shadow-Shadow2'>
    Mobile Recharge
    </button>

</div>
<div className=' rounded-xl shadow-stepShadow'>
    <button  className='text-sm text-light_text px-4 py-2 md:py-[10px]  rounded-xl shadow-Shadow2'>
    Mobile Recharge
    </button>

</div>
<div className=' rounded-xl shadow-stepShadow'>
    <button  className='text-sm text-light_text px-4 py-2 md:py-[10px]  rounded-xl shadow-Shadow2'>
    Mobile Recharge
    </button>

</div>
<div className=' rounded-xl shadow-stepShadow'>
    <button  className='text-sm text-light_text px-4 py-2 md:py-[10px]  rounded-xl shadow-Shadow2'>
    Mobile Recharge
    </button>

</div>
<div className=' rounded-xl shadow-stepShadow'>
    <button  className='text-sm text-light_text px-4 py-2 md:py-[10px]  rounded-xl shadow-Shadow2'>
    Mobile Recharge
    </button>

</div>
</div>}
{step3? 

<div className='flex w-full justify-between mt-10 md:mt-12 lg:mt-14 items-center gap-4'>
    <div className='flex gap-3 md:gap-4'>
        <img src="/assets/images/requirements/chatCard.svg" alt="chat" />
        <p className='text-base md:text-lg text-light_text'>I will do extra and provide quality</p>
    </div>
    <button className='px-4 md:px-5 py-[10px] rounded-full border border-site_yellow text-site_yellow text-[15px] font-medium'>
        Chat
    </button>

</div>
:<div className='flex w-full justify-end items-center gap-5 md:gap-7 lg:gap-[30px] mt-7 md:mt-8'>
    <div className='flex items-center gap-2 text-base md:text-lg md:leading-6 font-medium text-white'>
        <img src={`/assets/images/requirements/${lastImage}.svg`} alt="" />
        {available}
    </div>
   <button className={`text-white ${hoverd? 'bg-[#60471E]':"bg-site_yellow"} rounded-xl py-[9px] md:py-3 w-full max-w-[180px] lg:py-4 xl:py-5 `}>{hoverd?"Invited":'Invite'}</button>

</div>}
    </div>

    

</div>
  )
}

export default Card