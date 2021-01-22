import React from 'react';
import ServicesHeader from './servicesheader';
import ServicesMain from './servicesmain';
import ContactBox from './contact-box';
import "../assets/stylesheets/services2.css";



const ServicesWrapper = () => {
   return (
       <div className="wrapper">
            <ServicesHeader />
            <ServicesMain />
            <ContactBox />
       </div>
   )
}

export default ServicesWrapper;