import React from 'react'
import { ContainerLayout } from '../components/layout/ContainerLayout'
import { RestaurantsTemplate } from '../components/templates/RestaurantsTemplate'

export const Restaurants = () => {

  return (
    <main className='restaurants-container'>
      <ContainerLayout>
        <RestaurantsTemplate />
      </ContainerLayout>
    </main>
  )
}
