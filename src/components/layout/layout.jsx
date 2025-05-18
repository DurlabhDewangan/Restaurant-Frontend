import React from 'react'
import Navbar from '../common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'
import BackToTop from '../common/BottomToTop'

function Layout() {
    return (

        <>
        <Navbar/>
         <Outlet/>
        <Footer/>
        <BackToTop/>
        </>
    )
}

export default Layout
