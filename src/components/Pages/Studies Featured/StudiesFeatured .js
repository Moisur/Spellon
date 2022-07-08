import React from 'react';
import Commerce from '../../Images/LG-E-Commerce.png'
import { TbArrowUpRight } from "react-icons/tb";

const StudiesFeatured = () => {
    return (
        <div className=' w-full bg-black text-white p-10'>
            <div className='flex justify-between '>
                <div className='flex-1 mt-20' data-aos="fade-down-right">
                    <li className=' text-[#2BFD86] text-xl font-bold mb-6'>Food Delivery</li>
                    <h1 className=' text-8xl text-white font-bold mb-10'>Cartzie App</h1>
                    <p className=' text-2xl text-slate-500 font-bold mb-6'>Mobile Design</p>
                    <p className=' text-2xl text-white font-medium mb-10'>With Cartzie find all your favorite brands in one place <br /> and get the best deals on every product!</p>
                    <button className=' flex justify-center items-center gap-3 text-2xl font-medium px-8 py-3 bg-[#262729] uppercase rounded-sm hover:bg-yellow-400 hover:text-black'>view our works <span><TbArrowUpRight /></span> </button>

                </div>
                <div className='flex-1'>
                    <img data-aos="zoom-in-down" src={Commerce} alt="" />
                </div>
            </div>
        </div>
    );
};

export default StudiesFeatured;