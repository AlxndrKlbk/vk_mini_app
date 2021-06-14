import { Container, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "../../styles/mainStyles";
import clsx from "clsx";
import TextField from "./TextField";
import Readout from "./Readout";
import { postToURLSingle } from "../../api/postToUrl";
import { PathRequest } from "../PathRequest";

const Content = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const data = {
    text: "",
    ratio: "",
    word_count: null,
  };

  const [sendValues, setValues] = useState<any>(data);
  const [readData, setReadData] = useState<object>({});

  const handleSendData = async () => {
    const sendData = [];
    sendData.push(sendValues);
    const response = await postToURLSingle.postData(
      PathRequest.process_text,
      sendData
    );
    setReadData(response[0]);
  };

  const handleChangeText = (value: any) => {
    setValues({ ...sendValues, text: value });
  };

  const handleChangeRatio = (event: any, newValue: number | number[]) => {
    setValues({ ...sendValues, ratio: newValue as number });
  };

  const handleChangeWordCount = (value: number) => {
    const numberValue = Number(value);
    setValues({ ...sendValues, word_count: numberValue });
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={6}>
            <Paper className={fixedHeightPaper}>
              <TextField
                handleChangeRatio={handleChangeRatio}
                handleChangeText={handleChangeText}
                handleChangeWordCount={handleChangeWordCount}
                handleSendData={handleSendData}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <Readout readData={readData} />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Content;
