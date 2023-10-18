import React, { useState } from 'react';
import styles from './App.module.css';


export default function Input() {
    let [name, setname] = useState('');
    const handleInput = (e)=>{
        setname(e.target.value);
    }
  return (
    <div className={`${styles.bg_red}`}>
        <h1>Input</h1>
        <p>{name}</p>
        <input type="text" onChange={handleInput}/>
    </div>
  )
}
