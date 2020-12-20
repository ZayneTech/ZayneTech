import React, {useState}  from 'react';
import ValuesSection from './corevalues';
import AboutScroll from './aboutscroll';
import ContactBox from './contact-box';
import Footer from './footer';
import '../assets/stylesheets/about.css';



const About = () => {

    return (
        <div id="about">

            <ValuesSection />

            <AboutScroll  />

            <ContactBox />

            <Footer />
           
        </div>
    )
}

export default About;