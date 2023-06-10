import React, { createContext, useState } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItem, setCartItems] = useState();
    return (
        <ShopContext.Provider>{props.children}</ShopContext.Provider>
    )
}
