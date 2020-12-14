import React from 'react';
import InfoBox from './servicesinfobox';
import arrow from '../assets/svgs/Arrow 1.svg';
import mail from '../assets/svgs/Closed Mail.svg';
import instagram from '../assets/svgs/instagram.svg';
import linkdin from '../assets/svgs/linkdin.svg';
import ValuesSection from './corevalues';

const Homepage = () => {

    return (
        <main id="homepage">
                <div id="homepage-img"></div>

                <section id="homepage-filter">
                    <div id="homepage-text">
                        <div>
                            <div id="mission-box">
                                <p> Our mission</p> 
                                <img src={arrow}/>
                                <img src={arrow} id ="arrow2"/>
                            </div>
                            <h1>Websites designed  to <br /> grow your business.</h1>
                            <button> Our Projects </button>
                        </div>

                        <div id ="empty-spacer-div">

                        </div>

                        <div id="homepage-contacts">
                            <img src={mail}/>
                            <img src={instagram}/>
                            <img src={linkdin}/>
                        </div>
                    </div>
                </section>

                <section id="homepage-wave"></section>

                <InfoBox />

                <ValuesSection />
        </main>
    )
}


export default Homepage;