import React from 'react';

const DevpostMed = (props) => {
    return (
        <a target='_blank' href={props.link}>
            <img
                src='http://nealrs.github.io/devpost-follow-button/icon/devpost.svg'
                height='80px'
                width='80px'
            />
        </a>
    );
};

export default DevpostMed;
