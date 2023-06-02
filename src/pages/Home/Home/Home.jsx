import React from 'react';
import Carousel from '../Carousel/Carousel';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import ContactInfo from '../ContactInfo/ContactInfo';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <AboutUs/>
            <Services/>
            <ContactInfo/>
        </div>
    );
};

export default Home;