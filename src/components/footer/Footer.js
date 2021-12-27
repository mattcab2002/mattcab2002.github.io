import React from 'react';

const Footer = () => {
    return (
        <div
            style={{
                textAlign: 'center',
                color: 'white',
                padding: '50px',
                background: '#080444',
            }}
        >
            <span style={{ fontSize: '0.7rem' }}>
                Inspired by the following{' '}
                <a
                    href='https://dribbble.com/shots/16167163-Portfolio-Website-Design?utm_source=Clipboard_Shot&utm_campaign=mou_mouli&utm_content=Portfolio%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=mou_mouli&utm_content=Portfolio%20Website%20Design&utm_medium=Social_Share'
                    target='_blank'
                    style={{
                        textDecoration: 'none',
                        color: 'transparent',
                        opacity: '1',
                        backgroundImage:
                            'linear-gradient(to right, #faa66a, #fd63a3)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {' '}
                    UI Design
                </a>
            </span>
        </div>
    );
};

export default Footer;
