import React from 'react'
import { getCats, Cat as ICat } from '../../api/catsApi';
import Cat from './Cat'

export default function CatsList() {
    const cats = getCats(); // not quite correct - will fix it next time
    return (
        <div>
            <h1>Cats List</h1>
            {
                cats.map((cat: ICat) => {
                    console.log(cat);
                    return <Cat/>
                }) 
            }
        </div>
    )
}
