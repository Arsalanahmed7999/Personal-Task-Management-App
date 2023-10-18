// import React, { Fragment } from "react";
// import {useState} from "react";

// // import Welcome from './Welcome';


// // export default function App(){
// //     let name = 'Arsalan';
// //     let sum = {
// //         s: 10 + 20,
// //     }
// //     return <div>
// //         <h1>Hello {name} !</h1>
// //         <h1>Sum {sum.s} !</h1>
// //     <Welcome/>

// //     </div>
// // }


// export default function App() {
//   let arr = ['one', 'two', 'three', 'four']
//   return (
//     <Fragment>
//       <h1>Hello World</h1>
//       <p>I am para 1 </p>
//       <ol>
//         {
//           arr.map((element) => {
//             return <li>{element}</li>
//           })
//         }
//       </ol>
//     </Fragment>
//   )
// }




// export default function () {
//   // let arr = ['item1', 'item2', 'item3', 'item4'];
//   // let obj = {
//   //   id: 1,
//   //   name: 'Arsalan',
//   //   college: 'Truba'
//   // }

//   // return (
//   //   <div>
//   //     <ol>
//   //       {arr.map((element) => {
//   //         return <li>{element}</li>
//   //       })}
//   //     </ol>
//   //     <ul>
//   //       {/* {
//   //         Object.keys(obj).map((elem) => {
//   //           return <li>{elem}</li>
//   //         })
//   //       } */}
//   //     </ul>
//   //     <h1>Rendering Object details from an array</h1>
//   //     {/* <ul>
//   //       {
//   //         newArr.map((element) =>
//   //         (
//   //           <>
//   //             <li>{element.name}</li>
//   //             <li>{element.email}</li>
//   //             <li>{element.password}</li>
//   //           </>
//   //         )
//   //         )
//   //       }
//   //     </ul> */}
//   // </div >
//   // )
//   let newArr = [
//     {
//       name: 'Arsalan',
//       email: 'arsalan@gmail.com',
//       password: 'arsalan'
//     }
//   ]

//     return (<>
//       <div>
//         {
//           newArr.map((elem) => {
//             (<>
//               <li>{elem.name}</li>
//               <li>{elem.email}</li>
//               <li>{elem.password}</li>
//             </>)
//           })
//         }
//       </div>
//     </>
//     )



// // }


// export default function App(){
//     let newArr = [
//     {
//       name: 'Arsalan',
//       email: 'arsalan@gmail.com',
//       password: 'arsalan'
//     }
//   ]
//   return (
//     <>
//     {
//       newArr.map((element)=>(
//         <>
//         <li>{element.name}</li>
//         <li>{element.email}</li>
//         <li>{element.password}</li>
//         </>
//       ))
//     }
//     </>
//   )
// }


// export default function App() {
//   let arr = [
//     {
//       name: 'Arsalan',
//       email: 'arsalan@gmail.com',
//       password: 'pass'
//     },
//     {
//       name: 'Ahmed',
//       email: 'ahmed@gmail.com',
//       password: 'pass'
//     }
//   ]
//   function click(){
//     console.log('clicked');
//     arr[idx].name = 'Super mario';
//     updateUser([...arr]);

//   }
//   return (
//     <>
//       {
//         arr.map((elem, idx)=>(
//           <Fragment key = {idx}>
//           <li>{elem.name}</li>
//           <li>{elem.email}</li>
//           <li>{elem.password}</li>
//           <button onClick={()=>click(idx, 'Ahmed')}>Press</button>
//           </Fragment>
//         ))
//       }
//     </>
//   )
// }


// import React, { useState } from 'react'

// export default function App() {
//   // let counter = 0;
//   let [counter, setCounter] = useState(0);
//   function increment() {
//     counter += 1;
//     console.log(counter);
//     setCounter(counter);

//   }
//   function decrement() {
//     counter -= 1;
//     console.log(counter);
//     setCounter(counter);

//   }
//   return (
//     <div>
//       <h1>Counter : {counter}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>

//   )
// }


// import React, { useState } from 'react';

// export default function App() {
//   let [counter, setCounter] = useState(5);
//   function start() {
//     setInterval(() => {
//       counter -= 1;
//       setCounter(counter);
//       if (counter == 0) {
//         clearInterval(counter);
//       }
//     }, 1000);
//   }
//   return (
//     <div>
//       <h1>Count Down : {counter}</h1>
//       <button onClick={start}>Start Countdown</button>
//     </div>
//   )
// }




// October 10

// import React, { useState } from 'react'

// export default function App() {
//   let [mystr, setmystr] = useState('Arsalan');
//   function concatenate(){
//     mystr+='Ahmed'
//     setmystr(mystr)
//   }
//   return (
//     <div>
//       <h1>work concatenation</h1>
//       <p>{mystr}</p>
//       <button onClick={concatenate}>Concatenate</button>
//     </div>
//   )
// }
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from 'react';
import Hello from './Hello';


export default function App() {
  let [user, setUser] = useState('admin');
  let dataFromChildToParent = (myname)=>{
    setUser(myname);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center m-auto">
          <h1>Hello {user}</h1>
          <Hello data={dataFromChildToParent} name={user}/>
        </div>
      </div>
    </div>
  )
}



