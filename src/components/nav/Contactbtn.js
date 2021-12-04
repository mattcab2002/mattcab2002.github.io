// Dependencies
import React from 'react';

// Components
import Button from '@mui/material/Button';

const ResumeBtn = () => {
    return (
        <a href='#contact-me'>
            <Button
                variant='outlined'
                style={{
                    color: 'white',
                    position: 'absolute',
                    right: '15vw',
                    background: 'linear-gradient(to right, #faa66a, #fd63a3)',
                    marginTop: '10px',
                    fontSize: '0.7rem',
                }}
            >
                Contact Me
            </Button>
        </a>
    );
};

export default ResumeBtn;
