import React from 'react'

import { ContainerLayout } from '../components/layout/ContainerLayout'
import { SelectedRestaurantTemplate } from '../components/templates/SelectedRestaurantTemplate'

export const SelectedRestaurant = () => {
  return (
    <main className='selected-restaurant-container'>
      <ContainerLayout>
        <SelectedRestaurantTemplate />
      </ContainerLayout>
    </main>
  )
}
