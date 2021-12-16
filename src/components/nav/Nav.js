// Dependencies
import React, { Fragment } from 'react';

// Components
import Tabs from '@mui/material/Tabs';
import GradientTab from './GradientTab';
import Contactbtn from './Contactbtn';
import DrawerRight from './DrawerRight';

export default class Nav extends React.Component {
    isMobile = () => {
        return window.innerWidth < 768;
    };
    render() {
        return !this.isMobile() ? (
            <Tabs
                // value={}
                // onChange={}
                aria-label='Navigation'
                centered
                orientation={this.isMobile() && 'vertical'}
                style={{
                    position: 'fixed',
                    top: '0px',
                    width: '100vw',
                    background: '#040440',
                    zIndex: '100',
                }}
            >
                <GradientTab name='About Me' to='#about-me' />
                <GradientTab name='My Projects' to='#my-projects' />
                <GradientTab name='Work Experience' to='#work-experience' />
                {!this.isMobile() && <Contactbtn />}
            </Tabs>
        ) : (
            <DrawerRight />
        );
    }
}
