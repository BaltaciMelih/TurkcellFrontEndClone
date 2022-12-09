// import logo from "./logo.svg";
import "./App.css";
import CardComp from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <CardComp
        cardTitle="Card 1"
        cardText="lorem ipsum 1"
        cardTime="1 Minute ago"
        image="https://picsum.photos/id/1/200/300"
      />
      <CardComp
        cardTitle="Card 2"
        cardText="lorem ipsum 2"
        cardTime="2 Minute ago"
        image="https://picsum.photos/id/10/200/300"
      />
      <CardComp
        cardTitle="Card 3"
        cardText="lorem ipsum 3"
        cardTime="3 Minute ago"
        image="https://picsum.photos/id/100/200/300"
      />
    </div>
  );
};

export default App;
