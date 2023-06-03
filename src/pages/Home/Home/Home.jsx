import React from 'react';
import Carousel from '../Carousel/Carousel';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import ContactInfo from '../ContactInfo/ContactInfo';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <AboutUs/>
            <Services/>
            <ContactInfo/>

            <Teams/>
        </div>
    );
};

export default Home;