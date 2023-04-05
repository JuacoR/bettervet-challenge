import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addRestaurant } from '../../redux/states/restaurant'
import { Button } from './Button'

interface RestaurantCardProps {
    resto: any,
}

export const RestaurantCard = ({resto}:RestaurantCardProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleButtonSelectClick = () => {
    dispatch(addRestaurant({
      name: resto.name, 
      address: resto.address, 
      image: resto.photo ? resto.photo.images.large.url : null,
      type_restaurant: resto.category.name,   
      rating: resto.rating,
      reviews: resto.reviews[0] === null ? null : resto.reviews,
      reviews_number: resto.num_reviews,
    }))
    navigate('/selected-restaurant')
  }

  return (
    <div className='restaurant-card'>
      <p>{resto.name}</p>
      <p>☆{resto.rating}</p>
      <Button text='Go to restaurant' onButtonClick={handleButtonSelectClick}/>
    </div>
  )
}


