import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <header className=" body-font p-1  bg-linear-to-l from-cyan-900 text-black " >
  <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="w-20 h-20 bg-linear-to-r from-black rounded-full text-center   ">
      <img className='rounded-b-full' src="logo1.jpg" alt="" />
        
      </span>
      <span className="ml-3 text-3xl cursor-pointer">WAKHA RESTORENT</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to='/' className="mr-5 hover:text-gray-200 cursor-pointer">Home</Link>
      <Link to='/about' className="mr-5 hover:text-gray-200 cursor-pointer">Menu</Link>
      <Link to='/services' className="mr-5 hover:text-gray-200 cursor-pointer">Sitting Area</Link>
      <Link to='/Contact' className="mr-5 hover:text-gray-200 cursor-pointer">Contact</Link>
    </nav>
    <button className="inline-flex items-center cursor-pointer bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Look at
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}

export default Navbar
