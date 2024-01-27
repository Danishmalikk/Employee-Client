import React from 'react'
import { Link } from 'react-router-dom'
 

const Home = () => {
  return (
    <div className='flex flex-col gap-6 mt-16'>
        <Link to={'/login'}> <button className='border w-32 border-black rounded-md p-2'> Login </button> </Link>
        <Link to={'/register'}> <button className='border w-32 border-black rounded-md p-2'> Register </button> </Link>
    </div>
  )
}

export default Home