import React from 'react';
import {Link} from 'react-router-dom';
import design from '../assets/svgs/computeruidesign.svg';
import developer from '../assets/svgs/Developer.svg';
import server from '../assets/svgs/databaseserver.svg';
import greenarrow from '../assets/svgs/green arrow.svg';


const HomepageServices = () => {
    return(
        <div className="wrapper" id="homepage-services-wrapper">
            <section className="page-content" id="homepage-services-section">
                <h1> Services</h1>

                <div id="homepage-services-boxes">
                    <div className="service-box" id="service-box-1">
                            <h2>Web Design</h2>
                            <img src={design}/>
                            <div className="service-box-text">
                                <p> Our web designs are crafted with your business aesthetic and goals in mind. We follow 
                                    the best design principles to ensure your users can experience the full impact of 
                                    your website.
                                </p>
                            </div>
                            <div className="service-box-link">
                                <Link> <img src={greenarrow} /> </Link>
                            </div>
                    </div>
                    <div className="service-box" id="service-box-2">
                            <h2>Frontend Web Development</h2>
                            <img src={developer}/>
                            <div className="service-box-text">
                                <p> Our experience in frontend developmnent enables us to create fully functional and 
                                    responsive websites. We use modern technologies to make your website a fun and 
                                    engaging experience.
                                </p>
                            </div>
                            <div className="service-box-link">
                                <Link> <img src={greenarrow} /> </Link>
                            </div>
                    </div>
                    <div className="service-box" id="service-box-3">
                            <h2>Backend Web Development</h2>
                            <img src={server}/>
                            <div className="service-box-text">
                                <p> We take the complexities of backend development, and simplify it for you so that you can 
                                    operate your business hassle free.
                                </p>
                            </div>
                            <div className="service-box-link">
                                <Link> <img src={greenarrow} /> </Link>
                            </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}


export default HomepageServices;