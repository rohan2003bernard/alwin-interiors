import React from 'react'
import './Contact.css'
import thumbsup from '../../assets/Images/thumbsup.png'

const Contact = () => {
  return (
    <div className="contact">
  <div className="contact2">Contact</div>
  <div className="note">
    If you have any questions or would like to get in touch with us, please feel
    free to reach out. You can contact us through the following channels:
  </div>
  <div className="details">
    <div className="email">Email: alwininteriors.india@gmail.com</div>
    <div className="phone">Phone: 7708989697</div>
  </div>
  <div className="address">
    Address: 31, 2nd Main Road, Ags Colony, West Velacheri, Velacheri, Chennai -
    600042 (Near Ags Colony Bus Stand,)
  </div>
  <div className="thankyou">We look forward to hearing from you!</div>
  <img className="pic" src={thumbsup} />
</div>
  )
}

export default Contact
