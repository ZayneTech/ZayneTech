import React from 'react';
import '../assets/stylesheets/homepage2.css';
import InfoBox from './servicesinfobox';
import HomepageAbout from './homepageabout';
import HomepageServices from './homepageservices';
import HomepageProjects from './homepageprojects';
import HomepageHero from './homepagehero';




const HomepageWrapper = () => {
    return (
            <div className="wrapper">
                <HomepageHero />
                <InfoBox />
                <main id="homepage-main">
                    <HomepageAbout />
                    <HomepageServices />
                    <HomepageProjects />
                </main> 
            </div>
    )
}


export default HomepageWrapper;


