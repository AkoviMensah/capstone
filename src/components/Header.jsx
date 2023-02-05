import React from 'react'
import Nav from './Nav'
import logo from '../assets/logo.png'
import "../App.css"

const Header = () => {
    return (
        <header>
            <img src={logo} className="logo" alt="Little Lemon logo" />
            <Nav />
        </header>
    )
}

export default Header