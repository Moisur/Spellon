import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Digital from '../Digital Expertise/Digital';
import Apart from '../US APART/Apart';
const Home = () => {
    return (
        <div>
            <div className='bg-black text-white '>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <div className='bg-white text-black'>
                <Apart></Apart>
            </div>
            <div className='bg-yellow-400 text-black'>
               <Digital></Digital>
            </div>
        </div>
    );
};

export default Home;