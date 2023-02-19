import React from 'react'
import logo from '../assets/logo.png'
import '../App.css'
const Footer = () => {
  return (
    <footer>
      <article id="logo_footer">
        <img src={logo} alt="footer" />
      </article>
      <article id="copyright">
        <p>Copyright Little Lemon</p>
      </article>
    </footer>
  )
}

export default Footer