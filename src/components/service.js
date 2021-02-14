import React, { useState } from 'react';
import bigWave from "../assets/svgs/Big Wave.svg";


const TheService = (props) => {

    const { 
            service, theme, title, subtitle, 
            paragraph1, paragraph2, paragraph3, 
            paragraph4, images
          } = props.service;

    return (
        <div className="wrapper" >

            <div className="page-content" id="service-content">
                <img src={bigWave} id="service-wave"/>

                <header>
                    <div className="service-header" id="service-header-text">
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                    </div>

                    <div className="service-header" id="service-header-img">
                        <img src={images.header}  id={`header-img-${service}`}/>
                    </div>
                </header>

                <main id="service-main">

                    <section className="service-section" id="service-section-1">
                        <div className="paragraph" id="section-1-paragraph">
                            <h1><span className={theme}>{paragraph1.title[0]}</span> {paragraph1.title[1]}</h1>
                            <div className="medium-paragraph">
                                <p>{paragraph1.a}</p>
                            </div>
                        </div>
                        <div id="section-1-img">
                            <img src={images.secondary} id={`${service}-img`}/>
                        </div>
                    </section>

                    <section className="service-section" id="service-section-2">
                        <img src={images.logo} id="logo-img"/>
                        <div className="paragraph">
                            <h1>{paragraph2.title[0]}<span className={theme}> {paragraph2.title[1]}</span></h1>
                            <div className="long-paragraph">
                                {paragraph2.a}
                            </div>
                            <div className="long-paragraph">
                                {paragraph2.b}
                            </div>
                        </div>
                    </section>

                    {paragraph3 ? (
                        <div>
                            <section className="service-section" id="service-section-3">
                                <div className="paragraph">
                                    <h1>
                                        {paragraph3.title[0]}
                                        <span className={theme}> {paragraph3.title[1]} </span>
                                        {paragraph3.title[2]}
                                    </h1>
                                    <div className="small-paragraph">
                                        <p>{paragraph3.a}</p>
                                    </div>
                                </div>
                                <div className="paragraph-3-imgs">
                                    <img src={images.toola} />
                                    <img src={images.toolb} />
                                </div>
                                
                            </section>

                            <section className="service-section" id="service-section-4">
                                <div className="paragraph">
                                    <h1><span className={theme}>{paragraph4.title[0]} </span> {paragraph4.title[1]} </h1>
                                    <div className="long-paragraph">
                                        {paragraph4.a}
                                    </div>
                                    <div className="long-paragraph">
                                        {paragraph4.b}
                                    </div>
                                    <div className="long-paragraph">
                                        {paragraph4.c}
                                    </div>
                                </div>
                            </section>
                        </div>
                    ) : (
                        <div>

                        </div>
                    ) }



                </main> 

            </div>

        </div>
    )
}


export default TheService;
