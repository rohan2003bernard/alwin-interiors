import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home__overlay"></div>
      <div className="home__content">
        <h1 className="home__title">Welcome to Alwin Interiors</h1>
        <p className="home__subtitle">Where Creativity Meets Comfort ✨</p>
        <p className="home__description">
          Transform spaces into stylish, functional sanctuaries tailored to your
          lifestyle.
          <br />
          Whether it's a modern home makeover or a timeless office design, we're
          here to bring your vision to life—beautifully.
        </p>
        {/* <button className="home__cta">Explore Our Work</button> */}
      </div>
    </div>
  )
}

export default Home
