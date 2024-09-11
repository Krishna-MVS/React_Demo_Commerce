import React from 'react'
import "./Offers.css"
import exclusive_image from "../Assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive Offers for you</h1>
            <p>Only on Best SEller Products</p>
            <button>CHECK NOW</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Offers
