import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div id="services">
        <h1>Our Services</h1>
        <p>We offer a wide range of services to cater to various industries and business needs. Our services include:</p>
        <ul>
            <li>Kitchen</li>
            <li>Bedroom</li>
            <li>Dressing Room</li>
            <li>TV Unit Design</li>
            <li>Hall</li>
        </ul>
        <div className="con">
            <div>   
              <h2>Dressing Table</h2>
              <img src="https://9creation.com.sg/wp-content/uploads/2022/04/Bedroom-scaled.jpg" height="60%" width="60%"/>
            </div>
            <div>
              <h2>Bed Room</h2>
              <img src="http://media.architecturaldigest.com/photos/5640d41b7caa1a6554abcb93/master/pass/contemporary-bedroom-ideas-inspiration-10.jpg" height="60%" width="60%"/>
            </div>
            <div>
              <h2>Main Hall</h2>
              <img src="https://cdn1.npcdn.net/images/bbfb176bad609bb7fe6ffb197fcf09a7_1702030724.webp?md5id=5f74249208205551b0714e4c5dcca970&new_width=1000&new_height=1000&size=max&w=1671530035&from=jpeg&type=1" height="75%" width="85%"/>
            </div>
          </div> 
    </div>
    
  )
}

export default Services
