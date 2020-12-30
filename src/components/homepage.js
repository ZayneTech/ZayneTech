import React from 'react';
import InfoBox from './servicesinfobox';
import arrow from '../assets/svgs/Arrow 1.svg';
import mail from '../assets/svgs/Closed Mail.svg';
import instagram from '../assets/svgs/instagram.svg';
import linkdin from '../assets/svgs/linkdin.svg';
import ValuesSection from './corevalues';
import Services from './services';
import HomeProjectSection from './projects';
import '../assets/stylesheets/homepage.css';
import homepageimg from '../assets/images/Keyboard and notes.jpg'




const Homepage = () => {

    return (
        <main id="homepage">
                <div id="homepage-img">
                   {/* <img src={homepageimg}/> */}
                </div>

                <section id="homepage-filter">
                    <div id="homepage-text">
                        <div id="text-div">
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
                            <img src={mail} className="contact-img"/>
                            <img src={instagram} className="contact-img"/>
                            <img src={linkdin} className="contact-img"/>
                        </div>
                    </div>
                </section>

                <section id="homepage-wave"></section>  
        </main>
    )
}


export default Homepage;