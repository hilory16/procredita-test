import Layout from '../../hoc/layout';
import React,{useState, useEffect, Component} from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import {connect} from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import 'react-awesome-slider/dist/styles.css';
import * as UI from './index-style';
import Header from '../../components/Header';
import {Link} from 'react-router-dom'

class Index extends Component {

  render(){
    return (
      <Layout>
        <UI.Wrapper>
          <div className="banner-container"> 
            <Header/>
            <div className="banner container d-flex align-items-end pt-4">
              <div className="row content align-items-center flex-column-reverse flex-lg-row">
                <div className="col-lg-6 left mb-lg-0">
                    <h1 className="big-text ">We provide a comprehensive  debt collection  service</h1>
                    <p className="small-text">Our professionals have a combined 85 years in debt recovery efforts that have seen the recovery of more than N19Billion in debt from very unwilling debtors.
                    We use the most advanced techniques to trace debtors and recover money owed. We also offer an alternative method for loan recoveries by allowing debtors provide value worth the amount they are unable to pay.</p>

                    <div className="button-container d-flex align-items-center flex-wrap">
                      <Link to="">
                        <div className="btn-1-pattern btn-pattern space mb-3 mb-md-0">
                          Hire Us
                        </div>
                      </Link>
                      <Link to="" className="d-flex align-items-center video">
                        <img src={require('../../assets/img/play.svg')} alt="" className="mr-2"/>
                        <span>Watch the Video</span>
                      </Link>
                    </div>

                </div>

                <div className="col-lg-6 right mb-4 mb-lg-0">
                    <img src={require('../../assets/img/hero.svg')} alt="" className="mx-auto"/>
                </div>

                <img src={require('../../assets/img/fill.svg')} alt="" className="fill d-none d-lg-block"/>

              </div>
            </div>

          </div>

          <section className="about">
            <div className="container">
              <div className="icon d-flex justify-content-center w-100">
                <img src={require('../../assets/img/icon.svg')} alt=""/>
              </div>
              <h2 className="text-center">Why Procredita</h2>

              <div className="row main-desc align-items-center">
                <div className="col-lg-6 left">
                  <div>
                    <p>Dealing with debtors can be very stressful for clients, not to mention the time it can take to recover the debt. At Procredita, we help to take the stress away from business owners and allow them to refocus their attention back on what they do best, growing their business.</p>
                    <p>Procredita, offers a range of different debt collection services including our “value for cash” service. This means that if debtors are truly unable to pay back, they can provide value for the monies owed, by working for it.</p>
                    <p>We work with businesses of all types and sizes, from start-ups through to large corporate companies who operate in a multitude of different industries. Our specialist team are able to adapt to the needs of each client and are skilled in the art of negotiation. We pride ourselves on our professionalism and how we handle our cases. Where possible, we will always attempt to resolve cases through negotiation, however, should you need to pursue the legal option, we can help.</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <img src={require('../../assets/img/about.png')} alt="" className=""/>
                </div>
              </div>

              <div className="features mx-auto">
                <div className="row ft">
                  <div className="col-lg-4 mb-5 mb-md-0 px-0">
                    <div className="feature-line item">
                      <div className="d-flex justify-content-center">
                        <div className="icon d-flex justify-content-center align-items-center blue-1"> 
                          <img src={require('../../assets/img/graph.svg')} alt="" />
                        </div>
                      </div>
                      <p>We have a high success rate, envied by many of our competitors. In fact we are proud to act for a number of other debt collection agencies as the final step when they failed to collect themselves.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 mb-5 mb-md-0  px-0">
                    <div className="feature-line item">
                      <div className="d-flex justify-content-center">
                        <div className="icon d-flex justify-content-center align-items-center blue-2"> 
                          <img src={require('../../assets/img/path.svg')} alt="" />
                        </div>
                      </div>
                      <p>Our modern computer technology has direct access to up-to-date credit information systems, which enables us to investigate the profile of your debtors more thoroughly, thus ensuring the best course of debt collection action is taken for each and every account.</p>
                    </div>
                  </div>


                  <div className="col-lg-4 mb-4 mb-md-0  px-0">
                    <div className="item">
                      <div className="d-flex justify-content-center">
                        <div className="icon d-flex justify-content-center align-items-center blue-3"> 
                          <img src={require('../../assets/img/cart.svg')} alt="" />
                        </div>
                      </div>
                      <p>We buy your debt, and incur the full cost of collecting. This is how we stand out from the rest.</p>
                    </div>
                  </div>

                </div>

                <div className="d-flex justify-content-center align-items-center">
                  <Link to="">
                    <div className="btn-1-pattern btn-pattern">
                      Hire Us
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </section>

          <section className="invite">
            <div className="container">
              <div className="icon d-flex justify-content-center w-100">
                <img src={require('../../assets/img/icon.svg')} alt=""/>
              </div>
              <h2 className="text-center">Own a Procredita Regional Franchise</h2>

              <div className="row main-desc align-items-center left">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <img src={require('../../assets/img/regional-franchise.png')} alt=""/>
                </div>

                <div className="col-lg-6 ">
                  <div className="text-right">
                    <p className="text-right">We are inviting interested individuals and entities across Nigeria to help achieve our objective and earn while doing so by owning a Bawopada franchise. This allows you to collect debt on our behalf in your region and earn a 25% commission on debt recovered. We provide the training and information that allows you to effectively recover debt from debtors in your area</p>
                    <p className="text-right">The Bawopada Regional Franchise (BRF) Licence varies from N750,000 to N2,000,000 depending on your location, with Lagos State being the highest based off volume of debt to be recovered per region.</p>
                    <p className="text-right">The average "debt to be recovered" (DBR) a BRF licence operator is entitled per year is N150M with 25% of successfully recovered debt as commission for the operator.</p>
                    <p className="text-right">Our license are available for all parts of Nigeria except Borno, Zamfara and Bayelsa State.</p>
                  </div>

                  <h6  className="text-right">Become a Debt Collection Manager</h6>

                  <div className="d-flex justify-content-end align-items-center">
                    <Link to="">
                      <div className="btn-1-pattern btn-pattern space mr-0">
                        Signup
                      </div>
                    </Link>
                  </div>
                </div>

                
              </div>
              
            </div>
          </section>

          <section className="info">
            <div className="container">
              <h4>We are partnered with several major financial institutions and businesses in Nigeria. <span>Procredita</span> is your trusted partner in efficient debt recovery. We get the job done.</h4>

              <h4>Why not try us today?</h4>

              <div className="d-flex justify-content-center align-items-center">
                <Link to="">
                  <div className="btn-2-pattern btn-pattern space mr-0">
                    Hire Us
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="testimonies">
            <div className="container">
              <h2 className="text-center">Hear from some of our clients</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="testimony mr-auto">
                    <div className="placard">
                      I never believed I could get my 3.5 Million naira back until Procredita stepped in and even collected the interest from the debtor.
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                      <img src={require('../../assets/img/person-1.png')} alt=""/>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="testimony ml-auto">
                    <div className="placard">
                      I never believed I could get my 3.5 Million naira back until Procredita stepped in and even collected the interest from the debtor.
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                      <img src={require('../../assets/img/person-2.png')} alt=""/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row fix">
                <div className="col-md-6">
                  <div className="testimony ml-auto">
                    <div className="placard">
                      I never believed I could get my 3.5 Million naira back until Procredita stepped in and even collected the interest from the debtor.
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                      <img src={require('../../assets/img/person-3.png')} alt=""/>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 pl-5">
                  <div className="testimony ml-auto">
                    <div className="placard">
                      I never believed I could get my 3.5 Million naira back until Procredita stepped in and even collected the interest from the debtor.
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                      <img src={require('../../assets/img/person-4.png')} alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
                  <div className="icon">
                    <img src={require('../../assets/img/icon.svg')} alt=""/>
                  </div>
                  <div className="socials d-flex justify-content-between m">
                    <Link to="">
                      <div className="d-flex align-items-center justify-content-center"><img src={require('../../assets/img/instagram.svg')} alt="" /></div>
                    </Link>

                    <Link to="">
                      <div className="d-flex align-items-center justify-content-center"><img src={require('../../assets/img/facebook.svg')} alt="" className="d-flex align-items-center justify-content-center"/></div>
                    </Link>

                    <Link to="">
                      <div className="d-flex align-items-center justify-content-center"><img src={require('../../assets/img/in.svg')} alt="" /></div>
                    </Link>

                    <Link to="">
                      <div className="d-flex align-items-center justify-content-center"><img src={require('../../assets/img/twitter.svg')} alt="" /></div>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
                  <h6>Company</h6>
                  <ul className="m-0 p-0">
                    <Link to="">
                      <li>Why procredita</li>
                    </Link>
                    <Link to="">
                      <li>FAQ</li>
                    </Link>
                    <Link to="">
                      <li>Loan terms</li>
                    </Link>
                    <Link to="">
                      <li>Apply Now</li>
                    </Link>
                    <Link to="">
                      <li>Contact us</li>
                    </Link>
                    <Link to="">
                      <li>Login</li>
                    </Link>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                  <h6>Legal</h6>
                  <ul className="m-0 p-0">
                    <Link to="">
                      <li>Cookies Policy</li>
                    </Link>
                    <Link to="">
                      <li>Privacy Policy</li>
                    </Link>
                  </ul>
                </div>

                <div className="col-lg-4  col-md-12 mb-5 mb-lg-0 contact">
                  <img src={require('../../assets/img/map.svg')} alt="" className="map"/>
                  <div className="placard">
                    <ul className="m-0 p-0">
                      <li className="d-flex "><div className="mr-3"><img src={require('../../assets/img/marker.svg')} alt="" /></div> <span>1686 Oladele Olashore Street, Off Sanusi Fafunwa Street, Victoria Island, Lagos.</span></li>

                      <li className="d-flex "><div className="mr-3"><img src={require('../../assets/img/phone.svg')} alt="" className="small"/></div> <span>+ (234) 814 7630 499</span></li>

                      <li className="d-flex "><div className="mr-3"><img src={require('../../assets/img/envelope.svg')} alt="" className="small" /></div> <span>info@procredita.com</span></li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              <p className="head">This website uses cookies</p>
              <p className="cookies ">We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.Check  <span className="head"> Privacy Policy.</span></p>
              <p className="credits mb-0">© Procredita 2020, all rights reserved</p>
            </div>
          </footer>

        </UI.Wrapper>
      </Layout>
    )
  }
  
}


export default Index;
