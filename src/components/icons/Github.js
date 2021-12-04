import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const Github = (props) => {
    return (
        <a href={props.link}>
            <GitHubIcon />
        </a>
    );
};

export default Github;
