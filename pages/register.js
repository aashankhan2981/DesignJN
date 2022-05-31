import React,{useState} from 'react'
import Link from 'next/link'
const Index = () => {
    const [checkbox,setChecked] = useState(false)
  return (
    <div className='mt-5 lg:mt-[60px] pb-24 max-w-[1920px] w-full  md:px-8 px-6 lg:px-14 xl:px-[100px] 2xl:px-[150px]'>
        <div className='flex lg:mb-0 mb-5 justify-between w-full items-center '>

            <div className='flex gap-3 items-center'>
        <div className=" w-[30px] z-30 h-[30px]   shadow-stepShadow rounded-full">
            <button className="flex items-center  justify-center shadow-Shadow2 w-[30px] h-[30px] rounded-full ">
              <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.68671 1.50001L1.01971 6.16601L5.68671 10.833" stroke="#FFA31A" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </button>
          </div>
             <p className='text-base leading-[18px] text-light_text'>Back</p></div>
             <img src="/assets/images/login/plus.svg" alt="" />

        </div>

        <div className='flex justify-between gap-4 lg:flex-row flex-col-reverse items-center '>
            <img src="/assets/images/register/girl.svg" className='2xl:w-2/3 w-1/2' alt="girl" />
            <div className=' max-w-[520px] w-full'>
            <p className="font-bold xl:text-[55px] lg:text-left text-center md:text-3xl text-2xl  lg:text-4xl xl:leading-[65px]  text-white">Hey Stranger, </p>

          <p className="mt-2  text-white text-base sm:text-lg md:text-xl lg:text-left text-center lg:leading-[22px] font-semibold lg:max-w-[452px] ">Let's introduce yourself. </p>
          <form action="#" className="flex flex-col items-center lg:items-start mt-[25px] ">

<input type="text" required  placeholder="Full Name" className="mb-[25px] px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />
<input type="email" required  placeholder="Email Address" className="mb-[25px] px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />
<input type="tel"  required placeholder="Mobile No" className="mb-[25px] px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />
<input type="password" required  placeholder="Password" className="mb-[25px] px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />
<div className='mt-[30px]  flex gap-5 items-start'>

    {/* <input type="checkbox" name="privacy" className='w-[30px] h-[30px]' id="" /> */}
    <div className='w-[30px] h-[30px] rounded-md shadow-stepShadow'>
        <button onClick={()=>{setChecked(!checkbox)}} className='w-[30px] h-[30px] flex items-center justify-center rounded-md shadow-Shadow2'>
        <svg className={`${checkbox?'block':'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="19.219" height="12.611" viewBox="0 0 19.219 12.611">
  <path id="Path_5358" data-name="Path 5358" d="M2026.454,558.5l4,5,11-9" transform="translate(-2024.346 -552.389)" fill="none" stroke="#ffa31a" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
</svg>



        </button>

    </div>
    <p className='text-[15px] leading-[22px] text-light_text'>By clicking Signup, you agree to our <span className='text-site_yellow underline'>terms of services</span>  and that
you have read our data use policy, including our cookie use</p>

</div>
<button type="submit" className='w-full  bg-gradient-to-l from-[#FFA31A] to-[#FEB12E] flex items-center justify-center py-[9px]  md:py-4 font-medium text-base sm:text-lg sm:leading-[27px] text-white rounded-xl mt-6 before:'>Signup</button>
<div className='flex md:flex-row flex-col gap-5 items-center w-full mt-[25px]'>


<div className='w-full rounded-xl shadow-stepShadow '>

<button  className='w-full px-4 shadow-Shadow2 gap-4 flex items-center justify-center py-[9px]  md:py-4 font-medium text-base sm:text-lg sm:leading-[27px] text-white rounded-xl  '>
<svg xmlns="http://www.w3.org/2000/svg" width="19.305" height="19.78" viewBox="0 0 19.305 19.78">
  <path id="Union_48" data-name="Union 48" d="M1.051,14.329A9.89,9.89,0,0,1,9.85,0a9.442,9.442,0,0,1,6.588,2.571L13.658,5.3A5.448,5.448,0,0,0,9.85,3.824,5.956,5.956,0,0,0,4.235,7.934,6.415,6.415,0,0,0,3.918,9.89a6.107,6.107,0,0,0,.328,1.956,5.932,5.932,0,0,0,5.6,4.11,5.814,5.814,0,0,0,3.415-.989,4.835,4.835,0,0,0,2.014-3.209H9.85V8.088H19.1a8.5,8.5,0,0,1,.208,2.022,9.691,9.691,0,0,1-2.933,7.275,9.364,9.364,0,0,1-6.522,2.4A9.838,9.838,0,0,1,1.051,14.329Z" fill="#f7971e" />
</svg>


Login with Google</button>
</div>
<div className='w-full rounded-xl shadow-stepShadow'>

<button  className='w-full px-4  shadow-Shadow2 gap-4 flex items-center justify-center py-[9px]  md:py-4 font-medium text-base sm:text-lg sm:leading-[27px] text-white rounded-xl  '>
    
<svg xmlns="http://www.w3.org/2000/svg" width="11.942" height={23} viewBox="0 0 11.942 23">
  <path id="Path_5355" data-name="Path 5355" d="M490.942.166V3.815h-2.17a2.031,2.031,0,0,0-1.6.5,2.29,2.29,0,0,0-.415,1.493V8.418h4.05l-.539,4.091h-3.511V23h-4.23V12.509H479V8.418h3.525V5.4a5.347,5.347,0,0,1,1.438-3.988A5.217,5.217,0,0,1,487.791,0,22.866,22.866,0,0,1,490.942.166Z" transform="translate(-479)" fill="#f7971e" />
</svg>


Login with Facebook
</button>
</div>
</div>

<p className='text-lg leading-[25px] mt-10 text-center w-full xl:mt-[60px] text-light_text'>
Have account ?  <span className='text-[#745FEA]'><Link href={'/login'}>Login Here</Link> </span> </p>

</form>

            </div>

        </div>
       <svg xmlns="http://www.w3.org/2000/svg" width="80.46" height="37.8" viewBox="0 0 80.46 37.8">
  <path id="Union_49" data-name="Union 49" d="M34.142,80.46V0H37.8V80.46Zm-8.536,0V0h3.659V80.46Zm-8.535,0V0h3.658V80.46Zm-8.536,0V0h3.658V80.46ZM0,80.46V0H3.658V80.46Z" transform="translate(80.46) rotate(90)" fill="#ffa31a" opacity="0.46" />
</svg>


    </div>
  )
}

export default Index