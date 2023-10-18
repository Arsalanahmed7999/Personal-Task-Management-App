import React, { useEffect, useState } from 'react'

export default function Todouseeffect() {
    let [todo, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
            .then(json => setTodos(json))
    }, [])
    return (
        <div>
            <h1>Here is your todo list</h1>
            <ul>
                {
                    todo.map((elem, idx) => (
                        <>
                            <li key={idx}>{elem.title}</li>
                        </>
                    ))
                }
            </ul>

        </div>
    )
}
