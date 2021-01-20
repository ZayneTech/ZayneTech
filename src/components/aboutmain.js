import React, { useContext, useEffect, useState} from 'react';
import Icon from '../components/icon';
import greenbar from '../assets/svgs/green bar.svg';
import {ScrollContext} from "../components/globalscroll";



const AboutMain = () => {
    const scrollPos = useContext(ScrollContext);

    const vHeight = window.innerHeight;
    const difference = .3 * vHeight;
 
     const [logoColors, setLogoColors ] = useState({
         fill1: '#495464',
         fill2: '#495464',
         fill3: '#495464',
         fill4: '#495464',
         fill5: '#495464',
         fill6: '#495464',
         fill7: '#495464',
     }); 
     
     useEffect(() => {
         if (scrollPos < vHeight) {
             setLogoColors(prev => ({...prev, [`fill1`]: "#495464"}))
         } else if (scrollPos >= vHeight && scrollPos < vHeight + difference) {
             setLogoColors(prev => ({...prev, [`fill2`]: "#495464", [`fill1`]: "#79C99E"}))
         } else if (scrollPos >= vHeight + difference && scrollPos < vHeight + (2 * difference)){
             setLogoColors(prev => ({...prev, [`fill3`]: "#495464", [`fill2`]: "#79C99E"}))
         } else if (scrollPos >= vHeight + (2 * difference) && scrollPos < vHeight + (3 * difference)){
             setLogoColors(prev => ({...prev, [`fill4`]: "#495464", [`fill3`]: "#79C99E"}))
         } else if (scrollPos >= vHeight + (3 * difference) && scrollPos < vHeight + (4 * difference)){
             setLogoColors(prev => ({...prev, [`fill5`]: "#495464", [`fill4`]: "#79C99E"}))
         } else if (scrollPos >= vHeight + (4 * difference) && scrollPos < vHeight + (5 * difference)){
             setLogoColors(prev => ({...prev, [`fill6`]: "#495464", [`fill5`]: "#79C99E"}))
         } else if (scrollPos >= vHeight + (5 * difference) && scrollPos < vHeight + (6 * difference)){
             setLogoColors(prev => ({...prev, [`fill7`]: "#495464", [`fill6`]: "#79C99E"}))
         } else if (vHeight + (6 * difference) && scrollPos < vHeight + (7 * difference)){
             setLogoColors(prev => ({...prev, [`fill7`]: "#79C99E"}))
         }
     }, [scrollPos]);

    return (
        <div className="wrapper">
            <main className="page-content" id="about-main-scroll">
                <div id="about-column-1">
                    <div id="about-icon-div">
                        <Icon 
                            fill1={logoColors.fill1}
                            fill2={logoColors.fill2} 
                            fill3={logoColors.fill3} 
                            fill4={logoColors.fill4} 
                            fill5={logoColors.fill5} 
                            fill6={logoColors.fill6} 
                            fill7={logoColors.fill7}
                        />

                        <div className="column-icontext-div">
                            <h1 id="icontext-h1">Lorem <span> Ipsum </span></h1>
                            <div id="icontext-p">
                                <p>More lorem ipsum text to take up 
                                about three lines of space to make 
                                it seem really important.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={greenbar} id="greenbar-divider"/>

                <div id="about-column-2">
                    <div className="column-icontext-div" id="column2-text">
                        <h1 id="icontext-h1">Lorem <span> Ipsum </span></h1>
                            <p id="icontext-p">More lorem ipsum text to take up 
                            about three lines of space to make 
                            it seem really important.</p>
                    </div>

                        <div className="values-box dark" id="one">
                            <h2>hard work</h2>
                            <div className="icontext-div">
                            <p id="icontext">Lorem ipsum dolor sit amet, consectetur elt, sed
                            do euismod tempor incididunt ut loabore. blah
                            sadldsv sdvdv sdvsdsdcsdcsdcsdc sdcsdcsdcsdc</p>
                        </div>
                        </div>

                        <div className="values-box light" id="two" >
                            <h2>hard work</h2>
                            <div className="icontext-div">
                            <p id="icontext">More lorem ipsum text to take up 
                            about three lines of space to make 
                            it seem really important.</p>
                        </div>
                        </div>

                        <div className="values-box dark" id="three" >
                            <h2>Hard Work</h2>
                            <div className="icontext-div">
                            <p id="icontext">More lorem ipsum text to take up 
                            about three lines of space to make 
                            it seem really important.</p>
                        </div>
                        </div>

                        <div className="values-box light" id="four" >
                            <h2>hard work</h2>
                            <div className="icontext-div">
                            <p id="icontext">More lorem ipsum text to take up 
                            about three lines of space to make 
                            it seem really important.</p>
                        </div>
                        </div>

                        <div className="values-box dark" id="five" >
                            <h2>hard work</h2>
                            <div className="icontext-div">
                            <p id="icontext">More lorem ipsum text to take up 
                            about three lines of space to make 
                            it seem really important.</p>
                        </div>
                        </div>

                        <div className="values-box light" id="six" >
                            <h2>hard work</h2>
                            <div className="icontext-div">
                            <p id="icontext">More lorem ipsum text to take up 
                            about three lines of space to make 
                            it seem really important.</p>
                        </div>
                        </div>

                        <div className="values-box dark" id="seven" >
                            <h2>hard work</h2>
                            <div className="icontext-div">
                                <p id="icontext">More lorem ipsum text to take up 
                                about three lines of space to make 
                                it seem really important.</p>
                            </div>
                        </div>
                </div>  
            </main>
        </div>
    )
}


export default AboutMain;