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
                        <h2>Designed to Perfection</h2>
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
                        <h2>Powerful and Secure</h2>
                        <button id="darkblue"> API Development</button>
                        <button id="darkblue"> Databases</button>
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
                        <h2>Beautiful interface</h2>
                        <button id="green"> React Development</button>
                        <button id="green"> Functional</button>
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