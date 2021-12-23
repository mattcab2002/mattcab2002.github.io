// Dependencies
import React from 'react';

// Components
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div
            style={{
                textAlign: 'center',
                color: 'white',
                background: '#040440',
                padding: '60px 0px',
            }}
            id='contact-me'
        >
            <h3>
                Contact{' '}
                <span
                    style={{
                        color: 'transparent',
                        opacity: '1',
                        backgroundImage:
                            'linear-gradient(to right, #faa66a, #fd63a3)',
                        backgroundClip: 'text',
                        paddingBottom: '0px',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Me
                </span>
            </h3>
            <p
                style={{
                    fontSize: '0.8rem',
                    marginLeft: '10px',
                    marginRight: '10px',
                }}
            >
                Feel free to fill out the form below to contact me about any
                questions you may have!
            </p>
            <ContactForm />
        </div>
    );
};

export default Contact;
