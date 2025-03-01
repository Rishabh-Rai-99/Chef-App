import React from 'react'
import chefIcon from '../assets/chef.svg'

const Header = () => {
  return (
    <header className='w-full h-20 bg-white shadow flex justify-center'>
        <nav className='flex items-center gap-1'>
            <img className='w-8' src={chefIcon} alt="" />
            <h1 className='text-2xl'>Chef Claude</h1>
        </nav>
    </header>
 )
}

export default Header