import React, { useEffect, useState } from 'react'

import { Loader } from '../common/Loader'
import { AppStore } from '../../redux/store'
import { useSelector } from 'react-redux'
import { RestaurantCard } from '../common/RestaurantCard'
import { getRestaurantsByCoordinates } from '../../api/restaurant'

export const RestaurantsTemplate = () => {

  const coordinateState = useSelector((store: AppStore) => store.coordinates)
  const [restaurant, setRestaurant] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    const getRestaurants = async () => {
      setLoading(true)
      try {
        const { data } = await getRestaurantsByCoordinates(coordinateState.latitude, coordinateState.longitude)
        filterRatingRestaurants(data.data)
      } catch (err) {
        alert('Oh! something happened')
      } finally {
        setLoading(false)
      }
    }
    getRestaurants()
  }, [coordinateState])

  const filterRatingRestaurants = (restaurant: object[]) => {
    if(!restaurant.length) return
    const filterRestaurants = restaurant.filter((r: any) => r.name)
    const filterRestaurantsByRating = filterRestaurants.sort((restoA: any, restoB: any) => restoB['rating'] - restoA['rating'])
    setRestaurant(filterRestaurantsByRating)
  }

  return (  
    <section className='restaurants-template'>
      {loading ? <Loader /> : null}
      {restaurant.map((r) => <RestaurantCard key={r.name} resto={r}/>)}
    </section>
  )
}
