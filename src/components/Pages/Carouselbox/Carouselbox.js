import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import itemImg1 from '../../Images/carousel1.png'
import itemImg2 from '../../Images/carousel2.png'
import itemImg3 from '../../Images/carousel3.png'
import itemImg4 from '../../Images/carousel4.png'
import itemImg5 from '../../Images/carousel2.png'
import { BsInstagram } from "react-icons/bs";

const Carouselbox = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };




    return (

        <div>
            <marquee className='text-[#2BFD86] text-[170px] font-bold '>Recent Case Studies Recent Case Studies </marquee>
            <marquee className=' text-slate-700 text-[170px] font-bold mt-[-120px]' direction="right">Recent Case Studies Recent Case Studies </marquee>
            <Carousel responsive={responsive}
                infinite={true}
                arrows={false}
                autoPlaySpeed={1000}
                transitionDuration={500}
                containerClass="carousel-container"
                slidesToSlide={5}
            >
                <div className=' h-[300px] w-[85%] '>
                    <div className='overflow-hidden cursor-pointer transition-all h-[78%]'>
                        <img className='transition-all h-full w-full hover:scale-150' src={itemImg1} alt="img" />
                    </div>
                    <div className=' flex items-center mt-2'>
                        <BsInstagram className=' text-[#1b1b1b] text-[20px] mr-4 text-sm' />
                        <p className=' text-[#1b1b1b] text-sm'>Fintech Mobile App</p>
                    </div>
                    <h1 className=' text-xl text-left text-black mt-2'>Finany</h1>
                </div>

                <div className=' h-[300px] w-[85%] '>
                    <div className='overflow-hidden cursor-pointer transition-all h-[78%]'>
                        <img className='transition-all h-full w-full hover:scale-150' src={itemImg2} alt="img" />
                    </div>
                    <div className=' flex items-center mt-2'>
                        <BsInstagram className=' text-[#1b1b1b] text-[20px] mr-4 text-sm' />
                        <p className=' text-[#1b1b1b] text-sm'>Fintech Mobile App</p>
                    </div>
                    <h1 className=' text-xl text-left text-black mt-2'>Finany</h1>
                </div>

                <div className=' h-[300px] w-[85%] '>
                    <div className='overflow-hidden cursor-pointer transition-all h-[78%]'>
                        <img className='transition-all h-full w-full hover:scale-150' src={itemImg3} alt="img" />
                    </div>
                    <div className=' flex items-center mt-2'>
                        <BsInstagram className=' text-[#1b1b1b] text-[20px] mr-4 text-sm' />
                        <p className=' text-[#1b1b1b] text-sm'>Fintech Mobile App</p>
                    </div>
                    <h1 className=' text-xl text-left text-black mt-2'>Finany</h1>
                </div>
                <div className=' h-[300px] w-[85%] '>
                    <div className='overflow-hidden cursor-pointer transition-all h-[78%]'>
                        <img className='transition-all h-full w-full hover:scale-150' src={itemImg4} alt="img" />
                    </div>
                    <div className=' flex items-center mt-2'>
                        <BsInstagram className=' text-[#1b1b1b] text-[20px] mr-4 text-sm' />
                        <p className=' text-[#1b1b1b] text-sm'>Fintech Mobile App</p>
                    </div>
                    <h1 className=' text-xl text-left text-black mt-2'>Finany</h1>
                </div>

                <div className=' h-[300px] w-[85%] '>
                    <div className='overflow-hidden cursor-pointer transition-all h-[78%]'>
                        <img className='transition-all h-full w-full hover:scale-150' src={itemImg5} alt="img" />
                    </div>
                    <div className=' flex items-center mt-2'>
                        <BsInstagram className=' text-[#1b1b1b] text-[20px] mr-4 text-sm' />
                        <p className=' text-[#1b1b1b] text-sm'>Fintech Mobile App</p>
                    </div>
                    <h1 className=' text-xl text-left text-black mt-2'>Finany</h1>
                </div>

                <div className=' h-[300px] w-[85%] '>
                    <div className='overflow-hidden cursor-pointer transition-all h-[78%]'>
                        <img className='transition-all h-full w-full hover:scale-150' src={itemImg1} alt="img" />
                    </div>
                    <div className=' flex items-center mt-2'>
                        <BsInstagram className=' text-[#1b1b1b] text-[20px] mr-4 text-sm' />
                        <p className=' text-[#1b1b1b] text-sm'>Fintech Mobile App</p>
                    </div>
                    <h1 className=' text-xl text-left text-black mt-2'>Finany</h1>
                </div>

                <div className=' h-[300px] w-[85%] '>
                    <div className='overflow-hidden cursor-pointer transition-all h-[78%]'>
                        <img className='transition-all h-full w-full hover:scale-150' src={itemImg2} alt="img" />
                    </div>
                    <div className=' flex items-center mt-2'>
                        <BsInstagram className=' text-[#1b1b1b] text-[20px] mr-4 text-sm' />
                        <p className=' text-[#1b1b1b] text-sm'>Fintech Mobile App</p>
                    </div>
                    <h1 className=' text-xl text-left text-black mt-2'>Finany</h1>
                </div>

                <div className=' h-[300px] w-[85%] '>
                    <div className='overflow-hidden cursor-pointer transition-all h-[78%]'>
                        <img className='transition-all h-full w-full hover:scale-150' src={itemImg3} alt="img" />
                    </div>
                    <div className=' flex items-center mt-2'>
                        <BsInstagram className=' text-[#1b1b1b] text-[20px] mr-4 text-sm' />
                        <p className=' text-[#1b1b1b] text-sm'>Fintech Mobile App</p>
                    </div>
                    <h1 className=' text-xl text-left text-black mt-2'>Finany</h1>
                </div>

            </Carousel>
        </div>
    );
};

export default Carouselbox;