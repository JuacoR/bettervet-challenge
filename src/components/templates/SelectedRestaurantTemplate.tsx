import React from 'react'

import { AppStore } from '../../redux/store'
import { useSelector } from 'react-redux'

export const SelectedRestaurantTemplate = () => {

  const restaurantSlice = useSelector((store: AppStore) => store.restaurant)

  console.log(restaurantSlice)

  return (
    <div>
      {restaurantSlice.image ? 
      <img 
        src={restaurantSlice.image}
        alt={restaurantSlice.name}
        width={100}
        height={100}
      /> : null}
      {restaurantSlice.reviews.map((m: any) => <p>{m.title}</p>)}
    </div>
  )
}
