// Dependencies
import React from 'react';

// Components
import TextField from '@mui/material/TextField';

const FormInput = (props) => {
    return (
        <TextField
            id='filled-basic'
            label={props.name}
            variant='filled'
            InputProps={{ disableUnderline: true }}
            style={{
                flexGrow: '1',
                margin: '8px',
                borderRadius: '5px',
                background: 'white',
                background: 'rgba(255,255,255,0.8)',
            }}
        />
    );
};

export default FormInput;
