import React from 'react';
import './Navigation.css';
import './Home'
import { NavLink } from 'react-router-dom';

export function Navigation({isAuth,setIsAuth}) {


  return (
    <nav className="navbar">
      <div className="navbar-brand">JWT Authentication</div>
      <div className="navbar-links">
        {console.log("isAuth",isAuth)}
        {isAuth && <NavLink to="/"><span className='custombutton'>Home</span></NavLink>}
        {isAuth ? <NavLink to="/logout"><span className='custombutton' onClick={() => setIsAuth(false)}>Logout</span></NavLink> : <NavLink to="/login"><span className='custombutton'>Login</span></NavLink>}
      </div>
    </nav>
  );
}
