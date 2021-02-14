import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from "./components/about";
import { ScrollProvider } from "./components/globalscroll";
import {whiteLogo, darkLogoBlue, darkLogoGreen } from "./assets/data/logoColor";
import {frontend, backend, design} from "./assets/data/servicesData";
import './App.css';
import ContactBox from './components/contact-box';
import ScrollToTop from './components/scrolltotop';
import Tree from './components/tree';
import HomepageWrapper from './components/homepage';
import ServicesWrapper from './components/services';
import TheService from './components/service';




function App() {

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">

      <Router basename="/">
        <ScrollToTop />
        <ScrollProvider>

          <Route exact path="/" >
              <Navbar 
                color={whiteLogo}
                colorTwo={darkLogoBlue}
                mode={true} 
                name = {true}
              />

              <HomepageWrapper />
              <Footer />
          </Route>

            <Route exact path="/services">
              <Navbar color={darkLogoBlue}
                    colorTwo={darkLogoBlue}
                    mode={false} 
                    name = {false}
                /> 
                <ServicesWrapper />
                <Footer />
            </Route>

            <Route path="/services/frontend">
              <Navbar color={darkLogoBlue}
                      colorTwo={darkLogoBlue}
                      mode={false} 
                      name={false}
                  /> 
               <TheService service={frontend}/>
              <ContactBox />
              <Footer />

            </Route>

            <Route path="/services/backend">
            <Navbar color={darkLogoGreen}
                    colorTwo={darkLogoGreen} 
                    mode={false} 
                    name={false}
                /> 

                <TheService service={backend}/>
                <ContactBox />
                <Footer />

            </Route>

            <Route path="/services/design">
            <Navbar color={darkLogoBlue}
                    colorTwo={darkLogoBlue} 
                    mode={false} 
                    name={false}
                /> 

                <TheService service={design}/>
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
