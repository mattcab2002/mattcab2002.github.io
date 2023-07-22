import React, {FunctionComponent} from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import ContactMeButton from "@/pages/components/ContactMeButton/ContactMeButton";
import WorksButton from "@/pages/components/WorksButton/WorksButton";

const Intro: FunctionComponent = () => {
    return (
        <Box className="mx-14 my-16">
            <Typography variant="h4" gutterBottom>
                Hello, <Typography className="text-lime-300 inline" variant="inherit">I'm Matthew</Typography>, <br /> an aspiring Software Engineer <br /> based in Canada.
            </Typography>
            <Typography variant="subtitle1" className="w-full sm:w-9/12 md:w-6/12" gutterBottom>
                I am completing my bachelors degree in Software Engineering Co-op with a minor in Applied Artificial
                Intelligence. I have 3+ years of professional work experience in software development and web
                development.
            </Typography>
            <Box className="space-x-4 my-8 sm:ml-8">
                <ContactMeButton variant="white"/>
                <WorksButton variant="lime-300"/>
            </Box>
        </Box>
    );
};

export default Intro;
