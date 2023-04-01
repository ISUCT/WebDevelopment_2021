import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import Dog from "./Dog";

function summ(a: number, b: number){
    return a + b;
}
let a = 5;
let b = 7;
let res = summ;

export interface IDog {
  id: number;
  name: string;
  age: number;
}

const getDogs = async (): Promise<IDog[]> => {
    // /api/dogs +
    // http://localhost:3000/api/dogs ----
  const dogs: IDog[] = [
    { id: 1, name: "Sharik", age: 2 },
    { id: 2, name: "Bobik", age: 3 },
    { id: 3, name: "Tuzik", age: 5 },
  ];
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(dogs);
    }, 8000);
  });
};

export function FirstComponent() {
  const [clickCount, setClickCount] = useState(0);
  const [dogs, setDogs] = useState(Array<IDog>());

  useEffect(() => {
    let isAlive = true;
    const get = async () => {
        const dogs = await getDogs();
        console.log(dogs);
        if (isAlive){
            setDogs(dogs);
        }
    }
    get();
    return function() {
        isAlive = false;
    }
  },[])

  console.log(`before ${clickCount}`);

  const clickHandler = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <>
      <div>FirstComponent</div>
      {dogs.map((item) => {
        return <Dog key={item.id} dog={item} />;
      })}

      <h2>You clicked {clickCount} times!</h2>
      <Button variant="contained" onClick={clickHandler}>
        Contained
      </Button>
    </>
  );
}
