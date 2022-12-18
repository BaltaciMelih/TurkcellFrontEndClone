import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';
import Router from './routes/Router'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (  
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
