import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './Planet.js';

// const firstelement = <h1>Selam Dünyalı!</h1>
// const myelement = (
//   <table>
//     <tr>
//       <th>
//         Name
//       </th>
//     </tr>
//     <tr>
//       <td>
//         Okan
//       </td>
//     </tr>
//     <tr>
//       <td>
//         Maden
//       </td>
//     </tr>
//   </table>
// )

// const element = <h1>React is {5+5} times better with JSX</h1>

// const element = (
//   <ul>
//     <li>Okan</li>
//     <li>Reşit</li>
//     <li></li>
//   </ul>
// )

// const element = (
//   <>
//     <p>Selam</p>
//     <p>Dünyalı</p>
//   </>
// )

// const element = <input type='text' placeholder='input' />

// const element = (
//   <ul className='red'>
//     <li>Karaçalı</li>
//     <li>Da Poet</li>
//     <li>Saian</li>
//   </ul>
// )

// const x='Selam Dünyalı';
// let text = 'Dünyalı';

// if(x.length <30){
//   text = 'Selam'
// }

// const element = <h1>{(x.length) < 30 ? "Hello" : "Goodbye"}</h1>;

// function Hello(props){
//   return (<h2>Selam Dünyalı, Dünya Güneş'e en yakın {props.order}. gezegendir.</h2>)
// }

function PlanetOrder(){
  const planetInfo = {
    name:"Dünya",
    sun:"Güneş"
  }
  return(
    <>
      <h2>Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs, Neptün</h2>
      <Hello order='3' planet={ planetInfo }/>
    </>
  )
}

// const element = <Hello order='3' />

const root = ReactDOM.createRoot(document.getElementById('sandy'));
root.render(<PlanetOrder/>);

