// Dependencies
import React from 'react';

// Components
import Button from '@mui/material/Button';

const ResumeBtn = () => {
    return (
        <Button
            variant='outlined'
            style={{
                color: 'white',
                background: 'linear-gradient(to right, #faa66a, #fd63a3)',
            }}
        >
            Download my resume
        </Button>
    );
};

export default ResumeBtn;
