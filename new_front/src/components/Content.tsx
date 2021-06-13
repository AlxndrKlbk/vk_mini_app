import {Box, Container, Grid, Paper} from "@material-ui/core";
import React from "react";
import {useStyles} from "../styles/mainStyles";
import clsx from "clsx";


const Content = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={6}>
                        <Paper className={fixedHeightPaper}>
                            {/*<Chart />*/}
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={8} lg={6}>
                        <Paper className={fixedHeightPaper}>
                            {/*<Deposits />*/}
                        </Paper>
                    </Grid>
                </Grid>
                <Box pt={4}>
                    {/*<Copyright />*/}
                </Box>
            </Container>
        </main>
    );
};

export default Content;



