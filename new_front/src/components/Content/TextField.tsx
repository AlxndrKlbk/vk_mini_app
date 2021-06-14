import { Button, TextareaAutosize } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import React from "react";
import SliderField from "./Slider";
import { useStyles } from "../../styles/mainStyles";
import clsx from "clsx";

const TextFieldResize = ({
  handleChangeText,
  handleChangeRatio,
  handleChangeWordCount,
  handleSendData,
}: any) => {
  const classes = useStyles();
  const textArea = clsx(classes.textarea);
  return (
    <div>
      <TextareaAutosize
        className={textArea}
        onChange={(e) => handleChangeText(e.target.value)}
        rowsMax={15}
        rowsMin={10}
        aria-label="empty textarea"
        placeholder="Вставьте текст для обработки "
      />
      <SliderField handleChangeRatio={handleChangeRatio} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Input
          aria-describedby="my-helper-text"
          name="Standard"
          type="number"
          onChange={(event) => handleChangeWordCount(event.target.value)}
        />
        <Button
          style={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
          onClick={handleSendData}
        >
          Обработать текст
        </Button>
      </div>
    </div>
  );
};

export default TextFieldResize;
