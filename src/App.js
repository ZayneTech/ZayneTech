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



function App() {

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">

      <Router>
        <ScrollProvider>
          
            <Route exact path='/'>
                <Navbar fill1='#495464'
                    fill2= '#495464'
                    fill3='#495464'
                    fill4="#1985A1" 
                    fill5='#495464' 
                    fill6='#495464' 
                    fill7='#495464'
                    mode={true} 
                />
                <Homepage />
                <Footer />
            </Route>

            <Route exact path="/services">
              <Navbar fill1='#495464'
                    fill2= '#495464'
                    fill3='#495464'
                    fill4="#1985A1"  
                    fill5='#495464' 
                    fill6='#495464' 
                    fill7='#495464' 
                    mode={false} 
                /> 

                <ServicesPage />
                <Footer />
            </Route>

            <Route path="/services/frontend">
              <Navbar fill1='#495464'
                      fill2='#495464'
                      fill3='#495464'
                      fill4="#1985A1" 
                      fill5='#495464' 
                      fill6='#495464' 
                      fill7='#495464' 
                      mode={false} 
                  /> 
              <Frontend />
              <ContactBox />
              <Footer />

            </Route>

            <Route path="/services/backend">
            <Navbar fill1='#495464'
                    fill2= '#495464'
                    fill3='#495464'
                    fill4="#79C99E" 
                    fill5='#495464' 
                    fill6='#495464' 
                    fill7='#495464' 
                    mode={false} 
                /> 

                <Backend />
                <ContactBox />
                <Footer />

            </Route>

            <Route path="/services/design">
            <Navbar fill1='#495464'
                    fill2= '#495464'
                    fill3='#495464'
                    fill4="#1985A1"
                    fill5='#495464' 
                    fill6='#495464' 
                    fill7='#495464' 
                    mode={false} 
                /> 

                <Design />
                <ContactBox />
                <Footer />

            </Route>

            <Route path='/about'>
                <Navbar fill1='#495464'
                    fill2= '#495464'
                    fill3='#495464'
                    fill4="#79C99E" 
                    fill5='#495464' 
                    fill6='#495464' 
                    fill7='#495464' 
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
