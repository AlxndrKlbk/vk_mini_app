import React from "react";
import { Typography } from "@material-ui/core";
import { Slider } from "@material-ui/core";

const marks = [
  {
    value: 0.1,
    label: "0.1",
  },
  {
    value: 0.2,
    label: "0.2",
  },
  {
    value: 0.3,
    label: "0.3",
  },
  {
    value: 0.4,
    label: "0.4",
  },
  {
    value: 0.5,
    label: "0.5",
  },
  {
    value: 0.6,
    label: "0.6",
  },
  {
    value: 0.7,
    label: "0.7",
  },
  {
    value: 0.8,
    label: "0.8",
  },
  {
    value: 0.9,
    label: "0.9",
  },
  {
    value: 1,
    label: "1",
  },
];

function valuetext(value: number) {
  return `${value}`;
}

const SliderField = ({ handleChangeRatio }: any) => {
  return (
    <>
      <Typography id="discrete-slider-custom" gutterBottom></Typography>
      <Slider
        onChangeCommitted={handleChangeRatio}
        defaultValue={0.1}
        getAriaValueText={valuetext}
        max={1}
        aria-labelledby="discrete-slider-custom"
        step={0.1}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </>
  );
};

export default SliderField;
