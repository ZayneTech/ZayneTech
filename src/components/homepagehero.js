import React from 'react';
import {Link} from 'react-router-dom';
import arrow from '../assets/svgs/Arrow 1.svg';
import {Mail, Instagram, Linkdin} from '../components/contactsvg';
import wave from '../assets/svgs/Wave 3.svg'


const HomepageHero = () => {

    const changeHeroText = () => {
        const heroText = document.querySelectorAll('.hero-text');

        heroText[0].classList.toggle('active-hero-text');
        heroText[1].classList.toggle('active-hero-text');
    }

    return(
        <div id="homepage-img-div">
                    <div id="homepage-hero-img">
                        <div id="homepage-img-filter">

                            <div className="page-content">
                                <header id="homepage-header">
                                    <div id="homepage-hero-div">

                                        <div id="homepage-hero-text">
                                            <div className="hero-text active-hero-text">
                                                <div className="hero-header">
                                                    <p>Our mission</p>
                                                    <img src={arrow} onClick={() => changeHeroText()}/>
                                                    <img src={arrow} id="header-arrow-2" onClick={() => changeHeroText()}/>
                                                </div>
                                                <h1>Websites designed  to grow your business.</h1>
                                                <Link to="/projects"><button> Our Projects </button></Link>
                                            </div>

                                            <div className="hero-text">
                                                <div className="hero-header">
                                                    <p>Our services</p>
                                                    <img src={arrow} onClick={() => changeHeroText()}/>
                                                    <img src={arrow} id="header-arrow-2" onClick={() => changeHeroText()}/>
                                                </div>
                                                <h1>Websites designed  to grow your business.</h1>
                                                <Link to="/services"><button> Our Services </button> </Link>
                                            </div>
                                        </div>

                                        <div id="homepage-hero-contacts">
                                            <a href="mailto:zaynetechnologies@gmail.com"> <Mail color="white"/> </a>
                                            <a> <Instagram color="white"/> </a>
                                            <a> <Linkdin color="white"/> </a>
                                        </div>
                                    </div>
                                </header>

                                <section id="homepage-wave"> <img src={wave}/></section>  
                            </div>
                        </div>
                    </div>  
                </div>
    )
}


export default HomepageHero;