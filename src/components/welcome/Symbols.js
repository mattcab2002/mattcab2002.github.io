import React from 'react';

import LinkedinMed from '../icons/LinkedinMed';
import GithubMed from '../icons/GithubMed';
import DevpostMed from '../icons/DevpostMed';

const Symbols = () => {
    return (
        <div
            style={{
                height: '45vh',
                width: '90vw',
                position: 'absolute',
                top: '10vh',
                right: '-70vw',
                transform: 'skew(340deg)',
                borderBottomLeftRadius: '40px',
                borderTopLeftRadius: '40px',
                background: 'linear-gradient(to bottom left, #faa66a, #fd63a3)',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    right: '-110px',
                    top: '35px',
                }}
            >
                <LinkedinMed link='https://www.linkedin.com/in/matthew-a-cabral/' />
            </div>
            <div
                style={{
                    position: 'relative',
                    right: '-220px',
                    top: '120px',
                }}
            >
                <GithubMed link='https://github.com/mattcab2002' />
            </div>
            <div
                style={{
                    position: 'relative',
                    right: '-120px',
                    top: '180px',
                }}
            >
                <DevpostMed link='https://devpost.com/mattcab2002?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav' />
            </div>
        </div>
    );
};

export default Symbols;
