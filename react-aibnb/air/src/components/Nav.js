import React from 'react'

const Nav = () => {
  return (
    <nav className='h-16 bg-white flex item-center px-12 py-4 drop-shadow-md'>
      <img src={process.env.PUBLIC_URL + "/airbnb.png"} className='h-8 flex justify-center item-center'/>
    </nav>
  )
}

export default Nav
