import React, { useContext, useEffect, useRef, useState} from 'react';
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
        const iconText = document.querySelector('#icontext-h1');
        const iconpara = document.querySelector('#icontext-p'); 
         if (scrollPos < vHeight) {
             setLogoColors(prev => ({...prev, [`fill1`]: "#495464"}))
             iconText.innerHTML = 'About Us'
             iconpara.innerHTML = 'Keep scrolling to learn more about us!'
         } else if (scrollPos >= vHeight && scrollPos < vHeight + difference) {
             setLogoColors(prev => ({...prev, [`fill2`]: "#495464", [`fill1`]: "#79C99E"}))
             iconText.innerHTML = '<span>Quality</span>'
             iconpara.innerHTML = `Why would we develop websites without quality? You're right... we wouldn't.`
         } else if (scrollPos >= vHeight + difference && scrollPos < vHeight + (2 * difference)){
             setLogoColors(prev => ({...prev, [`fill3`]: "#495464", [`fill2`]: "#79C99E"}))
             iconText.innerHTML = 'Hard Work'
             iconpara.innerHTML = `You can't have quality without putting in the work.`
         } else if (scrollPos >= vHeight + (2 * difference) && scrollPos < vHeight + (3 * difference)){
             setLogoColors(prev => ({...prev, [`fill4`]: "#495464", [`fill3`]: "#79C99E"}))
             iconText.innerHTML = '<span>Consistency</span>'
             iconpara.innerHTML = `Some say it's the key, but we say... well pretty much the same thing.`
         } else if (scrollPos >= vHeight + (3 * difference) && scrollPos < vHeight + (4 * difference)){
             setLogoColors(prev => ({...prev, [`fill5`]: "#495464", [`fill4`]: "#79C99E"}))
             iconText.innerHTML = 'Honesty'
             iconpara.innerHTML = `It's the best policy. Simple as that.`
         } else if (scrollPos >= vHeight + (4 * difference) && scrollPos < vHeight + (5 * difference)){
             setLogoColors(prev => ({...prev, [`fill6`]: "#495464", [`fill5`]: "#79C99E"}))
             iconText.innerHTML = '<span>Innovation</span>'
             iconpara.innerHTML = `We're software developers. It's literally mandatory in our field.`
         } else if (scrollPos >= vHeight + (5 * difference) && scrollPos < vHeight + (6 * difference)){
             setLogoColors(prev => ({...prev, [`fill7`]: "#495464", [`fill6`]: "#79C99E"}))
             iconText.innerHTML = 'Fairness'
             iconpara.innerHTML = `We treat everyone fairly. Except if you're our client. You get special treatment.`
         } else if (vHeight + (6 * difference) && scrollPos < vHeight + (7 * difference)){
             setLogoColors(prev => ({...prev, [`fill7`]: "#79C99E"}))
             iconText.innerHTML = '<span>Fun</span>'
             iconpara.innerHTML = `If you can't tell by now. We have fun with what we do!`
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
                            <h1 id="icontext-h1" ></h1>
                            <div id="icontext-p" >
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={greenbar} id="greenbar-divider"/>

                <div id="about-column-2">
                    <div className="column-icontext-div" id="column2-text">
                        <h1 id="icontext-h1">Our Values</h1>
                            <p id="icontext-p">Our values define our integrity to deliver quality websites.</p>
                    </div>

                        <div className="values-box dark" id="one">
                            <h2>Quality</h2>
                            <div className="icontext-div">
                            <p id="icontext"> 
                                We develop websites with the full extent of our experience and passion
                                to deliver a product that you are happy with. We do this by using the 
                                best practices of the latest technologies.
                            </p>
                        </div>
                        </div>

                        <div className="values-box light" id="two" >
                            <h2>Hard Work</h2>
                            <div className="icontext-div">
                            <p id="icontext">
                                 Hard work ties in directly to quality as you can never have one without the other.
                                This is our craft, and we are constantly working to improve our already high standards.
                            </p>
                        </div>
                        </div>

                        <div className="values-box dark" id="three" >
                            <h2>Consistency</h2>
                            <div className="icontext-div">
                            <p id="icontext">
                                Technically we are'nt consistent because we improve with every project that we take on. 
                                Where we are consistent is in our pursuit to be better developers.
                            </p>
                        </div>
                        </div>

                        <div className="values-box light" id="four" >
                            <h2>Honesty</h2>
                            <div className="icontext-div">
                            <p id="icontext">
                                To build lasting relationships with our clients we take full accountability, 
                                and inform you through every step of our process to keep on open line of communication.
                            </p>
                        </div>
                        </div>

                        <div className="values-box dark" id="five" >
                            <h2>Innovation</h2>
                            <div className="icontext-div">
                            <p id="icontext">
                                Innovation is important for any tech company to have. Our experiences define
                                our personal take on the future of websites.
                            </p>
                        </div>
                        </div>

                        <div className="values-box light" id="six" >
                            <h2>Fairness</h2>
                            <div className="icontext-div">
                            <p id="icontext">
                                We believe everyone should be treated equally, and given the same opportunities
                                to grow. 
                            </p>
                        </div>
                        </div>

                        <div className="values-box dark" id="seven" >
                            <h2>Fun</h2>
                            <div className="icontext-div">
                                <p id="icontext"> 
                                Having fun in your profession is extremely underrated in today's world. There's no 
                                way we can put this amount of passion and effort into something if we didnt love 
                                what we do.
                                </p>
                            </div>
                        </div>
                </div>  
            </main>
        </div>
    )
}


export default AboutMain;