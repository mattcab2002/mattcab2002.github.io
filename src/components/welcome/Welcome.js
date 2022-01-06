import React from 'react';

import Resumebtn from './ResumeBtn';
import Symbols from './Symbols';

export default class Welcome extends React.Component {
    isMobile = () => {
        return window.innerWidth < 768;
    };
    render() {
        return (
            <div
                id='about-me'
                style={{
                    color: 'white',
                    margin: !this.isMobile() ? '100px 0px' : '150px 0px',
                    padding: !this.isMobile() && '120px 0px',
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
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Matthew
                    </span>
                </h2>
                <p style={{ lineHeight: '1.5rem' }}>
                    A{' '}
                    <span
                        style={{
                            color: 'transparent',
                            opacity: '1',
                            backgroundImage:
                                'linear-gradient(to right, #faa66a, #fd63a3)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        software engineering
                    </span>{' '}
                    student @ McGill University with professional{' '}
                    {!this.isMobile() ? (
                        <p>web development experience!</p>
                    ) : (
                        'web development experience!'
                    )}
                </p>
                {!this.isMobile() && <Resumebtn />}
                <Symbols />
            </div>
        );
    }
}
