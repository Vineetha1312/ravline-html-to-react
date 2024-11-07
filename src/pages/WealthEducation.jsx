import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState, useEffect, useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function WealthEducation() {
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false)
    }, 2000);
    },[])
    const owlCarouselRef = useRef(null);
      
    const goToPrev = () => {
         owlCarouselRef.current.prev();
     };
      
        const goToNext = () => {
          owlCarouselRef.current.next();
        };
      
  return (
    <div>

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
                    <figure className="logo-box"><a href="index.html"><img src="assets/images/logo-2.png" alt=""/></a></figure>
                    <div className="close-search"><span className="fas fa-times"></span></div>
                </div>
                <div className="overlay-layer"></div>
                <div className="auto-container">
                    <div className="search-form">
                        <form method="post" action="index.html">
                            <div className="form-group">
                                <fieldset>
                                    <input type="search" className="form-control" name="search-input" defaultValue="Read-only content" placeholder="Type your keyword and hit" required />
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
            <div className="bg-layer" style={{backgroundImage: `url("assets/images/background/page-title.jpg")`}}></div>
            <div className="line-grid-wrap">
                <span className="line-grid-1"></span>
                <span className="line-grid-2"></span>
                <span className="line-grid-3"></span>
                <span className="line-grid-4"></span>
                <span className="line-grid-5"></span>
            </div>
            <div className="auto-container">
                <div className="content-box">
                    <h1 style={{textAlign:'left'}}>Wealth Education</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Wealth Education</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* page-title end */}


       {/* about-style-four */}
       <section className="about-style-four home-23 pt_110 pb_120" style={{textAlign:'left'}}>
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                    <div className="content_block_three">
                        <div className="content-box">
                            <div className="sec-title mb_25">
                                <span className="sub-title mb_14">Wealth Education</span>
                                <h2>Empowering Your Financial Future </h2>
                            </div>
                            <div className="text-box">
                                <p>At Ravline, we believe that financial literacy is the foundation of long-term success and stability. Our Wealth Education program is designed to provide individuals and businesses with the tools, knowledge, and resources needed to make informed financial decisions.</p>
                                <p>Through our tailored financial education services, we cover a wide range of topics, including:</p>
                                <ul className="list-style-two clearfix">
                                    <li>Budgeting and Saving: Learn the art of managing your income and expenses to build a solid financial foundation.</li>
                                    <li>Debt Management: Discover strategies for reducing debt and improving your credit score, empowering you to take control of your financial life.</li>
                                    <li>Investment Basics: Gain insights into investment options, from stocks and bonds to real estate, helping you grow your wealth for the future.</li>
                                    <li>Retirement Planning: Understand the steps needed to ensure a comfortable and secure retirement.</li>
                                    <li>Estate Planning: Learn how to protect your assets and ensure that your legacy is passed on according to your wishes.</li>
                                </ul>
                                <p>We take pride in celebrating the successes of our clients. Many individuals and businesses have transformed their financial situations through our education programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* about-style-four end */}

    {/* testimonial-section */}
    {/* <section className="testimonial-section pt_120 pb_120">
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                    <div className="sec-title light">
                        <span className="sub-title mb_16">Testimonials</span>
                        <h2>What They’re Talking About Comapany ?</h2>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                    <div className="two-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="text">
                                    <div className="quote"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                </div>
                                <div className="author-box">
                                    <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                    <h5>Robert Mick</h5>
                                    <span className="designation">Customer</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="text">
                                    <div className="quote"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                </div>
                                <div className="author-box">
                                    <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                    <h5>Marray Joe</h5>
                                    <span className="designation">Customer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    {/* testimonial-section end */}
    <section
      className="testimonial-section"
      style={{ padding: '80px 0', backgroundColor: '#1A1A2E' }}
    >
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-4 col-md-12 title-column">
            <div
              className="sec-title light"
              style={{ color: '#A6A867', textAlign: 'center' }}
            >
              <span
                className="sub-title mb_16"
                style={{
                  fontSize: '1rem',
                  color: '#A6A867',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '10px',
                  width: 'fit-content',
                }}
              >
                Testimonials
              </span>
              <h2
                style={{
                  fontSize: '2.5rem',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  lineHeight: '1.3',
                  marginBottom: '30px',
                  textAlign: 'left',
                  marginTop: '30px',
                }}
              >
                What They’re Talking About Company?
              </h2>
              <div style={{ display: 'flex', gap: '15px', marginTop: '20px', marginLeft:'40px'}}>
    <button
      onClick={goToPrev}
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'transparent',
        border: '2px solid #B1B1B1', // Updated to a light grey or white shade
        color: '#B1B1B1',             // Updated to match icon color in the first image
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      &#8592;
    </button>
    <button
      onClick={goToNext}
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'transparent',
        border: '2px solid #B1B1B1', // Updated to a light grey or white shade
        color: '#B1B1B1',             // Updated to match icon color in the first image
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      &#8594;
    </button>
</div>
            </div>
          </div>
          {/* <div className="col-lg-8 col-md-12 content-column">
            <OwlCarousel
              ref={owlCarouselRef}
              className="owl-theme"
              loop
              margin={20}
              nav={false}
              items={1}
              dots={false}
              autoplay={true}
              autoplayTimeout={5000}
              autoplayHoverPause={true}
            >
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <div className="text">
                    <div className="quote">
                      <img
                        src="assets/images/icons/icon-25.png"
                        alt=""
                        style={{ width: '50px', height: '50px' }}
                      />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                  <div className="author-box">
                    <figure className="author-thumb">
                      <img
                        src="assets/images/resource/testimonial-1.png"
                        alt=""
                      />
                    </figure>
                    <h5>Robert Mick</h5>
                    <span className="designation">Customer</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <div className="text">
                    <div className="quote">
                      <img
                        src="assets/images/icons/icon-25.png"
                        alt=""
                        style={{ width: '50px', height: '50px' }}
                      />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                  <div className="author-box">
                    <figure className="author-thumb">
                      <img
                        src="assets/images/resource/testimonial-2.png"
                        alt=""
                      />
                    </figure>
                    <h5>Marray Joe</h5>
                    <span className="designation">Customer</span>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div> */}
          <div className="col-lg-8 col-md-12 content-column">
            <OwlCarousel
              className="owl-theme"
              ref={owlCarouselRef}
              loop
              margin={20}
              nav
              items={2}
              dots={false}
              autoplay={true}
              autoplayTimeout={5000}
              autoplayHoverPause={true}
              navText={['<', '>']}
            >
              <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="text">
                                    <div className="quote"><img src="assets/images/icons/icon-25.png" alt=""  style={{ width: '50px', height: '50px' }}/></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                </div>
                                <div className="author-box">
                                    <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                    <h5>Robert Mick</h5>
                                    <span className="designation">Customer</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="text">
                                    <div className="quote"><img src="assets/images/icons/icon-25.png"  alt="" style={{ width: '50px', height: '50px' }}/></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                </div>
                                <div className="author-box">
                                    <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                    <h5>Marray Joe</h5>
                                    <span className="designation">Customer</span>
                                </div>
                            </div>
                        </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>


        {/* main-footer */}
        {/* <footer className="main-footer">
            <div className="auto-container">
                <div className="widget-section">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget mr_75">
                                <figure className="footer-logo"><a href="index.html"><img src="assets/images/logo.png" alt=""/></a></figure>
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
        </footer> */}
        <Footer/>
        {/* main-footer end */}



        {/*Scroll to top*/}
        <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
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
</div>
  )
}
