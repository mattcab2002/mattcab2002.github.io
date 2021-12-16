import React from 'react';

import WorkCircle from './WorkCircle';

const WorkElement = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                margin: '30px 0px',
                lineHeight: '1.05rem',
            }}
        >
            <WorkCircle />
            <div
                style={{
                    color: 'white',
                    marginLeft: '30px',
                    width: props.size,
                    minHeight: '74px',
                }}
            >
                {props.position} @ {props.company_name}{' '}
                <small style={{ display: 'block', lineHeight: '1rem' }}>
                    {' '}
                    {props.length}{' '}
                </small>
                <small style={{ display: 'block', margin: '10px 0px' }}>
                    {props.description}
                </small>
            </div>
        </div>
    );
};

export default WorkElement;
