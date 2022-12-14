import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import About from './About';
import Banner from './Banner';
import Donars from './Donars';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <Donars />
        </div>
    );
};

export default Home;