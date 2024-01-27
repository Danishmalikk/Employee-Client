import React from 'react'
import {Link} from "react-router-dom"
import Home from './Home'
const Header = () => {
  return (
    <div>
         <Link to={'/employee'}> <button className='border w-32 border-black rounded-md p-2'> Add Employee </button> </Link>
         <Home/>
    </div>
  )
}

export default Header