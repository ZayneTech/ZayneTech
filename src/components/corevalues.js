import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Icon from './icon';
import littletree from '../assets/svgs/Little Tree.svg';
import bigtree from '../assets/svgs/Big Tree.svg';
import wave from '../assets/svgs/Wave 2.svg'
import greenarrow from '../assets/svgs/green arrow.svg';
import {darkLogoGreen} from '../assets/data/logoColor';
import Tree from './tree';



const ValuesSection = () => {

    
        return (
            <div className="wrapper">
            <section className="page-content" id="core-values-section">
                <h1>Our core values</h1> <br />
                <h2>enable quality websites</h2>

                
                    <Link to="/about" id="core-values-about-text">
                        <h3>About Us</h3> 
                        <img src={greenarrow} />
                    </Link>
                

                <Icon  
                    base={darkLogoGreen.base}
                    primary={darkLogoGreen.primary}
                />

                <img src={wave} id="core-values-wave"/> 
               
            </section>

<div id="tree-div">
{/*}  <div id="little-tree">
  <Tree />
  </div>*/}
  <img src={littletree} id="little-tree"/>
  <img src={bigtree} id="big-tree"/>
</div>

</div>
           
           
        )
}


export default ValuesSection;