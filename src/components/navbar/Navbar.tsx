import React from 'react'
import Image from 'next/image'

import ShoppingCartSvg from "src/assets/shopping-cart.svg"

const Navbar = () => {
  return (
    <div className='navbar bg-secondary'>
      <div className='navbar-start'></div>
      <div className='navbar-center'></div>
      <div className='navbar-end'>
        <button className='btn btn-square btn-accent'>
          <Image src={ShoppingCartSvg} alt=''/>
        </button>
      </div>
    </div>
  )
}

export default Navbar