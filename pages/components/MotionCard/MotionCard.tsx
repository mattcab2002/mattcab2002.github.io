import React, {FunctionComponent, useRef, useState} from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Slide from '@mui/material/Slide';
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

type Props = {
    header: string,
    subHeader: string,
    body: string,
    tags?: Array<{name: string}>,
    image: ReactJSXElement
}

const MotionCard: FunctionComponent<Props> = ({header, subHeader, body, tags, image}: Props) => {
    const [hovered, setHovered] = useState(false);
    const handleOpen = () => {
        setHovered(true);
    };
    const handleClose = () => {
        setHovered(false);
    };
    const handleToggle = () => {
        setHovered(!hovered);
    };
    const buttonRef = useRef(null);

    return (
        <Box className="w-4/12" onMouseLeave={handleClose}>
            <Slide direction="up" in={hovered} container={buttonRef.current} timeout={800}>
                <Card
                    className={`${!hovered && 'invisible'} h-96 overflow-scroll rounded-none bg-transparent text-white border border-solid border-white transition transform hover:-translate-y-4`}>
                    <CardContent>
                        <Typography variant="h6" className="font-bold" gutterBottom>
                            {header}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {subHeader}
                        </Typography>
                        <Typography variant="body2" gutterBottom component="div">
                            {body.split('\n').map((text, index) => (
                                <Typography key={index} variant="inherit"
                                            className="mb-2">{text.split("|").map((splitText, j) => (
                                    (j % 2 != 0) ?
                                        <Typography key={j} variant="inherit"
                                                    className="text-lime-300" component="span">{splitText}</Typography> :
                                        <Typography key={j} component="span">{splitText}</Typography>
                                ))}
                                </Typography>
                            ))}
                        </Typography>
                        {tags &&
                            <Box>
                                {tags.map(({name}, index: number) => (
                                    <Chip key={index} label={name} className="border-lime-300 border-2 border-solid m-1"/>
                                ))}
                            </Box>
                        }
                    </CardContent>
                </Card>
            </Slide>
            <Button ref={buttonRef}
                    className={`bg-transparent h-24 border-white border border-solid rounded-none px-6 flex-1 w-full`}
                    onMouseOver={handleOpen}
                    onClick={handleToggle}>
                {image}
            </Button>
        </Box>
    );
};

export default MotionCard;
