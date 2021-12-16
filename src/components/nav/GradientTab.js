// Dependencies
import React from 'react';
// Components
import Tab from '@mui/material/Tab';

const GradientTab = (props) => {
    return (
        <Tab
            label={props.name}
            href={props.to}
            style={{
                color: 'white',
                color: 'transparent',
                opacity: '1',
                fontSize: '0.7rem',
                marginTop: '10px',
                background: '#FAA66A',
                background:
                    '-webkit-linear-gradient(to right, #FAA66A 0%, #fd63a3 100%)',
                background:
                    '-moz-linear-gradient(to right, #FAA66A 0%, #fd63a3 100%)',
                background:
                    'linear-gradient(to right, #FAA66A 0%, #fd63a3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}
        />
    );
};

export default GradientTab;
