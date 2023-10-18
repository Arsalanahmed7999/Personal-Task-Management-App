import React, { useState } from 'react'
let arr = [
    {
        name: 'Arsalan',
        age: 22
    },
    {
        name: 'Arham',
        age: 14
    }
]
export default function Newarray() {
    let [user, setUser] = useState(arr);
    const adduser = ()=>{
        let singleUSer = {
            name: 'Haris',
            age: 21
        }
        setUser(prevUser => {
            return[...prevUser, singleUSer]
        })
    }

    return (
        <div>
            {
                user.map(({ name, age }) => (
                    <ul>
                        <li>Name of the user is: {name}</li>
                        <li>Age of the user is: {age}</li>
                    </ul>
                ))
            }
            <button type="button" onClick={adduser}>Add user</button>
        </div>
    )
}
