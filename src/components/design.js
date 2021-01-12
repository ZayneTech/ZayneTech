import React from 'react';
import bigWave from "../assets/svgs/Big Wave.svg";
import wireframe from "../assets/svgs/wireframe.svg";
import connected from "../assets/svgs/connected.svg";
import adobe from '../assets/svgs/Adobexd.svg';
import unsplash from "../assets/svgs/unspashlogo.svg";
import colormind from '../assets/svgs/Colormind logo.svg'

const Design = () => {
    return (

        <div className="wrapper">
            <div className="page-content">
            <div className="service-pages">
        <div >
            <div className="big-wave">
                <img src={bigWave}/>
            </div>

            <div className="services-intro">
                <div className="intro-text">
                    <h1>UI / UX Design</h1>
                    <h2>Lorem Ipsum text about the 
                        importance of frontend dev-
                        elopement.
                    </h2>
                </div>

                <div id="design-image">
                    <img src={wireframe}/>
                </div>
            </div>
        </div>

        <main className="services-main">

            <div className="the-service" id="adobe-intro">
                <div>
                    <h2><span className="pink">UI / UX </span> Design</h2>
                    <div className="service-intro-text">
                        <p>
                            Lorem Ipsum text about the importance 
                            of frontend development. Blah blah take 
                            up more space make it long and interest-
                            ing to engage your audience.
                        </p>
                    </div>
                    <img src={connected} />
                </div>   
            </div>

          <div className="the-service service-info" id="node-info">
                <h2>Why <span className="pink">Adobe</span>?</h2>
                    <img src={adobe}/>
                    <div className="service-info-text">
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

            <div className="the-service" >
                <div>
                    <h2>Other <span className="pink">Design</span> Tools</h2>
                    <div className="services-extra-info">
                        <div className="service-intro-text">
                            <p>
                                Lorem Ipsum text about the importance 
                                of frontend development. Blah blah take 
                                up more space make it long and interest-
                                ing to engage your audience.
                            </p>
                        </div>
                        <img src={unsplash}/>
                        <img  src={colormind}/>
                    </div>
                </div>   
            </div>


            <div className="the-service service-info extra-info" >
                <div>
                    <h2><span className="pink">Color</span> Scheme</h2>
                    <div className="service-intro-text">
                        <p>
                            Lorem Ipsum text about the importance 
                            of frontend development. Blah blah take 
                            up more space make it long and interest-
                            ing to engage your audience.
                        </p>
                    </div>
                    <div className="service-intro-text">
                        <p>
                            Lorem Ipsum text about the importance 
                            of frontend development. Blah blah take 
                            up more space make it long and interest-
                            ing to engage your audience.
                        </p>
                    </div><div className="service-intro-text">
                        <p>
                            Lorem Ipsum text about the importance 
                            of frontend development. Blah blah take 
                            up more space make it long and interest-
                            ing to engage your audience.
                        </p>
                    </div>
                </div>   
            </div>
        </main>

        
    </div>
            </div>
        </div>
    )
}

export default Design;