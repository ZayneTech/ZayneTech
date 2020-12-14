import React, {useEffect, useState} from 'react';
import "../assets/stylesheets/navbar.css";
import ZayneTechLight from "../assets/svgs/ZayneTech Logo.svg";
import ZayneTechDark from "../assets/svgs/ZayneTech Dark Logo.svg";
import Icon from "./icon";


const Navbar = (props) => {

    const [scrollPos, setScrollPos] = useState(window.pageYOffset);
    const [IconColor] = useState(props.fill);
    const [Logo, setLogo] = useState('');

    useEffect (() => {
    props.mode ? setLogo(ZayneTechLight) : setLogo(ZayneTechDark);
    }, [])

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
            setScrollPos(currentScrollPos);
        } else {
            document.getElementById("navbar").style.top = "-100px";
         }
        prevScrollpos = currentScrollPos;
    }

    if (scrollPos === 0 ) {
        return (
            <nav className="navbar" id="navbar">
                <img src={Logo}/>

                <div id="nav-links">
                    <a href=""> Services</a>
                    <a href=""> Portfolio</a>
                    <a href=""> About </a>
                    <button><a href="">Contact</a> </button>
                </div>
            </nav>
        ) 
    } else {
        return (
            <nav className="navbar active" id="navbar">

                <Icon fill={IconColor} id="logo"/>

                <div id="nav-links2">
                    <a href=""> Services</a>
                    <a href=""> Portfolio</a>
                    <a href=""> About </a>
                    <button><a href="">Contact</a> </button>
                </div>
            </nav>
        )
    }
}

export default Navbar;

