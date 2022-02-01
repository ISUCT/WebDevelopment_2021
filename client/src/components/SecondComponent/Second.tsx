import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function Second() {
  const text = "Hello variable";
  const [counter, setCounter] = useState<number>(0);
  const [myText, setText] = useState<string>("");
  const [display, setDisplay] = useState<string>("");

  const clickHandler = () => {
    setCounter(counter + 1);
    console.log(`Hello ${counter}`);
  };

  const onTextChange = (event: any) => {
    setText(event.target.value);
  };

  const textClickHandler = () => {
    setDisplay(myText);
  };


  return (
    <div>
      <h1>Hello {text}</h1>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            onChange={onTextChange}
          />
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" onClick={textClickHandler}>
            Send info
          </Button>
        </Grid>
      </Grid>

      <h3>You entered: {display} </h3>
      <h2> You clicked {counter} </h2>
      <Button variant="contained" onClick={clickHandler}>
        Contained
      </Button>
    </div>
  );
}
