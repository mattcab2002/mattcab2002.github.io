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
                {props.position} @ {props.company_name}{' '}
                <small style={{ display: 'block' }}> {props.length} </small>
                <small style={{ display: 'block', margin: '10px 0px' }}>
                    {props.description}
                </small>
            </div>
        </div>
    );
};

export default WorkElement;
