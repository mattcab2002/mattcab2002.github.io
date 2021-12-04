import React from 'react';

import WorkIcon from '@mui/icons-material/Work';

const workCircle = () => {
    return (
        <div
            style={{
                background: 'white',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                position: 'relative',
            }}
        >
            <WorkIcon
                style={{
                    width: '30px',
                    height: '30px',
                    position: 'absolute',
                    left: '10px',
                    top: '10px',
                    color: '#e16956',
                }}
            />
        </div>
    );
};

export default workCircle;
