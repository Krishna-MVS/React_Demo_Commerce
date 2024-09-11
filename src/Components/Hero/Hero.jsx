import React from 'react'
import "./Hero.css"
import hero_image from "../Assets/hero_image.png"
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>SHOP WITH STYLE AND CONVENIENCE!</h2>
        <p>
          Explore our extensive collection of fashion-forward apparel, accessories, and more, carefully selected from renowned brands and emerging
          designers alike.SHOP WITH STYLE AND CONVENIENCE!
        </p>
        <button>SHOP NOW -- </button>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Hero
