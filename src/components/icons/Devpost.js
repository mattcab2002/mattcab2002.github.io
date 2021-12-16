import React from 'react';

const Devpost = (props) => {
    return (
        <a target='_blank' href={props.link}>
            <img
                src='http://nealrs.github.io/devpost-follow-button/icon/devpost.svg'
                height='30px'
                width='30px'
            />
        </a>
    );
};

export default Devpost;
