import Button from '@mui/material/Button'
import { UserInfo } from './Users'
import React, { useEffect, useState } from 'react'

interface IProps {
    user: UserInfo
}

export default function User(props: IProps) {
    const [count, setCount]  = useState<number>(0);

    const clickHandler  = () => {
        console.log(count + 1);
        setCount(count + 1);
    }

    return (
        <>
            <h3>Имя пользователя: {props.user.username}</h3>
            <h3>ФИО: {props.user.fullname}</h3>
            <h3>email: {props.user.email}</h3>
            <h3>Count: {count}</h3>
            <Button variant="contained" onClick={clickHandler}>Contained</Button>
        </>
    )
}
