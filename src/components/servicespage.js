import React from 'react';
import ServicesContent from './servicescontent';
import ServicesMain from './servicesmain';
import ContactBox from './contact-box';
import Footer from './footer';


const ServicesPage = () => {

    return(
        <div id="services-page">
            <ServicesMain />
            <ServicesContent />
            <ContactBox />
        </div>
    )
}


export default ServicesPage;