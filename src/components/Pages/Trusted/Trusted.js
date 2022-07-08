import React from 'react';
import Deck from '../../Images/On-Deck.png'
const Trusted = () => {

    return (
        <div className='py-24'>
            <div className='p-24'>
                <p className=' text-[#2BFD86] text-3xl font-bold mb-6'>F o o d D e l i v e r y</p>
                <h1 className='text-7xl font-bold'><span className='text-[#7B7B7C]'>Since 2019, </span>  more than 70 brands <br /> have trusted us.</h1>
            </div>

            <marquee>
                <div className='flex justify-between items-center'>
                    <div className='border-2 w-[400px] h-[400px]  rounded-full flex justify-center items-center'>
                        <img className='border-3' src={Deck} alt="" />
                    </div>
                    <div className='border-2 w-[400px] h-[400px]  rounded-full flex justify-center items-center'>
                        <img className='border-3' src={Deck} alt="" />
                    </div>
                    <div className='border-2 w-[400px] h-[400px]  rounded-full flex justify-center items-center'>
                        <img className='border-3' src={Deck} alt="" />
                    </div>
                </div>
            </marquee>



        </div>
    );
};

export default Trusted;