import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

    const isMenuopen=useSelector((store)=>store.app.isMenuOpen);

    if(!isMenuopen) return null;
  return (
    <div className='p-5 shadow-lg w-48 scroll-my-10'>
        <ul >
            <li className=' hover:bg-gray-300 rounded-lg'>Home</li>
            <li className=' hover:bg-gray-300 rounded-lg'>Shorts</li>
            <li className=' hover:bg-gray-300 rounded-lg'>Videos</li>
            <li className=' hover:bg-gray-300 rounded-lg'>Live</li>
        </ul>
      <h1 className='font-bold pt-2'>Subscriptiion</h1>
      <ul>
        <li className=' hover:bg-gray-300 rounded-lg'>Music</li>
        <li className=' hover:bg-gray-300 rounded-lg'>Sports</li>
        <li className=' hover:bg-gray-300 rounded-lg'>Gaming</li>
        <li className=' hover:bg-gray-300 rounded-lg'>Movies</li>
      </ul>
      <h1 className='font-bold pt-2'>Watch later</h1>
      <ul>
        <li className=' hover:bg-gray-300 rounded-lg'>Music</li>
        <li className=' hover:bg-gray-300 rounded-lg'>Sports</li>
        <li className=' hover:bg-gray-300 rounded-lg'>Gaming</li>
        <li className=' hover:bg-gray-300 rounded-lg'>Movies</li>
      </ul>
      <h1 className='font-bold pt-2'>Watch later</h1>
      <ul>
        <li className=' hover:bg-gray-300 rounded-lg'>Music</li>
        <li className=' hover:bg-gray-300 rounded-lg'>Sports</li>
        <li className=' hover:bg-gray-300 rounded-lg'>Gaming</li>
        <li className=' hover:bg-gray-300 rounded-lg'>Movies</li>
      </ul>
      <h1 className='font-bold pt-2'>Watch later</h1>
      <ul>
        <li className=' hover:bg-gray-300 rounded-lg'>Music</li>
        <li className=' hover:bg-gray-300 rounded-lg'>Sports</li>
        <li className=' hover:bg-gray-300 rounded-lg'>Gaming</li>
        <li className=' hover:bg-gray-300 rounded-lg'>Movies</li>
      </ul>

    </div>
  )
}

export default Sidebar
