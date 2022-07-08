import React from 'react';
import project from '../../Images/project-idea.gif'
const HiSection = () => {
    return (
        <div className=' w-full bg-black'>
            <div className=' max-w-3xl mx-auto pt-28 pb-40 px-10 lg:px-0'>
                <img src={project} className='h-44' alt="this is" />
                <h2 className='text-2xl md:text-3xl mt-10 mb-6 text-white text-left'>Have a Cool Project Idea?</h2>
                <h1 className=' border-b-2 lg:w-[70%] md:w-[78%] w-[90%] border-[#2BFD86] text-[#2BFD86] md:text-6xl text-3xl font-semibold text-left'>Start by Saying Hi..</h1>
            </div>
        </div>
    );
};

export default HiSection;