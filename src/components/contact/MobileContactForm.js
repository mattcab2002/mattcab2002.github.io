// Dependencies
import React from 'react';

// Components
import FormInput from './FormInput';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const MobileContactForm = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #faa66a, #fd63a3)',
                width: '80vw',
                margin: '0 auto',
                padding: '20px',
                borderRadius: '8px',
            }}
        >
            <div>
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <FormInput name='Your Name' />
                </div>
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <FormInput name='Your Phone Number' />
                </div>
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
                    rows={6}
                    style={{ flexGrow: '1', margin: '8px' }}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '14px 0px',
                }}
            >
                <Button
                    variant='outlined'
                    style={{
                        color: 'black',
                        background: 'white',
                        width: '40%',
                        padding: '0px',
                    }}
                >
                    Send Message
                </Button>
            </div>
        </div>
    );
};

export default MobileContactForm;
