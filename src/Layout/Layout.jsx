import React from 'react'
import NavBar from '../Componant/NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Componant/Footer/Footer'

const Layout = () => {
  return (
    <div className='max-w-11/12 mx-auto my-5'>
      {/* this is layout page */}
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Layout
