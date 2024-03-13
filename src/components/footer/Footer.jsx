import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' >PEERAPAT</a>


      <ul className='permalinks'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#services">Services</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/perapat.siriai"><FaFacebookF/></a>
        <a href="https://www.instagram.com/_.p.e.e._/"><FaInstagram/></a>
        <a href="/"><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Peerapat Siriai.</small>
      </div>

    </footer>
  )
}

export default Footer