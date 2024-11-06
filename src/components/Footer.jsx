import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="main-footer about-foot mt-0">
            {/* <div className="partnership-main">
                <div className="partnership-cnt">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-9 border-end border-end-mob">
                            <h4 className="px-2 px-lg-5 mb-3">Partnership with Hansai Technosoft LLC</h4>
                            <p className="px-2 px-lg-5">Revline Corp partnered with Hansai Technosoft LLC to deliver top-notch IT services and solutions through their successful BOT (Build-Operate-Transfer) business model. As part of this collaboration, we are proud to bundle Hansai’s exceptional BOT services with our offerings, enhancing our capabilities and driving innovation. Together with Hansai Technosoft LLC, we look forward to providing unparalleled value to our clients through cutting-edge technology solutions and seamless integration.</p>
                        </div>
                        <div className="col-lg-3 px-5 text-center mt-4 mt-lg-0">
                            <a href="https://hansaitechnosoft.com/" target="_blank">
                                <img src="assets/images/hansai-tech-logo.jpg"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="auto-container">
                <div className="widget-section">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget mr_75">
                                <figure className="footer-logo"><Link to='/'><img src="assets/images/logo.png" alt=""/></Link></figure>
                                <p>Your Trusted Partner in Financial, Business, and Insurance Consultation.</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to='/about'>About Us</Link></li>
                                        <li><Link to="protection-plans">Protection Plans</Link></li>
                                        <li><Link to="/pricing">Pricing</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget ml_50">
                                <div className="widget-title">
                                    <h3>Protection Plans</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link to="/protection-plans">Budgeting</Link></li>
                                        <li><Link to="/protection-plans">Credit Restoration</Link></li>
                                        <li><Link to="/protection-plans">Credit Builder</Link></li>
                                        <li><Link to="/protection-plans">Credit Attorney</Link></li>
                                        <li><Link to="/protection-plans">Credit Monitoring</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h3>Get in Touch</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="info-list clearfix mb_25">
                                        <li><a href="tel:+1 305 970 7421">+1 305 970 7421</a></li>
                                        <li><a href="mailto:contact@ravlinecorp.com">contact@ravlinecorp.com</a></li>
                                        <li>9050 Pines Blvd, SUITE 450-3,
                                            Pembroke Pines, FL 33024</li>
                                    </ul>
                                    <ul className="social-links clearfix">
                                        <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/"><i className="fab fa-google-plus-g"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="bottom-inner">
                        <p>Copyright &copy; <Link to='/'>Ravline</Link> 2024. All rights reserved.</p>
                        <p>Powered by: &nbsp; <a href="http://hansaitechnosoft.com/" target="_blank">
                            <img src="assets/images/hansaitechnosoft-logo.svg" width="90px" />
                        </a></p>
                    </div>
                </div>
            </div>
        </footer> 
        {/* Mobile Menu  */}
        <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn"><i className="fas fa-times"></i></div>
            
            <nav className="menu-box">
                <div className="nav-logo"><Link to='/'><img src="assets/images/logo.png" alt="img" title=""/></Link></div>
                <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
                <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>9050 Pines Blvd, SUITE 450-3, Pembroke Pines, FL 33024</li>
                        <li><a href="tel:+1 305 970 7421">+1 305 970 7421</a></li>
                        <li><a href="mailto:contact@ravlinecorp.com">contact@ravlinecorp.com</a></li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul className="clearfix">
                        <li><Link to ="/"><span className="fab fa-twitter"></span></Link></li>
                        <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                        <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                        <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                        <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div>
        {/* End Mobile Menu */}
 
    </div>
  )
}
