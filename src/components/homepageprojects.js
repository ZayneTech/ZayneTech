import React from 'react'
import thinker from '../assets/svgs/Thinking.svg';

const homepageProjects = () => {
    return (
        <div className="wrapper" id="homepage-projects-wrapper">
            <section className="page-content" id="homepage-projects-section">
                <div className="homepage-project-columns" id="project-column-1">
                    <div>
                        <h1 id="project-column-header">We personalize every <span style={{textShadow: '0 0 8px rgba(0, 0, 0, .25)'}}>Website </span> 
                        to your needs.
                        </h1>
                        <h2 id="project-column-subheader">Customized for your growth. Your website w<span style={{textShadow: '0 0 8px rgba(0, 0, 0, .25)'}}>ill help you</span> engage with  
                            your customers by expanding <span style={{textShadow: '0 0 8px rgba(0, 0, 0, .25)'}}>your digital</span> presence.
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

                    <h1 style={{color: 'white', fontSize: 40, textAlign: 'center'}}>Be Our First Project!</h1>
                   {/* <div className="column-2-box">

                    </div>

                    <div className="column-2-box">
                                
                </div> */}
                </div>
            </section>
        </div>
    )
}

export default homepageProjects;