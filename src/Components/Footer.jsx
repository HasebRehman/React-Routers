import React from 'react'
import '../Styles/Footer.css'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footerBox'>
        <div className="logoBox">
            <Link to="/">
                <img className='footerLogo' src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="footer-logo" />
            </Link>
        </div>

        <div className='resourcesBox'>
            <div className='resHeadingBox'>
                <h3 className='resourcesHeading'>Resources</h3>
            </div>
            <div className='listBox'>
                <ul className='list'>
                    <NavLink to="/" className="footerNav">
                        Home
                    </NavLink>
                </ul>
            </div>
            <div className='listBox'>
                <ul className='list'>
                    <NavLink to="/about" className="footerNav">
                        About
                    </NavLink>
                </ul>
            </div>
            <div className='listBox'>
                <ul className='list'>
                    <NavLink to="/contact" className="footerNav">
                        Contact
                    </NavLink>
                </ul>
            </div>
            <div className='listBox'>
                <ul className='list'>
                    <NavLink to="/github" className="footerNav">
                        Github
                    </NavLink>
                </ul>
            </div>  
        </div>

        <div className='resourcesBox'>
            <div className='resHeadingBox'>
                <h3 className='resourcesHeading'>Follow us</h3>
            </div>
            <div className='listBox'>
                <ul className='list'>
                    <NavLink to="/" className="footerNav">
                        Github
                    </NavLink>
                </ul>
            </div>
            <div className='listBox'>
                <ul className='list'>
                    <NavLink to="/" className="footerNav">
                        Discord
                    </NavLink>
                </ul>
            </div> 
        </div>

        <div className='resourcesBox'>
            <div className='resHeadingBox'>
                <h3 className='resourcesHeading'>Legal</h3>
            </div>
            <div className='listBox'>
                <ul className='list'>
                    <NavLink to="/" id='privacy' className="footerNav">
                        Privacy Policy
                    </NavLink>
                </ul>
            </div>
            <div className='listBox'>
                <ul className='list'>
                    <NavLink to="/" id='terms' className="footerNav">
                        Terms & Conditions
                    </NavLink>
                </ul>
            </div>
        </div>

    </div>

    <div className='bottomTextBox'>
        <div className="bottomText">
            HaseebRehman - All Reserved
        </div>
    </div>
    </>
  )
}

export default Footer