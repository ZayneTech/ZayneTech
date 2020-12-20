import React, {useState, useContext} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Footer from './components/footer';
import About from "./components/about";
import { ScrollProvider } from "./components/globalscroll";
import './App.css';


function App() {

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">

      <Router>
        <ScrollProvider>
            <Route exact path='/'>
                <Navbar fill="#1985A1" mode={true} />
                <Homepage />
                <Footer />
            </Route>

            <Route path='/about'>
                <Navbar fill="#79C99E" mode={false} /> 
                <About />
            </Route>
        </ScrollProvider>        
      </Router>

    </div>
  );
}

export default App;
