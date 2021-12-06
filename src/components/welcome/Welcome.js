import React from 'react';

import Resumebtn from './ResumeBtn';
import Symbols from './Symbols';

const Welcome = () => {
    return (
        <div
            id='about-me'
            style={{
                color: 'white',
                margin: '100px 0px',
                padding: '100px 0px',
                marginLeft: '12vw',
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
                student @ McGill University with professional{' '}
                <p>web development experience!</p>
            </p>
            <Resumebtn />
            <Symbols />
        </div>
    );
};

export default Welcome;
