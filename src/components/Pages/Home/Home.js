import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div className='bg-black text-white px-10'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;