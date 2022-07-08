import React from "react";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/CC.png'
import './navbar.css'

const Navbar = () => {
    return (
        <div className = "cc_navbar">
            <div className = "cc_navbar-links">
                <div className = "cc_navbar-links_logo">
                    <img src = {logo} alt="logo"/>
                </div>
                <div className="cc_navbar-links_containers">
                    <p><a href="#home"> HOME </a></p>
                    <p><a href="#about"> ABOUT </a></p>
                    <p><a href="#projects"> PROJECTS </a></p>
                    <p><a href="#contact"> SOCIAL AND CONTACT </a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar