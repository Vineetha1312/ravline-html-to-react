import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceDetails = () => {
  return (
    <div className="boxed_wrapper ltr">
    <div className="loader-wrap">
        <div className="preloader">
            <div className="preloader-close">close</div>
            <div id="handle-preloader" className="handle-preloader">
                <div className="animation-preloader">
                    <div className="spinner"></div>
                    <div className="txt-loading">
                        <span data-text-preloader="r" className="letters-loading">
                            r
                        </span>
                        <span data-text-preloader="a" className="letters-loading">
                            a
                        </span>
                        <span data-text-preloader="v" className="letters-loading">
                            v
                        </span>
                        <span data-text-preloader="l" className="letters-loading">
                            l
                        </span>
                        <span data-text-preloader="i" className="letters-loading">
                            i
                        </span>
                        <span data-text-preloader="n" className="letters-loading">
                            n
                        </span>
                        <span data-text-preloader="e" className="letters-loading">
                            e
                        </span>
                    </div>
                </div>   
            </div>
        </div>
    </div>


    <div id="search-popup" className="search-popup">
        <div className="popup-inner">
            <div className="upper-box">
                <figure className="logo-box"><a href="index.html"><img src="assets/images/logo-2.png" alt=""/></a></figure>
                <div className="close-search"><span className="fas fa-times"></span></div>
            </div>
            <div className="overlay-layer"></div>
            <div className="auto-container">
                <div className="search-form">
                    <form method="post" action="index.html">
                        <div className="form-group">
                            <fieldset>
                                <input type="search" className="form-control" name="search-input" value="" placeholder="Type your keyword and hit" required />
                                <button type="submit"><i className="fas fa-search"></i></button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <div className="xs-sidebar-group info-group info-sidebar">
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-overlay xs-overlay-2 xs-bg-black"></div>
        <div className="xs-overlay xs-overlay-3 xs-bg-black"></div>
        <div className="xs-overlay xs-overlay-4 xs-bg-black"></div>
        <div className="xs-overlay xs-overlay-5 xs-bg-black"></div>
        <div className="xs-sidebar-widget">
            <div className="sidebar-widget-container">
                <div className="widget-heading">
                    <a href="#" className="close-side-widget">X</a>
                </div>
                <div className="sidebar-textwidget">
                    <div className="sidebar-info-contents">
                        <div className="content-inner">
                            <div className="logo">
                                <a href="index.html"><img src="assets/images/logo-2.png" alt="" /></a>
                            </div>
                            <div className="text">
                                <h3>Expert Solutions in Business Funding, Personal Loans, and Credit Restoration</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                            <div className="info-box">
                                <h3>Conatct Us</h3>
                                <ul className="info clearfix">
                                    <li><div className="icon"><img src="assets/images/icons/icon-2.png" alt=""/></div>9050 Pines Blvd, SUITE 450-3, Pembroke Pines, FL 33024</li>
                                    <li><div className="icon"><img src="assets/images/icons/icon-3.png" alt=""/></div><a href="mailto:contact@ravlinecorp.com">contact@ravlinecorp.com</a></li>
                                    <li><div className="icon"><img src="assets/images/icons/icon-4.png" alt=""/></div><a href="tel:+1 305 970 7421">+1 305 970 7421</a></li>
                                    <li><div className="icon"><img src="assets/images/icons/icon-5.png" alt=""/></div>Working Hrs : 9.30am to 6.30pm</li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <header className="main-header inner-home header-style-one">
        <div className="header-lower">
            <div className="outer-box">
                <div className="left-column">
                    <div className="nav-btn nav-toggler navSidebar-button clearfix">
                        <img src="assets/images/icons/icon-1.png" alt=""/>
                    </div>
                    <div className="logo-box">
                        <figure className="logo"><a href="index.html"><img src="assets/images/logo.png" alt=""/></a></figure>
                    </div>
                </div>
                <div className="right-column">
                    <div className="menu-area">
                        <div className="mobile-nav-toggler">
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light clearfix">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                    <li><a href="index.html">Home</a></li> 
                                    <li><a href="about.html">About Us</a></li> 
                                    <li className="dropdown current"><a href="protection-plans.html">Protection Plans</a>
                                        <ul>
                                            <li><a href="service-details.html">All Service 01</a></li>
                                            <li><a href="service-details.html">All Service 02</a></li>
                                            <li><a href="service-details.html">All Service 03</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="pricing.html">Pricing</a></li> 
                                    <li><a href="wealth-education.html">Wealth Education</a></li> 
                                    <li><a href="contact.html">Contact Us</a></li> 
                                    <li className="d-block d-xl-none"><a href="appointment.html">Get Appointment</a></li> 
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="menu-right-content">
                        <div className="btn-box"><a href="appointment.html" className="theme-btn btn-one">get appointment</a></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="sticky-header">
            <div className="outer-container">
                <div className="outer-box">
                    <div className="left-column">
                        <div className="nav-btn nav-toggler navSidebar-button clearfix">
                            <img src="assets/images/icons/icon-1.png" alt=""/>
                        </div>
                        <div className="logo-box">
                            <figure className="logo"><a href="index.html"><img src="assets/images/logo.png" alt=""/></a></figure>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="menu-area">
                            <nav className="main-menu clearfix">
                            </nav>
                        </div>
                        <div className="menu-right-content">
                            <div className="btn-box"><a href="appointment.html" className="theme-btn btn-one">get appointment</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><i className="fas fa-times"></i></div>
        
        <nav className="menu-box">
            <div className="nav-logo"><a href="index.html"><img src="assets/images/logo.png" alt="" title=""/></a></div>
            <div className="menu-outer"></div>
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
                    <li><a href="index.html"><span className="fab fa-twitter"></span></a></li>
                    <li><a href="index.html"><span className="fab fa-facebook-square"></span></a></li>
                    <li><a href="index.html"><span className="fab fa-pinterest-p"></span></a></li>
                    <li><a href="index.html"><span className="fab fa-instagram"></span></a></li>
                    <li><a href="index.html"><span className="fab fa-youtube"></span></a></li>
                </ul>
            </div>
        </nav>
    </div>

    <section className="page-title">
        <div className="bg-layer" style={{ backgroundImage: url(assets/images/background/page-title.jpg) }}></div>
        
        <div className="line-grid-wrap">
            <span className="line-grid-1"></span>
            <span className="line-grid-2"></span>
            <span className="line-grid-3"></span>
            <span className="line-grid-4"></span>
            <span className="line-grid-5"></span>
        </div>
        <div className="auto-container">
            <div className="content-box">
                <h1>Budgeting</h1>
                <ul className="bread-crumb clearfix">
                    <li><a href="index.html">Home</a></li>
                    <li>Service</li>
                    <li>Budgeting</li>
                </ul>
            </div>
        </div>
    </section>

    <section className="service-details pt_120 pb_120">
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                    <div className="service-sidebar">
                        <div className="category-widget sidebar-widget">
                            <ul className="category-list clearfix">
                                <li><a href="service-details.html" className="current">Budgeting</a></li>
                                <li><a href="service-details.html">Credit Restoration</a></li>
                                <li><a href="service-details.html">Credit Builder</a></li>
                                <li><a href="service-details.html">Credit Attorney</a></li>
                                <li><a href="service-details.html">Credit Monitoring</a></li>
                                <li><a href="service-details.html">Debt Payoff</a></li>
                                <li><a href="service-details.html">Rocket Lawyer</a></li>
                                <li><a href="service-details.html">Financial Lockbox</a></li>
                            </ul>
                        </div>
                        <div className="contact-widget sidebar-widget">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/about-1.jpeg" alt=""/></figure>
                                </div>
                                <div className="content-box">
                                    <h3><span>Available</span> for any type of Service</h3>
                                    <h2>We can help</h2>
                                    <div className="btn-box centred">
                                        <a href="contact.html" className="theme-btn btn-one"><span>Contact us</span></a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                    <div className="service-details-content ml_35">
                        <div className="content-one">
                            <h2>Budgeting</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="content-two">
                            <div className="row clearfix">
                                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h3>Service Benefits</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <ul className="list-one clearfix">
                                            <li>Lorem Ipsum is simply dummy text</li>
                                            <li>Professional team do work</li>
                                            <li>Lorem Ipsum is simply dummy text</li>
                                            <li>Flexible and Cost-Effective</li>
                                        </ul>
                                        <ul className="list-two clearfix mb-4">
                                            <li>Lorem Ipsum is simply dummy text</li>
                                            <li>Quickly maximize timely deliverables</li>
                                            <li>Lorem Ipsum is simply dummy text</li>
                                            <li>Lorem Ipsum is simply dummy text</li>
                                            <li>Quickly maximize timely deliverables</li>
                                        </ul>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
  
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>



    <footer className="main-footer">
        <div className="auto-container">
            <div className="widget-section">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div className="footer-widget logo-widget mr_75">
                            <figure className="footer-logo"><a href="index.html"><img src="assets/images/logo.png" alt=""/></a></figure>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                        <div className="footer-widget links-widget">
                            <div className="widget-title">
                                <h3>Quick Links</h3>
                            </div>
                            <div className="widget-content">
                                <ul className="links-list clearfix">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="protection-plans.html">Protection Plans</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
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
                                    <li><a href="service-details.html">Budgeting</a></li>
                                    <li><a href="service-details.html">Credit Restoration</a></li>
                                    <li><a href="service-details.html">Credit Builder</a></li>
                                    <li><a href="service-details.html">Credit Attorney</a></li>
                                    <li><a href="service-details.html">Credit Monitoring</a></li>
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
                                    <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="index.html"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="index.html"><i className="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="bottom-inner">
                    <p>Copyright &copy; <a href="index.html">Ravline</a> 2024. All rights reserved.</p>
                    <p>Powered by: &nbsp; <a href="http://hansaitechnosoft.com/" target="_blank">
                        <img src="assets/images/hansaitechnosoft-logo.svg" width="90px" />
                    </a></p>
                </div>
            </div>
        </div>
    </footer>

    <div className="scroll-to-top">
        <div>
            <div className="scroll-top-inner">
                <div className="scroll-bar">
                    <div className="bar-inner"></div>
                </div>
                <div className="scroll-bar-text">Go To Top</div>
            </div>
        </div>
    </div>
    
</div>
  );
};

export default ServiceDetails;