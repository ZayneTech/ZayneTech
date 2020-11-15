import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import "../assets/stylesheets/navbar.css";
import logo from "../assets/svgs/ZayneTechIcon.svg";
import logo2 from "../assets/svgs/ZayneTechLogo.svg";
import logo3 from "../assets/svgs/ZayneTechLogo2.svg";

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo2}/>
        </div>
    )
}

export default Navbar;

