import './App.css';
import { useState } from 'react';

function App() {
  const [data] = useState([
    {
      id: 1,
      score: 65
    },
    {
      id: 2,
      score: 30
    },
    {
      id: 3,
      score: 49
    },
    {
      id: 4,
      score: 100
    }
  ]);
  const getScore = item => {
    if(item.score < 50) {
      return "failed";
    }
    if(item.score >= 50) {
      return "passed";
    }
  }
  
  return (
    <div className="App">
      {data.sort((a, b) => (b.score-a.score)).map((item, index) => {
        return (
          <div key={index} className={`score ${getScore(item)}`}>
            <p>Result: {getScore(item)} - Score: {item.score}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
