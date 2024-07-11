import React from 'react'
import { Navbar } from '../componants/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../componants/Home/Home'
import RestaurantDetails from '../componants/restaurant/RestaurantDetails'
import Cart from '../componants/cart/Cart'
import Profile from '../componants/profile/Profile'
import { Auth } from '../componants/Auth/Auth'

export const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            {/* after my profile it will go to the profile routes */}
            <Route path='/my-profile/*' element={<Profile/>}/>

        </Routes>
        <Auth/>
    </div>
  )
}
