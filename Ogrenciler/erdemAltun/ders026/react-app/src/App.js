import "./App.css";
import { useState } from "react";

// function App() {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       age: 65,
//     },
//     {
//       id: 2,
//       age: 30,
//     },
//     {
//       id: 3,
//       age: 50,
//     },
//     {
//       id: 4,
//       age: 40,
//     },
//   ]);
//   const getStatus = (item) => {
//     if (item.age <= 40) {
//       return "minimal";
//     }
//     if (item.age <= 50) {
//       return "medium";
//     }
//     if (item.age > 50) {
//       return "high";
//     }
//   };
//   return (
//     <div className="App">
//       {data.map((item, index) => {
//         return (
//           <div key={index} className={`riskStatus ${getStatus(item)}`}>
//             <p>
//               Yaş Durumuna Göre Risk: {getStatus(item)} - Yaş: {item.age}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Erdem",
      point: 65,
    },
    {
      id: 2,
      name: "Şafak",
      point: 49,
    },
    {
      id: 3,
      name: "Burak",
      point: 51,
    },
    {
      id: 4,
      name: "Enes",
      point: 100,
    },
    {
      id: 6,
      name: "Melih",
      point: 82,
    },
    {
      id: 5,
      name: "Varol",
      point: 35,
    },
  ]);
  const sorted = data.sort((a, b) => a.point - b.point);

  const getStatus = (item) => {
    if (item.point < 50) {
      return "Kaldı";
    } else {
      return "Geçti";
    }
  };
  return (
    <div className="App">
      {sorted.map((item, index) => {
        return (
          <div key={index} className={`pointStatus ${getStatus(item)}`}>
            <p>
              İsim: {item.name} - Puan: {item.point} Puana Göre Geçme Kalma:{" "}
              {getStatus(item)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
