import React from 'react';
import bigWave from "../assets/svgs/Big Wave.svg";
import planning from '../assets/svgs/Frontend planning.svg';
import thinker from '../assets/svgs/thinkertwo.svg';
import reactLogo from '../assets/svgs/ReactLogo.svg';
import nav from '../assets/svgs/Nav Comp.svg';
import main from '../assets/svgs/Main Comp.svg';
import footer from '../assets/svgs/Footer Comp.svg';



const Frontend = () => {
    return (
        <div id="services-frontend">
            <div >
                <div id="big-wave">
                    <img  src={bigWave}/>
                </div>

                <div id="frontend-landing">
                    <div id="landing-text">
                        <h1>Frontend Development</h1>
                        <h2>Lorem Ipsum text about the 
                            importance of frontend dev-
                            elopement.
                        </h2>
                    </div>

                    <div id="frontend-image">
                        <img src={planning}/>
                    </div>
                </div>
            </div>

            <main id="frontend-main">

                <div className="react" id="react-intro">
                    <div>
                        <h2><span>React</span> Development</h2>
                        <div id="react-intro-text">
                            <p>
                                Lorem Ipsum text about the importance 
                                of frontend development. Blah blah take 
                                up more space make it long and interest-
                                ing to engage your audience.
                            </p>
                        </div>
                        <img src={thinker}/>
                    </div>   
                </div>

              <div className="react" id="react-info">
                    <h2>Why <span>React</span>?</h2>
                        <img src={reactLogo} />
                        <div className="react-info-text">
                            <p >
                                Lorem Ipsum text about the importance of frontend 
                                development. Blah blah take up more space make it 
                                long and interesting to engage your audience.
                            </p>

                            <p >
                                Lorem Ipsum text about the importance of frontend 
                                development. Blah blah take up more space make it 
                                long and interesting to engage your audience.
                            </p>
                        </div>
                </div> 

                <div  id="react-demo">

                    <section id="components-section">
                        <h1>Components</h1>
                        <div className="image-comp">
                            <img src={nav}  id="component-1"/>
                                <img src={main}  id="component-2"/>
                                <img src={footer}  id="component-3"/>
                        </div>

                            <img src={nav} id ="image-1"/>
                            <img src={main} id ="image-2"/>
                            <img src={footer} id ="image-3"/>
                        
                    </section>

                    <section id="web-page-section">
                            <h1> Web Page </h1>

                            <div id="gray-box">
                                
                            </div>
                    </section>
                </div>

                <div id="final-words" >
                    <div id="react-info-text-2">
                        <p >
                            Lorem Ipsum text about the importance of frontend 
                            development. Blah blah take up more space make it 
                            long and interesting to engage your audience.
                        </p>
                    </div>
                </div>
            </main>

            
        </div>
    )
}

export default Frontend;