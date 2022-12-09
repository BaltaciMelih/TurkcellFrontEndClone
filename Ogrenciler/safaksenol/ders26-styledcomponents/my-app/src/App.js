import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import styles from "./CustomStyle.module.css";

//Puana göre kalıp/geçme uygulaması
function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Şafak Şenol",
      status:"error",
      point: 49,
    },
    {
      id: 2,
      name: "Erdem Altun",
      status:"primary",
      point: 60,
    },
    {
      id: 3,
      name: "Enes Söl",
      status:"success",
      point: 85,
    },
    {
      id: 4,
      name: "Burak Gül",
      status:"primary",
      point: 48,
    },
  ]);
  //Puanlara göre sıralama işlemi fonksiyonları
  const a = [...data];
  const arrangement= a.sort((a, b) => a.point - b.point);
  const sortingProcess = a.sort((b, a) => b.point - a.point);

  const getStatus = (item) => {
    if (item.point < 50) {
      return "fail";
    } else {
      return "pass";
    } 
  };
    const Button = styled.button`
    color: #5c01a1;
    font-size: 20px;
    border: none;
    outline: none;
    padding: 8px 16px;
    cursor:pointer;
  `;
   const PrimaryButton = styled(Button)`
    color: #fff;
    background-color: #1901a1;
    font-size: ${(props) => (props.size ? `${props.size}px` : "20px")};
  `;
  return (
    <div className="App">
      {sortingProcess.map((item, index) => {
        return (
          <div key={index} className={`pointStatus ${getStatus(item)}`}>
            <p>
             İsim: {item.name}- Puan:{item.point}-Puan durumuna göre kalma/geçme: {getStatus(item)} 
            </p>
          </div>
        );
      })}
      <hr />
      <button className="customButton">Custom Deneme Butonu</button>
      <Button>Styled Deneme Butonu</Button>
      <PrimaryButton size="22">Primary Deneme Butonu</PrimaryButton>
      <hr />
      <div className={styles.moduleCss}>Merhaba FrontEnd</div>
      <button className={styles.customButton}>Selam ver Butonuyum</button>
      <hr />
      {data.map((item) => (
        <div className={styles[item.status]}>{item.name}</div>
      ))}
    </div>
  );
}

//Yaşa göre risk hesaplama uygulaması
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

export default App;

