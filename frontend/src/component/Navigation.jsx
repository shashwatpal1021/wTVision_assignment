import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

export function Navigation({isAuth,setIsAuth}) {


  return (
    <nav className="navbar">
      <div className="navbar-brand">JWT Authentication</div>
      <div className="navbar-links">
        {console.log("isAuth",isAuth)}
        {isAuth && <NavLink to="/">Home</NavLink>}
        {isAuth ? <NavLink to="/logout"><span onClick={() => setIsAuth(false)}>Logout</span></NavLink> : <NavLink to="/login">Login</NavLink>}
      </div>
    </nav>
  );
}
