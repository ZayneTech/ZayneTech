import React, {useState} from 'react';
import Icon from './icon';
import littletree from '../assets/svgs/Little Tree.svg';
import bigtree from '../assets/svgs/Big Tree.svg';
import wave from '../assets/svgs/Wave 2.svg'
import greenarrow from '../assets/svgs/green arrow.svg';



const ValuesSection = () => {

        return (
            <section id="core-values-section">
                <h1>Our core values</h1> <br />
                <h2>enable quality Websites</h2>

                <div id="core-values-about-text">
                    <h3>About Us</h3> 
                    <img src={greenarrow} />
                </div>

                <Icon  
                    fill1='#495464'
                    fill2= '#495464'
                    fill3='#495464'
                    fill4="#79C99E" 
                    fill5='#495464' 
                    fill6='#495464' 
                    fill7='#495464'
                />

                <img src={wave} id="core-values-wave"/> 

                
                <div id="tree-div">
                    <img src={littletree} id="little-tree"/>
                    <img src={bigtree} id="big-tree"/>
                </div>
                
            </section>
        )
}


export default ValuesSection;