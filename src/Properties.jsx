import React from 'react';
import Hello from './Hello';
// Bootstrap CSS

export default function Properties() {
  let arr = [
    {
      password: '123',
      age: 23
    },
    {
      password: 'arsalan',
      age: 31
    }

  ]
  return (
    <div>
      <Hello name="React" email='arsalan@gmail.com' dataArr = {arr}/>
    </div>
  )
}
