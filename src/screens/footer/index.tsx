// Footer.js
import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-col">
          <h3>Service</h3>
          <p>Legal Notice</p>
          <p>Data Protection</p>
        </div>
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>Enter Email Address</p>
          <p>Sign Up</p>
        </div>
        <div className="footer-logo">ToyHub Enterprise</div>
        <div className="footer-col">
          <h3>Connect</h3>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
        <div className="footer-col">
          <h3>Contact</h3>
          <p>No. 7 Oroyinyin Street Off Docemu, <br /> Idumota Lagos Island State,</p>
          <a href="mailto:toyhubenterprises2442@gmail.com">toyhubenterprises2442@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2026. ToyHub Enterprise All Rights Reserved.</p>
        <div className="footer-legal">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;