import React from 'react'
import './Services.css'
import imgKt from '../../assets/Images/img.kt.jpg';
import img2 from '../../assets/Images/img2.jpg'
import img3 from '../../assets/Images/img3.jpg'


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
              <h2></h2>
              <div className='image-container'>
               <img src={imgKt} height='85%' width='85%' className='zoom-image'/>
              </div>
            </div>
            <div>
              <h2></h2>
              <div className='image-container'>
                <img src={img2}  height='80%' width='80%'  className='zoom-image'/> 
              </div>  
            </div>
            <div>
              <h2></h2>
              <div className='image-container'>
                <img src={img3}  height='80%' width='80%' className='zoom-image'/>
              </div>  
            </div>
          </div> 
    </div>
    
  )
}

export default Services
