import React from 'react';
import '../assets/stylesheets/footer.css';
import ZayneTechLogo from '../assets/svgs/ZayneTech Dark Logo.svg'
import mail from '../assets/svgs/Closed Mail.svg';
import instagram from '../assets/svgs/instagram.svg';
import linkdin from '../assets/svgs/linkdin.svg';



const Footer = () => {
    return(
        <footer id="footer">
           {/* <img src={ZayneTechLogo} id="footer-logo"/> */}

            <div id="footer-links">
                <div>
                    <h3> Contact </h3>
                    <p>(868) - 798 - 5258</p>
                    <p>Zaynetechnologies@gmail</p>
                </div>

                <div>
                    <h3> Company </h3>
                    <p>About Us</p>
                    <p>Team</p>
                </div> 

                <div>
                    <h3> Services </h3>
                    <p>Web Design</p>
                    <p>Frontend Development</p>
                    <p>Backend Development</p>
                    <p>Web Hosting Support</p>
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
                    <img src={mail} />
                    <img src={instagram} />
                    <img src={linkdin} />
                </div>
            </div>

        </footer>
    )
}

export default Footer;