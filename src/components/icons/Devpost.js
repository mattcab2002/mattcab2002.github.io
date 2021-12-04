import React from 'react';

const Devpost = (props) => {
    return (
        <a href={props.link}>
            <iframe
                src='http://nealrs.github.io/devpost-follow-button/icon/devpost.svg'
                frameBorder='0'
                scrolling='0'
                width='24px'
                height='24px'
            ></iframe>
        </a>
    );
};

export default Devpost;
