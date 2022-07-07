import React from 'react';
import { TbEqual } from "react-icons/tb";
import Logo from '../../Images/logo.svg'
const Navbar = () => {
    return (
        <div className='flex flex-col-reverse  justify-center md:flex-row md:justify-between items-center  py-7 px-10'>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <div>
                < TbEqual className='text-5xl' />
            </div>
            <div className='hidden md:block order-3'>
                <li><span>work with us</span></li>
            </div>
        </div>
    );
};

export default Navbar;