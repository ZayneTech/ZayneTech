import React, {useState, useContext} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Footer from './components/footer';
import About from "./components/about";
import ServicesPage from './components/servicespage';
import { ScrollProvider } from "./components/globalscroll";
import './App.css';
import Frontend from './components/frontend';
import ContactBox from './components/contact-box';
import Backend from './components/backend';
import Design from './components/design';

import {whiteLogo, darkLogoBlue, darkLogoGreen } from "./assets/data/logoColor";



function App() {

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">

      <Router>
        <ScrollProvider>
          
            <Route exact path='/'>
                <Navbar 
                    color={whiteLogo}
                    colorTwo={darkLogoBlue}
                    mode={true} 
                />
                <Homepage />
                <Footer />
            </Route>

            <Route exact path="/services">
              <Navbar color={darkLogoBlue}
                    colorTwo={darkLogoBlue}
                    mode={false} 
                /> 

                <ServicesPage />
                <Footer />
            </Route>

            <Route path="/services/frontend">
              <Navbar color={darkLogoBlue}
                      colorTwo={darkLogoBlue}
                      mode={false} 
                  /> 
              <Frontend />
              <ContactBox />
              <Footer />

            </Route>

            <Route path="/services/backend">
            <Navbar color={darkLogoGreen}
                    colorTwo={darkLogoGreen} 
                    mode={false} 
                /> 

                <Backend />
                <ContactBox />
                <Footer />

            </Route>

            <Route path="/services/design">
            <Navbar color={darkLogoBlue}
                    colorTwo={darkLogoBlue} 
                    mode={false} 
                /> 

                <Design />
                <ContactBox />
                <Footer />

            </Route>

            <Route path='/about'>
                <Navbar color={darkLogoGreen}
                    colorTwo={darkLogoGreen} 
                    mode={false} 
                /> 

                <About />
            </Route>

        </ScrollProvider>        
      </Router>

    </div>
  );
}

export default App;
