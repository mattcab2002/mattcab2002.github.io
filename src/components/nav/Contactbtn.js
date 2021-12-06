// Dependencies
import React from 'react';

// Components
import Button from '@mui/material/Button';

export default class ResumeBtn extends React.Component {
    isLaptop = () => {
        return window.innerWidth > 1280;
    };
    render() {
        return (
            <a href='#contact-me'>
                <Button
                    variant='outlined'
                    style={{
                        color: 'white',
                        position: 'absolute',
                        right: this.isLaptop() ? '15vw' : '10vw',
                        background:
                            'linear-gradient(to right, #faa66a, #fd63a3)',
                        marginTop: '10px',
                        fontSize: '0.7rem',
                    }}
                >
                    Contact Me
                </Button>
            </a>
        );
    }
}
