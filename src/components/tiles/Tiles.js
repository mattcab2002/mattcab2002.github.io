import React from 'react';

import HexagonIcon from '@mui/icons-material/Hexagon';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default class Tiles extends React.Component {
    constructor(props) {
        super(props);
        this.handleRotateBackward = this.handleRotateBackward.bind(this);
        this.handleRotateForward = this.handleRotateForward.bind(this);
        this.state = {
            count: 0,
            hover: false,
            skills: [
                {
                    url: 'python-logo.png',
                    alt: 'Python Logo',
                    width: '5rem',
                    height: '5rem',
                },
                {
                    url: 'java-logo.png',
                    alt: 'Java Logo',
                    width: '5rem',
                    height: '5rem',
                },
                {
                    url: 'html-logo.png',
                    alt: 'HTML Logo',
                    width: '5rem',
                    height: '5rem',
                },
                {
                    url: 'css-logo.png',
                    alt: 'CSS Logo',
                    width: '4rem',
                    height: '5rem',
                },
                {
                    url: 'javascript-logo.png',
                    alt: 'Javascript Logo',
                    width: '4rem',
                    height: '4rem',
                },
                {
                    url: 'react-logo.png',
                    alt: 'React Logo',
                    width: '5rem',
                    height: '4.5rem',
                },
                {
                    url: 'c-logo.png',
                    alt: 'C Programming Lang. Logo',
                    width: '5rem',
                    height: '5rem',
                },
                {
                    url: 'selenium-logo.png',
                    alt: 'Selenium Logo',
                    width: '4rem',
                    height: '4rem',
                },
                {
                    url: 'google-firebase-logo.png',
                    alt: 'Google Firebase Logo',
                    width: '4rem',
                    height: '5.5rem',
                },
            ],
        };
    }
    is1400 = () => {
        return window.innerWidth < 1400;
    };
    handleRotateForward() {
        this.setState((prevState) => {
            if (prevState.count == 8) {
                return {
                    count: 0,
                };
            } else {
                return {
                    count: prevState.count + 1,
                };
            }
        });
    }
    handleRotateBackward() {
        this.setState((prevState) => {
            if (prevState.count == 0) {
                return {
                    count: 8,
                };
            } else {
                return {
                    count: prevState.count - 1,
                };
            }
        });
    }
    render() {
        return !this.is1400() ? (
            <div id='my-skills' style={{ paddingTop: '60px' }}>
                <h3
                    style={{
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    My{' '}
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
                        Skills
                    </span>
                </h3>
                <div style={{ marginTop: '80px' }}>
                    <div
                        style={{
                            width: '1400px',
                            margin: 'auto',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div style={{ position: 'relative' }}>
                            <img
                                src='python-logo.png'
                                alt='Python Logo'
                                title='Python Logo'
                                style={{
                                    width: '5rem',
                                    height: '5rem',
                                    position: 'absolute',
                                    top: '2rem',
                                    left: '2rem',
                                }}
                            />
                            <HexagonIcon
                                sx={{
                                    fontSize: '9rem',
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
                                style={{
                                    positiom: 'relative',
                                    zIndex: '10',
                                    right: '-40px',
                                    color: '#fc8189',
                                }}
                            />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img
                                src='java-logo.png'
                                alt='Java Logo'
                                title='Java Logo'
                                style={{
                                    width: '5rem',
                                    height: '5rem',
                                    position: 'absolute',
                                    top: '2rem',
                                    left: '2rem',
                                }}
                            />
                            <HexagonIcon
                                sx={{
                                    fontSize: '9rem',
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
                                style={{
                                    positiom: 'relative',
                                    zIndex: '10',
                                    right: '-40px',
                                    color: '#fc8189',
                                }}
                            />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img
                                src='html-logo.png'
                                alt='HTML Logo'
                                title='HTML Logo'
                                style={{
                                    width: '5rem',
                                    height: '5rem',
                                    position: 'absolute',
                                    top: '2rem',
                                    left: '2rem',
                                }}
                            />
                            <HexagonIcon
                                sx={{
                                    fontSize: '9rem',
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
                                style={{
                                    positiom: 'relative',
                                    zIndex: '10',
                                    right: '-40px',
                                    color: '#fc8189',
                                }}
                            />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img
                                src='css-logo.png'
                                alt='CSS Logo'
                                title='CSS Logo'
                                style={{
                                    width: '4rem',
                                    height: '5rem',
                                    position: 'absolute',
                                    top: '2rem',
                                    left: '2.5rem',
                                }}
                            />
                            <HexagonIcon
                                sx={{
                                    fontSize: '9rem',
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
                                style={{
                                    positiom: 'relative',
                                    zIndex: '10',
                                    right: '-40px',
                                    color: '#fc8189',
                                }}
                            />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img
                                src='javascript-logo.png'
                                alt='Javascript Logo'
                                title='Javascript Logo'
                                style={{
                                    width: '4rem',
                                    height: '4rem',
                                    position: 'absolute',
                                    top: '2.5rem',
                                    left: '2.5rem',
                                }}
                            />
                            <HexagonIcon
                                sx={{
                                    fontSize: '9rem',
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
                                style={{
                                    positiom: 'relative',
                                    zIndex: '10',
                                    right: '-40px',
                                    color: '#fc8189',
                                }}
                            />
                        </div>
                    </div>

                    <div
                        style={{
                            width: '1110px',
                            margin: 'auto',
                            display: 'flex',
                            justifyContent: 'space-between',
                            position: 'relative',
                            top: '-110px',
                        }}
                    >
                        <div style={{ position: 'relative' }}>
                            <img
                                src='react-logo.png'
                                alt='React Logo'
                                title='React Logo'
                                style={{
                                    width: '5rem',
                                    height: '4.5rem',
                                    position: 'absolute',
                                    top: '2.25rem',
                                    left: '2rem',
                                }}
                            />
                            <HexagonIcon
                                sx={{
                                    fontSize: '9rem',
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
                                style={{
                                    positiom: 'relative',
                                    zIndex: '10',
                                    right: '-40px',
                                    color: '#fc8189',
                                }}
                            />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img
                                src='c-logo.png'
                                alt='C Programming Lang. Logo'
                                title='C Programming Lang. Logo'
                                style={{
                                    width: '5rem',
                                    height: '5rem',
                                    position: 'absolute',
                                    top: '2rem',
                                    left: '2rem',
                                }}
                            />
                            <HexagonIcon
                                sx={{
                                    fontSize: '9rem',
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
                                style={{
                                    positiom: 'relative',
                                    zIndex: '10',
                                    right: '-40px',
                                    color: '#fc8189',
                                }}
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <img
                                src='selenium-logo.png'
                                alt='Selenium Logo'
                                title='Selenium Logo'
                                style={{
                                    width: '4rem',
                                    height: '4rem',
                                    position: 'absolute',
                                    top: '2.5rem',
                                    left: '2.5rem',
                                }}
                            />
                            <HexagonIcon
                                sx={{
                                    fontSize: '9rem',
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
                                style={{
                                    positiom: 'relative',
                                    zIndex: '10',
                                    right: '-40px',
                                    color: '#fc8189',
                                }}
                            />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img
                                src='google-firebase-logo.png'
                                alt='Google Firebase Logo'
                                title='Google Firebase Logo'
                                style={{
                                    width: '4rem',
                                    height: '5.5rem',
                                    position: 'absolute',
                                    top: '1.75rem',
                                    left: '2.5rem',
                                }}
                            />
                            <HexagonIcon
                                sx={{
                                    fontSize: '9rem',
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
                                style={{
                                    positiom: 'relative',
                                    zIndex: '10',
                                    right: '-40px',
                                    color: '#fc8189',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div
                id='my-skills'
                style={{ paddingTop: '100px', paddingBottom: '140px' }}
            >
                <h3
                    style={{
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    My{' '}
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
                        Skills
                    </span>
                </h3>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '40px',
                        fontSize: '0.6rem',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '40px',
                            fontSize: '0.6rem',
                        }}
                    >
                        <ArrowBackIosIcon
                            style={{
                                color: 'white',
                                position: 'absolute',
                                left: '2vw',
                                cursor: 'pointer',
                            }}
                            className='arrowToggle'
                            onClick={this.handleRotateBackward}
                        />
                        <img
                            src={this.state.skills[this.state.count].url}
                            alt={this.state.skills[this.state.count].alt}
                            title={this.state.skills[this.state.count].alt}
                            style={{
                                width: this.state.skills[this.state.count]
                                    .width,
                                height: this.state.skills[this.state.count]
                                    .height,
                                position: 'absolute',
                                zIndex: '100',
                            }}
                        />
                        <HexagonIcon
                            key={this.state.count}
                            sx={{
                                fontSize: '9rem',
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
                            style={{
                                positiom: 'relative',
                                zIndex: '10',
                                color: '#fc8189',
                            }}
                        />
                        <ArrowForwardIosIcon
                            className='arrowToggle'
                            style={{
                                color: 'white',
                                position: 'absolute',
                                right: '2vw',
                                cursor: 'pointer',
                            }}
                            onClick={this.handleRotateForward}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
