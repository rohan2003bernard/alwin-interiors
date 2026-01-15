import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__header">
        <h2 className="contact__title">Get In Touch</h2>
        <div className="contact__underline"></div>
        <p className="contact__subtitle">We'd love to hear from you. Reach out to us today!</p>
      </div>

      <div className="contact__container">
        <div className="contact__info">
          <div className="contact__card">
            <div className="contact__icon">📧</div>
            <h3>Email</h3>
            <a href="mailto:alwininteriors.india@gmail.com">alwininteriors.india@gmail.com</a>
          </div>
          <div className="contact__card">
            <div className="contact__icon">📱</div>
            <h3>Phone</h3>
            <a href="tel:9585944917">9585944917</a>
          </div>
          <div className="contact__card">
            <div className="contact__icon">📍</div>
            <h3>Address</h3>
            <p>31, 2nd Main Road, Ags Colony, West Velacheri, Velacheri, Chennai - 600042</p>
          </div>
        </div>
      </div>

      <p className="contact__footer">We look forward to hearing from you! ✨</p>
    </div>
  )
}

export default Contact
