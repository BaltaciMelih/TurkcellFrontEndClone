import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import styles from "./CustomStyle.module.css";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "mertcan",
      status: "error",
      grade: 45,
    },
    {
      id: 2,
      name: "burak",
      status: "primary",
      grade: 30,
    },
    {
      id: 3,
      name: "berat",
      status: "success",
      grade: 90,
    },
    {
      id: 4,
      name: "fatma",
      status: "success",
      grade: 70,
    },
  ]);

  const a = [...data];
  const sorted = data.sort((a, b) => a.grade - b.grade);
  const sorted2 = a.sort((a, b) => b.grade - a.grade);

  // console.log(sorted);
  const getGrades = (item) => {
    if (item.grade <= 40) {
      return "dd";
    }
    if (item.grade <= 50) {
      return "cc";
    }
    if (item.grade <= 70) {
      return "bb";
    }
    if (item.grade > 80) {
      return "aa";
    }
  };

  const Button = styled.button`
    color: #5c01a1;
    font-size: 20px;
    border: none;
    outline: none;
    padding: 8px 16px;
  `;
  const PrimaryButton = styled(Button)`
    color: #fff;
    background-color: #1901a1;
    font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
  `;
  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div key={index} className={`gradeStatus ${getGrades(item)}`}>
            <p>
              Sonuca göre harf notu: {getGrades(item)} - Grade: {item.grade}
            </p>
          </div>
        );
      })}
      <hr />
      <button className="customButton">Custom Button</button>
      <Button>Styled Button</Button>
      <PrimaryButton size="30">Primary Button</PrimaryButton>
      <hr />
      <div className={styles.moduleCss}>Merhaba</div>
      <button className={styles.customButton}>Selam</button>
      <hr />
      {data.map((item) => (
        <div className={styles[item.status]}>{item.name}</div>
      ))}
    </div>
  );
  // return (
  //   <div className="App">
  //     {sorted.map((item, index) => {
  //       return (
  //         <div key={index} className={`gradeStatus ${getGrades(item)}`}>
  //           <p>
  //             Sınav sonucuna göre harf notu: {getGrades(item)} - Name:
  //             {item.name} - Grade: {item.grade}
  //           </p>
  //         </div>
  //       );
  //     })}
  //     <br />
  //     {sorted2.map((item, index) => {
  //       return (
  //         <div key={index} className={`gradeStatus ${getGrades(item)}`}>
  //           <p>
  //             Sınav sonucuna göre harf notu: {getGrades(item)} - Name:
  //             {item.name} - Grade: {item.grade}
  //           </p>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default App;
