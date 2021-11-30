import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

const Nav = () => {
    return (
        <Tabs
            // value={}
            // onChange={}
            aria-label='Navigation'
            centered
        >
            <Tab label='About Me' href='#about-me' style={{ color: 'white' }} />
            <Tab
                label='My Projects'
                href='#my-projects'
                style={{ color: 'white' }}
            />
            <Tab
                label='Work Experience'
                href='#work-experience'
                style={{ color: 'white' }}
            />
            <Button variant='outlined' style={{ color: 'white' }}>
                Download My Resume
            </Button>
        </Tabs>
    );
};

export default Nav;
