import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products'; 

export const ShopContext = createContext(null);

// handle the change of adding product to card
// because the id start with 1 so we need to +1 in product leght
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length +1; i++) {
        cart[i] = 0
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // add item to cart giu nguyen gia tri cua id va cong them 1
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    // remove from cart
    const removeFromcart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue ={cartItems, addToCart, removeFromcart}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
