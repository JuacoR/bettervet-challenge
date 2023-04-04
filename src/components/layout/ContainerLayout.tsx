import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../common/Button'

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
