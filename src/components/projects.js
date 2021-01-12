import React from 'react';
import '../assets/stylesheets/projects.css';
import thinker from '../assets/svgs/Thinking.svg';


const HomeProjectSection = () => {
    return (
        
        <section id="homepage-project-section">
            <div id="project-section-left">
                <h1 id="project-section-header">We personalize every <span>Website</span> < br />
                to your needs.
                </h1>
                <h2 id="project-section-subheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit. < br />
                    Aliquam euismod quis ligula maximus blandit. 
                </h2>
                <div id="project-link-div">
                    <button id="projects-link-button"> View Our Work</button>
                </div>
                

                <div id="contact-link-div">
                    <h2 id="questions-header"> Any Questions?</h2>
                    <button id="contact-link-button">Get in Touch</button>
                </div>

                <img src={thinker}/>
            </div>

            <div  id="project-section-right">
                <div className="project-section-box" id="project-div-1">

                </div>
                <div className="project-section-box" id="project-div-2">

                </div>
            </div>
        </section>
    )
}

export default HomeProjectSection;