import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import { tasks } from './data/todo.js';
import { element } from "prop-types";

export default function NewTodo() {
  const [todo, setTodo] = useState(tasks);
  const [userInput, setUserInput] = useState('');
  const [activeId, setActiveId] = useState('');
  let [mode, setMode ] = useState('insert');

  const handleOnChange = (event) => {
    setUserInput(event.target.value);
  }
  const handleOnClick = () => {
    setTodo([...todo, { id: todo.length + 1, task: userInput, completed: false }]);
    setUserInput('');
  }
  const handleActive = (id) => {
    setActiveId(id);
  }
  const toggleInput = (id) => {
    let updateTask = todo.map((element) => {
      if (element.id == id) {
        return { ...element, completed: !element.completed }
      }
      return element
    })
    setTodo([...updateTask]);
  }
  const handleRemove = (id) =>{
    let removedElement = todo.filter((element)=>element.id !== id)
    setTodo([...removedElement])
  }
  const handleUpdate = ()=>{
    let recentTodo = [...todo]
    let index = recentTodo.findIndex((elem)=>{
      if(elem.id === activeId){
        return elem
      }
    })
    recentTodo[index] = {id: recentTodo[index].id, task:userInput, completed:false}
    setTodo([...recentTodo]);
    setMode('insert');
    setUserInput('');
  }
  const handleEditTodo = (id)=>{
    let editTodo = todo.find((elem)=>{
      if(elem.id === id){
        return elem
      }
    })
    setUserInput(editTodo.task);
    setMode('edit');
  }



  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-md-6 border border-primary shadow p-4 m-auto">
          <h1>Todo List</h1>
          <div className="form-group">
            <input type="text" name="" value={userInput} onChange={handleOnChange} id="" className="form-control" />
          </div>
          <button className="btn btn-primary mt-3" onClick={mode === "insert" ? handleOnClick : ()=>handleUpdate()}>{mode==='insert'?"Add todo":"Update todo"}</button>
          <div className="mt-5">
            <h1>Daily Task</h1>
            {
              (todo && !todo.length) ? <div className="text-secondary text-center">
                <p>List is empty</p>
              </div> : <ul className="list-group">
                {
                  todo.map((elem, idx) => (
                    <li key={idx}
                      onClick={() => handleActive(elem.id)}
                      className={`list-group-item d-flex align-items-center justify-content-between ${elem.id == activeId ? "active" : ""}`}
                      style={{ textDecoration: elem.completed ? 'line-through' : 'none' }}
                    >
                      <input type="checkbox" onChange={() => toggleInput(elem.id)} />
                      <span className="badge badge-primary badge-pill"></span>
                      Task: {elem.task}
                      <button className="btn btn-primary" onClick={()=>handleEditTodo(elem.id)}>Edit</button>
                      <button className="btn btn-danger" onClick={()=>handleRemove(elem.id)}>Delete</button>
                    </li>
                  ))
                }
              </ul>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
