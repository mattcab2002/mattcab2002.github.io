import React from 'react';

import Resumebtn from './ResumeBtn';

const Welcome = () => {
    return (
        <div
            id='about-me'
            style={{
                color: 'white',
                margin: '100px 0px',
                padding: '100px 0px',
                marginLeft: '15vw',
            }}
        >
            <h2>
                Hi, I'm{' '}
                <span
                    style={{
                        color: 'transparent',
                        opacity: '1',
                        backgroundImage:
                            'linear-gradient(to right, #faa66a, #fd63a3)',
                        backgroundClip: 'text',
                    }}
                >
                    Matthew
                </span>
            </h2>
            <p>
                A{' '}
                <span
                    style={{
                        color: 'transparent',
                        opacity: '1',
                        backgroundImage:
                            'linear-gradient(to right, #faa66a, #fd63a3)',
                        backgroundClip: 'text',
                    }}
                >
                    software engineering
                </span>{' '}
                student @ Mcgill University with some knowledge in web
                development!
            </p>
            <Resumebtn />
        </div>
    );
};

export default Welcome;
