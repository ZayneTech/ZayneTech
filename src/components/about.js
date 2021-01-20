import React, {useState}  from 'react';
import ValuesSection from './corevalues';
import ContactBox from './contact-box';
import Footer from './footer';
import AboutMain from './aboutmain';
import '../assets/stylesheets/about.css';




const About = () => {

    return (
        <div id="about">

            <ValuesSection/>

            <AboutMain  />

            <ContactBox />

            <Footer />
           
        </div>
    )
}

export default About;