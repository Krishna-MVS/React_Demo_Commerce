import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const {getCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'> 
        <div className="nav-logo">
            <img src={logo} alt="" srcset="" />
            <p>EasyBuy</p>
        </div>
        <ul className="nav-menu">
            <Link to="/" style={{textDecoration:"none"}}><li onClick={()=>{setMenu("shop")}}>SHOP {menu==="shop"?<hr/>:<></>}</li></Link>
            <Link to="/mens" style={{textDecoration:"none"}}><li onClick={()=>{setMenu("mens")}}>MENS {menu==="mens"?<hr/>:<></>}</li></Link>
            <Link to="/womens" style={{textDecoration:"none"}}><li onClick={()=>{setMenu("women")}}>WOMEN {menu==="women"?<hr/>:<></>}</li></Link>
            <Link to="/kids" style={{textDecoration:"none"}}><li onClick={()=>{setMenu("kids")}}>KIDS {menu==="kids"?<hr/>:<></>}</li></Link>
        </ul>
        <div className="nav-login-cart">
        <Link to="/login" style={{textDecoration:"none"}}><button>Login</button></Link>
        <Link to="/cart" style={{textDecoration:"none"}}><img src={cart_icon} alt="" srcset="" /></Link>
            <div className="nav-cart-count">{getCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
