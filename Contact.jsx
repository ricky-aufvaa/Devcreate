import React from 'react'
import './Contact.css'

import Footer from './Footer'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import Faq from './Faq';

const Contact = () => {
  return (
    <>
        <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2>CONTACT</h2>
      
    </div>
    <div className="contact-form-wrapper">
      <form>
      {/* <h2>Contact</h2> */}
        <div className="form-item">
          <input type="text" name="sender" required />
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="email" required />
          <label>Email:</label>
        </div>
        <div className="form-item">
          <textarea className="" name="message" required />
          <label>Message:</label>
        </div>
        <button className="submit-btn">Send</button>
        <div className="links">
        <div className="link">
          <a><LinkedInIcon/> </a>
        </div>
        <div className="link">
          <a><FacebookIcon/> </a>
        </div>
        <div className="link">
          <a><InstagramIcon/> </a>
        </div>
        <div className="link">
          <a><TwitterIcon/> </a>
        </div>
      </div>  
      </form>
    </div>
  </div>
</section>

<Faq/>

<Footer/>

    </>
  )
}

export default Contact