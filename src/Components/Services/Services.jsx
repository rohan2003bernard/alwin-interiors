import React from 'react';
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
  // Define the dictionary for menus
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
    <div className="menu">
      <div className="ser">
        {Object.entries(menuData).map(([menuTitle, submenuItems], index) => (
          <div className="item" key={index}>
            <div className="link">
              <span>{menuTitle}</span>
              <svg viewBox="0 0 360 360" xmlSpace="preserve">
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="submenu">
              {submenuItems.map((submenuItem, subIndex) => (
                <div className="submenu-item" key={subIndex}>
                  <div className="submenu-link">{submenuItem}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <div data-aos="flip-up" className="card" key={index}>
            <div className="bg">
              <img src={image} alt={`Gallery Item ${index + 1}`} />
            </div>
            <div className="blob"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
