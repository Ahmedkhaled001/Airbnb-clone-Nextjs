import React from 'react'
import { GlobeAltIcon , MenuIcon , UserCircleIcon } from '@heroicons/react/solid'

const Navbar = () => {
  return (
    <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <div className='hidden md:inline hover:bg-slate-100 rounded-full p-2 cursor-pointer'>
          <p className='hidden lg:inline'>Airbnb your home</p>
        </div>
        <div className='hidden md:inline hover:bg-slate-100 rounded-full cursor-pointer p-2'>
          <GlobeAltIcon className='h-6'/>
        </div>
        <div className='flex space-x-2 border-2 p-2 rounded-full hover:shadow-md cursor-pointer'>
            <MenuIcon className='h-6'/>
            <UserCircleIcon className='h-6'/>
        </div>
    </div>
  )
}

export default Navbar