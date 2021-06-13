import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import {Divider, IconButton} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import clsx from "clsx";
import {useStyles} from "../styles/mainStyles";

const Menu = ({open, handleDrawerClose}: any) => {
    const classes = useStyles();

    return (
        <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                {/*<List>{mainListItems}</List>*/}
                <Divider />
                {/*<List>{secondaryListItems}</List>*/}
            </Drawer>
)
};

export default Menu;
