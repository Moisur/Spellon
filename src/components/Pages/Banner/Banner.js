import React from 'react';
import { TbArrowUpRight } from "react-icons/tb";
import { BsArrowDown } from "react-icons/bs";
import banner1 from '../../Images/Banner-1.png'
import banner2 from '../../Images/Banner-2.png'
import project from '../../Images/project-idea.gif'
const Banner = () => {
    return (
        <div className='w-full h-[100%] md:h-[91vh] relative mt-5 '>
            <div className='ml-[184px]' data-aos="fade-right">
                <h1 className='text-9xl  font-bold'>Experience + <span className='text-slate-400'>Creativ</span></h1>
                <p className='text-2xl text-slate-600 mt-10'>We're an innovative design agency building high-end products <br />and experiences that grow your business exponentially</p>
                <div className='mt-16 flex  items-center'>
                    <div className='flex-1'>
                        <button className=' flex justify-center items-center gap-3 text-2xl font-medium px-8 py-3 bg-slate-700 uppercase rounded-sm hover:bg-yellow-400 hover:text-black'>view our works <span><TbArrowUpRight /></span> </button>
                    </div>
                    <div className='flex-1 ml-[50%]'>
                    <button className='bg-green-500 hover:bg-white  text-black p-10 text-5xl rounded-full'><BsArrowDown /></button>
                    </div>
                </div>
            </div>

            <div className='hidden md:block' >
                <div className='flex justify-between'>
                    <div></div>
                    <div className='absolute bottom-0 right-0'>
                        <div className='flex items-center gap-4 '>
                            <h1 className=' text-slate-600 text-lg'>RECENT PROJECT</h1>
                            <img className='w-80 ' src={banner1} alt="Banner Images" />
                            <img className='w-80' src={banner2} alt="Banner Images " />
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-down" className='absolute top-[-200px] right-0 bottom-0 left-0 m-auto' src={project} alt="Images" />
        </div>
    );
};

export default Banner;