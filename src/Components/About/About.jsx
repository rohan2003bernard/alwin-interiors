import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id="about">
        <h1>About Us</h1>
        <p>Our company has been a leader in the industry for over 10 years. We are committed to providing the best services to our clients and continuously improving our offerings.</p>
        <p>Our team consists of highly skilled professionals dedicated to meeting your needs and exceeding your expectations.</p>
        <div className="con">
          <div>   
            <h2>Hall</h2>
            <img src="https://www.thewowstyle.com/wp-content/uploads/2015/06/Living-room-interior-design-display-interior-exterior-plan.jpg" height="70%" width="70%"/>
          </div>
          <div>
            <h2>TV Unit Design</h2>
            <img src="https://www.gpwih.com/wp-content/uploads/2018/03/modern-tv-wall-units-throughout-most-recent-19-impressive-contemporary-tv-wall-unit-designs-for-your-living.jpg" height="70%" width="80%"/>
          </div>
          <div>
            <h2>Kitchen</h2>
            <img src="https://www.ramsbottomkitchens.co.uk/wp-content/uploads/2019/07/Inset-Cube-Dark-Blue-and-Woodgrain-New-England-Oak.jpg" height="70%" width="70%"/>
          </div>
        </div>   
    </div>
  )
}

export default About
