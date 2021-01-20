import React from 'react';
import '../assets/stylesheets/homepage.css';
import InfoBox from './servicesinfobox';
import HomepageAbout from './homepageabout';
import HomepageServices from './homepageservices';
import HomepageProjects from './homepageprojects';
import HomepageHero from './homepagehero';
import ValuesSection from './corevalues';


const HomepageWrapper = () => {
    return (
            <div className="wrapper">
                <HomepageHero />
                <InfoBox />
                <main id="homepage-main">
                    <ValuesSection homepage="true"/>
                    <HomepageServices />
                    <HomepageProjects />
                </main> 
            </div>
    )
}


export default HomepageWrapper;


