// Dependencies
import React from 'react';

// Components
import TextField from '@mui/material/TextField';

const FormInput = (props) => {
    return (
        <TextField
            id='outlined-basic'
            label={props.name}
            variant='outlined'
            style={{ flexGrow: '1', margin: '8px' }}
        />
    );
};

export default FormInput;
