import Image from 'next/image'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import Bars from '../public/assets/images/header/bars.svg'
import Logo from '../public/assets/images/header/logo.svg'
const Sidebar = ({children}) => {
    const [toggle,setToggle] = useState(false)
    const [value,setValue] = useState('')
    const handleToggle = (e) => { 
        setToggle(!toggle)
        // e.target.classList.toggle('opened');
        //  e.target.setAttribute('aria-expanded', e.target.classList.contains('opened'))

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

       <div className='max-w-[150px] w-full min-h-screen bg-white'>
         
          </div>   
      <div className='w-full'>

      <div className='sticky top-0 z-50 w-full'>
        <div className=' bg-site_black z-[60] 2xl:gap-10 relative max-w-[1920px] w-full md:pr-8 pr-6 lg:pr-14 xl:pr-[100px] 2xl:pr-[150px] flex justify-start items-center h-[90px] xl:h-[120px]'>
        <div className='flex  gap-5  items-center'>

<Image src={Bars} />
<Link href={'/'}>
    <button className='mt-1.5'>

    <Image src={Logo} />
    </button>
</Link>
</div>
<div className='flex justify-between items-center  shadow-input rounded-[10px] gap-4 pl-5 bg-site_black w-full max-w-[540px]'>

<img src="/assets/images/requirements/searchbar.svg" alt="monkey" />
<input onChange={handleChange} type="text" required placeholder="Mobile Recharge" className="  rounded-l-[10px] text-[15px] leading-[18px]  py-[22px] outline-none text-light_text bg-transparent  h-full w-full" />

</div>
                    <Link href={''}>
                        <button className='text-white font-medium text-lg leading-7'> <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26">
  <path id="Path_5446" data-name="Path 5446" d="M15,2A13,13,0,1,0,28,15,13,13,0,0,0,15,2Zm1.3,23.309V24.1a1.3,1.3,0,0,0-2.6,0v1.209A10.4,10.4,0,0,1,4.691,16.3H5.9a1.3,1.3,0,0,0,0-2.6H4.691A10.4,10.4,0,0,1,13.7,4.691V5.9a1.3,1.3,0,0,0,2.6,0V4.691A10.4,10.4,0,0,1,25.309,13.7H24.1a1.3,1.3,0,0,0,0,2.6h1.209A10.4,10.4,0,0,1,16.3,25.309ZM19.082,9.215l-6.5,2.756a1.3,1.3,0,0,0-.676.676l-2.756,6.5a1.309,1.309,0,0,0,1.183,1.82,1.209,1.209,0,0,0,.52-.117l6.5-2.756a1.3,1.3,0,0,0,.676-.676l2.756-6.5a1.3,1.3,0,0,0-1.7-1.7Zm-3.237,6.63-2.964,1.3,1.3-2.964,2.964-1.3Z" transform="translate(-2 -2)" fill="#fff" />
</svg>

 </button>
                    </Link>
                    <Link href={''}>
                        <button className='text-white font-medium text-lg leading-7'> Create gig </button>
                    </Link>
                    <Link className='' href={''}>
                        <button className='header-button px-6 py-4 2xl:px-6 text-site_yellow rounded-xl 2xl:py-5 font-medium text-lg leading-7'>Post requirement </button>
                    </Link>
                    <div className='max-w-[81px] flex gap-1 items-center w-full'>
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

                    <Link className='' href={''}>
                        <button className='header-button px-6 py-4 2xl:px-6 text-site_yellow rounded-xl 2xl:py-5 '>Post requirement </button>
                    </Link>

              

     
          



            <button aria-aria-expanded={toggle}  className={`menu lg:hidden flex ${toggle?'opened':''} `} onClick={(e) => { handleToggle(e) }} aria-label="Main Menu">
                <svg width={100} className={`w-[44px] md:w-[100px]  ${toggle?'opened':''}`} height={60} viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
         
        </div>
        {/* <div className='lg:hidden flex relative w-full'>
        <div className={`text-white z-50 ${!toggle?'-translate-y-[200%]':'translate-y-0'}   transition-transform duration-500 ease-in-out  absolute w-full bg-site_black opacity-89 flex flex-col gap-5`}>
        <Link href={''}>
                        <button onClick={()=>{setToggle(false)}} className=' text-white font-medium text-lg leading-7'> Explore </button>
                    </Link>
                    <Link href={''}>
                        <button onClick={()=>{setToggle(false)}}  className=' text-white font-medium text-lg leading-7'> How it works </button>
                    </Link>
                    <Link className='' href={''}>
                        <button onClick={()=>{setToggle(false)}}  className=' header-button px-6 py-4 2xl:px-6 text-site_yellow  2xl:py-5 font-medium text-lg leading-7'>Post requirement </button>
                    </Link>
                    <Link href={'/login'}>
                        <button onClick={()=>{setToggle(false)}}  className=' text-white font-medium text-lg leading-7'> Login </button>
                    </Link>
                    <Link href={'/register'}>
                        <button onClick={()=>{setToggle(false)}}  className=' text-white px-10 py-4 font-medium bg-site_yellow  2xl:px-12 2xl:py-5 text-lg leading-7'> Join </button>
                    </Link>
                    
            </div>



        </div> */}
        </div>    
{children}
      </div>

           
    </div>
  )
}

export default Sidebar