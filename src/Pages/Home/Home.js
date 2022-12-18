import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import About from './About';
import Banner from './Banner';
import Donars from './Donars';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <Donars />
            <Gallery />
        </div>
    );
};

export default Home;