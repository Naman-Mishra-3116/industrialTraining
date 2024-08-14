import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './components/Admin-Dashboard/AdminHeader'


function RootElementForAdmin() {
    return (
        <>
            <AdminHeader />
            <Outlet/>   
        </>
    )
}

export default RootElementForAdmin
