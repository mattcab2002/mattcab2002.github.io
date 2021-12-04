import React from 'react';
import ProjectCard from './ProjectCard';

export default class Projects extends React.Component {
    state = {
        projects: [
            {
                title: 'LIA : An Interactive Memory Aid Assistant',
                imageURL:
                    'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/727/891/datas/medium.jpg',
                description:
                    'Using artificial intelligence and a chat service Lia serves as an interactive memory aid for those who are suffering memory loss. ',
                devpost: 'https://devpost.com/software/lia',
                github: 'https://github.com/mattcab2002/Liassistant',
            },
            {
                title: 'Arbitrage XML Text Messaging Service',
                imageURL:
                    'https://user-images.githubusercontent.com/64427472/135642815-3b00ef18-6d99-416d-bdb2-9a616f8df943.PNG',
                description:
                    'Through the use of Python and XML data API, this project compares the odds of the same sporting event across different sportsbooks in order to find a sure bet, once found it is communicated through form of a text message API to subscribers.',
                github: 'https://github.com/mattcab2002/arbitrage-repo',
            },
            {
                title: 'McGill Formula Electric',
                imageURL:
                    'https://www.mcgill.ca/engineering/files/engineering/styles/hd/public/formula_electric_0.png?itok=ghH_1nlT&timestamp=1627928294',
                description:
                    'Currently working on the Software team of MFE in order to prepare for this years race!',
            },
        ],
    };
    render() {
        return (
            <div
                style={{ background: '#080444', padding: '40px 0px' }}
                id='my-projects'
            >
                <h3
                    style={{
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    My{' '}
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
                    </span>
                </h3>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '40px',
                        fontSize: '0.6rem',
                    }}
                >
                    {this.state.projects.map((project) => (
                        <ProjectCard
                            key={this.state.projects.indexOf(project)}
                            title={project.title}
                            imageURL={project.imageURL}
                            description={project.description}
                            github={project.github ? project.github : false}
                            devpost={project.devpost ? project.devpost : false}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
