import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import FormInput from './FormInput';

const ContactForm = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #faa66a, #fd63a3)',
                width: '50vw',
                margin: '0 auto',
            }}
        >
            <div
                style={{
                    display: 'flex',
                }}
            >
                <FormInput name='Your Name' />
                <FormInput name='Your Phone Number' />
            </div>
            <div style={{ display: 'flex' }}>
                <FormInput name='Your Email' />
            </div>
            <div style={{ display: 'flex' }}>
                <TextField
                    id='outlined-basic'
                    label='Your Message'
                    variant='outlined'
                    multiline
                    rows={8}
                    style={{ flexGrow: '1', margin: '8px' }}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: '14px',
                }}
            >
                <Button
                    variant='outlined'
                    style={{
                        color: 'black',
                        background: 'white',
                        width: '40%',
                    }}
                >
                    Send Message
                </Button>
            </div>
        </div>
    );
};

export default ContactForm;
