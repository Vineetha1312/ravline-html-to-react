import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, onClose }) {
    const sidebarStyles = {
        xsSidebarGroup: {
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '460px',
            zIndex: 999999999,
            backgroundColor: '#fff',
            transition: 'all 900ms ease',
            visibility: isOpen ? 'visible' : 'hidden',
            opacity: isOpen ? 1 : 0,
            height: '100%',
            WebkitOverflowScrolling: 'touch',
            right: isOpen ? 0 : '-100%',
        },
        xsOverlay: {
            left: '0%',
            top: 0,
            position: 'fixed',
            height: '100%',
            width: '20%',
            transform: isOpen ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left center',
            cursor: 'pointer',
            zIndex: 9999999,
            borderRight: '1px solid rgba(255, 255, 255, 0.10)',
            transition: 'transform .65s .3s cubic-bezier(0.7, 0, 0.2, 1)',
            backgroundColor: '#000',
        },
        overlayDelayStyles: [
            { left: '20%', transitionDelay: '.06s' },
            { left: '40%', transitionDelay: '.09s' },
            { left: '60%', transitionDelay: '.12s' },
            { left: '80%', transitionDelay: '.15s' },
        ],
        sidebarWidgetContainer: {
            padding: '50px 40px 50px 40px',
        },
        logo: {
            display: 'block',
            paddingBottom: '25px',
            marginBottom: '35px',
            borderBottom: '1px solid #e0e0e0',
            width: '25%',
        },
        closeBtn: {
            display: 'inline-block',
            width: '40px',
            height: '40px',
            textAlign: 'center',
            border: '1px solid #0e132d',
            color: '#0e132d',
            borderRadius: '50%',
            fontWeight: 400,
            fontSize: '20px',
            transition: 'all 500ms ease',
        },
    };

    return (
        <div className="xs-sidebar-group info-group info-sidebar">
            {/* Overlay Layers */}
            <div style={sidebarStyles.xsOverlay} onClick={onClose}></div>
            {sidebarStyles.overlayDelayStyles.map((style, index) => (
                <div key={index} style={{ ...sidebarStyles.xsOverlay, ...style }} onClick={onClose}></div>
            ))}

            <div className="xs-sidebar-widget" style={sidebarStyles.xsSidebarGroup}>
                <div style={sidebarStyles.sidebarWidgetContainer}>
                    <div className="widget-heading" style={{textAlign:'right'}}>
                        <button className="close-side-widget" style={sidebarStyles.closeBtn} onClick={onClose} aria-label="Close Sidebar">
                            X
                        </button>
                    </div>
                    <div className="sidebar-textwidget" style={{ textAlign: 'left' }}>
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                <div className="logo" style={sidebarStyles.logo}>
                                    <Link to="/"><img src="assets/images/logo-2.png" alt="img" /></Link>
                                </div>
                                <div className="text">
                                    <h3>Expert Solutions in Business Funding, Personal Loans, and Credit Restoration</h3>
                                </div>
                                <div className="info-box">
                                    <h3 className='mt-5'>Contact Us</h3>
                                    <ul className="info list-unstyled">
            <li className="d-flex align-items-center mb-3">
                <div className="icon" style={{ marginRight: '10px' }}>
                    <img src="assets/images/icons/icon-2.png" alt="Location" />
                </div>
                <span style={{ fontSize: '18px', color: '#343536' }}>
                    9050 Pines Blvd, SUITE 450-3, Pembroke Pines, FL 33024
                </span>
            </li>
            <li className="d-flex align-items-center mb-3">
                <div className="icon" style={{ marginRight: '10px' }}>
                    <img src="assets/images/icons/icon-3.png" alt="Email" />
                </div>
                <a
                    href="mailto:contact@ravlinecorp.com"
                    style={{
                        color: '#343536',
                        fontSize: '18px',
                        textDecoration: 'none',
                    }}
                >
                    contact@ravlinecorp.com
                </a>
            </li>
            <li className="d-flex align-items-center mb-3">
                <div className="icon" style={{ marginRight: '10px' }}>
                    <img src="assets/images/icons/icon-4.png" alt="Phone" />
                </div>
                <a href="tel:+1 305 970 7421" style={{ fontSize: '18px', color: '#343536' }}>
                    +1 305 970 7421
                </a>
            </li>
        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;