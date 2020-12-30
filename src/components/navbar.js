import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "../assets/stylesheets/navbar.css";
/*import ZayneTechLight from "../assets/svgs/ZayneTech Logo.svg";
import ZayneTechDark from "../assets/svgs/ZayneTech Dark Logo.svg";*/
import {ScrollContext} from "../components/globalscroll";
import Icon from "./icon";


const Navbar = (props) => {
    /* track scroll for navbar */
    const scrollPos = useContext(ScrollContext);
    const [prevScrollPos, setPrevScrollPos] = useState(scrollPos); 

    /* color scheme for navbar */
    const [font, setFont] = useState('');
    const [logoColor, setLogoColor] = useState(props.color);
    const [logoColorTwo, setLogoColorTwo] = useState(props.colorTwo)

    /* set font color */
    useEffect (() => {
        props.mode ? setFont('light-font') : setFont('dark-font')
    }, [])
    
    /* navbar state on scroll */

    useEffect(() => {
        if(document.body.clientWidth > 768){
            if (prevScrollPos >= scrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-100px";
            };
            setPrevScrollPos(scrollPos)
        } 
    }, [scrollPos]) 


    /* Toggle mobile Nav Menu*/

    const toggleNav = () => {
        const body = document.body;
        const mobileLinks = document.querySelector('#nav-links2');

        mobileLinks.classList.toggle('active-mobile'); 
        body.classList.toggle('active-mobile');
    }


    if (scrollPos === 0 && document.body.clientWidth > 768) {
        return (
            <nav className="navbar" id="navbar">
                <Link className="logo-div" to="/">
                    <Icon  
                        base={logoColor.base}
                        primary={logoColor.primary}
                        id="logo"
                    />

                    <h1 id="ZayneTech">ZayneTech</h1>
                
                    <div className="menu-toggle" id="mobile-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </Link>
 

                <div id="nav-links" className={font}>
                    <Link to="/services"> Services</Link> 
                    <Link > Portfolio</Link>
                    <Link to="/about"> About </Link>
                    <Link> 
                        <button 
                            style={{backgroundColor: logoColorTwo.primary}}> 
                            Contact
                        </button> 
                    </Link>
                </div>
            </nav>
        ) 
    } else { 
        return (
            <nav className="navbar active" id="navbar">
                <div className="logo-div">
                <Link  to="/">
                    <Icon   
                        base={logoColorTwo.base}
                        primary={logoColorTwo.primary}
                         id="logo"
                    />
                </Link> 

                <div className="menu-toggle" id="mobile-menu" onClick={() => toggleNav()}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div> 
                </div>
                 

                <div id="nav-links2">
                    <Link to="/services"> Services</Link> 
                    <Link > Portfolio</Link>
                    <Link to="/about"> About </Link>
                    <Link> 
                        <button 
                            style={{backgroundColor: logoColorTwo.primary}}> 
                            Contact
                        </button> 
                    </Link>
                </div>
            </nav>
        )
    } 
} 

export default Navbar;

