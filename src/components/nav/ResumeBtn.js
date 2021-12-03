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
                position: 'absolute',
                right: '0px',
                background: 'linear-gradient(to right, #faa66a, #fd63a3)',
                marginTop: '10px',
            }}
        >
            Resume
        </Button>
    );
};

export default ResumeBtn;
