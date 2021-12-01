import React from 'react';
import Tabs from '@mui/material/Tabs';

import GradientTab from './GradientTab';
import ResumeBtn from './ResumeBtn';

const Nav = () => {
    return (
        <Tabs
            // value={}
            // onChange={}
            aria-label='Navigation'
            centered
            // orientation='vertical'
            style={{ margin: '10px' }}
        >
            <GradientTab name='My Projects' to='#my-projects' />
            <GradientTab name='Work Experience' to='#work-experience' />
            <GradientTab name='Contact Me' to='#contact-me' />
            <ResumeBtn />
        </Tabs>
    );
};

export default Nav;
