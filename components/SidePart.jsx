import React from 'react'

const SidePart = ({sidebarItems,toggleCheck,toggle,setToggleCheck}) => {
  return (
    <div className={`max-w-[120px] pt-[50px] gap-[35px] items-center justify-start flex-col 2xl:max-w-[150px] px-4 xl:flex ${toggle?'flex overflow-y-auto h-screen pb-3':'hidden '} bg-site_black w-full min-h-screen `}>
    <div className='flex flex-col items-center justify-center'>
 <img className='w-[42px] md:w-auto' src="/assets/images/requirements/profile.svg" alt="profile" />
 <p className='text-base md:text-xl text-white leading-[30px]'>Raj L</p>

    </div>
    <div  className=" form-check form-switch">
<input style={{background:`${toggleCheck?`url('/assets/images/requirements/checkbox.svg')`:''}`}} className=" form-check-input appearance-none w-[47px] -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" checked={toggleCheck} onChange={(e)=>{setToggleCheck(e.target.checked);}}  type="checkbox" role="switch" id="flexSwitchCheckChecked" />
</div>
{sidebarItems?.map((item,index)=>{
return <button className='sm:w-auto w-[33px]' key={index+Math.random()}>
<img src={`/assets/images/requirements/sidebar${index+1}.svg`} alt="" />
</button>

})}


         
    
     </div>  
  )
}

export default SidePart