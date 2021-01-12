import React, {useEffect}from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Footer from './components/footer';
import About from "./components/about";
import ServicesPage from './components/servicespage';
import { ScrollProvider } from "./components/globalscroll";
import {whiteLogo, darkLogoBlue, darkLogoGreen } from "./assets/data/logoColor";
import './App.css';
import Frontend from './components/frontend';
import ContactBox from './components/contact-box';
import Backend from './components/backend';
import Design from './components/design';
import InfoBox from './components/servicesinfobox';
import ValuesSection from './components/corevalues';
import Services from './components/services';
import HomeProjectSection from './components/projects';
import ScrollToTop from './components/scrolltotop';
import Tree from './components/tree';
import HomepageWrapper from './components/homepage2';
import HomepageAbout from './components/homepageabout';
import Homepage2 from './pages/homepage';



function App() {

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">

      <Router >
        <ScrollToTop />
        <ScrollProvider>

          <Route exact path="/zaynetech">
              <Navbar 
                color={whiteLogo}
                colorTwo={darkLogoBlue}
                mode={true} 
                name = {true}
              />

              <HomepageWrapper />
              <Footer />
          </Route>
          
            <Route exact path='/' className="main">
                <Navbar 
                    color={whiteLogo}
                    colorTwo={darkLogoBlue}
                    mode={true} 
                    name = {true}
                />
                <Homepage />
                <main className="wrapper">
                      <InfoBox />
                      <ValuesSection bool={true} />
                      <Services />
                      <HomeProjectSection />
                </main>
                 <Footer />
            </Route>

            <Route exact path="/services">
              <Navbar color={darkLogoBlue}
                    colorTwo={darkLogoBlue}
                    mode={false} 
                    name = {false}
                /> 

                <ServicesPage />
                <Footer />
            </Route>

            <Route path="/services/frontend">
              <Navbar color={darkLogoBlue}
                      colorTwo={darkLogoBlue}
                      mode={false} 
                      name={false}
                  /> 
              <Frontend />
              <ContactBox />
              <Footer />

            </Route>

            <Route path="/services/backend">
            <Navbar color={darkLogoGreen}
                    colorTwo={darkLogoGreen} 
                    mode={false} 
                    name={false}
                /> 

                <Backend />
                <ContactBox />
                <Footer />

            </Route>

            <Route path="/services/design">
            <Navbar color={darkLogoBlue}
                    colorTwo={darkLogoBlue} 
                    mode={false} 
                    name={false}
                /> 

                <Design />
                <ContactBox />
                <Footer />

            </Route>

            <Route path='/about'>
                <Navbar color={darkLogoGreen}
                    colorTwo={darkLogoGreen} 
                    mode={false} 
                    name={false}
                /> 

                <About />
            </Route>

            <Route path="/tree">
                <Tree />
            </Route>

        </ScrollProvider>        
      </Router>

    </div>
  );
}

export default App;
