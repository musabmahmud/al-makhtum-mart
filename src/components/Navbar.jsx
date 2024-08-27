
import { useContext, useState } from 'react';
import { assets } from '../assets/assets'
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const { showSearch, setShowSearch, cartItems } = useContext(ShopContext);

    return (
        <nav className='flex items-center justify-between py-5 font-medium'>

            {/* logo  */}
            <Link to='/'><img src={assets.logo} className='w-36' alt="Logo" />
            </Link>
            {/* Nav Items  */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-500'>
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-500 hidden' />
                </NavLink>

                <NavLink to="/collections" className="flex flex-col items-center gap-1">
                    <p>COLLECTIONS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-500 hidden' />
                </NavLink>


                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-500 hidden' />
                </NavLink>

                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-500 hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-6'>

                {/* search bar */}
                <img onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} alt="search" className='w-5 cursor-pointer' />

                {/* dropdown menu for profile and logout  */}

                <div className='group relative'>
                    <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer ' />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <Link className='hover:text-black'>My Profile</Link>
                            <Link className='hover:text-black'>Orders</Link>
                            <Link className='hover:text-black'>Logout</Link>
                        </div>
                    </div>
                </div>

                {/* shopping cart  */}
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <span className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{Object.keys(cartItems).length}</span>
                </Link>

                {/* sidebar menu  */}
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-3 p-3 cursor-pointer'>
                        <img src={assets.cross_icon} className="h-4" alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-y' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/collections'>COLLECTIONS</NavLink>

                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/about'>ABOUT</NavLink>

                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/contact'>CONTACT</NavLink>
                </div>
            </div>


        </nav>
    )
}

export default Navbar