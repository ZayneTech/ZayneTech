import React from 'react';
import {Link} from 'react-router-dom';
import InfoBox from './servicesinfobox';
import arrow from '../assets/svgs/Arrow 1.svg';
import mail from '../assets/svgs/Closed Mail.svg';
import instagram from '../assets/svgs/instagram.svg';
import linkdin from '../assets/svgs/linkdin.svg';
import ValuesSection from './corevalues';
import Services from './services';
import HomeProjectSection from './projects';
import wave from '../assets/svgs/Wave 3.svg'
import {Mail, Instagram, Linkdin} from '../components/contactsvg';
import '../assets/stylesheets/homepage.css';





const Homepage = () => {

    const changeHeroText = () => {
        const heroText = document.querySelectorAll('.text-div');

        heroText[0].classList.toggle('active-text');
        heroText[1].classList.toggle('active-text');
        console.log(heroText);
    }

    return (
        <main id="homepage">
                <div id="homepage-img">
                   {/* <img src={homepageimg}/> */}
                </div>

                <section id="homepage-filter">
                    <div className="wrapper">
                    <div className="page-content" id="homepage-text">
                        <div className="text-div active-text" id="text-div1" >
                            <div id="mission-box">
                                <p> Our mission</p> 
                                <img src={arrow} className="arrow" onClick={() => changeHeroText()}/>
                                <img src={arrow} className="arrow" id ="arrow2" onClick={() => changeHeroText()}/>
                            </div>
                            <h1>Websites designed  to <br /> grow your business.</h1>
                           <Link to="/projects"><button> Our Projects </button></Link> 
                        </div>

                        <div className="text-div" id="text-div2">
                            <div id="mission-box">
                                <p> Our services</p> 
                                <img src={arrow} className="arrow" onClick={() => changeHeroText()}/>
                                <img src={arrow} className="arrow" id ="arrow2" onClick={() => changeHeroText()}/>
                            </div>
                            <h1>Websites designed  to <br /> grow your business.</h1>
                            <Link to="/services"><button> Our Services </button> </Link>
                        </div>

                        <div id ="empty-spacer-div">

                        </div>

                        <div id="homepage-contacts">
                           {/* <img src={mail} className="contact-img"/>
                            <img src={instagram} className="contact-img"/>
    <img src={linkdin} className="contact-img"/> */}
                                <a href="mailto:zaynetechnologies@gmail.com"> <Mail color="white"/> </a>
                                <a> <Instagram color="white"/> </a>
                                <a> <Linkdin color="white"/> </a>
                        </div>
                    </div>
                    </div>
                </section>

                <section id="homepage-wave"> <img src={wave}/></section>  
        </main>
    )
}


export default Homepage;