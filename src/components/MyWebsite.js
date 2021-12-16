// Dependencies
import React from 'react';

// Components
import Nav from './nav/Nav';
import Welcome from './Welcome/Welcome.js';
import Projects from './projects/Projects.js';
import Work from './work/Work.js';
import Contact from './contact/Contact.js';

const MyWebsite = () => {
    return (
        <div>
            <Nav />
            <Welcome />
            <Projects />
            <Work />
            <Contact />
        </div>
    );
};

export default MyWebsite;
