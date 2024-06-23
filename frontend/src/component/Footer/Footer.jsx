import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
       <div className='footer-content-left'>
        <img src={assets.logo} alt='' />
        <p>Experience exquisite dining with our diverse menu crafted from the finest ingredients, offering a fusion of traditional and contemporary flavors.</p>
        <div className='footer-social-icons'>
        <img src={assets.facebook_icon} alt=''/>
        <img src={assets.twitter_icon} alt=''/>
        <img src={assets.linkedin_icon} alt=''/>

        </div>
       </div> 
       <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Privacy policy</li>
            </ul>
       </div>
       <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <li>+91 79801093XX</li>
            <li>contact@tomato.com</li>
       </div>
      </div>
      <hr/>
      <div className='copyright'>
      <h6>copyright 2024 @Tomato.com - All Right Reserved.</h6>
      </div>
    </div>
  )
}

export default Footer
