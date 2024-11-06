import React from 'react'
import { useState,useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Appointment() {

    useEffect(() => {
        // Dynamically load timePicker.js
        const script = document.createElement('script');
        script.src = 'assets/js/timePicker.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          // Clean up: remove the script if the component unmounts
          document.body.removeChild(script);
        };
      }, []);
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
    <div>
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
                    <h1>Book Appointment</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Book Appointment</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* page-title end */}


        {/* appointment-area */}
        <section className="appointment-area">
            <div className="auto-container">
                <div className="appointment-title" style={{textAlign:'left'}}>
                    <h2>Fill Out the Appointment Request Form Online and<br/> We’ll Contact You!</h2>
                    <p>In the event that you'd like one of our client administration agents to call you to plan your appointment, simply round out the structure beneath. Somediv will get in touch with you to affirm a date and time for your arrangement at the earliest opportunity.</p>
                </div>
                <div className="row">
                    <div className="col-xl-9">
                        <div className="appointment-form-box">
                            <form className="appointment-form" name="appointment-form" action="#" method="post">
                               <div className="form-box-single">
                                    <div className="single-box">
                                        <div className="inner-title">
                                            <h3>Name:</h3>
                                        </div>
                                        <input type="text" name="f_name" defaultValue="Read-only content" placeholder="" required=""/>
                                    </div>

                                    <div className="single-box">
                                        <div className="inner-title">
                                            <h3>Address</h3>
                                        </div>
                                        <div className="jobsite-address">
                                            <input type="text" name="f_jobsite_address" defaultValue="Read-only content" placeholder=""/>
                                            <input type="text" name="f_jobsite_address" defaultValue="Read-only content" placeholder=""/>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="single-box">
                                                <div className="inner-title">
                                                    <h3>City</h3>
                                                </div>
                                                <input type="text" name="f_city" defaultValue="Read-only content" placeholder=""/>
                                            </div>    
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="single-box selectbox">
                                                <div className="inner-title">
                                                    <h3>State</h3>
                                                </div>
                                                <select name="form_vehicle_make" className="selectpicker" data-width="100%">
                                                    <option selected="selected">State</option>
                                                    <option>Alabama</option>
                                                    <option>Florida</option>
                                                    <option>Iowa</option>
                                                    <option>New Jersey</option>
                                                </select>
                                            </div>    
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="single-box">
                                                <div className="inner-title">
                                                    <h3>Zip Code</h3>
                                                </div>
                                                <input type="text" name="f_zipcode" defaultValue="Read-only content" placeholder=""/>
                                            </div>    
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="single-box">
                                                <div className="inner-title">
                                                    <h3>Phone number</h3>
                                                </div>
                                                <input type="text" name="f_phn_number" defaultValue="Read-only content" placeholder=""/>
                                            </div>    
                                        </div> 
                                        <div className="col-xl-6">
                                            <div className="single-box">
                                                <div className="inner-title">
                                                    <h3>Email address</h3>
                                                </div>
                                                <input type="email" name="f_email" defaultValue="Read-only content" placeholder="" required=""/>
                                            </div>   
                                        </div>     
                                    </div>

                                </div>
                                <div className="form-box-single">
                                    <h4>Personal Information</h4>
                                    <div className="single-box">
                                        <div className="inner-title pt_15">
                                            <h3>Date of Birth</h3>
                                        </div>
                                        <div className="date-box clearfix">
                                            <div className="calander-data">
                                                <select id="dobday"></select>
                                            </div>
                                            <div className="calander-data">
                                                <select id="dobmonth"></select>
                                            </div>
                                            <div className="calander-data">
                                                <select id="dobyear"></select>
                                            </div>
                                            <div className="icon">
                                                <img src="assets/images/icons/icon-204.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="single-box">
                                        <div className="inner-title">
                                            <h3>Social Security Number</h3>
                                        </div>
                                        <input type="text" name="f_company" defaultValue="Read-only content" placeholder=""/>
                                    </div>
                                    
                                    <div className="single-box">
                                        <div className="inner-title">
                                            <h3>Driver's License Number</h3>
                                        </div>
                                        <input type="text" name="f_company" defaultValue="Read-only content" placeholder=""/>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="single-box">
                                                <div className="inner-title">
                                                    <h3>Credit Card Information</h3>
                                                </div>
                                                <input type="text" name="f_phn_number" defaultValue="Read-only content" placeholder=""/>
                                            </div>    
                                        </div> 
                                        <div className="col-xl-3">
                                            <div className="single-box">
                                                <div className="inner-title">
                                                    <h3>Exp</h3>
                                                </div>
                                                <input type="email" name="f_email" defaultValue="Read-only content" placeholder="" required=""/>
                                            </div>   
                                        </div> 
                                        <div className="col-xl-3">
                                            <div className="single-box">
                                                <div className="inner-title">
                                                    <h3>CVV</h3>
                                                </div>
                                                <input type="email" name="f_email" defaultValue="Read-only content" placeholder="" required=""/>
                                            </div>   
                                        </div>     
                                    </div>
                                </div>
                                
                                <div className="form-box-single">
                                
                                    <h4>Business Information</h4>

                                    <div className="single-box pt_15">
                                        <div className="inner-title">
                                            <h3>Business Name:</h3>
                                        </div>
                                        <input type="text" name="f_name" defaultValue="Read-only content" placeholder="" required=""/>
                                    </div>

                                    <div className="single-box">
                                        <div className="inner-title">
                                            <h3>Business Address</h3>
                                        </div>
                                        <div className="jobsite-address">
                                            <input type="text" name="f_jobsite_address" defaultValue="Read-only content" placeholder=""/>
                                            <input type="text" name="f_jobsite_address" defaultValue="Read-only content" placeholder=""/>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="single-box">
                                                <div className="inner-title">
                                                    <h3>City</h3>
                                                </div>
                                                <input type="text" name="f_city" defaultValue="Read-only content" placeholder=""/>
                                            </div>    
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="single-box selectbox">
                                                <div className="inner-title">
                                                    <h3>State</h3>
                                                </div>
                                                <select name="form_vehicle_make" className="selectpicker" data-width="100%">
                                                    <option selected="selected">State</option>
                                                    <option>Alabama</option>
                                                    <option>Florida</option>
                                                    <option>Iowa</option>
                                                    <option>New Jersey</option>
                                                </select>
                                            </div>    
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="single-box">
                                                <div className="inner-title">
                                                    <h3>Zip Code</h3>
                                                </div>
                                                <input type="text" name="f_zipcode" defaultValue="Read-only content" placeholder=""/>
                                            </div>    
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="single-box">
                                                <div className="inner-title">
                                                    <h3>Business Phone number</h3>
                                                </div>
                                                <input type="text" name="f_phn_number" defaultValue="Read-only content" placeholder=""/>
                                            </div>    
                                        </div> 
                                        <div className="col-xl-6">
                                            <div className="single-box">
                                                <div className="inner-title">
                                                    <h3>EIN</h3>
                                                </div>
                                                <input type="email" name="f_email" defaultValue="Read-only content" placeholder="" required=""/>
                                            </div>   
                                        </div>     
                                    </div>

                                    <div className="single-box">
                                        <div className="inner-title">
                                            <h3>Are you interested in opening a personal/business checking or savings account?</h3>
                                        </div>
                                        <div className="appointment-checkbox">
                                            <div className="single-checkbox">
                                                <input type="radio" name="appointment" id="radio1" checked/>
                                                <label for="radio1"><span></span>Yes</label>
                                            </div>
                                            <div className="single-checkbox">
                                                <input type="radio" name="appointment" id="radio2"/>
                                                <label for="radio2"><span></span>No</label>    
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-box mt-5">
                                        <div className="inner-title">
                                            <h3>Are you interested in a personal/business loan?</h3>
                                        </div>
                                        <div className="appointment-checkbox">
                                            <div className="single-checkbox">
                                                <input type="radio" name="appointment1" id="radio3" checked/>
                                                <label for="radio3"><span></span>Yes</label>
                                            </div>
                                            <div className="single-checkbox">
                                                <input type="radio" name="appointment1" id="radio4"/>
                                                <label for="radio4"><span></span>No</label>    
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-box pt_15">
                                        <div className="inner-title">
                                            <h3>Please describe any other banking needs:</h3>
                                        </div>
                                        <input type="text" name="f_name" defaultValue="Read-only content" placeholder="" required=""/>
                                    </div>
                                </div>

                                <div className="form-box-single">

                                    <h4>Credit Repair Inquiry</h4>
                                    <div className="single-box pt_15">
                                        <div className="inner-title">
                                            <h3>Are you looking to improve your credit score?</h3>
                                        </div>
                                        <div className="appointment-checkbox">
                                            <div className="single-checkbox">
                                                <input type="radio" name="appointment3" id="radio5" checked/>
                                                <label for="radio5"><span></span>Yes</label>
                                            </div>
                                            <div className="single-checkbox">
                                                <input type="radio" name="appointment3" id="radio6"/>
                                                <label for="radio6"><span></span>No</label>    
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-box mt-5">
                                        <div className="inner-title">
                                            <h3>Please describe any specific credit issues you'd like to address:</h3>
                                        </div>
                                        <input type="text" name="f_name" defaultValue="Read-only content" placeholder="" required=""/>
                                    </div>

                                    <div className="single-box mb-5">
                                        <div className="inner-title">
                                            <h3>Have you checked your credit report recently?</h3>
                                        </div>
                                        <div className="appointment-checkbox">
                                            <div className="single-checkbox">
                                                <input type="radio" name="appointment8" id="radio7" checked/>
                                                <label for="radio7"><span></span>Yes</label>
                                            </div>
                                            <div className="single-checkbox">
                                                <input type="radio" name="appointment8" id="radio8"/>
                                                <label for="radio8"><span></span>No</label>    
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-box-single">

                                    <h4>Income Information</h4>
                                    <div className="single-box mt-3">
                                        <div className="inner-title">
                                            <h3>Monthly Income</h3>
                                        </div>
                                        <input type="text" name="f_name" defaultValue="Read-only content" placeholder="" required=""/>
                                    </div>
                                    <div className="single-box">
                                        <div className="inner-title">
                                            <h3>Source of Income</h3>
                                        </div>
                                        <input type="text" name="f_name" defaultValue="Read-only content" placeholder="" required=""/>
                                    </div>
                                </div>

                                <div className="form-box-single">
                                    <h4>Financial Information</h4>
                                    <div className="single-box pt_15">
                                        <div className="inner-title">
                                            <h3>Do you have any existing debts or loans?</h3>
                                        </div>
                                        <div className="appointment-checkbox">
                                            <div className="single-checkbox">
                                                <input type="radio" name="appointment9" id="radio9" checked/>
                                                <label for="radio9"><span></span>Yes</label>
                                            </div>
                                            <div className="single-checkbox">
                                                <input type="radio" name="appointment9" id="radio10"/>
                                                <label for="radio10"><span></span>No</label>    
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-box mt-5">
                                        <div className="inner-title">
                                            <h3>Please list any outstanding balances:</h3>
                                        </div>
                                        <input type="text" name="f_name" defaultValue="Read-only content" placeholder="" required=""/>
                                    </div>

                                    <div className="single-box mb-5">
                                        <div className="inner-title">
                                            <h3>Are you currently in bankruptcy or have you been in bankruptcy in the past?</h3>
                                        </div>
                                        <div className="appointment-checkbox">
                                            <div className="single-checkbox">
                                                <input type="radio" name="appoint" id="radio11" checked/>
                                                <label for="radio11"><span></span>Yes</label>
                                            </div>
                                            <div className="single-checkbox">
                                                <input type="radio" name="appoint" id="radio12"/>
                                                <label for="radio12"><span></span>No</label>    
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-box-single">
                                    <h4>Supporting Documents</h4>
                                    <div className="single-box pt_15 mb-1">
                                        <div className="inner-title">
                                            <h3>Please provide copies of the following documents:</h3>
                                            <ul className="list-style-form">
                                                <li>Proof of identity(e.g., driver's license, passport)</li>
                                                <li>Proof of address(e.g., utility bill, rental agreement)</li>
                                                <li>Proof of income(e.g., pay stubs, tax returns)</li>
                                            <li>Credit report(if available)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <h4>Consent to Contact</h4>
                                <div className="single-box pt_15">
                                    <div className="newsletter-checkbox">
                                        <input type="checkbox" name="subscribe-newsletter" id="newsletter" checked=""/>
                                        <label for="newsletter"><span></span>I consent to be contacted by RAVLINE Corp. for further information or to provide updates on my application.</label>
                                    </div>
                                </div>

                                <div className="appointment-form-button mt-5">
                                    <button type="submit" className="theme-btn btn-one"><span>make an appointment</span></button>  
                                </div>
                                  
                            </form>    
                        </div>    
                    </div>
                </div>
            </div>    
        </section>
        {/* appointment-area end */}


        {/* main-footer */}
        {/* main-footer end */}

            <Footer/>

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
        </div>
        {/* Scroll to top end */}
        
    </div>

</div>
  )
}
