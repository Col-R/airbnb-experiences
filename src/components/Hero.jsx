import React from 'react'
import './Hero.css'

// images
import hero from '../img/nav_grid.png'

const Hero = () => {
  return (
    <section className="hero">
        <img src={hero} alt="hero grid" className='hero__photo'/>
        <h1 className="hero__header">Online Experiences</h1>
        <p className="hero__text">
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </section>
  )
}

export default Hero