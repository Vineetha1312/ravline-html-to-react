import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState, useEffect } from 'react'

function Home() {
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
     <div><div className="xs-sidebar-group info-group info-sidebar">
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

                                    <Link to='/'><img src="assets/images/logo-2.png" alt="img" /></Link>
                                </div>
                                <div className="text">
                                    <h3>Expert Solutions in Business Funding, Personal Loans, and Credit Restoration</h3>
                                </div>
                                <div className="info-box">
                                    <h3>Conatct Us</h3>
                                    <ul className="info clearfix">
                                        <li><div className="icon"><img src="assets/images/icons/icon-2.png" alt="img"/></div>9050 Pines Blvd, SUITE 450-3, Pembroke Pines, FL 33024</li>
                                        <li><div className="icon"><img src="assets/images/icons/icon-3.png" alt="img"/></div><a href="mailto:contact@ravlinecorp.com">contact@ravlinecorp.com</a></li>
                                        <li><div className="icon"><img src="assets/images/icons/icon-4.png" alt="img"/></div><a href="tel:+1 305 970 7421">+1 305 970 7421</a></li>
                                        {/* <li><div className="icon"><img src="assets/images/icons/icon-5.png" alt="img"></div>Working Hrs : 9.30am to 6.30pm</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* END sidebar widget item */}


       
            <Header/>

        {/* banner-section */}
        <section className="banner-section p_relative">
            <div className="bg-layer">
            <video
            className="lazy"
            autoPlay
            muted
            loop
            playsInline
            poster="assets/images/banner/banner-1.jpg"
            >
            <source src="assets/images/banner/home_banner_video.mp4" type="video/mp4" />
            </video>

            </div>
            {/* <div className="pattern-layer" style="background-image: url(assets/images/shape/shape-1.png);"></div> */}
            {/* <div className="image-layer">
                <figure className="image-1"><img src="assets/images/banner/banner-img-1.png" alt="img"></figure>
                <figure className="image-2"><img src="assets/images/banner/banner-img-2.png" alt="img"></figure>
            </div> */}
            <div className="line-grid-wrap">
                <span className="line-grid-1"></span>
                <span className="line-grid-2"></span>
                <span className="line-grid-3"></span>
                <span className="line-grid-4"></span>
                <span className="line-grid-5"></span>
            </div>
            <div className="outer-container clearfix">
                <div className="content-box text-center">
                    <span className="upper-text wow fadeInUp" data-wow-delay="300ms">Empowering Your Financial Future</span>
                    <h2 className="wow fadeInUp" data-wow-delay="600ms">Restora<span>tion</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="900ms">Expert Solutions in Business Funding, Personal Loans, and Credit Restoration</p>
                    <Link to='/appointment' className="wow fadeInUp" data-wow-delay="1200ms"><span>Schedule your Appointment</span></Link>
                </div>
            </div>
        </section>
        {/* banner-section end */}


        {/* about-section */}
        <section className="about-section pt_120 pb_120">
            <div className="pattern-layer" style={{ backgroundImage: `url('assets/images/shape/shape-2.jpg')` }}
            ></div>
            <div className="line-grid-wrap">
                <span className="line-grid-1"></span>
                <span className="line-grid-2"></span>
                <span className="line-grid-3"></span>
                <span className="line-grid-4"></span>
                <span className="line-grid-5"></span>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 image-column wow fadeInUp" data-wow-delay="100ms">
                        <figure className="image-box mr_70"><img src="assets/images/resource/about-1.jpeg" alt="img"/></figure>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-column wow fadeInUp" data-wow-delay="150ms" style={{textAlign:'left'}}>
                        <div className="content_block_one">
                            <div className="content-box" >
                                <div className="sec-title light">
                                    {/* <span className="sub-title mb_16 wow fadeInUp" data-wow-delay="100ms">welcome to our company</span> */}
                                    <h2 className="wow fadeInUp" data-wow-delay="200ms">Ravline Corp: Your Trusted Partner in <span>Financial, Business, and Insurance Consultation</span></h2>
                                </div>
                                <div className="text-box">
                                    <p className="wow fadeInUp" data-wow-delay="300ms">Leveraging Over 30 Years of Industry Expertise to Deliver Comprehensive Solutions</p>
                                    <p className="wow fadeInUp" data-wow-delay="400ms">With a solid track record of 10+ years in operation and a team of seasoned professionals with over three decades of experience, Ravline Corp is dedicated to providing a wide range of services designed to meet your unique needs and drive your success</p>
                                </div>
                                {/* <div className="lower-box">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/thumb-1.jpg" alt="img"></figure>
                                        <h4>Robert Joe Kerry</h4>
                                        <span className="designation">Founder</span>
                                    </div>
                                    <figure className="signature"><img src="assets/images/icons/signature-1.png" alt="img"></figure>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about-section end */}


        {/* service-section */}
        <section className="service-section">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title mb_16">What we do</span>
                    <h2>Our Solutions, Your Path to Success</h2>
                    <p>We don’t just offer services—we become your trusted partner on the journey to financial freedom. Whether you're looking to repair bad credit, build business credit, or establish your business, we’re with you every step of the way, empowering you to confidently manage your finances. Our tailored solutions will equip you with the tools and knowledge needed to operate successfully and independently.</p>
                </div>
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block wow fadeInUp" data-wow-delay="100ms" >
                            <div className="service-block-one">
                                <div className="inner-box mb_100">
                                    <div className="icon-box"><img src="assets/images/icons/icon-9.png" alt="img"/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-18.png" alt="img"/></div>
                                    <h3><Link to="/credit-restoration">Credit Restoration</Link></h3>
                                    <div className="overlay-link"><Link to ="/protection-plans"><img src="assets/images/icons/icon-15.png" alt="img"/></Link></div>
                                    <div className="link"><Link to ="/protection-plans"><img src="assets/images/icons/icon-15.png" alt="img"/></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block wow fadeInUp" data-wow-delay="200ms">
                            <div className="service-block-one">
                                <div className="inner-box mb_100">
                                    <div className="icon-box"><img src="assets/images/icons/icon-10.png" alt="img"/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-19.png" alt="img"/></div>
                                    <h3><Link to ="/protection-plans">Credit Builder</Link></h3>
                                    <div className="overlay-link"><Link to ="/protection-plans"><img src="assets/images/icons/icon-15.png" alt="img"/></Link></div>
                                    <div className="link"><Link to ="/protection-plans"><img src="assets/images/icons/icon-15.png" alt="img"/></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block wow fadeInUp" data-wow-delay="300ms">
                            <div className="service-block-one">
                                <div className="inner-box mb_100">
                                    <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt="img"/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-20.png" alt="img"/></div>
                                    <h3><Link to ="/protection-plans">Debt Payoff</Link></h3>
                                    <div className="overlay-link"><Link to ="/protection-plans"><img src="assets/images/icons/icon-15.png" alt="img"/></Link></div>
                                    <div className="link"><Link to ="/protection-plans"><img src="assets/images/icons/icon-15.png" alt="img"/></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block wow fadeInUp" data-wow-delay="400ms">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-12.png" alt="img"/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-21.png" alt="img"/></div>
                                    <h3><Link to ="/protection-plans">Financial Lockbox</Link></h3>
                                    <div className="overlay-link"><Link to ="/protection-plans"><img src="assets/images/icons/icon-15.png" alt="img"/></Link></div>
                                    <div className="link"><Link to ="/protection-plans"><img src="assets/images/icons/icon-15.png" alt="img"/></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block wow fadeInUp" data-wow-delay="500ms">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-13.png" alt="img"/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-22.png" alt="img"/></div>
                                    <h3><Link to ="/protection-plans">Savings Goal</Link></h3>
                                    <div className="overlay-link"><Link to ="/protection-plans"><img src="assets/images/icons/icon-15.png" alt="img"/></Link></div>
                                    <div className="link"><Link to ="/protection-plans"><img src="assets/images/icons/icon-15.png" alt="img"/></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block wow fadeInUp" data-wow-delay="600ms">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-14.png" alt="img"/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-23.png" alt="img"/></div>
                                    <h3><Link to ="/protection-plans">YFL Family Mint</Link></h3>
                                    <div className="overlay-link"><Link to ="/protection-plans"><img src="assets/images/icons/icon-15.png" alt="img"/></Link></div>
                                    <div className="link"><Link to ="/protection-plans"><img src="assets/images/icons/icon-15.png" alt="img"/></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-btn centred mt_65">
                    <Link to="/protection-plans" className="theme-btn btn-two"><span>view all</span></Link>
                </div>
            </div>
        </section>
        {/* service-section end */}


        {/* chooseus-section */}
        <section className="chooseus-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-5 col-md-12 col-sm-12 image-column wow fadeInUp" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="image_block_one">
                            <div className="image-box pr_30 pb_25">
                                <figure className="image"><img src="assets/images/resource/chooseus-1.jpeg" alt="img"/></figure>
                                <div className="image-content centred">
                                    <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="img"/></div>
                                    <h4>Served over <br/> 3k+ happy customers</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 content-column wow fadeInUp" data-wow-delay="200ms" data-wow-duration="2500ms" style={{textAlign:'left'}}>
                        <div className="content_block_two">
                            <div className="content-box">
                                <div className="sec-title">
                                    <span className="sub-title mb_16">Why Choose Ravline Corp?</span>
                                    {/* <h2>The advantages of our company are in the quality of repairs</h2> */}
                                </div>
                                <div className="text-box">
                                    <p>Our unwavering commitment to quality, exceptional customer service, and strong local presence have positioned us as a leader in the financial consulting industry. Below are some key insights that highlight the current financial landscape in America.</p>
                                    
                                    <ul className="list-item clearfix">
                                        <li><span>100 Million:</span> People in the US have less than a 700 credit score(Experian.com)</li>
                                        <li><span>1.1 Million:</span> Identity theft claims were made in 2022(FTCgov)</li>
                                        <li><span>16.9 Trillion:</span> In American household debt is reported as of 2022(debt.org)</li>
                                        <li><span>60%:</span> of Americans lack a Will or Trust(AARP)</li>
                                        <li><span>64%:</span> of Americans are expected to retire with less than $10,000 in their retirement savings account.(yahoo.com)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* chooseus-section end */}

        {/* map-section */}
        <section className="map-section">
        <div className="map-inner">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.799868245698!2d-80.2677719250315!3d26.007372498410973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a8b00435f4c5%3A0xfc93002f0c8aa4a6!2s9050%20Pines%20Blvd%20450%203%2C%20Pembroke%20Pines%2C%20FL%2033025%2C%20USA!5e0!3m2!1sen!2sin!4v1727686369948!5m2!1sen!2sin"
    width="600"
    height="535"
    frameBorder="0"
    style={{ border: 0, width: '100%' }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  ></iframe>
</div>

            <div className="address-box">
                <h4>Office Address</h4>
                <p>9050 Pines Blvd<br/>SUITE 450-3<br/>Pembroke Pines, FL 33024</p>
                <p>Phone: <a href="tel:+1 305 970 7421">+1 305 970 7421</a></p>
                <p>Email: <a href="mailto:contact@ravlinecorp.com">contact@ravlinecorp.com</a></p>
            </div>
        </section>
        {/* map-section end */}


      

        <Footer/>
        {/* main-footer end */}



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

        
        {/* Scroll to top end */}
        
    </div>
  )
}

export default Home
