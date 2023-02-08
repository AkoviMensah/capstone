import React from 'react'
import Nav from './Nav'
import logo from '../assets/logo.png'
import "../App.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <img src={logo} className="logo" alt="Little Lemon logo" />
            </Link>
            <Nav />
        </header>
    )
}

export default Header