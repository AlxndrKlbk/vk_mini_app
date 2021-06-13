import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import {useStyles} from "../styles/mainStyles";

interface PropsHeader {
    open: boolean
}

const Header = ({open, handleDrawerOpen}: any) => {
    const classes = useStyles();

    return (
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
