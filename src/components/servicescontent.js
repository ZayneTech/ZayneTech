import React from 'react';
import design from '../assets/svgs/website design.svg';
import backend from '../assets/svgs/backend design.svg';
import frontend from '../assets/svgs/frontend design.svg';
import arrow from '../assets/svgs/green arrow.svg';


const ServicesContent = () => {
    return (
        <div id="services-content">
            
            <div className="content-div">
                    <div>
                        <img src={design} />
                    </div>

                    <div className="content-text">
                        <h1>Web Design</h1>
                        <h2>Lorem Ipsum Text</h2>
                        <button id="lightblue"> User Experience</button>
                        <button id="lightblue"> User Interface </button>
                        <div className="read-more-link">
                            Read More 
                            <img src={arrow}/>
                        </div>
                    </div>
            </div>

            <div className="content-div">
                    <div className="content-text">
                        <h1>Web Development</h1>
                        <h2>Lorem Ipsum Text</h2>
                        <button id="darkblue"> User Experience</button>
                        <button id="darkblue"> User Interface </button>
                        <div className="read-more-link">
                            Read More 
                            <img src={arrow}/>
                        </div>
                    </div>

                    <div>
                        <img src={backend} />
                    </div>
            </div>

            <div className="content-div">
                    <div>
                        <img src={frontend} />
                    </div>

                    <div className="content-text">
                        <h1>Web Development</h1>
                        <h2>Lorem Ipsum Text</h2>
                        <button id="green"> User Experience</button>
                        <button id="green"> User Interface </button>
                        <div className="read-more-link">
                             Read More 
                            <img src={arrow}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default ServicesContent;