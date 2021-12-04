import React from 'react';

const Devpost = (props) => {
    return (
        <div style={{ position: 'relative', marginLeft: '4px' }}>
            <iframe
                src='http://nealrs.github.io/devpost-follow-button/icon/devpost.svg'
                frameBorder='0'
                scrolling='0'
                width='24px'
                height='24px'
            ></iframe>
            <a
                href={props.link}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    display: 'inline-block',
                    width: '24px',
                    height: '24px',
                    zIndex: '5',
                }}
            ></a>
        </div>
    );
};

export default Devpost;
