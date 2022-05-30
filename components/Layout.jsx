import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div className='bg-site_black flex flex-col items-center'>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout