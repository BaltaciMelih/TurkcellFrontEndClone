import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import styles from "./CustomStyle.module.css";

function App() {
  const [data, setData] = useState([
    {
      name: "Bilgehan",
      surname: "Örtlek",
      status: "error",
      grade: 65,
    },
    {
      name: "Enes",
      surname: "Söl",
      status: "success",
      grade: 30,
    },
    {
      name: "Sinem",
      surname: "Kestek",
      status: "primary",
      grade: 50,
    },
    {
      name: "Emre",
      surname: "Karabay",
      grade: 40,
    },
    {
      name: "Varol",
      surname: "Maksutoğlu",
      grade: 100,
    },
    {
      name: "Serdar",
      surname: "Sanu",
      grade: 100,
    },
    {
      name: "Şafak",
      surname: "Şenol",
      grade: 38,
    },
    {
      name: "Erdem",
      surname: "Altun",
      grade: 60,
    },
    {
      name: "Hacı Hüsnü",
      surname: "Yumrukaya",
      grade: 80,
    },
  ]);

  const a = [...data];
  const sorted = a.sort((a, b) => a.grade - b.grade);
  const sortedReverse = a.sort((b, a) => b.grade - a.grade);

  const getStatus = (item) => {
    if (item.grade < 50) {
      return "failed";
    }
    if (item.grade >= 50) {
      return "passed";
    }
  };

  const letterGrade = (item) => {
    if (item.grade >= 95) {
      return "A1";
    }
    if (item.grade >= 90 && item.grade <= 94) {
      return "A2";
    }
    if (item.grade >= 85 && item.grade <= 89) {
      return "A3";
    }
    if (item.grade >= 80 && item.grade <= 84) {
      return "B1";
    }
    if (item.grade >= 75 && item.grade <= 79) {
      return "B2";
    }
    if (item.grade >= 70 && item.grade <= 74) {
      return "B3";
    }
    if (item.grade >= 65 && item.grade <= 69) {
      return "C1";
    }
    if (item.grade >= 60 && item.grade <= 64) {
      return "C2";
    }
    if (item.grade >= 55 && item.grade <= 59) {
      return "C3";
    }
    if (item.grade >= 50 && item.grade <= 54) {
      return "D";
    }
    if (item.grade < 50) {
      return "F3";
    }
  };

  const Button = styled.button`
    color: #5c01a1;
    font-size: 20px;
    border: none;
    outline: none;
    padding: 8px 16px;
    cursor: pointer;
  `;

  const PrimaryButton = styled(Button)`
    color: #fff;
    background-color: #1901a1;
    cursor: pointer;
    font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
  `;

  return (
    <>
      <div className="App">
        {sortedReverse.map((item, index) => {
          return (
            <div key={index} className={`classStatus ${getStatus(item)}`}>
              <p>
                Sınıf Geçme Durumu: {item.grade} - Ad Soyad:{" "}
                {item.name + " " + item.surname} - Harf Notu:{" "}
                {letterGrade(item)}
              </p>
            </div>
          );
        })}
        <hr />
        <button className="customButton">Custom Button</button>
        <Button>Styled Button</Button>
        <PrimaryButton size={30}>Styled Button</PrimaryButton>
        <hr />
        <div className={styles.moduleCss}>Merhaba</div>
        <button className={styles.customButton}>Selamlar</button>
        <hr />
        {data.map((item) => (
          <div className={styles[item.status]}>{item.name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
