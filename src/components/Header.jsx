import React from 'react'
import { FaCloudMoon } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className=" py-2 flex justify-between items-center">
        <img src="../src/utils/img/logo.png" alt="Bodsphere Logo" className="h-8" />
        <nav>
          <ul className="flex space-x-20 mr-40 justify-evenly items-center ">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Categories</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Notification</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">All Music</a></li>
            <li> <FaCloudMoon className=' text-xl text-gray-900 ' /> </li>
            <li><FaRegUserCircle className=' text-xl' /></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

