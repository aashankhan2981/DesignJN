import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useRouter } from 'next/router'
import Sidebar from './Sidebar'
import Head from 'next/head'
import Script from 'next/script'
// import 'tw-elements';
const Layout = ({children}) => {
  const withoutSiderBar = ['/','/login','/register']
  const router = useRouter()
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
   

  

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
    </>
  )
}

export default Layout