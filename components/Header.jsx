import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import Bars from '../public/assets/images/header/bars.svg'
import Logo from '../public/assets/images/header/logo.svg'
const Header = () => {
    const [toggle,setToggle] = useState(false)
    const handleToggle = (e) => { 
        setToggle(!toggle)
        // e.target.classList.toggle('opened');
        //  e.target.setAttribute('aria-expanded', e.target.classList.contains('opened'))

         }
    return (
        <div className='sticky top-0 z-50 w-full'>
        <div className=' bg-site_black z-[60] relative max-w-[1920px] w-full md:px-8 px-6 lg:px-14 xl:px-[100px] 2xl:px-[150px] flex justify-between items-center h-[90px] xl:h-[120px]'>
            <div className='flex 2xl:w-[40%] gap-5  items-center'>

                <Image src={Bars} />
                <Link href={'/'}>
                    <button className='mt-1.5'>

                    <Image src={Logo} />
                    </button>
                </Link>
            </div>
            <div className='2xl:w-2/3 lg:flex hidden items-center gap-14 xl:gap-16 2xl:gap-2 justify-between'>
                <div className='flex items-center lg:gap-12 xl:gap-14 2xl:gap-[69px]'>
                    <Link href={''}>
                        <button className='text-white font-medium text-lg leading-7'> Explore </button>
                    </Link>
                    <Link href={''}>
                        <button className='text-white font-medium text-lg leading-7'> How it works </button>
                    </Link>

                </div>
                <div className='flex  items-center gap-8 xl:gap-10 2xl:gap-14'>
                    <Link className='' href={'/post-service'}>
                        <button className='header-button px-6 py-4 2xl:px-6 text-site_yellow rounded-xl 2xl:py-5 font-medium text-lg leading-7'>Post requirement </button>
                    </Link>
                    <Link href={'/login'}>
                        <button className='text-white font-medium text-lg leading-7'> Login </button>
                    </Link>
                    <Link href={'/register'}>
                        <button className='text-white px-10 py-4 font-medium bg-site_yellow rounded-xl 2xl:px-12 2xl:py-5 text-lg leading-7'> Join </button>
                    </Link>
                </div>
            </div>
            <button aria-expanded={toggle}  className={`menu lg:hidden flex ${toggle?'opened':''} `} onClick={(e) => { handleToggle(e) }} aria-label="Main Menu">
                <svg width={100} className={`w-[44px] md:w-[100px]  ${toggle?'opened':''}`} height={60} viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
         
        </div>
        <div className='lg:hidden flex relative w-full'>
        <div className={`text-white z-50 ${!toggle?'-translate-y-[200%]':'translate-y-0'}   transition-transform duration-500 ease-in-out  absolute w-full bg-site_black opacity-89 flex flex-col gap-5`}>
        <Link href={''}>
                        <button onClick={()=>{setToggle(false)}} className=' text-white font-medium text-lg leading-7'> Explore </button>
                    </Link>
                    <Link href={''}>
                        <button onClick={()=>{setToggle(false)}}  className=' text-white font-medium text-lg leading-7'> How it works </button>
                    </Link>
                    <Link className='/post-service' href={''}>
                        <button onClick={()=>{setToggle(false)}}  className=' header-button px-6 py-4 2xl:px-6 text-site_yellow  2xl:py-5 font-medium text-lg leading-7'>Post requirement </button>
                    </Link>
                    <Link href={'/login'}>
                        <button onClick={()=>{setToggle(false)}}  className=' text-white font-medium text-lg leading-7'> Login </button>
                    </Link>
                    <Link href={'/register'}>
                        <button onClick={()=>{setToggle(false)}}  className=' text-white px-10 py-4 font-medium bg-site_yellow  2xl:px-12 2xl:py-5 text-lg leading-7'> Join </button>
                    </Link>
                    
            </div>



        </div>
        </div>

    )
}

export default Header