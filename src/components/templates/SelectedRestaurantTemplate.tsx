import React from 'react'

import { AppStore } from '../../redux/store'
import { useSelector } from 'react-redux'
import { SelectedRestaurantCard } from '../common/SelectedRestaurantCard'

export const SelectedRestaurantTemplate = () => {

  const restaurantSlice = useSelector((store: AppStore) => store.restaurant)

  return (
    <section className='selected-restaurant-template'>
      <SelectedRestaurantCard 
        restaurant={restaurantSlice}
      />
    </section>
  )
}
