import React from 'react';
import "../assets/stylesheets/services.css";
import webdev from"../assets/svgs/Web Development.svg";
import computer from "../assets/svgs/computer design.svg";
import hosting from"../assets/svgs/Hosting Support.svg";




const InfoBox = () => {

    return (
        <div id="infobox">
            <div className="info-box-message">
                <img src={computer}/>
                <p>Web Design</p>
            </div> 

            <div className="info-box-message">
                <img src={webdev}/>
                <p>Web Development</p>
            </div>

            <div className="info-box-message">
                <img src={hosting}/>
                <p>Hosting Support</p>
            </div>
        </div>
    )
}


export default InfoBox;