import './App.css';
import Counter from './components/Counter';
import CounterFc from './components/CounterFc';
import WeatherCC from './components/WeatherCC';
import WeatherFC from './components/WeatherFC';
import HelloWorld from './HelloWorld';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      <WeatherCC />
      <WeatherCC status={ "parçalı bulutlu"} style={{backgroundColor:"orange",color:"white"}} />
      <WeatherFC />
      <WeatherFC status={"yağmurlu"} style={{ backgroundColor: "aqua", color: "yellow" }} />
      <Counter />
      <HomePage/>
    </div>
  );
}

export default App;
