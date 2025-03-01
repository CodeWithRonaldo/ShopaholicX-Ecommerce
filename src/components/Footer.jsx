import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <h1>ShopaholicX</h1>
        
      </div>
    <div>
      <ul className='footer-links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>


      </ul>
      <div className='icon-container'>

      <div className='social-icons'>
        <h2>Follow us on social media</h2>
        <a href='https://www.instagram.com/'> <FaInstagram className='icons'/></a>
        <a href='https://www.twitter.com/'> <FaXTwitter className='icons'/></a>
        <a href='https://www.facebook.com/'> <CiFacebook className='icons'/></a>

      </div>
      </div>
      <div className='copyright'>
        <hr className='hr'/>
        <p>&copy; 2025 ShopaholicX. All rights reserved.</p>
      </div>
    </div>
    </div>
  )
}

export default Footer