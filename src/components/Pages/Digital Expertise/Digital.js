import React from 'react';
import { useState } from 'react';
import { TbArrowUpRight } from "react-icons/tb";
import Strategy1 from '../../Images/Strategy-Musemind.png'
import Research1 from '../../Images/Research-Musemind.png'
import Design1 from '../../Images/Design-Musemind.png'
import Growth1 from '../../Images/Growth-Musemind.png'
const Digital = () => {

    const [Strategy, setStrategy] = useState(false)
    const [Research, setResearch] = useState(false)
    const [Design, setDesign] = useState(false)
    const [Growth, setGrowth] = useState(false)




    return (
        <div className='p-20'>
            <h1 className='text-5xl font-bold mb-6 ' data-aos="fade-right">Our Digital Expertise</h1>
            <hr />
            <div>
                <div>
                    {/* ==================================== Strategy ===============================*/}
                    <div className={`${Strategy ? 'flex justify-between items-center' : ''} mb-7`} onMouseEnter={() => setStrategy(!Strategy)} onMouseLeave={() => setStrategy(!Strategy)}>
                        <div className={`${Strategy ? '' : 'flex justify-between items-center text-[#D3C500]'} `} >
                            <h1 className={`${Strategy ? 'text-2xl font-bold' : 'text-8xl'}`}>Strategy</h1>
                            <h1>Brand Strategy, Product Strategy, Research & <br />
                                Analysis, Service Design, Content Strategy</h1>
                        </div>
                        {
                            Strategy && <div data-aos="fade-right">
                                <button className=' flex justify-center items-center gap-3 text-2xl font-medium px-8 py-3 bg-[#262729] text-white uppercase rounded-sm hover:bg-green-400 hover:text-black'>view our works <span><TbArrowUpRight /></span> </button>
                            </div>
                        }
                        {
                            Strategy && <div data-aos="fade-down">
                                <img className='w-[300px] mt-[-200px]' src={Strategy1} alt="Images" />
                            </div>
                        }
                    </div>
                    <hr />
                    {/* ==================================== Research ===============================*/}
                    <div className={`${Research ? 'flex justify-between items-center' : 'mb-7'} `} onMouseEnter={() => setResearch(!Research)} onMouseLeave={() => setResearch(!Research)}>
                        <div className={`${Research ? '' : 'flex justify-between items-center text-[#D3C500]'} `}>
                            <h1 className={`${Research ? 'text-2xl font-bold' : 'text-8xl'}`}>Research</h1>
                            <h1>Brand Strategy, Product Strategy, Research & <br />
                                Analysis, Service Design, Content Strategy</h1>
                        </div>
                        {
                            Research && <div data-aos="fade-right">
                                <button className='flex justify-center items-center gap-3 text-2xl font-medium px-8 py-3 bg-[#262729] uppercase rounded-sm text-white  hover:bg-green-400 hover:text-black'>view our works <span><TbArrowUpRight /></span> </button>
                            </div>
                        }
                        {
                            Research && <div data-aos="fade-down">
                                <img className='w-[300px] mt-[-200px]' src={Research1} alt="Images" />
                            </div>
                        }
                    </div>
                    <hr />
                    {/* ==================================== Design1 ===============================*/}

                    <div className={`${Design ? 'flex justify-between items-center' : 'mb-7'} `} onMouseEnter={() => setDesign(!Design)} onMouseLeave={() => setDesign(!Design)}>
                        <div className={`${Design ? '' : 'flex justify-between items-center text-[#D3C500]'} `}>
                            <h1 className={`${Design ? 'text-2xl font-bold' : 'text-8xl'}`}>Design</h1>
                            <h1>Brand Strategy, Product Strategy, Research & <br />
                                Analysis, Service Design, Content Strategy</h1>
                        </div>
                        {
                            Design && <div data-aos="fade-right">
                                <button className='flex justify-center items-center gap-3 text-2xl font-medium px-8 py-3 bg-[#262729] uppercase  text-white rounded-sm hover:bg-green-400 hover:text-black'>view our works <span><TbArrowUpRight /></span> </button>
                            </div>
                        }
                        {
                            Design && <div data-aos="fade-down">
                                <img className='w-[300px] mt-[-200px]' src={Design1} alt="Images" />
                            </div>
                        }
                    </div>


                    <hr />
                    {/* ==================================== Growth ===============================*/}
                    <div className={`${Growth ? 'flex justify-between items-center ' : ''} `} onMouseEnter={() => setGrowth(!Growth)} onMouseLeave={() => setGrowth(!Growth)}>
                        <div className={`${Growth ? '' : 'flex justify-between items-center text-[#D3C500]'} `}>
                            <h1 className={`${Growth ? 'text-2xl font-bold' : 'text-8xl'}`}>Growth</h1>
                            <h1>Brand Strategy, Product Strategy, Research & <br />
                                Analysis, Service Design, Content Strategy</h1>
                        </div>
                        {
                            Growth && <div data-aos="fade-right">
                                <button className='flex justify-center items-center gap-3 text-2xl font-medium px-8 py-3 bg-[#262729] uppercase rounded-sm text-white hover:bg-green-400 hover:text-black'>view our works <span><TbArrowUpRight /></span> </button>
                            </div>
                        }
                        {
                            Growth && <div data-aos="fade-down">
                                <img className='w-[300px] mt-[-200px]' src={Growth1} alt="Images" />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Digital;
