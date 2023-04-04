import React from 'react'

import { Home } from '../pages/Home'
import { Restaurants } from '../pages/Restaurants'
import { SelectedRestaurant } from '../pages/SelectedRestaurant'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/restaurants' Component={Restaurants} />
        <Route path='/selected-restaurant' Component={SelectedRestaurant} />
      </Routes>
    </BrowserRouter>
  )
}
