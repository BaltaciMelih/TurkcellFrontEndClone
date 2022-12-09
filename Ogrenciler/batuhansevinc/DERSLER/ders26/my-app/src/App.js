// import './App.css';
// import {useState} from 'react';


// function App() {
//  const [data,setData] = useState([
//   {
//     id:1,
//     age:65,
//   },
//   {
//     id:2,
//     age:30,
//   },
//   {
//     id:3,
//     age:50,
//   },
//   {
//     id:4,
//     age:40,
//   }
//  ])
//  const getStatus = item => {
//   if (item.age <= 40){
//     return "minimal"
//   }
//   if (item.age <= 50){
//     return "minimal"
//   }
//   if (item.age >= 50){
//     return "minimal"
//   }
//  }


// return <div className='App'>

//   {data.map((item,index) =>{
//   return( <div key={index} className={`riskStatus ${getStatus(item)}`}>
//     <p> Yaş durumuna göre risk: {getStatus(item)} - yaş: {item.age} </p>
//     </div>
//   )
//   })}
// </div>



// }

// export default App;


// öğrenci listemiz olsun aldığı puana göre kalanlar kırmızı geçenler yeşil olsun


import './App.css';
import {useState} from 'react';

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      not: 65,
    },
    {
      id: 2,
      not: 30,
    },
    {
      id: 3,
      not: 50,
    },
    {
      id: 4,
      not: -20,
    },
  ]);
  const getStatus = (item) => {
    if ( item.not>= 0 && item.not < 50) {
      return 'basarisiz';
    }
    else if (item.not >= 50) {
      return "basarili";
  }
  else {
    return 'gecersiz';
  }
}
const siralama =(data) =>{
   sonuc = data.sort(function(a,b){
    return  a.not - b.not
  })
  
}
return (
  <div className="App">
    {data.map((item, index) => {
      return (
        <div key={item.id} className={`${getStatus(item)}`}>
            <p>
            
            </p>
        </div>
      );
    })}
  </div>
);
  }
export default App