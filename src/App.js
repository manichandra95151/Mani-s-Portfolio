// app.js
import React from 'react';
import Navbar from './Components/Navbar';
import HeroSec from './Components/Herosection';
import MyProjects from './Components/Projects';
import Certificates from './Components/Certificates';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
// import CustomScroll from './Components/Elements/CustomScrollbar';
import './index.css';

function App() {
  return (
    // <CustomScroll>
      <div className='bg-customDark'>
        <div className="min-h-screen bg-customDark font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6">
          
          <Navbar />
          <section id="about">
            <HeroSec />
          </section>
          <section id="projects">
            <MyProjects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="certificates">
            <Certificates />
          </section>
          <section id="contact">
            <Contact />
          </section>
          
        </div>
      </div>
    // </CustomScroll>
  );
}

export default App;
