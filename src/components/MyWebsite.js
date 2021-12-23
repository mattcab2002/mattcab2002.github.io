// Dependencies
import React from 'react';

// Components
import Nav from './nav/Nav';
import Welcome from './welcome/Welcome';
import Projects from './projects/Projects';
import Tiles from './tiles/Tiles';
import Work from './work/Work';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

const MyWebsite = () => {
    return (
        <div>
            <Nav />
            <Welcome />
            <Projects />
            <Tiles />
            <Work />
            <Contact />
            <Footer />
        </div>
    );
};

export default MyWebsite;
