import React from 'react'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
  return (
    <div className="about-us">
  <div className="about-us2">About Us</div>
  <div className="about">
    <div data-aos="fade-right" className="frame">
      <div className="frame-content">
        Our company has been a trusted leader in the industry for over 25 years,
        known for our commitment to quality, innovation, and customer
        satisfaction. We consistently evolve our services to meet changing
        market needs.
      </div>
    </div>
    <div data-aos="fade-left" className="frame">
      <div className="frame-content">
        Our team of skilled professionals is dedicated to delivering exceptional
        results and building long-term client relationships based on trust and
        transparency.
      </div>
    </div>
    <div data-aos="fade-right" className="frame">
      <div className="frame-content">
        By combining industry best practices with the latest technologies, we
        provide customized solutions that create real impact. From planning to
        execution, we work closely with clients to understand their needs and
        exceed expectations.
      </div>
    </div>
    <div data-aos="fade-left" className="frame">
      <div className="frame-content">
        Whether you&#039;re a startup or an established business, our services
        are designed to support your growth and keep you ahead in a competitive
        world. We don’t just meet standards—we set them.
      </div>
    </div>
  </div>
</div>

  )
}

export default About
