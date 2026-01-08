import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const CartItems = useSelector((store) => (
    store.cart.items
  ))
  return (

    <div>-
      <ul className='navbar'>
        <li><Link to="" >Home</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/contacts" >Contacts</Link></li>
        <li>{CartItems.length} Cart</li>
      </ul>
    </div>
  )
}

export default Navbar;
