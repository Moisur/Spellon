import React, { useState } from 'react';
import './Musemind.css'
import { TbArrowUpRight } from "react-icons/tb";

const Musemind = () => {
    const [Strategy, setStrategy] = useState(false)



    return (
        <div onMouseEnter={() => setStrategy(!Strategy)} onMouseLeave={() => setStrategy(!Strategy)} className='Images'>
            {
                Strategy ? <div className='w-full h-full flex justify-center items-center'>
                    <div className='text-6xl font-serif font-bold text-white'>
                        <h1>We Build high-end</h1>
                        <h1>products with a top-notch</h1>
                        <h1>experienced team</h1>
                        <button className=' flex justify-center items-center gap-3 text-2xl font-bold mt-20  uppercase rounded-sm text-[#2BFD86] '>view our works <span className='bg-white p-3 rounded-full'><TbArrowUpRight /></span> </button>
                    </div>
                </div> : <div className='w-full bg-slate-300 h-full'>

                    
                </div>
            }
        </div>
    );
};

export default Musemind;