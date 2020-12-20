import React, { useContext, useEffect, useState} from 'react';
import Icon from '../components/icon';
import greenbar from '../assets/svgs/green bar.svg';
import {ScrollContext} from "../components/globalscroll";


const AboutScroll = () => {

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
    }, [scrollPos])

    

        
        
    return(
        <section id="about-scroll-section"> 
            <div id="column-1">
                <div id="icon-div" >
                    <Icon 
                        id="logo"
                        fill1={logoColors.fill1}
                        fill2={logoColors.fill2} 
                        fill3={logoColors.fill3} 
                        fill4={logoColors.fill4} 
                        fill5={logoColors.fill5} 
                        fill6={logoColors.fill6} 
                        fill7={logoColors.fill7}  
                    />
                    <div id="icon-text-div">
                        <h1 id="icon-h1">Lorem <span> Ipsum </span></h1>
                        <div id="icon-p">
                            <p>More lorem ipsum text to take up 
                            about three lines of space to make 
                            it seem really important.</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={greenbar} id="greenbar"/>

            <div id="column-2" >
                <div id="text">
                    <h1>Lorem <span> Ipsum </span></h1>
                    <p>More lorem ipsum text to take up <br/>
                    about three lines of space to make <br/>
                    it seem really important.</p>
                </div>

                    <div className="about-box dark" id="one">
                        <h2>hard work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elt, sed
                            do euismod tempor incididunt ut loabore. blah
                            sadldsv sdvdv sdvsdsdcsdcsdcsdc sdcsdcsdcsdc
                        </p>
                    </div>

                    <div className="about-box light" id="two" >
                        <h2>hard work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elt, sed
                            do euismod tempor incididunt ut loabore. blah
                            sadldsv sdvdv sdvsdsdcsdcsdcsdc sdcsdcsdcsdc
                        </p>
                    </div>

                    <div className="about-box dark" id="three" >
                        <h2>Hard Work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elt, sed
                            do euismod tempor incididunt ut loabore. blah
                            sadldsv sdvdv sdvsdsdcsdcsdcsdc sdcsdcsdcsdc
                        </p>
                    </div>

                    <div className="about-box light" id="four" >
                        <h2>hard work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elt, sed
                            do euismod tempor incididunt ut loabore. blah
                            sadldsv sdvdv sdvsdsdcsdcsdcsdc sdcsdcsdcsdc
                        </p>
                    </div>

                    <div className="about-box dark" id="five" >
                        <h2>hard work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elt, sed
                            do euismod tempor incididunt ut loabore. blah
                            sadldsv sdvdv sdvsdsdcsdcsdcsdc sdcsdcsdcsdc
                        </p>
                    </div>

                    <div className="about-box light" id="six" >

                            <h2>hard work</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur elt, sed 
                                do euismod tempor incididunt ut loabore. blah 
                                sadldsv sdvdv sdvsdsdcsdcsdcsdc sdcsdcsdcsdc 
                            </p>
                    </div>

                    <div className="about-box dark" id="seven" >
                        <h2>hard work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elt, sed
                            do euismod tempor incididunt ut loabore. blah
                            sadldsv sdvdv sdvsdsdcsdcsdcsdc sdcsdcsdcsdc
                        </p>
                    </div>
            </div>
        </section>
    )
}

export default AboutScroll;