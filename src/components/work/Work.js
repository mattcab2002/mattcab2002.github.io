import React, { Fragment } from 'react';

import Connector from './Connector';
import WorkElement from './WorkElement';

export default class Work extends React.Component {
    state = {
        jobs: [
            {
                position: 'Web Developer',
                length: '(Nov. 2021 - Present)',
                company_name: 'Préts Québec',
                description:
                    'Handle all web development regarding French content. Child company of Loans Canada.',
            },
            {
                position: 'Web Developer',
                length: '(Apr. 2021 - Present)',
                company_name: 'Loans Canada',
                description:
                    'Developing on smaller projects for production. Handling queries from MySQL, while developing with PHP, Laravel, and WordPress.',
            },
            {
                position: 'Co-Founder',
                length: '(Apr. 2021 - Present)',
                company_name: 'Exterior Solutions QC inc.',
                description:
                    'Co-founded a pressure washing company. Managed a team of door-to-door salesman and numerous social media platforms to obtain clients.',
            },
            {
                position: 'Junior Front End Developer',
                length: '(Feb. 2021 - Aug. 2021)',
                company_name: 'Fygo',
                description:
                    'Contracted to replicate IOS application to integrate app clips for Android users. Learnt Svelte, Sveltekit, Tailwinds CSS, and Google Firebase in order to be accustomed to the team.',
            },
        ],
    };
    render() {
        return (
            <div id='work-experience' style={{ padding: '40px 0px' }}>
                <h3
                    style={{
                        textAlign: 'center',
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
                <div
                    style={{
                        display: 'flex',
                        marginTop: '60px',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                    }}
                >
                    <div style={{ margin: '0px 40px' }}>
                        {this.state.jobs.slice(0, 3).map((job) => (
                            <span key={this.state.jobs.indexOf(job)}>
                                <WorkElement
                                    position={job.position}
                                    description={job.description}
                                    company_name={job.company_name}
                                    length={job.length}
                                />
                                {this.state.jobs.indexOf(job) != 2 && (
                                    <Connector />
                                )}
                            </span>
                        ))}
                    </div>
                    {this.state.jobs.length > 3 && (
                        <div>
                            {this.state.jobs
                                .slice(3, this.state.jobs.length)
                                .map((job) => (
                                    <span key={this.state.jobs.indexOf(job)}>
                                        <WorkElement
                                            position={job.position}
                                            description={job.description}
                                            company_name={job.company_name}
                                            length={job.length}
                                        />
                                        {this.state.jobs.indexOf(job) !=
                                            this.state.jobs.length - 1 && (
                                            <Connector />
                                        )}
                                    </span>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
