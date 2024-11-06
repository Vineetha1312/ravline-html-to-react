import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState, useEffect } from 'react';

export default function Pricing() {
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false)
    }, 2000);
},[])
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
            <div className="bg-layer" style={{ backgroundImage: `url("assets/images/background/page-title.jpg")` }}></div>
            <div className="line-grid-wrap">
                <span className="line-grid-1"></span>
                <span className="line-grid-2"></span>
                <span className="line-grid-3"></span>
                <span className="line-grid-4"></span>
                <span className="line-grid-5"></span>
            </div>
            <div className="auto-container">
                <div className="content-box">
                    <h1 style={{textAlign:'left'}}>Pricing</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* page-title end */}


        {/* about-style-four */}
        <section className="about-style-four home-23 pt_110 pb_60" style={{textAlign:'left'}}>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                        <div className="content_block_three">
                            <div className="content-box">
                                <div className="sec-title">
                                    <span className="sub-title mb_14">welcome to Ravline</span>
                                    <h2>About Ravline Corp Pricing</h2>
                                </div>
                                <div className="text-box">
                                    <p>Ravline Corp is a trusted financial, business, and insurance consultation company with over 30 years of combined experience in the industry. Our mission is to provide personalized solutions that empower individuals and businesses to achieve their financial goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about-style-four end */}


        {/* chooseus-style-five */}
        <section className="chooseus-style-five pt_110 pb_100" style={{backgroundColor: '#fffac5'}}>
            <div className="outer-container">
                <div className="bg-layer" style={{ backgroundImage: `url("assets/images/pricing-img.jpg")` }}
                ></div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                        <div className="content-box">
                            <div className="sec-title light mb_25" style={{textAlign:'left'}}>
                                <span className="sub-title mb_15">Pricing & YFL</span>
                            </div>
                            <div className="text-box">
                                <div className="pricing-table">
                                    <div className="row">
                                        <div className="col-md-6 mb-3 text-center">
                                            <div className="price-box">
                                                <h2>$188</h2>
                                                <p>One-time Consultation<br/>Fee and first month included*</p>
                                            </div>
                                            <small>*See Terms & Conditions</small>
                                        </div>
                                        <div className="col-md-6 mb-3 text-center">
                                            <div className="price-box">
                                                <h2>$89</h2>
                                                <p>Per-Month After</p>
                                            </div>
                                            <small>*See below for cost breakdown</small>
                                        </div>
                                    </div>
                                    <div className="foundation-box">
                                        <img src="assets/images/yfl-foundation-logo.png" alt="YFL Foundation Logo" className="mb-3"/>
                                        <h5>For every Protection Plan payment, you are supporting our non-profit The Youth Financial Literacy Foundation.</h5>
                                        <div className="cost-breakdown">
                                            <div className="cost-item">
                                                $80
                                            </div>
                                            <span>+</span>
                                            <div className="cost-item non-profit">
                                                $9
                                            </div>
                                            <span>=</span>
                                            <div className="cost-item total">
                                                $89
                                            </div>
                                        </div>
                                        
                                        <div className="logo-row">
                                            <img src="assets/images/pricing-logo.jpg" />
                                            <img src="assets/images/pricing-logo.jpg" />
                                            <img src="assets/images/pricing-logo.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* chooseus-style-five end */}


        {/* main-footer */}
      
        {/* main-footer end */}

        <Footer/>

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


        {/*Search Popup*/}
        
        {/* Scroll to top end */}
        
    </div>


    

</div>
  )
}
