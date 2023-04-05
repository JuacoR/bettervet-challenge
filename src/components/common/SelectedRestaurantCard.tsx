import React from 'react'
import { Restaurant } from '../../types/restaurant'

interface SelectedRestaurantCardProps {
  restaurant: Restaurant
}

export const SelectedRestaurantCard = ({restaurant}: SelectedRestaurantCardProps) => {
  console.log(restaurant)

  return (
    <div className='selected-restaurant-card'>
      {restaurant.image?.length ? 
      <img 
        src={restaurant.image}
        alt={restaurant.name}
        width={200}
        height={200}
      /> : null}
      <h1>{restaurant.name}</h1>
      <p>Address: <em>{restaurant.address}</em></p>
      <p>Type: <em>{restaurant.type_restaurant}</em></p>
      <p>Rating: <em>{restaurant.rating}</em></p>
      <p>Reviews: <em>{restaurant.reviews_number}</em></p>
      {restaurant.reviews !== null ? <p>Reviews Texts</p> : null}
      {restaurant.reviews !== null ? restaurant.reviews.map((reviews: any) => <li key={reviews.id}><em>{reviews.title}</em></li>) : null}
    </div>
  )
}
