import React from "react";
import { Paper } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "../../styles/mainStyles";

const Readout = ({ readData }: any) => {
  const { result_text, keywords } = readData;

  const hashTags = keywords?.map((el: any) => {
    return (
      <ul>
        <li>#{el}</li>
      </ul>
    );
  });
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Paper className={fixedHeightPaper}>
      <div>
        <div style={{ paddingBottom: "40px" }}>{result_text}</div>
        <div>{keywords ? <div>Хэштеги:{hashTags}</div> : null}</div>
      </div>
    </Paper>
  );
};

export default Readout;
