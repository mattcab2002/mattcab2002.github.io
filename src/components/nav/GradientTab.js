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
                color: 'transparent',
                opacity: '1',
                backgroundImage: 'linear-gradient(to right, #faa66a, #fd63a3)',
                backgroundClip: 'text',
                paddingBottom: '0px',
            }}
        />
    );
};

export default GradientTab;
