import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      age: 34,
    },
    {
      id: 1,
      age: 45,
    },
    {
      id: 1,
      age: 65,
    },
    {
      id: 1,
      age: 38,
    },
  ]);
  const getStatus = (item) => {
    if (item.age <= 40) {
      return "minimal";
    }
    if ((item.age = 50)) {
      return "medium";
    }
    // else(item.age >= 55) {
    //   return "high";
    // }
  };
  const Button = styled.button`
    color: #5c021;
    border: none;
    font-size: 20px;
    padding: 8px;
  `;
  const PrimaryButton = styled(Button)`
    color: #fff;
    background-color: #219;
    font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
  `;
  //props ile style gönderimi yapabilirsin.
  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div key={index} className={`riskStatus${getStatus(item)}`}>
            <p>
              Yaş durumana göre:{getStatus(item)}-Yaş{item.age}
            </p>
          </div>
        );
      })}
      <hr></hr>

      <button className="customButton">CustomButton</button>
      <Button>Styled Button</Button>
      <PrimaryButton size="30">Primary Button</PrimaryButton>
    </div>
  );
}

export default App;
