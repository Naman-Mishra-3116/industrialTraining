import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function RootElementForApp() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>    
        </>
    )
}

export default RootElementForApp
