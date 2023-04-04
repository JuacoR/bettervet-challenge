import React, { useEffect, useState } from 'react'

import { AppStore } from '../../redux/store'
import { useSelector } from 'react-redux'
import { RestaurantCard } from '../common/RestaurantCard'
import { getRestaurantsByCoordinates } from '../../api/restaurant'

export const RestaurantsTemplate = () => {

  const coordinateState = useSelector((store: AppStore) => store.coordinates)
  const [restaurant, setRestaurant] = useState<any[]>([])

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const { data } = await getRestaurantsByCoordinates(coordinateState.latitude, coordinateState.longitude)
        filterRatingRestaurants(data.data)
      } catch (err) {
        console.log(err)
      } finally {
        //Loading false
      }
    }
    getRestaurants()
  }, [coordinateState])

  const filterRatingRestaurants = (restaurant: object[]) => {
    if(!restaurant.length) return
    const filtredRestaurantsByRating = restaurant.sort((restoA: any, restoB: any) => restoB['rating'] - restoA['rating'])
    setRestaurant(filtredRestaurantsByRating)
  }
  
  // Show only 10 , sort by highest review. If select restaurant => Name, Adress, Type of resturant, a picture(if there is one), 10 reviews

  return (
    <section className='restaurants-template'>
      {restaurant.map((r) => <RestaurantCard key={r.name} resto={r}/>)}
    </section>
  )
}
