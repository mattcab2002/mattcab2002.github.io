// Dependencies
import React from 'react';

// Components
import FormInput from './FormInput';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const DesktopContactForm = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #faa66a, #fd63a3)',
                width: '50vw',
                margin: '0 auto',
                padding: '20px',
                borderBottomLeftRadius: '20px',
                borderTopRightRadius: '20px',
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
                    style={{
                        flexGrow: '1',
                        margin: '8px',
                        borderRadius: '5px',
                        background: 'white',
                        background: 'rgba(255,255,255,0.8)',
                    }}
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
                    variant='filled'
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

export default DesktopContactForm;
