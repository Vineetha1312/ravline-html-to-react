import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Header() {
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation(); // Get current location to check the active page

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isMobileMenuOpen);
    }, [isMobileMenuOpen]);

    // Function to check if a route is active
    const isActive = (path) => location.pathname === path;

    const headerStyles = {
        mainHeader: {
            top: '17px',
        },
        mobileMenu: {
            display: isMobileMenuOpen ? 'block' : 'none',
            position: 'fixed',
            zIndex: 999999,
        },
        menuBackdrop: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
    };

    return (
        <div>
            <header className="main-header header-style-one" style={headerStyles.mainHeader}>
                <div className="header-lower">
                    <div className="outer-box">
                        <div className="left-column">
                            <div className="nav-btn nav-toggler navSidebar-button clearfix" onClick={toggleSidebar}>
                                <img src="assets/images/icons/icon-1.png" alt="img" />
                            </div>
                            <div className="logo-box">
                                <figure className="logo"><Link to="/"><img src="assets/images/logo.png" alt="img" /></Link></figure>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="menu-area">
                                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li className={isActive("/") ? "current" : ""}><Link to="/">Home</Link></li>
                                            <li className={isActive("/about") ? "current" : ""}><Link to="/about">About Us</Link></li>
                                            <li className={`dropdown ${isDropdownOpen ? 'open' : ''} ${isActive("/protection-plans") || isActive("/business-funding") ? "current" : ""}`}>
                                                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>Our Services</a>
                                                <ul style={{ display: isDropdownOpen ? 'block' : 'none' }}>
                                                    <li><Link to="/protection-plans">Protection Plans</Link></li>
                                                    <li><Link to="/business-funding">Business Funding</Link></li>
                                                </ul>
                                            </li>
                                            <li className={isActive("/pricing") ? "current" : ""}><Link to="/pricing">Pricing</Link></li>
                                            <li className={isActive("/wealth-education") ? "current" : ""}><Link to="/wealth-education">Wealth Education</Link></li>
                                            <li><a href="assets/images/wealth-education.pdf" download target="_blank">Our Foundation</a></li>
                                            <li className={isActive("/contact") ? "current" : ""}><Link to="/contact">Contact Us</Link></li>
                                            <li className="d-block d-xl-none"><Link to="/appointment">Get Appointment</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="menu-right-content">
                                <div className="btn-box"><Link to="/appointment" className="theme-btn btn-one">Get Appointment</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-header">
                    <div className="outer-container">
                        <div className="outer-box">
                            <div className="left-column">
                                <div className="nav-btn nav-toggler navSidebar-button clearfix" onClick={toggleSidebar}>
                                    <img src="assets/images/icons/icon-1.png" alt="img" />
                                </div>
                                <div className="logo-box">
                                    <figure className="logo"><Link to="/"><img src="assets/images/logo.png" alt="img" /></Link></figure>
                                </div>
                            </div>
                            <div className="right-column">
                                <div className="menu-area">
                                    <nav className="main-menu clearfix">
                                        <ul className="navigation clearfix">
                                            <li className={isActive("/") ? "current" : ""}><Link to="/">Home</Link></li>
                                            <li className={isActive("/about") ? "current" : ""}><Link to="/about">About Us</Link></li>
                                            <li className={`dropdown ${isDropdownOpen ? 'open' : ''} ${isActive("/protection-plans") || isActive("/business-funding") ? "current" : ""}`}>
                                                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>Our Services</a>
                                                <ul>
                                                    <li><Link to="/protection-plans">Protection Plans</Link></li>
                                                    <li><Link to="/business-funding">Business Funding</Link></li>
                                                </ul>
                                            </li>
                                            <li className={isActive("/pricing") ? "current" : ""}><Link to="/pricing">Pricing</Link></li>
                                            <li className={isActive("/wealth-education") ? "current" : ""}><Link to="/wealth-education">Wealth Education</Link></li>
                                            <li><a href="assets/images/wealth-education.pdf" download target="_blank">Our Foundation</a></li>
                                            <li className={isActive("/contact") ? "current" : ""}><Link to="/contact">Contact Us</Link></li>
                                            <li className="d-block d-xl-none"><Link to="/appointment">Get Appointment</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="menu-right-content">
                                    <div className="btn-box"><Link to="/appointment" className="theme-btn btn-one">Get Appointment</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar - Conditionally Rendered */}
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-visible' : ''}`} style={headerStyles.mobileMenu}>
                <div className="menu-backdrop" style={headerStyles.menuBackdrop} onClick={toggleMobileMenu}></div>
                <div className="close-btn" onClick={toggleMobileMenu}><i className="fas fa-times"></i></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link to="/"><img src="assets/images/logo.png" alt="" title="" /></Link></div>
                    <div className="menu-outer" style={{ textAlign: 'left' }}>
                        <ul className="navigation clearfix">
                            <li className={isActive("/") ? "current" : ""}><Link to="/">Home</Link></li>
                            <li className={isActive("/about") ? "current" : ""}><Link to="/about">About Us</Link></li>
                            <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>Our Services</a>
                                <ul style={{ display: isDropdownOpen ? 'block' : 'none', transition: 'display 0.3s ease' }}>
                                    <li><Link to="/protection-plans">Protection Plans</Link></li>
                                    <li><Link to="/business-funding">Business Funding</Link></li>
                                </ul>
                            </li>
                            <li className={isActive("/pricing") ? "current" : ""}><Link to="/pricing">Pricing</Link></li>
                            <li className={isActive("/wealth-education") ? "current" : ""}><Link to="/wealth-education">Wealth Education</Link></li>
                            <li><a href="assets/images/wealth-education.pdf" download target="_blank">Our Foundation</a></li>
                            <li className={isActive("/contact") ? "current" : ""}><Link to="/contact">Contact Us</Link></li>
                            <li className="d-block d-xl-none"><Link to="/appointment">Get Appointment</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
