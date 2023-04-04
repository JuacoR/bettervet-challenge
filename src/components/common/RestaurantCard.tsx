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

  console.log(resto)

  const handleButtonSelectClick = () => {
    dispatch(addRestaurant({
      name: resto.name, 
      address: resto.address, 
      image: resto.photo.images.large.url ? resto.photo.images.large.url : null,
      type_restaurant: resto.category.name, 
      reviews: resto.reviews
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


