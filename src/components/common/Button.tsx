import React from 'react'

interface ButtonProps {
  text: string,
  onButtonClick: () => void,
  disabled?: boolean,

}

export const Button = ({text, onButtonClick, disabled}: ButtonProps) => {

  return (
    <button className='button-container'
      onClick={onButtonClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
