import React from 'react'
import thinker from '../assets/svgs/Thinking.svg';

const homepageProjects = () => {
    return (
        <div className="wrapper" id="homepage-projects-wrapper">
            <section className="page-content" id="homepage-projects-section">
                <div className="homepage-project-columns" id="project-column-1">
                    <div>
                        <h1 id="project-column-header">We personalize every <span>Website </span> 
                        to your needs.
                        </h1>
                        <h2 id="project-column-subheader">Lorem ipsum dolor sit amet, consectetur a<span>dipiscing  
                            elit. </span>  Aliquam euismod quis ligula maximus bl<span>andit. </span>
                        </h2>
                    </div>

                    <div id="column-1-links">
                        <div id="projects-link-div">
                            <button id="projects-link-button"> View Our Work</button>
                        </div>
                        

                        <div id="contacts-link-div">
                            <h2 id="questions-header"> Any Questions?</h2>
                            <button id="contact-link-button">Get in Touch</button>
                        </div>
                    </div>

                    <img src={thinker}/> 
                </div>
                <div className="homepage-project-columns" id="project-column-2">
                    <div className="column-2-box">

                    </div>

                    <div className="column-2-box">
                                
                    </div>
                </div>
            </section>
        </div>
    )
}

export default homepageProjects;