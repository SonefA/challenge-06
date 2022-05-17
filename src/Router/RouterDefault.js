import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavbarDefault } from '../Asset/Components/NavbarAdmin/NavbarDefault'
import { DashboardAdmin } from '../Pages/DashboardAdmin/DashboardAdmin'
import { LandingUser } from '../Pages/LandingUser/LandingUser'
import { LoginPage } from '../Pages/Login Page/LoginPage'


export const RouterDefault = () => {
  return (
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            {/* <Route path='/user' element={<UserPage/>}/> */}
            <Route path='/NavbarDefault' element={<NavbarDefault/>}/>
            <Route path='/Admin' element={<DashboardAdmin/>}/>
            <Route path='/User' element={<LandingUser/>}/>
        </Routes>
  )
}
