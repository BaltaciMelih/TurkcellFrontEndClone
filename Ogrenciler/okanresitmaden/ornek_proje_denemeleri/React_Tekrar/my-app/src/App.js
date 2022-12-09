import React, { useState } from 'react'
import './index.css'
// import List from './List'
// import ProductCard from './ProductCard';
import 'react-bootstrap-icons'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Lights from './Lights';


// function App(){
//     const students = ["Varol","Halil","Şafak","Mustafa","EnesSöl"];
//     return(
//         <div className='App'>
//             <ul>
//                 {students.map((student,index) => <List key={index} student={student}></List>)}
//             </ul>
//         </div>
//     );
// }

// const productList = [
//     {
//         productId: 1,
//         name: 'Product 1',
//         text: 'Description for product 1',
//         colors: ['red', 'blue', 'green'],
//         isNew: true,
//         image: 'https://via.placeholder.com/550x350'
//       },
//       {
//         productId: 2,
//         name: 'Product 2',
//         text: 'Description for product 2',
//         colors: ['black', 'white'],
//         isNew: false,
//         image: 'https://www.xitetech.com/uploads/550x350/2019/12/asus-rog-phone-2.jpg'
//       },
//       {
//         productId: 3,
//         name: 'Product 3',
//         text: 'Description for product 3',
//         colors: ['yellow', 'orange'],
//         isNew: true,
//         image: 'https://www.webtekno.com/images/editor/default/0003/76/b8baa897958e9c77e1da56b373322dc940f03cad.jpeg'
//       },
//       {
//         productId: 4,
//         name: 'Product 4',
//         text: 'Description for product 4',
//         colors: ['purple', 'pink'],
//         isNew: false,
//         image: 'https://legazete.com/wp-content/uploads/2022/10/20-2.jpg'
//       },
//       {
//         productId: 5,
//         name: 'Product 5',
//         text: 'Description for product 5',
//         colors: ['red', 'blue'],
//         isNew: true,
//         image: 'https://via.placeholder.com/550x350'
//       },
//       {
//         productId: 6,
//         name: 'Product 6',
//         text: 'Description for product 6',
//         colors: ['black', 'white'],
//         isNew: false,
//         image: 'https://via.placeholder.com/550x350'
//       },
//       {
//         productId: 7,
//         name: 'Product 7',
//         text: 'Description for product 7',
//         colors: ['yellow', 'orange'],
//         isNew: true,
//         image: 'https://via.placeholder.com/550x350'
//       },
//       {
//         productId: 8,
//         name: 'Product 8',
//         text: 'Description for product 8',
//         colors: ['purple', 'pink'],
//         isNew: false,
//         image: 'https://via.placeholder.com/550x350'
//       },
//       {
//         productId: 9,
//         name: 'Product 9',
//         text: 'Description for product 9',
//         colors: ['red', 'blue'],
//         isNew: true,
//         image: 'https://api.lorem.space/image/watch?w=500&h=350'
//       },
//       {
//         productId: 10,
//         name: 'Product 10',
//         text: 'Description for product 10',
//         colors: ['purple', 'pink'],
//         isNew: false,
//         image: 'https://via.placeholder.com/560x350'
//       }
//     ]

function App(props){
    const colors =[
      {id:1,color:'red',name:'Kirmizi Işik'},
      {id:2,color:'orange',name:'Turuncu Işik'},
      {id:3,color:'green',name:'Yeşil Işik'}
    ];
const [activeLight,setActiveLight] = useState("");

    

    return(
        
        // <div className='container d-flex '>
        //     <div className='row'>
        //     {productList.map((info) => <div className='col-md-4 col-12' key={info.productId}> <ProductCard  isNew={info.isNew} colors={info.colors} description={info.text} name={info.name} image={info.image}></ProductCard></div> )}
        //     </div>
        // </div>
        <div className='container'>
          <div className='lights'>
             {colors.map((coloritem,index) => {
                return(
                  <div className='lights__red' key={index} style={{backgroundColor:coloritem.id === activeLight ? coloritem.color:""}}></div>
                )
              })}
            
          </div>
          <button className='lights__button1' onClick={() => setActiveLight(2)}>Hazir Ol!</button>
          <button className='lights__button2' onClick={() => setActiveLight(3)}>Geç!</button>
          <button className='lights__button3' onClick={() => setActiveLight(1)}>Dur!</button>
        </div>

        
    );
}


export default App