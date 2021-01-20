import React from 'react';
import '../assets/stylesheets/footer.css';
import {Link} from 'react-router-dom';
import ZayneTechLogo from '../assets/svgs/ZayneTech Dark Logo.svg'
import mail from '../assets/svgs/Closed Mail.svg';
import instagram from '../assets/svgs/instagram.svg';
import linkdin from '../assets/svgs/linkdin.svg';
import { Instagram, Linkdin, Mail } from './contactsvg';



const Footer = () => {
    return(
        <footer className="page-content" id="footer">
           {/* <img src={ZayneTechLogo} id="footer-logo"/> */}

            <div id="footer-links">
                <div>
                    <h3> Contact </h3>
                    <p>(868) - 798 - 5258</p>
                    <p>Zaynetechnologies@gmail</p> 
                </div>

                <div>
                    <h3> Company </h3>
                    <Link to ="/about"><p>About Us</p></Link>
                   <Link to="/about"><p>Team</p> </Link> 
                </div> 

                <div>
                   <h3> Services </h3>  
                 <Link to="/services/design">  <p>Web Design</p></Link> 
                 <Link to="/services/frontend">  <p>Frontend Development</p> </Link>
                 <Link to="/services/backend">  <p>Backend Development</p> </Link>
                 <Link to="/services"> <p>Web Hosting Support</p> </Link>
                </div>

                <div>
                    <h3> Projects </h3>
                    <p>Cabmor Interiors</p>
                    <p>The Batman Project</p>
                    <p>Jay Foundation</p>
                    <p>EML Foundation</p>
                    <p>Justice League Project</p>
                </div>
            </div>

            <div id="spacer-div">
                <div id="spacer"></div>
            </div>

            <div id="company-footer">
                <h3>  ZayneTech 2020</h3>
                <div id="footer-contacts">
                    <a href="mailto: zaynetechnologies@gmail.com">  
                        <Mail color="black"/> 
                    </a>
                    <Instagram color="black"/>
                    <Linkdin color="black"/>
                </div>
            </div>

        </footer>
    )
}

export default Footer;