import React from 'react';

import WorkCircle from './WorkCircle';

const WorkElement = (props) => {
    return (
        <div style={{ display: 'flex' }}>
            <WorkCircle />
            <div style={{ color: 'white', marginLeft: '14px' }}>
                <span>
                    {props.position} @ {props.workplace}
                </span>
                <small style={{ display: 'block' }}> ({props.date})</small>
                <p style={{ marginTop: '0px' }}>{props.description}</p>
            </div>
        </div>
    );
};

export default WorkElement;
