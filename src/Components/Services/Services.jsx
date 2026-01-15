import React, { useState } from 'react';
import './Services.css';
import img1 from '../../assets/Images/img1.jpg';
import img2 from '../../assets/Images/img2.jpg';
import img3 from '../../assets/Images/img3.jpg';
import img4 from '../../assets/Images/img4.jpg';
import img5 from '../../assets/Images/img5.jpg';
import img6 from '../../assets/Images/img6.jpg';
import img7 from '../../assets/Images/img7.jpg';
import img8 from '../../assets/Images/img8.jpg';
import img9 from '../../assets/Images/img9.jpg';
import img10 from '../../assets/Images/img10.jpg';
import img11 from '../../assets/Images/img11.jpg';
import img12 from '../../assets/Images/img12.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuData = {
    "Custom Furniture Making": [
      "Wardrobes",
      "Beds",
      "TV Units",
      "Study Tables",
      "Dining Tables & Chairs",
      "Sofas and Side Tables"
    ],
    "Modular Kitchen Design & Installation": [
      "Custom Cabinets",
      "Overhead and Base Units",
      "Pantry Units",
      "Pull-out Storage Systems"
    ],
    "False Ceilings & Paneling": [
      "Wooden Ceiling Designs",
      "Decorative Wall Panels",
      "Acoustic Wooden Panels"
    ],
    "Doors & Windows": [
      "Custom Door Design (Main, Bedroom, Bathroom)",
      "Window Frames and Panels",
      "Sliding and Folding Wooden Partitions"
    ],
    "Wooden Flooring": [
      "Hardwood Flooring",
      "Engineered Wood Installation",
      "Laminate Wooden Flooring"
    ],
    "Storage & Shelving Solutions": [
      "Bookshelves",
      "Display Units",
      "Hidden Storage Ideas",
      "Loft Covering and Cabinets"
    ],
    "Repair & Renovation Work": [
      "Polishing and Refinishing",
      "Hinge and Drawer Repairs",
      "Replacing Old Cabinets or Furniture"
    ],
    "Decorative & Detailing Work": [
      "Wooden Molding and Trim",
      "Skirting Boards",
      "Staircase Railings and Balustrades",
      "Handcrafted Carvings"
    ]
  };

  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  return (
    <div className="services" id="menu">
      <div className="services__header">
        <h2 className="services__title">Our Services</h2>
        <div className="services__underline"></div>
        <p className="services__subtitle">Comprehensive interior design solutions tailored to your needs</p>
      </div>

      <div className="services__tabs-wrapper">
        <div className="services__tabs">
          {Object.entries(menuData).map(([menuTitle, submenuItems], index) => (
            <div 
              key={index}
              className="services__tab"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button className={`services__tab-btn ${hoveredIndex === index ? 'services__tab-btn--active' : ''}`}>
                <span>{menuTitle}</span>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                </svg>
              </button>
              
              {hoveredIndex === index && (
                <div className="services__tab-content">
                  {submenuItems.map((submenuItem, subIndex) => (
                    <div className="services__tab-item" key={subIndex}>
                      <span className="services__checkmark">✓</span>
                      <span>{submenuItem}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="services__gallery-header">
        <h3>Our Work</h3>
        <div className="services__gallery-underline"></div>
      </div>

      <div className="services__gallery">
        {galleryImages.map((image, index) => (
          <div data-aos="zoom-in" data-aos-duration="600" className="services__card" key={index}>
            <img src={image} alt={`Gallery Item ${index + 1}`} />
            <div className="services__card-overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
