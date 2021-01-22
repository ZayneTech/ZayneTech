import React from 'react';
import { Link } from 'react-router-dom';
import design from '../assets/svgs/website design.svg';
import backend from '../assets/svgs/backend design.svg';
import frontend from '../assets/svgs/frontend design.svg';
import arrow from '../assets/svgs/green arrow.svg';


const ServicesMain = () => {
    return(
        <div className="wrapper">
            <main className="page-content" id="services-main-wapper">
                <section className="services">
                    <div>
                        <img src={design}/>
                    </div>
                    <div className="services-info">
                        <h1>Web Design</h1>
                        <h2>Lorem Ipsum</h2>
                        <button id="lightblue"> User Experience</button>
                        <button id="lightblue"> User Interface </button>
                        <div className="services-info-link">
                            <Link to="/services/design">
                                Read More 
                                <img src={arrow}/> 
                             </Link>
                        </div>
                    </div>
                </section>

                <section className="services" id="second-service">
                    <div className="services-info">
                        <h1>Backend Development</h1>
                        <h2>More lorem Ipsum</h2>
                        <button id="darkblue"> User Experience</button>
                        <button id="darkblue"> User Interface </button>
                        <div className="services-info-link">
                            <Link to="/services/backend">
                                Read More 
                                <img src={arrow}/>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <img src={backend}/>
                    </div>
                </section>
                <section className="services">
                    <div>
                        <img src={frontend}/>
                    </div>
                    <div className="services-info">
                        <h1>Frontend Development</h1>
                        <h2>Lorem Ipsum Text</h2>
                        <button id="green"> User Experience</button>
                        <button id="green"> User Interface </button>
                        <div className="services-info-link">
                            <Link to="/services/frontend">
                                Read More 
                                <img src={arrow}/>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}


export default ServicesMain;