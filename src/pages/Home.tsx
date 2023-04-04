import React from 'react'
import { ContainerLayout } from '../components/layout/ContainerLayout'
import { HomeTemplate } from '../components/templates/HomeTemplate'


export const Home = () => {    

  return (
    <main className='home-container'>
      <ContainerLayout>
        <HomeTemplate />
      </ContainerLayout>
    </main>
  )
}
