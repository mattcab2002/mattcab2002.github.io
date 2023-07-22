import React, {FunctionComponent} from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ContactMeButton from "@/pages/components/ContactMeButton/ContactMeButton";
import Logo from "@/pages/components/Logo/Logo";

const pages = ['Projects', 'Skills', 'Work Experience'];

const Navbar: FunctionComponent = () => {

    return (
        <AppBar position="static" className="bg-black">
            <Toolbar className="hidden sm:flex">
                <Logo color="white" />
                <Box className="flex-1 flex">
                    {pages.map((page) => (
                        <Button
                            key={page}
                            className="text-white block mx-4 normal-case"
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <ContactMeButton variant="white"/>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;