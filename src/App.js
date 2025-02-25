import React from 'react';

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import './css/App.css';


function App() {
    return(
        <div>
            <Header />
            <About />
            <Projects />
            <Experiences />
            <Contact/>
        </div>
    );
}

export default App;