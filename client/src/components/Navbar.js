import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to ="/">Home</NavLink><span> | </span>
      <NavLink to ="/goals/new">New Goal</NavLink><span> | </span>
      <NavLink to ="/goals">Your Goals </NavLink>
    </div>
  )
}

export default NavBar;