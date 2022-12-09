import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Ali",
      gender: "male",
      age: 65,
      point: 50 
    },
    {
      id: 2,
      name: "Veli",
      gender: "male",
      age: 20,
      point: 60
    },
    {
      id: 3,
      name: "Zeynep",
      gender: "female",
      age: 60,
      point: 10
    },
    {
      id: 4,
      name: "Kübra",
      gender: "female",
      age: 10,
      point: 80
    },
  ]);

  //SORT
  const sort = data.sort((a,b) => a.age - b.age)
  //FİLTER
  const filter = data.filter((f) => f.age > 55 ? f.gender : false )
  
  //SOME
  const some = filter.some((s) => s.gender === "famale");
  console.log(some)
  // const someFilter = somee.filter((f) => f.age > 55 ? f.name : false )
  

  const getStatus = (item) => {
    if (item.age <= 40) {
      return "minimal";
    }
    if (item.age <= 50) {
      return "medium";
    }
    if (item.age > 50) {
      return "high";
    }
  };
  const getNote = (element) => {
    if (element.point > 70) {
      return "Successful"
    }
    else if (element.point >= 50 && element.point <= 70 ) {
      return "normal";
    }
    else {
      return "abortive";
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
      {sort.map((item, index) => {
        return (
          <div key={index} className={`riskStatus ${getStatus(item)}`}>
            <p>
              Yaş Durumuna Göre Risk: {getStatus(item)} - Yaş: {item.age}
            </p>
          </div>
        );
      })}
      {filter.map((item, index) => {
        return (
          <div key={index} className={`getNote ${getNote(item)}`}>
            <p>
              Yaşlı kişi puan: {getNote(item)} - İsim: {item.name}
            </p>
          </div>
        );
      })}
      {some.map((item, index) => {
        return (
          <div key={index} className={`getNote ${getNote(item)}`}>
            <p>
              Yaşlı kişi puan: {getNote(item)} - İsim: {item.name}
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
}

export default App;