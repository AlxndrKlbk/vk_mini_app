import React from "react";
import { CssBaseline } from "@material-ui/core";
import { useStyles } from "./styles/mainStyles";
import Content from "./components/Content/Content";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} toggleOpenMenu={toggleOpenMenu} />
      <Menu open={open} toggleOpenMenu={toggleOpenMenu} />
      <Content />
    </div>
  );
}

export default App;
