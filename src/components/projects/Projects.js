import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div
            style={{ background: '#080444', padding: '40px 0px' }}
            id='my-projects'
        >
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
                <span
                    style={{
                        color: 'transparent',
                        opacity: '1',
                        backgroundImage:
                            'linear-gradient(to right, #faa66a, #fd63a3)',
                        backgroundClip: 'text',
                    }}
                >
                    Projects
                </span>{' '}
                I'm Working On
            </h3>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '40px',
                }}
            >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
};

export default Projects;
