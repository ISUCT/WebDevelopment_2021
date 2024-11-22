import Button from '@mui/material/Button'
import { UserInfo } from './Users'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';

interface IProps {
    user: UserInfo
}

export default function User(props: IProps) {
    const [count, setCount] = useState<number>(0);
    const [description, setDescription] = useState<string>("");

    const clickHandler = () => {
        console.log(count + 1);
        setCount(count + 1);
    }

    const textChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    }

    useEffect(() => {
        let isMounted = true;
        console.log("useEffect called when text changed");
        return () => { isMounted = false }
    }, [description, setDescription]);

    return (
        <>
            <h3>Имя пользователя: {props.user.username}</h3>
            <h3>ФИО: {props.user.fullname}</h3>
            <h3>email: {props.user.email}</h3>
            <h3>Count: {count}</h3>
            <TextField id="outlined-basic" label="Description" variant="outlined" onChange={textChanged} />
            <p>{description}</p>
            <Button variant="contained" onClick={clickHandler}>Contained</Button>
        </>
    )
}
