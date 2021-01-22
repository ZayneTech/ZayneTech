import React from 'react';
import servicespicture from "../assets/svgs/Services.svg";
import design from '../assets/svgs/computer design.svg';
import simpledatabase from '../assets/svgs/simple database.svg';
import frontend from '../assets/svgs/frontend.svg';
import hosting from '../assets/svgs/Hosting Support.svg';



const ServicesHeader = () =>{
    return (
        <header id="services-header">
            <div className="page-content" id="header-content">
                <div id="services-header-text">
                        <h1> Services </h1>
                        <div id="header-p">
                            <p> Lorem Ipsum Text to take up a line
                                or two. Or maybe a whole three.
                            </p>
                        </div>
                </div>

                <div id="services-header-img">
                    <img src={servicespicture}/>
                </div>
            </div>

            <div id="header-links">
                <div className="page-content" id="header-links-div">
                    <div className="header-link">
                            <img src={design}/>
                            <h2>Web Design</h2>
                    </div>
                    <div className="header-link">
                            <img src={simpledatabase}/>
                            <h2>Backend Development</h2>
                    </div>
                    <div className="header-link">
                            <img src={frontend}/>
                            <h2>FrontEnd Development</h2>
                    </div>
                    <div className="header-link">
                            <img src={hosting}/>
                            <h2>Hosting Support</h2>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default ServicesHeader;



