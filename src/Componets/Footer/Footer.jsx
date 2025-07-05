import React from 'react'
import './Footer.css'
import akash from '../../assets/akash.png'
import mail_icon from '../../assets/mail_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="fotter-top-left">
                <img src={akash} alt="" />
                <p>Highly adaptable Java Developer & Cloud/DevOps Engineer leveraging hands-on experience in Java, AWS, 
                  Docker, Kubernetes, and Jenkins to build and deploy scalable, efficient cloud-based applications.</p>
            </div>
           <div className="footer-top-right">
              <div className="footer-email-input">
                <img src={mail_icon} alt="" />
                <input type="email" placeholder='Enter your email'/>
              </div>
              <div className="footer-subscribe">Subscribe</div>
            </div> 
        </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2025 Akash Hede. All rights reserved</p>
        <div className="footer-bottom-right">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer