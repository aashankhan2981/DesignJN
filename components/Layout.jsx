import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useRouter } from 'next/router'
import Sidebar from './Sidebar'
const Layout = ({children}) => {
  const withoutSiderBar = ['/','/login','/register']
  const router = useRouter()
  return (
    <div className='bg-site_black flex flex-col items-center'>
        {withoutSiderBar.includes(router.pathname) ?
       <> <Header/>
        {children}</>  
        :<div className='flex justify-between w-full'>
       
         
         <Sidebar children={children}/>
        </div>
         }
        
        <Footer/>
    </div>
  )
}

export default Layout