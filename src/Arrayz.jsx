import React, { useState } from 'react'
let users = [
    {
        name: 'Arsalan',
        email: 'arsalan@gmail.com'
    },
    {
        name: 'Ahmed',
        email: 'ahmed@gmail.com'
    }
]
export default function Arrayz() {
    let [userArr, setUserArr] = useState(users);
    const adduser = ()=>{
        let singleuser = {
            name: 'Arham',
            email: 'arham@gmail.com'
        }
        setUserArr(previousUser => {
            return [...previousUser, (singleuser)]
        })
    }
  return (
    <div>
        {
            <table border='1' cellPadding='10px'>
                {
                    userArr.map(({name, email})=>(
                        <tr key = {email}>
                            <td>{name}</td>
                            <td>{email}</td>
                        </tr>
                    ))
                }
            </table>
        }
        <button onClick={adduser}>Add user</button>
    </div>
  )
}
