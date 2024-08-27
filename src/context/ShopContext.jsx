import React, { createContext, useEffect, useState } from 'react'
import { products } from '../assets/assets';
import { Bounce, toast } from 'react-toastify';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = '$';

    const delivery_fee = 60;

    const [search, setSearch] = useState('');

    const [showSearch, setShowSearch] = useState(false);

    const [cartItems, setCartItems] = useState({});


    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Please select the product size!', {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        toast.success('Added to cart, Successfully', {
            position: "top-right",
            autoClose: 2000,
            theme: "light",
            transition: Bounce,
        });


        setCartItems(cartData);
    }

    useEffect(() => {
        const count = Object.keys(cartItems).length;
    }, [cartItems]);


    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, addToCart, cartItems,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}