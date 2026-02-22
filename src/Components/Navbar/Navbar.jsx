import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/Images/logo.png';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar--scrolled');
            } else {
                navbar.classList.remove('navbar--scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <nav id="navbar" className="navbar">
                <div className="navbar__wrapper">
                    <div className="navbar__logo-section">
                        <img src={logo} alt="Alwin Interiors Logo" className="navbar__logo-img" />
                        <span className="navbar__logo-text">Alwin Interiors</span>
                    </div>

                    <button className="navbar__menu-btn" onClick={toggleSidebar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className="navbar__menu">
                        <li><Link smooth={true} duration={500} to="home" className="navbar__link">Home</Link></li>
                        <li><Link smooth={true} duration={500} to="about-us" className="navbar__link">About</Link></li>
                        <li><Link smooth={true} duration={500} to="menu" className="navbar__link">Services</Link></li>
                        <li><Link smooth={true} duration={500} to="contact" className="navbar__link">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <div id="sidebar-menu" className={`sidebar ${isSidebarOpen ? 'sidebar--active' : ''}`}>
                <button className="sidebar__close" onClick={toggleSidebar}>&times;</button>
                <ul className="sidebar__menu">
                    <li><Link onClick={closeSidebar} smooth={true} duration={500} to="home">Home</Link></li>
                    <li><Link onClick={closeSidebar} smooth={true} duration={500} to="about-us">About</Link></li>
                    <li><Link onClick={closeSidebar} smooth={true} duration={500} to="menu">Services</Link></li>
                    <li><Link onClick={closeSidebar} smooth={true} duration={500} to="contact">Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
