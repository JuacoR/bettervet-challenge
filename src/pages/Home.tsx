import React from 'react'
import { LocationInputForm } from '../components/forms/LocationInputForm'

export const Home = () => {
  return (
    <div className='home-container'>
      <h1>Are you ready to search for you restaurant?</h1>
      <div className='home-container__location'>
        <LocationInputForm />
      </div>
    </div>
  )
}
