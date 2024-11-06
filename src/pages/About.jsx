import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function About() {
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false)
    }, 2000);
    },[])
  return (
    <div className="boxed_wrapper ltr">
        {isLoading && <div className="loader-wrap">
        <div className="preloader">
            <div className="preloader-close">close</div>
            <div id="handle-preloader" className="handle-preloader">
                <div className="animation-preloader">
                    {/* <div className="spinner"></div> */}
                    <div className="txt-loading">
                        <img src="assets/images/logo_animation.gif" alt="img"/>
                    </div>
                </div>   
            </div>
        </div>
    </div> }
    <div><div id="search-popup" className="search-popup">
            <div className="popup-inner">
                <div className="upper-box">
                    <figure className="logo-box"><Link to='/'><img src="assets/images/logo-2.png" alt=""/></Link></figure>
                    <div className="close-search"><span className="fas fa-times"></span></div>
                </div>
                <div className="overlay-layer"></div>
                <div className="auto-container">
                    <div className="search-form">
                        <form method="post" action="index.html">
                            <div className="form-group">
                                <fieldset>
                                    <input type="search" className="form-control" name="search-input" defaultValue="Read-only content" placeholder="Type your keyword and hit" required/>
                                    <button type="submit"><i className="fas fa-search"></i></button>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    <Header/>
       
        {/* page-title */}
        <section className="page-title">
            <div className="bg-layer" style={{ backgroundImage: `url('assets/images/background/page-title.jpg')` }}></div>
            <div className="line-grid-wrap">
                <span className="line-grid-1"></span>
                <span className="line-grid-2"></span>
                <span className="line-grid-3"></span>
                <span className="line-grid-4"></span>
                <span className="line-grid-5"></span>
            </div>
            <div className="auto-container">
                <div className="content-box">
                    <h1>About Us</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* page-title end */}


        {/* about-style-four */}
        <section className="about-style-four home-23 pt_70 pb_30">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 content-column" style={{textAlign:'left'}}>
                        <div className="content_block_three">
                            <div className="content-box">
                                <div className="sec-title mb_25">
                                    <span className="sub-title mb_14">welcome to Ravline</span>
                                    <h2>About Ravline Corp</h2>
                                </div>
                                <div className="text-box">
                                    <p>At Ravline Corp, we believe that knowledge, power, and freedom are the keys to success for both businesses and individuals. We are dedicated to providing the support you need to achieve your aspirations and goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* about-style-four end */}


        {/* chooseus-style-five */}
        <section className="chooseus-style-five pt_70 pb_40 d-none">
            <div className="outer-container">
                <div className="bg-layer" style={{ backgroundImage: `url('assets/images/background/chooseus-bg.jpg')` }}
                ></div>
                <div className="inner-box">
                    <div className="icon-box"><img src="assets/images/icons/icon-154.png" alt=""/></div>
                    <h3>Served over 3k+ happy customers</h3>
                </div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                        <div className="content-box">
                            <div className="sec-title light mb_25">
                                <span className="sub-title mb_15">Our History</span>
                            </div>
                            <div className="text-box">
                                <p>Founded by Rodney Rutty, Ravline Corp specializing in credit restoration, business funding, personal loans, and financial advisory services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* chooseus-style-five end */}


        {/* about-style-six */}
        <section className="about-style-11 about-page home-21 pt_70 pb_30" style={{textAlign:'left'}}>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                        <div className="content-box mr_50">
                            <div className="sec-title">
                                <span className="sub-title mb_16">Our Vision</span>
                            </div>
                            <div className="text-box">
                                <p>To be the leading provider of innovative financial solutions that enhance the quality of life for our clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                        <div className="content-box mr_50">
                            <div className="sec-title">
                                <span className="sub-title mb_16">Our Mission</span>
                            </div>
                            <div className="text-box">
                                <p>To guide our clients through their financial journeys by offering expert advice and tailored services, ensuring they have the tools and knowledge to succeed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about-style-six */}


        {/* team-section */}
        <section className="team-section about-page home-20 pt_70 pb_85" style={{textAlign:'left'}}>
            <div className="large-container">
                <div className="sec-title mb_60">
                    <span className="sub-title mb_14">Our Experts</span>
                    <h3>Our team consists of seasoned experts dedicated to providing exceptional personal and business financial guidance, comprehensive business consultation, and ongoing support.</h3>
                </div>
                <div className="inner-container">
                    <div className="row clearfix">
                       
                        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                            <div className="team-block-three wow fadeInUp animated" data-wow-delay="200ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><a href="javascript:void(0)"><img src="assets/images/team/team-11.jpg" alt=""/></a></figure>
                                        <ul className="social-links">
                                            <li><a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="#">Rodney Rutty</a></h3>
                                        <span className="designation">CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                            <div className="team-block-three wow fadeInUp animated" data-wow-delay="400ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><a href="javascript:void(0)"><img src="assets/images/team/team-10.jpg" alt=""/></a></figure>
                                        <ul className="social-links">
                                            <li><a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="#">Viviana</a></h3>
                                        <span className="designation">CFO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                            <div className="team-block-three wow fadeInUp animated" data-wow-delay="600ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><a href="javascript:void(0)"><img src="assets/images/team/team-9.jpg" alt=""/></a></figure>
                                        <ul className="social-links">
                                            <li><a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="#">Delroy Nicely</a></h3>
                                        <span className="designation">COO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="main-footer about-foot">
            <div className="partnership-main">
                <div className="partnership-cnt">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-9 border-end border-end-mob" style={{textAlign:'left'}}>
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
            </div>

            <div className="auto-container">
                <div className="widget-section">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget mr_75">
                                <figure className="footer-logo"><a href="index.html"><img src="assets/images/logo.png" alt="img"/></a></figure>
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
                                        <li><a href="protection-plans.html">Budgeting</a></li>
                                        <li><a href="protection-plans.html">Credit Restoration</a></li>
                                        <li><a href="protection-plans.html">Credit Builder</a></li>
                                        <li><a href="protection-plans.html">Credit Attorney</a></li>
                                        <li><a href="protection-plans.html">Credit Monitoring</a></li>
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

        {/*Scroll to top*/}
        <div className="scroll-to-top">
            <div>
                <div className="scroll-top-inner">
                    <div className="scroll-bar">
                        <div className="bar-inner"></div>
                    </div>
                    <div className="scroll-bar-text">Go To Top</div>
                </div>
            </div>
        </div></div> 
        


        {/*Search Popup*/}
        
        {/* Scroll to top end */}
        
    </div>

  )
}

export default About