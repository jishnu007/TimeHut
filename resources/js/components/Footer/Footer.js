import React from 'react';
import { NavLink } from 'react-router-dom'

const Footer = (props) => {
    return ( 
        <footer className="site-footer border-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-5 mb-lg-0">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-8 col-lg-3">
                  <ul className="list-unstyled">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/shop'>Shop</NavLink></li>
                    <li><NavLink to='/myorders'>Orders</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="block-5 mb-5">
                <h3 className="footer-heading mb-4">Contact Info</h3>
                <ul className="list-unstyled">
                  <li className="address">203 Sweans, London, UK</li>
                  <li className="phone"><a href="tel://23923929210">+91 1234567890</a></li>
                  <li className="email">suggestions@timehut.com</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 offset-lg-2 col-lg-3 mb-4 mb-lg-0">
              <h3 className="footer-heading mb-4">Promo</h3>
              <div className="block-6">
                <img src="uploads/dk21.jpg" alt="Image placeholder" className="img-fluid rounded mb-4" id="promo-image"/>
                <h3 className="font-weight-light  mb-0">Find Your Perfect Watches</h3>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved | <a href="/" className="text-primary">TIMEHUT</a>
              </p>
            </div>
            
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;