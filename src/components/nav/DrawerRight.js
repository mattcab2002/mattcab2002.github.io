import React, { Fragment } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import Linkedin from '../icons/Linkedin';
import Devpost from '../icons/Devpost';

export default class DrawerRight extends React.Component {
    state = { open: false };

    handleOpen = () => {
        this.setState((prevState) => ({
            open: !prevState.open,
        }));
    };
    render() {
        return (
            <Fragment>
                <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    edge='end'
                    onClick={this.handleOpen}
                    style={{
                        position: 'fixed',
                        right: '20px',
                        top: '0px',
                        color: 'white',
                        display: !this.state.open ? 'block' : 'none',
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    variant='persistent'
                    anchor='right'
                    open={this.state.open}
                    PaperProps={{
                        sx: { width: '60vw', background: '#040440' },
                    }}
                >
                    <IconButton
                        onClick={this.handleOpen}
                        style={{ position: 'relative' }}
                    >
                        <ChevronRightIcon
                            style={{
                                position: 'absolute',
                                left: '10px',
                                top: '10px',
                                color: 'white',
                            }}
                        />
                    </IconButton>
                    <List style={{ marginTop: '30px' }}>
                        {['my-projects', 'work-experience', 'contact-me'].map(
                            (text, index) => (
                                <a
                                    href={'#' + text}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <ListItem
                                        button
                                        key={text}
                                        style={{
                                            paddingTop: '0px',
                                            paddingBottom: '0px',
                                        }}
                                    >
                                        <ListItemText
                                            primary={text
                                                .replace('-', ' ')
                                                .replace(/(?:^|\s)\S/g, (a) =>
                                                    a.toUpperCase()
                                                )}
                                            style={{
                                                color: 'transparent',
                                                opacity: '1',
                                                backgroundImage:
                                                    'linear-gradient(to right, #faa66a, #fd63a3)',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor:
                                                    'transparent',
                                            }}
                                        />
                                    </ListItem>
                                </a>
                            )
                        )}
                        <ListItem
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            key={Math.random()}
                        >
                            <Linkedin link='https://www.linkedin.com/in/matthew-a-cabral/' />
                            <a
                                href='https://github.com/mattcab2002'
                                target='_blank'
                                style={{ margin: '0px 8px' }}
                            >
                                <GitHubIcon />
                            </a>
                            <Devpost link='https://devpost.com/mattcab2002?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav' />
                        </ListItem>
                    </List>
                </Drawer>
            </Fragment>
        );
    }
}
