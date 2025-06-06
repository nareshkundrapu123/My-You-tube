import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-gray-200 rounded-lg px-4 m-2 hover:bg-gray-300'>{name}</button>
    </div>
  )
}

export default Button
