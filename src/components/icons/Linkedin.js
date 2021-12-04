import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Linkedin = (props) => {
    return (
        <a href={props.link} target='_blank'>
            <LinkedInIcon color='primary' />
        </a>
    );
};

export default Linkedin;
