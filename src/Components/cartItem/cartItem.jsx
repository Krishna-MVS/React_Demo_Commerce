import React, { useContext } from 'react'
import "./cartItem.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
const CartItems = () => {
const {getTotalAmount,all_product,cartItem,removeToCart} = useContext(ShopContext);
  return (
    <div className='cartItems'>
      <div className="card-item-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItem[e.id]>0){
          return<div>
          <div className="cart-items-format card-item-format-main">
            <img src={e.image} alt="" className='cartticon-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='product-qunatity'>{cartItem[e.id]}</button>
            <p>{e.new_price*cartItem[e.id]}</p>
            <img onClick= {()=>{removeToCart(e.id)}}src={remove_icon} alt="" />
          </div>
          <hr />
          
        </div>
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Sub Total</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shiiping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
          <button>Procedd to Check OUT</button>
        </div>
        <div className="cart-items-promocode">
          <p>If you have promecode enter here</p>
          <div className="cart-items-promobox">
            <input type="text" placeholder='promocode'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
