import React from 'react'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
  return (
    <div className="about-us" id="about-us">
      <div className="about-us__header">
        <h2 className="about-us__title">About Us</h2>
        <div className="about-us__underline"></div>
      </div>
      <div className="about-us__content">
        <div data-aos="fade-right" data-aos-duration="800" className="about-us__card">
          <div className="about-us__icon">🏆</div>
          <h3>Industry Leaders</h3>
          <p>Our company has been a trusted leader in the industry for over 25 years, known for our commitment to quality, innovation, and customer satisfaction.</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" className="about-us__card">
          <div className="about-us__icon">👥</div>
          <h3>Expert Team</h3>
          <p>Our team of skilled professionals is dedicated to delivering exceptional results and building long-term client relationships based on trust and transparency.</p>
        </div>
        <div data-aos="fade-left" data-aos-duration="800" className="about-us__card">
          <div className="about-us__icon">💡</div>
          <h3>Innovation First</h3>
          <p>By combining industry best practices with the latest technologies, we provide customized solutions that create real impact in every project.</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" className="about-us__card">
          <div className="about-us__icon">⭐</div>
          <h3>Excellence Always</h3>
          <p>Whether you're a startup or established business, our services support your growth. We don't just meet standards—we set them.</p>
        </div>
      </div>
    </div>
  )
}

export default About
