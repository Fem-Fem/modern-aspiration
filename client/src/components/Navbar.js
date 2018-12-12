import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>

      <NavLink to ="/"
        exact
        activeStyle={{
          color: 'grey'
        }}>Home</NavLink> 
        
        <span> | </span>

      <NavLink to ="/goals"
        exact
        activeStyle={{
          color: 'grey'
        }}>Your Goals </NavLink>
    </div>
  )
}

export default NavBar;