import React from "react";
import PropTypes from "prop-types";
import { IDog } from "./FirstComponent";

interface IProps{
    dog: IDog
}

function Dog(props: IProps) {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>{props.dog.name}</h1>
      <h2>age: {props.dog.age}</h2>
    </div>
  );
}

export default Dog;
