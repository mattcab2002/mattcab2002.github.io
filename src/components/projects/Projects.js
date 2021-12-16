import React from 'react';
import ProjectCard from './ProjectCard';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.handleRotateBackward = this.handleRotateBackward.bind(this);
        this.handleRotateForward = this.handleRotateForward.bind(this);
        this.state = {
            count: 0,
            hover: false,
            projects: [
                {
                    title: 'Arbitrage Java Selenium Project',
                    imageURL: '/java-arb-project.png',
                    description:
                        'Through the use of Twitters API and Selenium Web Scraping this project listens for new information regarding injured players via tweets and checks if popular sportsbooks have adjusted their odds accordingly. I am currently working on this project.',
                },
                {
                    title: 'LIA : An Interactive Memory Aid Assistant',
                    imageURL: '/lia-devpost-project.png',
                    description:
                        'As a part of NewHacks 2021, in under 24 hours, our goal was to use artificial intelligence with python and a chat service through form of a web application to create an interactive memory aid for those who are suffering from memory loss.',
                    devpost: 'https://devpost.com/software/lia',
                    github: 'https://github.com/mattcab2002/Liassistant',
                },
                {
                    title: 'Arbitrage XML Text Messaging Service',
                    imageURL: '/python-xml-arb-project.png',
                    description:
                        "Through the use of Python and XML data provider, this project compares the odds of the same sporting event across different sportsbooks in order to find a sure bet. Once found it is communicated through Twilio's text message API to subscribers.",
                    github: 'https://github.com/mattcab2002/arbitrage-repo',
                },
            ],
        };
    }
    isMobile = () => {
        return window.innerWidth < 768;
    };
    handleRotateForward() {
        this.setState((prevState) => {
            if (prevState.count == 2) {
                return {
                    count: 0,
                };
            } else {
                return {
                    count: prevState.count + 1,
                };
            }
        });
    }
    handleRotateBackward() {
        this.setState((prevState) => {
            if (prevState.count == 0) {
                return {
                    count: 2,
                };
            } else {
                return {
                    count: prevState.count - 1,
                };
            }
        });
    }
    render() {
        return !this.isMobile() ? (
            <div
                style={{ background: '#080444', padding: '80px 0px' }}
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
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
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
                            width='350px'
                        />
                    ))}
                </div>
            </div>
        ) : (
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
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Projects
                    </span>
                </h3>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '40px',
                        fontSize: '0.6rem',
                    }}
                >
                    <ArrowBackIosIcon
                        style={{
                            color: 'white',
                            position: 'absolute',
                            left: '5vw',
                            cursor: 'pointer',
                        }}
                        className='arrowToggle'
                        onClick={this.handleRotateBackward}
                    />
                    <ProjectCard
                        key={this.state.count}
                        title={this.state.projects[this.state.count].title}
                        imageURL={
                            this.state.projects[this.state.count].imageURL
                        }
                        description={
                            this.state.projects[this.state.count].description
                        }
                        github={
                            this.state.projects[this.state.count].github
                                ? this.state.projects[this.state.count].github
                                : false
                        }
                        devpost={
                            this.state.projects[this.state.count].devpost
                                ? this.state.projects[this.state.count].devpost
                                : false
                        }
                        width='250px'
                    />
                    <ArrowForwardIosIcon
                        className='arrowToggle'
                        style={{
                            color: 'white',
                            position: 'absolute',
                            right: '5vw',
                            cursor: 'pointer',
                        }}
                        onClick={this.handleRotateForward}
                    />
                </div>
            </div>
        );
    }
}
