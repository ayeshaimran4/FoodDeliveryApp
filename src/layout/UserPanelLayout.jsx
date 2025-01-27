import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const UserPanelLayout = () => {
  return (
    <>
    <div>
    <Toaster
          position="top-right"  
          toastOptions={{
            style: {
              marginRight: '50px',
              marginBottom: '50px',
            },
          }}
        />
        <Navbar/>
        <Outlet/>
        
    </div>
    </>
  )
}

export default UserPanelLayout