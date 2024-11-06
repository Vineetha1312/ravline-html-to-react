import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState, useEffect } from 'react';

export default function CreditRestoration() {
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
        </div>}
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
                    <h1 style={{textAlign:'left'}}>Credit Restoration</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Service</li>
                        <li>Credit Restoration</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* page-title end */}


        {/* service-details */}
        <section className="service-details pt_120 pb_120">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                        <div className="service-sidebar">
                            <div className="category-widget sidebar-widget">
                                <ul className="category-list clearfix">
                                    <li><a href="protection-plans.html" className="current">Budgeting</a></li>
                                    <li><a href="protection-plans.html">Credit Restoration</a></li>
                                    <li><a href="protection-plans.html">Credit Builder</a></li>
                                    <li><a href="protection-plans.html">Credit Attorney</a></li>
                                    <li><a href="protection-plans.html">Credit Monitoring</a></li>
                                    <li><a href="protection-plans.html">Debt Payoff</a></li>
                                    <li><a href="protection-plans.html">Rocket Lawyer</a></li>
                                    <li><a href="protection-plans.html">Financial Lockbox</a></li>
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
                                <h2>Credit Restoration</h2>
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
                                    {/* <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/service/service-details-1.jpg" alt=""></figure>
                                            <figure className="image"><img src="assets/images/service/service-details-2.jpg" alt=""></figure>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            {/* <div className="content-three">
                                <h3>Have You Any Question</h3>
                                <ul className="accordion-box">
                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <h4>Duis aute irure dolor in reprehenderit volup.</h4>
                                        </div>
                                        <div className="acc-content">
                                            <div className="text">
                                                <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids. Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <h4>Sunt in culpa qui officia deserunt mollit.</h4>
                                        </div>
                                        <div className="acc-content">
                                            <div className="text">
                                                <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids. Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block active-block">
                                        <div className="acc-btn active">
                                            <h4>Sed ut perspiciatis unde omnis iste natus.</h4>
                                        </div>
                                        <div className="acc-content current">
                                            <div className="text">
                                                <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids. Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <h4>Excepteur sint occaecat cupidatat proident.</h4>
                                        </div>
                                        <div className="acc-content">
                                            <div className="text">
                                                <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids. Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* service-details end */}



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
</div>
  )
}
