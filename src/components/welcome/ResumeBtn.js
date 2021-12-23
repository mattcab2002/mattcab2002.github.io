// Dependencies
import React from 'react';

// Components
import Button from '@mui/material/Button';

const ResumeBtn = () => {
    return (
        <a
            target='_blank'
            href='/Matthew_Cabrals_Resume.pdf'
            download='/Matthew_Cabrals_Resume.pdf'
            style={{ textDecoration: 'none', color: 'transparent' }}
        >
            <Button
                variant='outlined'
                style={{
                    color: 'white',
                    background: 'linear-gradient(to right, #faa66a, #fd63a3)',
                }}
            >
                Download my resume
            </Button>
        </a>
    );
};

export default ResumeBtn;
