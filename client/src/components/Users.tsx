import React, { useEffect, useState } from 'react'
import User from './User'

export interface UserInfo {
    id?: string
    username: string
    fullname: string
    email: string
}

const getUsers = async ():Promise<UserInfo[]> => {
    const resp = await fetch("/api/users");
    const data = await resp.json();
    return data;
}


export default function Users() {
const [users, setUsers] = useState<UserInfo[]>([]);

useEffect(()=>{
    let isAlive = true;
    console.log('loading', isAlive);
    // const getData = async () =>{
    //     const data = await getUsers();
    //     if (isAlive) {
    //         setUsers(data);
    //     }
    // }
    // getData();

    getUsers()
    .then( users =>{ isAlive && setUsers(users) });
 

    return (()=> {
    console.log('deleting', isAlive);
        isAlive= false;
    })
},[])

  return (
    <div>
        {
         users.map((user: UserInfo) => {
            return (
                <User user={user} key={user.email}/>
            )
         })   
        }      
      
    </div>
  )
}
