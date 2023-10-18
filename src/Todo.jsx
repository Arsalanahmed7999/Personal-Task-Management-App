import React, { Fragment, useState } from 'react'

export default function Todo() {
    let [mytask, setMyTask] = useState([]);
    let [input, setInput] = useState('');
    let inputHandler = (e) => {
        setInput(e.target.value);
    }
    let handleAddTasks = () => {
        setMyTask([...mytask, input]);
    }

    return (
        <div>
            <input type="text" value={input} placeholder='Enter a task' onChange={inputHandler} />
            <p>Task: {input}</p>
            <button onClick={handleAddTasks}>Add Task</button>
            <ol type='1' >
                {
                    mytask.map((elem, idx) => (
                        <Fragment key={idx}>
                            <li>{elem}</li>
                        </Fragment>
                    ))
                }
            </ol>
        </div>
    )
}

