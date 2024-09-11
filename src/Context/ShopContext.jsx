import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
const getDefaultCart = ()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

export const ShopContext = createContext(null)

const ShopContextProvider = (props)=>{
    const [cartItem,setCartItems]=useState(getDefaultCart);
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem)
    }
    const removeToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalAmount =()=>{
        let totalAmnt = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let iteminfo =all_product.find((product)=>product.id === Number(item))
                totalAmnt += iteminfo.new_price * cartItem[item]
            } 
        }
        return totalAmnt
    }
    const getCartItems = ()=>{
        let totalItems = 0
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItems+=cartItem[item]
            }
        }
        return totalItems;
    }
    const contextValue = {getTotalAmount,all_product,cartItem,removeToCart,addToCart, getCartItems};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;