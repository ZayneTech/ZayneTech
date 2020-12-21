import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "../assets/stylesheets/navbar.css";
import ZayneTechLight from "../assets/svgs/ZayneTech Logo.svg";
import ZayneTechDark from "../assets/svgs/ZayneTech Dark Logo.svg";
import {ScrollContext} from "../components/globalscroll";
import Icon from "./icon";


const Navbar = (props) => {
    const scrollPos = useContext(ScrollContext);
    const [prevScrollPos, setPrevScrollPos] = useState(scrollPos); 
    const [Logo, setLogo] = useState('');
    const [buttonColor, setButtonColor] = useState('');
    const [font, setFont] = useState('');

    useEffect (() => {
    props.mode ? setLogo(ZayneTechLight) : setLogo(ZayneTechDark);
    props.mode ? setButtonColor('blue') : setButtonColor('green');
    props.mode ? setFont('light-font') : setFont('dark-font')
    }, [])
    
    useEffect(() => {
        if (prevScrollPos >= scrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        };
        setPrevScrollPos(scrollPos)
    }, [scrollPos]) 


    if (scrollPos === 0 ) {
        return (
            <nav className="navbar" id="navbar">
                <Link to="/"> <img src={Logo}/> </Link>

                <div id="nav-links" className={font}>
                    <Link to="/services"> Services</Link> 
                    <Link > Portfolio</Link>
                    <Link to="/about"> About </Link>
                    <Link> <button className={buttonColor}> Contact </button></Link>
                </div>
            </nav>
        ) 
    } else { 
        return (
            <nav className="navbar active" id="navbar">

                <Link to="/">
                    <Icon fill1={props.fill1}
                        fill2={props.fill2} 
                        fill3={props.fill3} 
                        fill4={props.fill4} 
                        fill5={props.fill5} 
                        fill6={props.fill6} 
                        fill7={props.fill7} 
                        id="logo"
                    />
                </Link>   

                <div id="nav-links2">
                    <Link to="/services"> Services</Link> 
                    <Link > Portfolio</Link>
                    <Link to="/about"> About </Link>
                    <Link> <button className={buttonColor}> Contact</button></Link>
                </div>
            </nav>
        )
    } 
} 

export default Navbar;

