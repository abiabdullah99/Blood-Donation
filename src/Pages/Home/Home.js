import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
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
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;