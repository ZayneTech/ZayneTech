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
                                <p> Lorem Ipsum Lorem Ipsum and random text Ipsum Lorem blah  
                                    fill this space up, and this line  too make it a decent sized 
                                    description.
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
                                <p> Lorem Ipsum Lorem Ipsum and random text Ipsum Lorem blah  
                                    fill this space up, and this line  too make it a decent sized 
                                    description.
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
                                <p> Lorem Ipsum Lorem Ipsum and random text Ipsum Lorem blah  
                                    fill this space up, and this line  too make it a decent sized 
                                    description.
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