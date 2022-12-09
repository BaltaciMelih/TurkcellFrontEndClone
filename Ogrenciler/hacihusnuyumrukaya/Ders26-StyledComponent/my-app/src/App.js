import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import styles from "./CustomStyle.module.css";

function App() {


    const [data, setData] = useState([
      {
        id: 1,
        name: "Hacı Hüsnü Yumrukaya",
        status:"success",
        grade: 100,
      },
      {
        id: 2,
        name: "Hacı Hüsnü Yumrukaya",
        status:"primary",
        grade: 75,
      },
      {
        id: 3,
        name: "Hacı Hüsnü Yumrukaya",
        status:"error",
        grade: 40,
      },
      {
        id: 4,
        name: "Hacı Hüsnü Yumrukaya",
        status:"success",
        grade: 95,
      },
    ]);

    const a = [...data];
    const order2= data.sort((a, b) => a.grade - b.grade); //bütükten kücüğe
    const order = a.sort((b, a) => a.grade - b.grade); //küçükten büyüğe
    const getStatus = (item) => {
      if (item.grade < 50) {
        return "low";
      }  
      if (item.grade < 78) {
        return "mid";
      }
      if (item.grade <= 100) {
        return "high";
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
      font-size: ${(props) => (props.size ? `${props.size}px` : "24px")};
    `;
    return (
      <div className="App">
        {order.map((item, index) => {
          return (
            <div key={index} className={`riskStatus ${getStatus(item)}`}>
              <p>
                {item.name}- {item.grade}-kalma/geçme: {getStatus(item)} 
              </p>
            </div>
          );
        })}
         {order2.map((item, index) => {
          return (
            <div key={index} className={`riskStatus ${getStatus(item)}`}>
              <p>
                {item.name}- {item.grade}-e kalma/geçme: {getStatus(item)} 
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
  
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     name: "Varol",
  //     status: "success",
  //     age: 65,
  //   },
  //   {
  //     id: 2,
  //     name: "Şafak",
  //     status: "error",
  //     age: 30,
  //   },
  //   {
  //     id: 3,
  //     name: "Tansu",
  //     status: "success",
  //     age: 50,
  //   },
  //   {
  //     id: 4,
  //     name: "Erdem",
  //     status: "primary",
  //     age: 40,
  //   },
  // ]);
  // const getStatus = (item) => {
  //   if (item.age <= 40) {
  //     return "minimal";
  //   }
  //   if (item.age <= 50) {
  //     return "medium";
  //   }
  //   if (item.age > 50) {
  //     return "high";
  //   }
  // };
  // const Button = styled.button`
  //   color: #5c01a1;
  //   font-size: 20px;
  //   border: none;
  //   outline: none;
  //   padding: 8px 16px;
  // `;
  // const PrimaryButton = styled(Button)`
  //   color: #fff;
  //   background-color: #1901a1;
  //   font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
  // `;

  // return (
  //   <div className="App">
  //     {data.map((item, index) => {
  //       return (
  //         <div key={index} className={`riskStatus ${getStatus(item)}`}>
  //           <p>
  //             Yaş Durumuna Göre Risk: {getStatus(item)} - Yaş: {item.age}
  //           </p>
  //         </div>
  //       );
  //     })}
  //     <hr />
  //     <button className="customButton">Custom Button</button>
  //     <Button>Styled Button</Button>
  //     <PrimaryButton size="30">Primary Button</PrimaryButton>
  //     <hr />
  //     <div className={styles.moduleCss}>Merhaba</div>
  //     <button className={styles.customButton}>Selam</button>
  //     <hr />
  //     {data.map((item) => (
  //       <div className={styles[item.status]}>{item.name}</div>
  //     ))}
  //   </div>
  // );
}

export default App;
