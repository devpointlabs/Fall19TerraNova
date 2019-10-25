import React, { useEffect } from 'react';
import AboutUs from './AboutUs';
import HotelStatistics from './HotelStatistics';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <AboutUs />
            <HotelStatistics />   
        </>
    );
};

export default About;