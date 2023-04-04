import React from 'react'
import { LocationForm } from '../forms/LocationForm'

export const HomeTemplate = () => {
  return (
      <section className='home-template'>
        <h1>Are you ready to search for you restaurant?</h1>
        <div className='home-template__location'>
          <LocationForm />
        </div>
      </section>
  )
}
