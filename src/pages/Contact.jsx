import React from "react";
import Footer from "../components/Footer";
import Header from '../components/Header'
import { useState, useEffect } from "react";

const Contact = () => {
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
     <div> <div id="search-popup" className="search-popup">
          <div className="popup-inner">
            <div className="upper-box">
              <figure className="logo-box">
                <a href="index.html">
                  <img src="assets/images/logo-2.png" alt="" />
                </a>
              </figure>
              <div className="close-search">
                <span className="fas fa-times"></span>
              </div>
            </div>
            <div className="overlay-layer"></div>
            <div className="auto-container">
              <div className="search-form">
                <form method="post" action="index.html">
                  <div className="form-group">
                    <fieldset>
                      <input
                        type="search"
                        className="form-control"
                        name="search-input"
                        defaultValue="Read-only content"
                        placeholder="Type your keyword and hit"
                        required
                      />
                      <button type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </fieldset>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Header/>

       

        <section className="page-title">
          <div
            className="bg-layer"
            style={{ backgroundImage: "url(assets/images/background/page-title.jpg)" }}
          ></div>
          <div className="line-grid-wrap">
            <span className="line-grid-1"></span>
            <span className="line-grid-2"></span>
            <span className="line-grid-3"></span>
            <span className="line-grid-4"></span>
            <span className="line-grid-5"></span>
          </div>
          <div className="auto-container">
            <div className="content-box">
              <h1 style={{textAlign:'left'}}>Contact Us</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-page-section pt_110 pb_120" style={{backgroundColor:'#fafcfa', textAlign:'left'}}>
          <div className="auto-container">
            <div className="sec-title mb_50">
              <span className="sub-title mb_14">get in touch</span>
              <h2>Drop a message to us</h2>
              <p>
                We’re here to help you with all your financial needs! Whether
                you have questions about our services, want to schedule a
                consultation, or need assistance, our team is ready to assist
                you. Reach out to us today, and let’s take the first step
                towards your financial success.
              </p>
            </div>
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                <div className="form-inner">
                <form
                method="post"
                action="sendemail.php"
                id="contact-form"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '20px',
                }}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Your Name"
                  required
                  style={{
                    flex: '1 1 48%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  style={{
                    flex: '1 1 48%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  style={{
                    flex: '1 1 48%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  style={{
                    flex: '1 1 48%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Type message"
                  style={{
                    flex: '1 1 100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    minHeight: '100px',
                  }}
                ></textarea>
                <div style={{ width: '100%', textAlign: 'center' }}>
                  <button
                    type="submit"
                    name="submit-form"
                    style={{
                      backgroundColor: '#999966',
                      color: 'white',
                      padding: '10px 20px',
                      border: 'none',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      borderRadius: '4px',
                    }}
                  >
                    Submit Now
                  </button>
                </div>
              </form>
                </div>
              </div>
              <div
      style={{
        width: '30%',
        padding: '40px',
        borderBottom: '1px solid #e6e6e6',
        lineHeight: '1.5',
        textAlign:'left',

      }}
    >
      <div style={{ marginBottom: '20px' }}>
      <h2
  style={{
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#123456',
    marginBottom: '15px',
    textAlign: 'left',
    paddingBottom: '5px',
    position: 'relative', 
    display: 'inline-block',
  }}
>
  Ravline Corp
  <span
    style={{
      content: '""',
      position: 'absolute',
      bottom: '0',         
      left: '0',
      height: '2px',       
      width: '30%',        
      backgroundColor: '#999966', 
      borderRadius: '1px', 
    }}
  ></span>
</h2>

        <p
          style={{
            color: '#666666',
            margin: '10px 0',
            textAlign: 'left',
          }}
        >
          9050 Pines Blvd
          <br />
          SUITE 450-3
          <br />
          Pembroke Pines, FL 33024
        </p>
        <a
          href="mailto:contact@ravlinecorp.com"
          style={{
            color: '#123456',
            textDecoration: 'none',
            display: 'block',
            marginBottom: '15px',
            textAlign: 'left',
          }}
        >
          contact@ravlinecorp.com
        </a>
      </div>
      <div style={{ paddingTop: '10px', borderTop: '1px solid #ddd', textAlign: 'left' }}>
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#123456',
            marginBottom: '5px',
          }}
        >
          Call Us at :
        </h3>
        <a
          href="tel:+1 305 970 7421"
          style={{
            color: '#123456',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1.2rem',
          }}
        >
          +1 305 970 7421
        </a>
      </div>
    </div>
            </div>
          </div>
        </section>

        <section className="map-section">
        <div className="map-inner">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.799868245698!2d-80.2677719250315!3d26.007372498410973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a8b00435f4c5%3A0xfc93002f0c8aa4a6!2s9050%20Pines%20Blvd%20450%203%2C%20Pembroke%20Pines%2C%20FL%2033025%2C%20USA!5e0!3m2!1sen!2sin!4v1727686369948!5m2!1sen!2sin" width="600" height="535" frameborder="0" style={{border:"0",  width: "100%"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>

        </section>

       
        <Footer/>

        <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
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
        

        
    </div>
  );
};

export default Contact;
