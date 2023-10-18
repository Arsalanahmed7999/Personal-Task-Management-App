import React, { Fragment } from 'react';
import PropTypes from 'prop-types'; 

// export default function Hello(props) {
//   return (
//     <div>
//         <h1>Hello {props.name}</h1>
//     </div>
//   )
// }
export default function Hello({name, data}) {
    // console.log(props);
    // let { name } = props;
    // name = 'arsalan';
    // let { name: nm, email, dataArr } = props;
    // console.log(dataArr);
    // nm = 'arsalan';
    name = 'arsalan'
    let sendToParent = ()=>{
        data(name);
    }

    return (
        <div>
            {/* <h1>Hello {name}</h1>
            <h1>Hello {nm}</h1>
            <h1>Email: {email}</h1>
                {
                    dataArr.map((elem, idx) =>(
                        <ol key={idx}>
                            <li>Password: {elem.password}</li>
                            <li>Age: {elem.age}</li>
                        </ol>
                    )
                    )
                } */}
    
        
          <button onClick={sendToParent} className='btn btn-primary'>Change</button>
        </div>
    )
}

Hello.defaultProps = {
    age: 30,
    name: 'super admin'
}

Hello.propTypes = {
    name: PropTypes.string.isRequired,

}
