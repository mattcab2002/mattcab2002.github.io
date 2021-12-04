import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LinkedinMed = (props) => {
    return (
        <a href={props.link} target='_blank'>
            <LinkedInIcon color='primary' fontSize='large' />
        </a>
    );
};

export default LinkedinMed;
