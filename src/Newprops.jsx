import React, { useState } from 'react';
import Newhello from './Newhello';

export default function Newprops() {
  let [user, setUser] = useState('admin');
  let setNameFunc = (myname) => {
    setUser(myname);
  }
  return (
    <div>
      <h1>Hello {user}</h1>
      <Newhello name={user} setName={setNameFunc} />
    </div>
  )
}
