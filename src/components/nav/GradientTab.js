// Dependencies
import React from 'react';

const GradientTab = (props) => {
    return (
        <a
            href={props.to}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px',
                minHeight: '48px',
                minWidth: '90px',
                padding: '12px 16px',
                position: 'relative',
                textAlign: 'center',
                textTransform: 'uppercase',
                verticalAlign: 'middle',
                textDecoration: 'none',
            }}
        >
            <span
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
            >
                {props.name}
            </span>
        </a>
    );
};

export default GradientTab;
