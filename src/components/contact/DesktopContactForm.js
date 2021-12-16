// Dependencies
import React from 'react';

// Components
import FormInput from './FormInput';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default class DesktopContactForm extends React.Component {
    render() {
        return (
            <div
                style={{
                    background: 'linear-gradient(to right, #faa66a, #fd63a3)',
                    width: '55vw',
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
                    <FormInput name='Your First Name' />
                    <FormInput name='Your Last Name' />
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
                        rows={4}
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
                        onClick={this.submitForm}
                    >
                        Send Message
                    </Button>
                </div>
            </div>
        );
    }
}
