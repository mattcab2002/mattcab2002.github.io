import React from 'react';

import Connector from './Connector';
import WorkElement from './WorkElement';

const Work = () => {
    return (
        <div id='work-experience'>
            <h3
                style={{
                    textAlign: 'center',
                    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
                    fontWeight: '700',
                    fontSize: '19px',
                    textAlign: 'center',
                    color: 'white',
                }}
            >
                Relevant{' '}
                <span
                    style={{
                        color: 'transparent',
                        opacity: '1',
                        backgroundImage:
                            'linear-gradient(to right, #faa66a, #fd63a3)',
                        backgroundClip: 'text',
                    }}
                >
                    Work Experience
                </span>
            </h3>
            <div style={{ marginLeft: '20vw' }}>
                <WorkElement
                    position='Web Developer'
                    description='Loved it'
                    workplace='Loans Canada'
                    date='Jan - Now'
                />
                <Connector />
                <WorkElement
                    position='Web Developer'
                    description='Loved it'
                    workplace='Loans Canada'
                    date='Jan - Now'
                />
                <Connector />
                <WorkElement
                    position='Web Developer'
                    description='Loved it'
                    workplace='Loans Canada'
                    date='Jan - Now'
                />
            </div>
        </div>
    );
};

export default Work;
