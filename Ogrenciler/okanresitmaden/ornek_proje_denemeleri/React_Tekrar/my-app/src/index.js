import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import './_app.scss'

// import Hello from './Planet.js';
// import PlanetOrder from './Planet'

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

// function PlanetOrder(){
//   const planetInfo = {
//     name:"Dünya",
//     sun:"Güneş"
//   }
//   return(
//     <>
//       <h2>Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs, Neptün</h2>
//       <Hello order='3' planet={ planetInfo }/>
//     </>
//   )
// }

// const element = <Hello order='3' />

// function Football(){
//   const shoot = () => {alert("Mükemmel Bir GOOOOOOOOOOOOOOOOOOOL")};
//   return(
//     <button onClick={shoot}>Gelişine Vur</button>
//   )
// }

// function Football(){
//   const shoot = (a) => {alert(a)};
//   return(
//     <button onClick={() => shoot("GOL")}>Gelişine Vur</button>
//   )
// }

// function Football(){
//   const shoot = (a, b) => {alert(a + ' ' + b.type)};
//   return(
//     <button onClick={(event) => shoot("GOL",event)}>Gelişine Vur</button>
//   )
// }

// function MissedGoal(){
//   return <h1>Kaçtı</h1>
// }

// function MadeGoal(){
//   return <h1>GOOOL</h1>
// }

// function Goal(props){
//   const isGoal = props.isGoal;
//   if(isGoal){
//     return <MadeGoal/>
//   }
//   return <MissedGoal/>

// }

// function Goal(props){
//   const isGoal = props.isGoal;
//   return (
//   <>
//     {isGoal ? <MadeGoal/> : <MissedGoal/>}
//   </>
//   )
// }

// function Planet(){
//   const planets = [
//   {id:1, planetname:'Merkür'},
//   {id:2, planetname:'Venüs'},
//   {id:3, planetname:'Dünya'},
//   {id:4, planetname:'Mars'},
//   {id:5, planetname:'Jüpiter'},
//   {id:6, planetname:'Satürn'},
//   {id:7, planetname:'Uranüs'},
//   {id:8, planetname:'Neptün'}];
//   return(
//     <>
//       <h1>Ben Kimim?</h1>
//       <ul>
//         {planets.map((planet) => <PlanetOrder key={planet.id} planetname={planet.planetname} />)}
//       </ul>
//     </>
//   )
// }



const root = ReactDOM.createRoot(document.getElementById('sandy'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

