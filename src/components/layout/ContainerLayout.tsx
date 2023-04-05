import React from 'react'

import { Button } from '../common/Button'
import { useLocation, useNavigate } from 'react-router-dom'

interface ContainerLayoutProps {
  children: JSX.Element | JSX.Element[]
}

export const ContainerLayout = ({children}: ContainerLayoutProps) => {

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <article className='container-layout'>
      <nav>
        {location.pathname === '/' ? null :  
          <Button 
            text='Go to Home'
            onButtonClick={() => navigate('/')} 
          />
        }
      </nav>
      {children}
    </article>
  )
}
