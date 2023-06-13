"use client"

import React, {FunctionComponent} from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import ContactMeButton from "@/pages/components/ContactMeButton/ContactMeButton";

const pages = ['My Projects', 'My Skills', 'Work Experience'];

const Navbar: FunctionComponent = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" className="bg-black">
            <Toolbar className="hidden sm:flex">
                {/* Logo */}
                <Box className="flex-1 flex">
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            className="text-white block mx-4 normal-case"
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <ContactMeButton/>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;