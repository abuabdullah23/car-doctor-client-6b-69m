import React from 'react';
import Carousel from '../Carousel/Carousel';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <AboutUs/>
            <Services/>
        </div>
    );
};

export default Home;