import { Button } from '@material-ui/core'
import React, { useState } from 'react'

export default function Second() {
    const text = "Hello variable";
    const [counter, setCounter] = useState<number>(0);


    const clickHandler = () => {
        setCounter(counter + 1);
        console.log(`Hello ${counter}`);
    };
    return (
        <div>
            <h1>Hello {text}</h1>
            <h2> You clicked {counter} </h2>
            <Button variant="contained" onClick={clickHandler}>Contained</Button>
        </div>
    )
    
}
