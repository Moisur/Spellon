import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Digital from '../Digital Expertise/Digital';
import Apart from '../US APART/Apart';
import Footer from '../../Shared/Footer/Footer';
import HiSection from '../HiSection/HiSection';
import StudiesFeatured from '../Studies Featured/StudiesFeatured ';
import Trusted from '../Trusted/Trusted';
import Musemind from '../Musemind/Musemind';
import Carouselbox from '../Carouselbox/Carouselbox';
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
            <div className='bg-[#feed01] text-black'>
                <Digital></Digital>
            </div>
            <StudiesFeatured></StudiesFeatured>
            <Trusted></Trusted>
            <Musemind></Musemind>
            <Carouselbox></Carouselbox>
            <HiSection></HiSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;