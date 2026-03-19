import React from 'react';
import './styles.css';
import logo from "../../assets/ToyHub Logo2.png"

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Column 1 */}
        <div className="footer-col">
          <h3>Service</h3>
          <p>Legal Notice</p>
          <p>Data Protection</p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>Enter Email Address</p>
          <p>Sign Up</p>
        </div>

        {/* Logo - Centered in desktop view */}
        <div className="footer-logo">
          <img src={logo} alt="" height={40} width={40} />
          <p>ToyHub Enterprise</p>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Connect</h3>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href="https://www.facebook.com/toyhub" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p className="address">
            No. 7 Oroyinyin Street Off Docemu, <br />
            Idumota Lagos Island State,
          </p>
          <a href="mailto:toyhubenterprises2442@gmail.com" className="footer-email">
            toyhubenterprises2442@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>© Copyright 2026. ToyHub Enterprise All Rights Reserved.</p>
        </div>
        <div className="footer-legal">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;