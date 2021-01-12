import React from 'react';
import servicespicture from "../assets/svgs/Services.svg";
import design from '../assets/svgs/computer design.svg';
import simpledatabase from '../assets/svgs/simple database.svg';
import frontend from '../assets/svgs/frontend.svg';
import hosting from '../assets/svgs/Hosting Support.svg';


const ServicesMain = () => {
    return(
        <div className="wrapper">
            <div className="page-content">
                <div id="services-main">
                    <div></div>
                    <div id="services-main-text">
                        <h1>Services</h1>
                        <div id="paragraph">
                            <p>Lorem Ipsum Text to take up
                            a line or two. Or maybe a whole
                            three.
                            </p>
                        </div>
                    </div>

                    <img src={servicespicture} id="main-picture"/>

                    <div id="services-link-box">
                        <div className="service-link">
                            <img src={design}/>
                            <h2>Web Design</h2>
                        </div>

                        <div className="service-link">
                            <img src={simpledatabase}/>
                            <h2>Backend Development</h2>
                        </div>

                        <div className="service-link">
                            <img src={frontend}/>
                            <h2>FrontEnd Development</h2>
                        </div>

                        <div className="service-link">
                            <img src={hosting}/>
                            <h2>Hosting Support</h2>
                        </div>
                    </div>
                </div>
                </div>
            </div>

    )
}


export default ServicesMain;