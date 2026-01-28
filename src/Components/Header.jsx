import React from 'react'
import "../Styles/Header.css"
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='HeaderBox'>
      <div className="logo">
        <Link to="/">
          <img className='img' src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="logo-img" />
        </Link>
      </div>

      <div className="navBox">
        <NavLink to="/" className={({isActive}) => isActive? "homeActiveClass": "homeNotActiveClass"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({isActive}) => isActive? "homeActiveClass": "homeNotActiveClass"}>
          About Us
        </NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive? "homeActiveClass": "homeNotActiveClass"}>
          Contact Us
        </NavLink>
        <NavLink to="/github" className={({isActive}) => isActive? "homeActiveClass": "homeNotActiveClass"}>
          Github
        </NavLink>
      </div>

      <div className="btns">
        <button className='btn1'>Log in</button>
        <button className='btn2'>Get Started</button>
      </div>
    </div>
    </>
  )
}

export default Header