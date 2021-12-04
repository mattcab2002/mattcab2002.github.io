import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Github from '../icons/Github';
import Devpost from '../icons/Devpost';

const ProjectCard = (props) => {
    return (
        <Card
            style={{
                margin: '0px 30px',
                width: '300px',
                background: '#100e51',
                borderRadius: '8px',
                color: 'white',
                position: 'relative',
            }}
        >
            <CardMedia
                component='img'
                alt={props.title + 'image'}
                height='220'
                image={props.imageURL}
            />
            <CardContent style={{ minHeight: '160px' }}>
                {props.description}
            </CardContent>
            {(props.github || props.devpost) && (
                <CardActions
                    style={{
                        position: 'absolute',
                        bottom: '0px',
                    }}
                >
                    {props.github && <Github link={props.github} />}
                    {props.devpost && <Devpost link={props.devpost} />}
                </CardActions>
            )}
        </Card>
    );
};

export default ProjectCard;
