import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Handle scroll to change navbar background color
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = '#555';
            } else {
                navbar.style.backgroundColor = '#333';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Close sidebar when a link is clicked
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <div id="navbar">
                <button id="menu-button" onClick={toggleSidebar}>&#9776;</button> {/* Menu icon */}
                <ul>
                    <li><Link smooth={true} duration={500} to="home">Home</Link></li>
                    <li><Link smooth={true} duration={500} to="about-us">About</Link></li>
                    <li><Link smooth={true} duration={500} to="services">Services</Link></li>
                    <li><Link smooth={true} duration={500} to="contact">Contact</Link></li>
                </ul>
            </div>

            <div id="sidebar-menu" className={isSidebarOpen ? 'active' : ''}>
                <span id="close-button" onClick={toggleSidebar}>&times;</span> {/* Close icon */}
                <ul>
                    <li><Link onClick={closeSidebar} smooth={true} duration={500} to="home">Home</Link></li>
                    <li><Link onClick={closeSidebar} smooth={true} duration={500} to="about-us">About</Link></li>
                    <li><Link onClick={closeSidebar} smooth={true} duration={500} to="services">Services</Link></li>
                    <li><Link onClick={closeSidebar} smooth={true} duration={500} to="contact">Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;