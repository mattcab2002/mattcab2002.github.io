import React from 'react';

import WorkCircle from './WorkCircle';

const WorkElement = (props) => {
    return (
        <div style={{ display: 'flex' }}>
            <WorkCircle />
            <div
                style={{
                    color: 'white',
                    marginLeft: '30px',
                    width: '25vw',
                    minHeight: '74px',
                }}
            >
                <span>
                    {props.position} @ {props.company_name}{' '}
                    <span> {props.length} </span>
                </span>
                <small style={{ display: 'block', margintop: '8px' }}>
                    {props.description}
                </small>
            </div>
        </div>
    );
};

export default WorkElement;
