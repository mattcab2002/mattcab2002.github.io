import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const GithubMed = (props) => {
    return (
        <a target='_blank' href={props.link}>
            <GitHubIcon fontSize='large' />
        </a>
    );
};

export default GithubMed;
