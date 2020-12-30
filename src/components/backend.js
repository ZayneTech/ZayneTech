import React from 'react';
import bigWave from "../assets/svgs/Big Wave.svg";
import database from "../assets/svgs/databaseserver.svg";
import map from '../assets/svgs/Map.svg';
import node from '../assets/svgs/nodejslogo.svg'
import mongo from '../assets/svgs/mongodb.svg';
import postgres from '../assets/svgs/postgresql-inc.svg';

const Backend = () => {
    return (
        <div className="service-pages">
            <div >
                <div className="big-wave">
                    <img src={bigWave}/>
                </div>

                <div className="services-intro">
                    <div className="intro-text">
                        <h1>Backend Development</h1>
                        <h2>Lorem Ipsum text about the 
                            importance of frontend developement.
                        </h2>
                    </div>

                    <div id="backend-image">
                        <img src={database}/>
                    </div>
                </div>
            </div>

            <main className="services-main">

                <div className="the-service" id="node-intro">
                    <div>
                        <h2><span className="green">Node</span> Development</h2>
                        <div className="service-intro-text">
                            <p>
                                Lorem Ipsum text about the importance 
                                of frontend development. Blah blah take 
                                up more space make it long and interest-
                                ing to engage your audience.
                            </p>
                        </div>
                        <img src={map}/>
                    </div>   
                </div>

              <div className="the-service service-info" id="node-info">
                    <h2>Why <span className="green">Node</span>?</h2>
                        <img  src={node}/>
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
                        <h2><span className="green">Database</span> Development</h2>
                        <div className="services-extra-info">
                            <div className="service-intro-text">
                                <p>
                                    Lorem Ipsum text about the importance 
                                    of frontend development. Blah blah take 
                                    up more space make it long and interest-
                                    ing to engage your audience.
                                </p>
                            </div>
                            <img src={mongo} />
                            <img src={postgres} />
                        </div>
                    </div>   
                </div>


                <div className="the-service service-info extra-info">
                    <div>
                        <h2><span className="green">API</span> Development</h2>
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
    )
}

export default Backend;