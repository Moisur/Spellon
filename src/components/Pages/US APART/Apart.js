import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";

const Apart = () => {
    return (
        <div className='px-10 w-full h-[100vh] text-center flex justify-center items-center'>
            <div>
                <div className='text-5xl font-bold  '>
                    <h1 className='text-2xl font-medium mb-6'>WHAT SETS US APART</h1>
                    <div data-aos="zoom-in-up">
                        <h1 className='mb-4'>We remain strategic partners with our amazing</h1>
                        <div className='mb-4'>clients. We rigorously research, ideate,
                            <span className=''>design <button className='text-green-500 bg-black p-1 text-3xl rounded-full'><AiOutlineArrowRight /></button> </span>
                        </div>
                        <div className='mb-4'> and
                            <span className=''> iterate <button className='text-green-500 bg-black p-1 text-3xl rounded-full'><AiOutlineArrowRight /></button> </span>
                            to provide the best sustainable
                        </div>
                        <h1 className='mb-4'>solution for your business. We take every</h1>
                        <h1>product as a commitment!</h1></div>
                </div>
                {/* ============================== Right are ===========================  */}
                <div className='grid md:grid-cols-3 grid-cols-2 gap-10 mt-14' data-aos="zoom-in-right">
                    <div className='flex justify-center items-center gap-3'>
                        <button className='text-green-500 bg-black p-1 text-3xl rounded-full'><AiOutlineArrowRight /></button>
                        <h1 className='text-xl font-bold'>3+ <span className='text-xl font-medium'>YEARS</span></h1>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <button className='text-green-500 bg-black p-1 text-3xl rounded-full'><AiOutlineArrowRight /></button>
                        <h1 className='text-xl font-bold'>70+ <span className='text-xl font-medium'>CLIENTS</span></h1>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <button className='text-green-500 bg-black p-1 text-3xl rounded-full'><AiOutlineArrowRight /></button>
                        <h1 className='text-xl font-bold'>200+ <span className='text-xl font-medium'>MILLION RAISED</span></h1>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Apart;