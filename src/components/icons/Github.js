import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const Github = (props) => {
    return (
        <a target='_blank' href={props.link}>
            <GitHubIcon />
        </a>
    );
};

export default Github;
