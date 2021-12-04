import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const GithubMed = (props) => {
    return (
        <a target='_blank' href={props.link}>
            <GitHubIcon sx={{ fontSize: '80px' }} />
        </a>
    );
};

export default GithubMed;
