import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <img src={assets.logo} alt="logo" className='mb-5 w-32' />
                    <p className="w-full">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam reprehenderit quo mollitia officia veniam explicabo tempora quos adipisci similique minima!</p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">
                        COMPANY
                    </p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li><span>Phone:</span> +88-0161-359-1444</li>
                        <li><span>Email:</span> md.musabmahmud@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">
                    Copyright {year} &copy;al-makhtum.com - All Right Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer