import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './icon';
import littletree from '../assets/svgs/Little Tree.svg';
import bigtree from '../assets/svgs/Big Tree.svg';
import wave from '../assets/svgs/Wave 2.svg'
import greenarrow from '../assets/svgs/green arrow.svg';
import {darkLogoGreen} from '../assets/data/logoColor';



const HomepageAbout = () => {
    return(
            <section className="page-content" id="homepage-about-section">

                    <h1>Our core values</h1> <br />
                    <h2>enable quality websites</h2>

                    
                    <Link to="/about" id="homepage-about-text">
                        <h3>About Us</h3> 
                        <img src={greenarrow} />
                    </Link>
                    

                    <Icon  
                        base={darkLogoGreen.base}
                        primary={darkLogoGreen.primary}
                    />

                    <img src={wave} id="homepage-about-wave"/> 
                    
                    

                    <img src={littletree} id="homepage-little-tree"/>
                    <img src={bigtree} id="homepage-big-tree"/>
                    
            </section>
    )
}



export default HomepageAbout;