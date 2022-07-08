import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css'
import { BsFillArrowDownCircleFill, BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube, AiOutlineDribbble } from "react-icons/ai";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <div className=' xl:max-w-5xl lg:w-full  mx-auto  py-28 '>
            <div className='w-full  md:flex md:justify-between '>
                <div className=' mb-12 md:mb-0'>
                    <h1 className=' text-5xl font-bold text-[#101010] mb-12 text-left'>Hello.</h1>
                    <h2 className=' text-[28px]  mb[9px] text-[#101010] text-left'>Get In touch..</h2>
                    <Link to={`/`} className=' underline text-base text-left'>hello@musemind.agency</Link>
                </div>
                <div className=' mb-20 mr-28 md:mr-0 '>
                    <ul className='w-20'>
                        <li className=' text-base text-left mb-2 menu relative font-normal hover:font-semibold'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className=' text-base text-left mb-2 menu relative font-normal hover:font-semibold'>
                            <Link to={'/'}>Services</Link>
                        </li>
                        <li className=' text-base text-left mb-2 menu relative font-normal hover:font-semibold'>
                            <Link to={'/'}>Works</Link>
                        </li>
                        <li className=' text-base text-left mb-2 menu relative font-normal hover:font-semibold'>
                            <Link to={'/'}>Build MVP</Link>
                        </li>
                        <li className=' text-base text-left mb-2 menu relative font-normal hover:font-semibold'>
                            <Link to={'/'}>Process</Link>
                        </li>
                        <li className=' text-base text-left mb-2 menu relative font-normal hover:font-semibold'>
                            <Link to={'/'}>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className=' h-40'>
                    <h1 className=' text-3xl text-[#c6c6c6] font-medium'>Have a Project idea?</h1>
                    <ul>
                        <li className=' text-2xl text-left mb-2 menuc relative font-normal '>
                            <Link className='contact' to={'/'}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full md:flex md:justify-between md:items-center mt-12 md:mt-0'>
                <div className=' flex justify-between items-center cursor-pointer mb-12 md:mb-0'>
                    <BsFillArrowDownCircleFill className=' text-3xl mr-4' />
                    <div>
                        <h2 className=' text-sm mb-1 text-left'>Download Company Deck</h2>
                        <p className='text-left text-xs'>PDF.3MB</p>
                    </div>
                </div>
                <div className='text-sm text-left ml-12 xl:w-full w-64 mb-12 md:mb-0'>
                    <h2>© 2022 Musemind Digital Agency, All rights reserved.</h2>
                </div>
                <div className=' flex justify-between items-center xl:w-[220px]  lg:w-72'>
                    <div className=' social_icon relative hover:text-white cursor-pointer'>
                        <AiOutlineDribbble className=' text-[24px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' />
                    </div>
                    <div className=' social_icon relative hover:text-white cursor-pointer'>
                        <BsInstagram className=' text-[20px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' />
                    </div>
                    <div className=' social_icon relative hover:text-white cursor-pointer'>
                        <AiOutlineYoutube className=' text-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' />
                    </div>
                    <div className=' social_icon relative hover:text-white cursor-pointer'>
                        <FiTwitter className=' text-[20px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' />
                    </div>
                    <div className=' social_icon relative hover:text-white cursor-pointer'>
                        <FiFacebook className=' text-[22px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' />
                    </div>
                    <div className=' social_icon relative hover:text-white cursor-pointer'>
                        <FiLinkedin className=' text-[22px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;