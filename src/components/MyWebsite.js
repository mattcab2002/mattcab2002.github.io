// Dependencies
import React from 'react';

// Components
import Nav from './nav/Nav';
import Projects from './projects/Projects';
import Work from './work/Work';
import Contact from './contact/Contact';

const MyWebsite = () => {
    return (
        <div>
            <Nav />
            <Projects />
            <Work />
            <Contact />
        </div>
    );
};

export default MyWebsite;
