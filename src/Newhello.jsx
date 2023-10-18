import React from 'react'

export default function Newhello(props) {
  let { name, setName, age, grade } = props;
  name = 'arsalan'
  let sendToParent = () => {
    setName(name);
  }
  return (
    <div>      
      <button onClick={sendToParent}>Get Name</button>
    </div>
  )
}

Newhello.defaultProps = {
  age: 30,
  grade: 'C'
}