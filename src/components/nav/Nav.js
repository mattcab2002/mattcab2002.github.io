// Dependencies
import React from 'react';

// Components
import Tabs from '@mui/material/Tabs';
import GradientTab from './GradientTab';
import Contactbtn from './Contactbtn';

const Nav = () => {
    return (
        <Tabs
            // value={}
            // onChange={}
            aria-label='Navigation'
            centered
            // orientation='vertical'
            style={{
                position: 'fixed',
                top: '0px',
                width: '100%',
                background: '#040440',
                zIndex: '100',
                paddingBottom: '12px',
            }}
        >
            <GradientTab name='About Me' to='#about-me' />
            <GradientTab name='My Projects' to='#my-projects' />
            <GradientTab name='Work Experience' to='#work-experience' />
            <Contactbtn />
        </Tabs>
    );
};

export default Nav;
