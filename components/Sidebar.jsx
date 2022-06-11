import Image from 'next/image'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import Bars from '../public/assets/images/header/bars.svg'
import Logo from '../public/assets/images/header/logo.svg'
import sidebarItems from '../data/sidebar.json'
import SidePart from './SidePart'
const Sidebar = ({children}) => {
    const [toggle,setToggle] = useState(false)
    const [toggleCheck,setToggleCheck] = useState(true)
    const [value,setValue] = useState('')
    const handleToggle = (e) => { 
        setToggle(!toggle)
    

         }
         useEffect(() => {
if(value.length!=0) {
  const timer = setTimeout(() => {
    console.log('Api Call')
  }, 500)
  return () => {
    clearTimeout(timer)
  }
}
         },[value])
        
         const handleChange = (e)=>{
            

          setValue(e.target.value)
           

         }
  return (
    <div className='flex w-full'>

    <SidePart toggle={false} toggleCheck={toggleCheck} setToggleCheck={setToggleCheck} sidebarItems={sidebarItems} /> 
      <div className='w-full '>

      <div className='sticky top-0 z-50 w-full'>
        <div className=' bg-site_black z-[60] 2xl:gap-10 relative max-w-[1920px] w-full md:pr-8 pr-6 lg:pr-14 xl:pr-[40px] gap-6 3xl:pr-[150px] hidden xl:flex justify-start items-center h-[90px] xl:h-[120px]'>
        <div className='flex  3xl:gap-5 gap-3  items-center'>

<Image src={Bars} />
<Link href={'/'}>
    <button className='mt-1.5'>

    <Image src={Logo} />
    </button>
</Link>
</div>
<div className='flex justify-between items-center  shadow-input rounded-[10px] gap-4 pl-5 bg-site_black w-full xl:max-w-[300px] 3xl:max-w-[400px] 3xl:max-w-[540px]'>

<img src="/assets/images/requirements/searchbar.svg" alt="monkey" />
<input onChange={handleChange} type="text" required placeholder="Mobile Recharge" className="  rounded-l-[10px] text-[15px] leading-[18px]  py-[22px] outline-none text-light_text bg-transparent  h-full w-full" />

</div>
                    <Link href={''}>
                        <button className='text-white font-medium text-base 3xl:text-lg 3xl:leading-7'> <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26">
  <path id="Path_5446" data-name="Path 5446" d="M15,2A13,13,0,1,0,28,15,13,13,0,0,0,15,2Zm1.3,23.309V24.1a1.3,1.3,0,0,0-2.6,0v1.209A10.4,10.4,0,0,1,4.691,16.3H5.9a1.3,1.3,0,0,0,0-2.6H4.691A10.4,10.4,0,0,1,13.7,4.691V5.9a1.3,1.3,0,0,0,2.6,0V4.691A10.4,10.4,0,0,1,25.309,13.7H24.1a1.3,1.3,0,0,0,0,2.6h1.209A10.4,10.4,0,0,1,16.3,25.309ZM19.082,9.215l-6.5,2.756a1.3,1.3,0,0,0-.676.676l-2.756,6.5a1.309,1.309,0,0,0,1.183,1.82,1.209,1.209,0,0,0,.52-.117l6.5-2.756a1.3,1.3,0,0,0,.676-.676l2.756-6.5a1.3,1.3,0,0,0-1.7-1.7Zm-3.237,6.63-2.964,1.3,1.3-2.964,2.964-1.3Z" transform="translate(-2 -2)" fill="#fff" />
</svg>

 </button>
                    </Link>
                    <Link href={''}>
                        <button className='text-white 3xl:max-w-max max-w-[94px] 3xl:w-auto w-full   font-medium text-base 3xl:text-lg 3xl:leading-7'> Create gig </button>
                    </Link>
                    <Link className='/post-service' href={''}>
                        <button className='header-button px-[10px] w-[160px] 3xl:w-auto  py-4 3xl:px-6 text-site_yellow rounded-xl 3xl:py-5 font-medium text-base 3xl:text-lg 3xl:leading-7'>Post requirement </button>
                    </Link>
                    <div className='max-w-[81px] flex  gap-1 items-center w-full'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="36.297" height="30.064" viewBox="0 0 36.297 30.064">
  <path id="Union_76" data-name="Union 76" d="M4.962,30.064A4.969,4.969,0,0,1,0,25.1V4.966A4.97,4.97,0,0,1,4.962,0H31.334A4.968,4.968,0,0,1,36.3,4.966V25.1a4.967,4.967,0,0,1-4.962,4.962ZM2.438,4.966V25.1a2.529,2.529,0,0,0,2.525,2.526H31.334v0a2.527,2.527,0,0,0,2.525-2.52v-4.43h-6.4a5.64,5.64,0,1,1,0-11.281h6.4V4.966a2.529,2.529,0,0,0-2.525-2.524H4.962A2.529,2.529,0,0,0,2.438,4.966Zm21.816,10.07a3.2,3.2,0,0,0,3.2,3.2h6.4v-6.4h-6.4A3.2,3.2,0,0,0,24.254,15.037Zm1.728,1.215a1.219,1.219,0,1,1,0-2.438h3.2a1.219,1.219,0,1,1,0,2.438Z" fill="#fff" />
</svg>
<div className='flex-col flex gap-1'>

  <p className='text-[11px] leading-3 text-left font-semibold text-site_yellow'>₹ 500</p>
  <div className='flex items-center'> 
<img src="/assets/images/requirements/coin.svg" className='w-[11px] h-[11px] rounded-full' alt="monkey" />
<p className='text-[11px]  text-left font-semibold leading-3 text-white'>2000</p>

  


  </div>

</div>


                    </div>

                   <button>
                 <svg xmlns="http://www.w3.org/2000/svg" width="30.368" height="30.064" viewBox="0 0 30.368 30.064">
  <g id="Group_564" data-name="Group 564" transform="translate(-1592.632 -46.204)">
    <path id="Path_5384" data-name="Path 5384" d="M586.28,296.248a2.335,2.335,0,0,1-1.039-1.381l-1.107-3.81a42.333,42.333,0,0,1-.938-4.37,9.658,9.658,0,0,0-6.051-7.411,3.506,3.506,0,1,0-7.012,0,9.66,9.66,0,0,0-6.051,7.411,42.252,42.252,0,0,1-.936,4.356l-1.106,3.8h0a2.329,2.329,0,0,1-1.065,1.4,2.865,2.865,0,0,0-.64.479,2.982,2.982,0,0,0-.871,2.335,3.031,3.031,0,0,0,3.038,2.77h6.224a5.013,5.013,0,0,0,9.82,0h6.281a2.973,2.973,0,0,0,1.457-5.577Zm-12.643-18.436a1.491,1.491,0,0,1,1.373.912,9.726,9.726,0,0,0-2.747,0A1.493,1.493,0,0,1,573.637,277.813Zm0,26a3,3,0,0,1-2.819-1.986h5.638A3,3,0,0,1,573.637,303.812Zm11.879-4.291a.971.971,0,0,1-.688.288H562.5a1.008,1.008,0,0,1-1.026-.9.956.956,0,0,1,.285-.76.861.861,0,0,1,.192-.141,4.3,4.3,0,0,0,2.024-2.6h0l1.1-3.81a44.292,44.292,0,0,0,.985-4.57,7.681,7.681,0,0,1,15.141,0,44.505,44.505,0,0,0,.987,4.58l1.11,3.824a4.292,4.292,0,0,0,1.977,2.57.983.983,0,0,1,.519.834A.973.973,0,0,1,585.516,299.521Z" transform="translate(1033.176 -229.566)" fill="#fff" />
    <circle id="Ellipse_394" data-name="Ellipse 394" cx="6.5" cy="6.5" r="6.5" transform="translate(1610 50)" fill="#745fea" />
  </g>
</svg>

                   </button>

                   <div className='max-w-[128px] w-full flex items-center  gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48">
  <g id="Group_433" data-name="Group 433" transform="translate(-1671 -40)">
    <g id="Ellipse_388" data-name="Ellipse 388" transform="translate(1671 40)" fill="none" stroke="gray" strokeWidth="1.5">
      <circle cx={24} cy={24} r={24} stroke="none" />
      <circle cx={24} cy={24} r="23.25" fill="none" />
    </g>
    <circle id="Ellipse_389" data-name="Ellipse 389" cx={6} cy={6} r={6} transform="translate(1704 73)" fill="#15d807" />
    <path id="Path_5489" data-name="Path 5489" d="M6.921,16.034a31.864,31.864,0,0,1,5.119,0,20.876,20.876,0,0,1,2.764.347c1.976.4,3.266,1.053,3.818,2.106a2.914,2.914,0,0,1,0,2.621c-.553,1.053-1.791,1.748-3.839,2.106a19.842,19.842,0,0,1-2.764.358,23.564,23.564,0,0,1-2.59.095H7.863A7.465,7.465,0,0,0,6.91,23.6a18.92,18.92,0,0,1-2.764-.347C2.171,22.877.881,22.2.328,21.151A2.887,2.887,0,0,1,0,19.824a2.855,2.855,0,0,1,.317-1.337C.86,17.434,2.15,16.75,4.146,16.381A20.217,20.217,0,0,1,6.921,16.034ZM9.47,0a6.3,6.3,0,0,1,6.214,6.39,6.3,6.3,0,0,1-6.214,6.39A6.3,6.3,0,0,1,3.256,6.39,6.3,6.3,0,0,1,9.47,0Z" transform="translate(1686 52)" fill="gray" />
  </g>
</svg>
<div>
  <p className='text-xl 3xl:text-2xl text-white 3xl:leading-[30px]'>Raj L</p>
  <p className='text-white text-[11px]'>Free Member</p>
</div>

                   </div>

              

     
          



           
         
        </div>
        <div className='xl:hidden   flex flex-col relative w-full'>
          <div className='flex w-full bg-site_black pb-3 relative z-[60] px-4 justify-between items-center'>

        <div className='flex   gap-3  items-center'>

<Image src={Bars} />
<Link href={'/'}>
    <button className='mt-1.5'>

    <Image src={Logo} />
    </button>
</Link>
</div>
<button aria-expanded={toggle}  className={`menu hidden sm:flex ${toggle?'opened':''} `} onClick={(e) => { handleToggle(e) }} aria-label="Main Menu">
                <svg width={100} className={`w-[44px] md:w-[100px]  ${toggle?'opened':''}`} height={60} viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
          </div>
       <div className={`  z-[100]    ${!toggle?'-translate-x-[200%]':'translate-x-0'} min-h-screen w-full sm:w-[70%]   transition-transform duration-500 ease-in-out  fixed top-0  bg-site_black  flex `} >
      
       <SidePart setToggleCheck={setToggleCheck} toggle={toggle} toggleCheck={toggleCheck} sidebarItems={sidebarItems} /> 

        <div className={`relative text-white pl-4 pr-6 z-[100]  shadow-Shadow2 pt-[50px] w-full   bg-site_black   flex flex-col gap-8`}>
        <button aria-expanded={toggle}  className={` menu absolute top-1 right-3 sm:hidden flex ${toggle?'opened':''} `} onClick={(e) => { handleToggle(e) }} aria-label="Main Menu">
                <svg width={100} className={`w-[44px] md:w-[100px]  ${toggle?'opened':''}`} height={60} viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
          <div className='flex w-full mt-7 justify-center'>

        <div className='flex justify-between items-center  shadow-input rounded-[10px] gap-4 pl-5 bg-site_black max-w-[540px] w-full xl:max-w-[300px] 3xl:max-w-[400px] 3xl:max-w-[540px]'>

<img className='w-[18px]' src="/assets/images/requirements/searchbar.svg" alt="monkey" />
<input onChange={handleChange} type="text" required placeholder="Mobile Recharge" className="  rounded-l-[10px] text-sm md:text-[15px]  md:leading-[18px] py-3 md:py-[22px] outline-none text-light_text bg-transparent  h-full w-full" />

</div>
</div>

<div className='flex justify-center items-center gap-4'>

                    <Link href={''}>
                        <button className='text-white font-medium text-base 3xl:text-lg 3xl:leading-7'> <svg className='md:w-auto w-[18px]' xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26">
  <path id="Path_5446" data-name="Path 5446" d="M15,2A13,13,0,1,0,28,15,13,13,0,0,0,15,2Zm1.3,23.309V24.1a1.3,1.3,0,0,0-2.6,0v1.209A10.4,10.4,0,0,1,4.691,16.3H5.9a1.3,1.3,0,0,0,0-2.6H4.691A10.4,10.4,0,0,1,13.7,4.691V5.9a1.3,1.3,0,0,0,2.6,0V4.691A10.4,10.4,0,0,1,25.309,13.7H24.1a1.3,1.3,0,0,0,0,2.6h1.209A10.4,10.4,0,0,1,16.3,25.309ZM19.082,9.215l-6.5,2.756a1.3,1.3,0,0,0-.676.676l-2.756,6.5a1.309,1.309,0,0,0,1.183,1.82,1.209,1.209,0,0,0,.52-.117l6.5-2.756a1.3,1.3,0,0,0,.676-.676l2.756-6.5a1.3,1.3,0,0,0-1.7-1.7Zm-3.237,6.63-2.964,1.3,1.3-2.964,2.964-1.3Z" transform="translate(-2 -2)" fill="#fff" />
</svg>

 </button>
                    </Link>
                    <Link href={''}>
                        <button className='text-white text-sm md:text-lg'> Create gig </button>
                    </Link>

</div>
  
                    <Link  href={''}>
                      <div className='flex w-full justify-center'>

                        <button className='header-button px-2  md:px-[10px]  w-full max-w-[540px]  py-3 md:py-4  text-site_yellow rounded-xl 3xl:py-5 font-medium text-base 3xl:text-lg 3xl:leading-7'>Post requirement </button>
                      </div>
                    </Link>
                    <div className='w-full flex items-center mt-4 justify-center'>
                    <div className='flex justify-between sm:flex-row flex-col items-center sm:gap-0 gap-6 sm:items-start md:items-center max-w-[540px] w-full'>
                    <div className='max-w-[81px] flex flex-col md:flex-row gap-1 items-center w-full'>
                   <svg className='md:w-auto w-[32px]' xmlns="http://www.w3.org/2000/svg" width="36.297" height="30.064" viewBox="0 0 36.297 30.064">
  <path id="Union_76" data-name="Union 76" d="M4.962,30.064A4.969,4.969,0,0,1,0,25.1V4.966A4.97,4.97,0,0,1,4.962,0H31.334A4.968,4.968,0,0,1,36.3,4.966V25.1a4.967,4.967,0,0,1-4.962,4.962ZM2.438,4.966V25.1a2.529,2.529,0,0,0,2.525,2.526H31.334v0a2.527,2.527,0,0,0,2.525-2.52v-4.43h-6.4a5.64,5.64,0,1,1,0-11.281h6.4V4.966a2.529,2.529,0,0,0-2.525-2.524H4.962A2.529,2.529,0,0,0,2.438,4.966Zm21.816,10.07a3.2,3.2,0,0,0,3.2,3.2h6.4v-6.4h-6.4A3.2,3.2,0,0,0,24.254,15.037Zm1.728,1.215a1.219,1.219,0,1,1,0-2.438h3.2a1.219,1.219,0,1,1,0,2.438Z" fill="#fff" />
</svg>
<div className='flex-col flex gap-1'>

  <p className='text-[11px]  leading-3 text-center md:text-left font-semibold text-site_yellow'>₹ 500</p>
  <div className='flex items-center'> 
<img src="/assets/images/requirements/coin.svg" className='w-[11px] h-[11px] rounded-full' alt="monkey" />
<p className='text-[11px]  text-center md:text-left font-semibold leading-3 text-white'>2000</p>

  


  </div>

</div>


                    </div>

                   <button>
                 <svg xmlns="http://www.w3.org/2000/svg" width="30.368" height="30.064" viewBox="0 0 30.368 30.064">
  <g id="Group_564" data-name="Group 564" transform="translate(-1592.632 -46.204)">
    <path id="Path_5384" data-name="Path 5384" d="M586.28,296.248a2.335,2.335,0,0,1-1.039-1.381l-1.107-3.81a42.333,42.333,0,0,1-.938-4.37,9.658,9.658,0,0,0-6.051-7.411,3.506,3.506,0,1,0-7.012,0,9.66,9.66,0,0,0-6.051,7.411,42.252,42.252,0,0,1-.936,4.356l-1.106,3.8h0a2.329,2.329,0,0,1-1.065,1.4,2.865,2.865,0,0,0-.64.479,2.982,2.982,0,0,0-.871,2.335,3.031,3.031,0,0,0,3.038,2.77h6.224a5.013,5.013,0,0,0,9.82,0h6.281a2.973,2.973,0,0,0,1.457-5.577Zm-12.643-18.436a1.491,1.491,0,0,1,1.373.912,9.726,9.726,0,0,0-2.747,0A1.493,1.493,0,0,1,573.637,277.813Zm0,26a3,3,0,0,1-2.819-1.986h5.638A3,3,0,0,1,573.637,303.812Zm11.879-4.291a.971.971,0,0,1-.688.288H562.5a1.008,1.008,0,0,1-1.026-.9.956.956,0,0,1,.285-.76.861.861,0,0,1,.192-.141,4.3,4.3,0,0,0,2.024-2.6h0l1.1-3.81a44.292,44.292,0,0,0,.985-4.57,7.681,7.681,0,0,1,15.141,0,44.505,44.505,0,0,0,.987,4.58l1.11,3.824a4.292,4.292,0,0,0,1.977,2.57.983.983,0,0,1,.519.834A.973.973,0,0,1,585.516,299.521Z" transform="translate(1033.176 -229.566)" fill="#fff" />
    <circle id="Ellipse_394" data-name="Ellipse 394" cx="6.5" cy="6.5" r="6.5" transform="translate(1610 50)" fill="#745fea" />
  </g>
</svg>

                   </button>

                   <div className='max-w-[128px] w-full flex md:flex-row flex-col items-center md:mt-0 sm:mt-[-10px]  md:gap-2'>
                <svg className='md:w-auto w-[30px]' xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48">
  <g id="Group_433" data-name="Group 433" transform="translate(-1671 -40)">
    <g id="Ellipse_388" data-name="Ellipse 388" transform="translate(1671 40)" fill="none" stroke="gray" strokeWidth="1.5">
      <circle cx={24} cy={24} r={24} stroke="none" />
      <circle cx={24} cy={24} r="23.25" fill="none" />
    </g>
    <circle id="Ellipse_389" data-name="Ellipse 389" cx={6} cy={6} r={6} transform="translate(1704 73)" fill="#15d807" />
    <path id="Path_5489" data-name="Path 5489" d="M6.921,16.034a31.864,31.864,0,0,1,5.119,0,20.876,20.876,0,0,1,2.764.347c1.976.4,3.266,1.053,3.818,2.106a2.914,2.914,0,0,1,0,2.621c-.553,1.053-1.791,1.748-3.839,2.106a19.842,19.842,0,0,1-2.764.358,23.564,23.564,0,0,1-2.59.095H7.863A7.465,7.465,0,0,0,6.91,23.6a18.92,18.92,0,0,1-2.764-.347C2.171,22.877.881,22.2.328,21.151A2.887,2.887,0,0,1,0,19.824a2.855,2.855,0,0,1,.317-1.337C.86,17.434,2.15,16.75,4.146,16.381A20.217,20.217,0,0,1,6.921,16.034ZM9.47,0a6.3,6.3,0,0,1,6.214,6.39,6.3,6.3,0,0,1-6.214,6.39A6.3,6.3,0,0,1,3.256,6.39,6.3,6.3,0,0,1,9.47,0Z" transform="translate(1686 52)" fill="gray" />
  </g>
</svg>
<div>
  <p className='text-base md:text-xl text-center md:text-left 3xl:text-2xl text-white 3xl:leading-[30px]'>Raj L</p>
  <p className='text-white text-[11px] text-center md:text-left'>Free Member</p>
</div>

                   </div>
                    </div>
                    </div>
           
              
                    
            </div>

            </div>


        </div>
        </div>    
{children}
      </div>

           
    </div>
  )
}

export default Sidebar