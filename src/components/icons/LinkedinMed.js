import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LinkedinMed = (props) => {
    return (
        <a href={props.link} target='_blank'>
            <LinkedInIcon color='primary' sx={{ fontSize: '80px' }} />
        </a>
    );
};

export default LinkedinMed;
