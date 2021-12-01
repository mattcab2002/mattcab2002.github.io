import React from 'react';

import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div
            style={{
                textAlign: 'center',
                color: 'white',
                fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
                fontWeight: '400',
                fontSize: '1rem',
            }}
        >
            <h3>
                Contact
                <span
                    style={{
                        color: 'transparent',
                        opacity: '1',
                        backgroundImage:
                            'linear-gradient(to right, #faa66a, #fd63a3)',
                        backgroundClip: 'text',
                        paddingBottom: '0px',
                    }}
                >
                    Me
                </span>
            </h3>
            <p>
                Feel free to fill out the form below to contact me about any
                questions you may have!
            </p>
            <ContactForm />
        </div>
    );
};

export default Contact;
