import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "../styles/mainStyles";

const Header = ({ open, toggleOpenMenu }: any) => {
  const classes = useStyles();

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleOpenMenu}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Название нашего приложения
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
