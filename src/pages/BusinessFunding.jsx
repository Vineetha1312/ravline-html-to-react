import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useEffect, useState } from 'react'

export default function BusinessFunding() {
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
                    <h1 style={{textAlign:'left'}}>Business Funding</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Business Funding</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* page-title end */}


        {/* service-section */}
        <section className="service-section service-page-1">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="sec-title" style={{textAlign:'left'}}>
                        <span className="sub-title mb_12">Business Funding</span>
                        <h2>Coming Soon</h2>
                        {/* <p>Manage your finances effectively with tools for budgeting, credit restoration, and debt payoff. Protect your identity and assets with credit monitoring, legal services, and a financial lockbox. Achieve your financial goals with net worth tracking, savings planning, and family-focused solutions like YFL Family Mint.</p> */}
                    </div>
                    {/* <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new1.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new1.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Budgeting</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Budgeting protection plans offer a range of tools and resources to help individuals manage their personal finances effectively. These plans assist users in tracking income, setting financial goals, and allocating funds toward essential expenses while minimizing unnecessary spending. Users can create tailored budgets based on their specific financial situations and receive ongoing monitoring and support.</p>
                                <p><b>Key Benefit:</b> The budgeting plan empowers users to make informed financial decisions, avoid debt, and achieve long-term financial stability.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-18.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Credit Restoration</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Credit restoration services focus on helping individuals improve their credit scores by addressing inaccuracies on their credit reports. Professionals review the credit history, dispute errors, and negotiate with creditors to remove negative marks such as late payments or collections. The benefit of choosing credit restoration is a potentially improved credit score, which can lead to lower interest rates on loans, increased approval chances for credit cards, and better financial opportunities, like qualifying for a mortgage or auto loan.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-19.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-19.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Credit Builder</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Credit builder plans are designed for individuals looking to establish or improve their credit profiles by creating positive credit history through responsible use of financial products. This may involve secured credit cards or small loans that report to major credit bureaus. The key benefit is that it helps individuals build or repair their credit over time, making it easier to secure better financial opportunities in the future, such as lower interest rates or approval for larger lines of credit.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new2.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new2.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Credit Attorney</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Credit attorney protection plans provide access to legal professionals who specialize in handling credit disputes and related issues. If a credit report contains inaccuracies or fraudulent activities, these attorneys help negotiate with creditors and credit bureaus to remove incorrect or harmful items. They also offer expert advice on managing credit and protecting it from further issues.</p>
                                <p><b>Key Benefit:</b> Users gain the legal support needed to improve their credit scores by ensuring accurate credit reporting, potentially leading to better financial opportunities.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new3.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new3.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Credit Monitoring</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Credit monitoring plans keep an eye on an individual’s credit reports and notify them of any changes or suspicious activities. The service continuously scans for updates from major credit bureaus, alerting users to new credit inquiries, account openings, or significant changes in their credit scores.</p>
                                <p><b>Key Benefit:</b> Early detection of fraudulent activities or unauthorized changes allows users to take prompt action, protecting their credit health and financial future.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-20.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-20.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Debt Payoff</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Debt payoff plans are designed to help individuals manage and eliminate outstanding debts, such as credit card balances, loans, or other financial obligations. These programs typically include strategies like debt consolidation, budgeting advice, and payment management. The main benefit is achieving financial freedom by reducing debt load, improving credit scores, and eliminating the stress associated with high debt, leading to greater financial stability and security.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new4.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new4.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Rocket Lawyer</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Rocket Lawyer protection plans provide access to online legal services, including the creation and review of essential financial documents. These services can help individuals prepare wills, contracts, or other legal documents needed for financial management, estate planning, and more.</p>
                                <p><b>Key Benefit:</b> Users can easily and affordably handle financial legal matters with professional assistance, ensuring all documents are legally sound and tailored to their needs.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-21.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Financial Lockbox</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>A financial lockbox is a secure, digital repository where individuals can store important financial documents, such as wills, tax returns, insurance policies, and account information. This service ensures that all critical documents are easily accessible in one place, especially in times of emergencies. The benefit of a financial lockbox is the peace of mind that comes with having organized and readily available financial records, which can be shared with trusted individuals if necessary.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new5.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new5.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Identity Monitoring</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Identity monitoring plans protect users from identity theft by tracking personal information across the web, including social security numbers, bank accounts, and credit cards. The plan includes real-time alerts if any suspicious activity is detected or if personal data is exposed in breaches.</p>
                                <p><b>Key Benefit:</b> Early identification of identity theft risks enables users to act quickly to prevent further damage to their credit or financial standing.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new6.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new6.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Net Worth</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Net worth tracking plans allow individuals to monitor their overall financial health by calculating the total value of their assets and liabilities. These plans provide insights into savings, investments, debts, and overall financial progress toward specific goals, like retirement or major purchases.</p>
                                <p><b>Key Benefit:</b> Regularly tracking net worth helps users make informed financial decisions, stay focused on financial goals, and build long-term wealth.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-22.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-22.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Savings Goal</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Savings goal plans are structured to help individuals set, track, and achieve specific financial objectives, such as saving for a vacation, emergency fund, or down payment on a home. These plans often include tools like automated savings transfers, goal tracking, and financial education resources. The benefit is the empowerment and discipline that comes from having a clear savings strategy, which leads to greater financial stability and the ability to reach important personal or financial milestones more effectively.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new7.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new7.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Will & Trust</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Will & trust protection plans assist users in creating legally binding documents that manage the distribution of assets after death. These plans often include tools to draft and update wills, set up trusts, and ensure estate planning aligns with the user’s wishes.</p>
                                <p><b>Key Benefit:</b> Peace of mind knowing that loved ones and financial assets will be managed and protected according to the user’s wishes, minimizing legal complications.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-23.png" alt=""></div>
                                    <h3><a href="protection-plans.html">YFL Family Mint</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>The YFL Family Mint is a comprehensive financial education platform designed for families to teach children and teenagers about money management, savings, and budgeting in an interactive way. It provides age-appropriate lessons and tools that help young learners develop essential financial skills early on. This program often includes activities like setting savings goals, understanding the basics of earning, spending, and learning how to invest responsibly.</p>
                                <p>The benefit of choosing YFL Family Mint is that it empowers families to instill good financial habits in their children from a young age. By making financial literacy a family activity, children gain a strong foundation in managing their personal finances, setting them up for future financial independence and success.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/* service-section end */}


      

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
        </div></div>
      

        {/*Search Popup*/}
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
                                    <input type="search" className="form-control" name="search-input" defaultValue="Read-only content" placeholder="Type your keyword and hit" required/>
                                    <button type="submit"><i className="fas fa-search"></i></button>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        {/* sidebar cart item */}
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
                                </div>
                                <div className="info-box">
                                    <h3>Conatct Us</h3>
                                    <ul className="info clearfix">
                                        <li><div className="icon"><img src="assets/images/icons/icon-2.png" alt=""/></div>9050 Pines Blvd, SUITE 450-3, Pembroke Pines, FL 33024</li>
                                        <li><div className="icon"><img src="assets/images/icons/icon-3.png" alt=""/></div><a href="mailto:contact@ravlinecorp.com">contact@ravlinecorp.com</a></li>
                                        <li><div className="icon"><img src="assets/images/icons/icon-4.png" alt=""/></div><a href="tel:+1 305 970 7421">+1 305 970 7421</a></li>
                                        {/* <li><div className="icon"><img src="assets/images/icons/icon-5.png" alt=""></div>Working Hrs : 9.30am to 6.30pm</li> */}
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
                    <h1>Business Funding</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Business Funding</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* page-title end */}


        {/* service-section */}
        <section className="service-section service-page-1">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="sec-title">
                        <span className="sub-title mb_12">Business Funding</span>
                        <h2>Coming Soon</h2>
                        {/* <p>Manage your finances effectively with tools for budgeting, credit restoration, and debt payoff. Protect your identity and assets with credit monitoring, legal services, and a financial lockbox. Achieve your financial goals with net worth tracking, savings planning, and family-focused solutions like YFL Family Mint.</p> */}
                    </div>
                    {/* <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new1.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new1.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Budgeting</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Budgeting protection plans offer a range of tools and resources to help individuals manage their personal finances effectively. These plans assist users in tracking income, setting financial goals, and allocating funds toward essential expenses while minimizing unnecessary spending. Users can create tailored budgets based on their specific financial situations and receive ongoing monitoring and support.</p>
                                <p><b>Key Benefit:</b> The budgeting plan empowers users to make informed financial decisions, avoid debt, and achieve long-term financial stability.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-18.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Credit Restoration</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Credit restoration services focus on helping individuals improve their credit scores by addressing inaccuracies on their credit reports. Professionals review the credit history, dispute errors, and negotiate with creditors to remove negative marks such as late payments or collections. The benefit of choosing credit restoration is a potentially improved credit score, which can lead to lower interest rates on loans, increased approval chances for credit cards, and better financial opportunities, like qualifying for a mortgage or auto loan.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-19.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-19.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Credit Builder</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Credit builder plans are designed for individuals looking to establish or improve their credit profiles by creating positive credit history through responsible use of financial products. This may involve secured credit cards or small loans that report to major credit bureaus. The key benefit is that it helps individuals build or repair their credit over time, making it easier to secure better financial opportunities in the future, such as lower interest rates or approval for larger lines of credit.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new2.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new2.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Credit Attorney</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Credit attorney protection plans provide access to legal professionals who specialize in handling credit disputes and related issues. If a credit report contains inaccuracies or fraudulent activities, these attorneys help negotiate with creditors and credit bureaus to remove incorrect or harmful items. They also offer expert advice on managing credit and protecting it from further issues.</p>
                                <p><b>Key Benefit:</b> Users gain the legal support needed to improve their credit scores by ensuring accurate credit reporting, potentially leading to better financial opportunities.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new3.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new3.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Credit Monitoring</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Credit monitoring plans keep an eye on an individual’s credit reports and notify them of any changes or suspicious activities. The service continuously scans for updates from major credit bureaus, alerting users to new credit inquiries, account openings, or significant changes in their credit scores.</p>
                                <p><b>Key Benefit:</b> Early detection of fraudulent activities or unauthorized changes allows users to take prompt action, protecting their credit health and financial future.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-20.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-20.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Debt Payoff</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Debt payoff plans are designed to help individuals manage and eliminate outstanding debts, such as credit card balances, loans, or other financial obligations. These programs typically include strategies like debt consolidation, budgeting advice, and payment management. The main benefit is achieving financial freedom by reducing debt load, improving credit scores, and eliminating the stress associated with high debt, leading to greater financial stability and security.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new4.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new4.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Rocket Lawyer</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Rocket Lawyer protection plans provide access to online legal services, including the creation and review of essential financial documents. These services can help individuals prepare wills, contracts, or other legal documents needed for financial management, estate planning, and more.</p>
                                <p><b>Key Benefit:</b> Users can easily and affordably handle financial legal matters with professional assistance, ensuring all documents are legally sound and tailored to their needs.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-21.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Financial Lockbox</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>A financial lockbox is a secure, digital repository where individuals can store important financial documents, such as wills, tax returns, insurance policies, and account information. This service ensures that all critical documents are easily accessible in one place, especially in times of emergencies. The benefit of a financial lockbox is the peace of mind that comes with having organized and readily available financial records, which can be shared with trusted individuals if necessary.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new5.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new5.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Identity Monitoring</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Identity monitoring plans protect users from identity theft by tracking personal information across the web, including social security numbers, bank accounts, and credit cards. The plan includes real-time alerts if any suspicious activity is detected or if personal data is exposed in breaches.</p>
                                <p><b>Key Benefit:</b> Early identification of identity theft risks enables users to act quickly to prevent further damage to their credit or financial standing.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new6.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new6.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Net Worth</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Net worth tracking plans allow individuals to monitor their overall financial health by calculating the total value of their assets and liabilities. These plans provide insights into savings, investments, debts, and overall financial progress toward specific goals, like retirement or major purchases.</p>
                                <p><b>Key Benefit:</b> Regularly tracking net worth helps users make informed financial decisions, stay focused on financial goals, and build long-term wealth.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-22.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-22.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Savings Goal</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Savings goal plans are structured to help individuals set, track, and achieve specific financial objectives, such as saving for a vacation, emergency fund, or down payment on a home. These plans often include tools like automated savings transfers, goal tracking, and financial education resources. The benefit is the empowerment and discipline that comes from having a clear savings strategy, which leads to greater financial stability and the ability to reach important personal or financial milestones more effectively.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new7.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new7.png" alt=""></div>
                                    <h3><a href="protection-plans.html">Will & Trust</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>Will & trust protection plans assist users in creating legally binding documents that manage the distribution of assets after death. These plans often include tools to draft and update wills, set up trusts, and ensure estate planning aligns with the user’s wishes.</p>
                                <p><b>Key Benefit:</b> Peace of mind knowing that loved ones and financial assets will be managed and protected according to the user’s wishes, minimizing legal complications.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-23.png" alt=""></div>
                                    <h3><a href="protection-plans.html">YFL Family Mint</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""></a></div>
                                </div>
                                <p>The YFL Family Mint is a comprehensive financial education platform designed for families to teach children and teenagers about money management, savings, and budgeting in an interactive way. It provides age-appropriate lessons and tools that help young learners develop essential financial skills early on. This program often includes activities like setting savings goals, understanding the basics of earning, spending, and learning how to invest responsibly.</p>
                                <p>The benefit of choosing YFL Family Mint is that it empowers families to instill good financial habits in their children from a young age. By making financial literacy a family activity, children gain a strong foundation in managing their personal finances, setting them up for future financial independence and success.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/* service-section end */}


      

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
