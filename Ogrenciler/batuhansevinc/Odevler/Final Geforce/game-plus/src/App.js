import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Register from './Pages/Register';
import Games from './Pages/Games';
function App() {
 
 return (
<BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/register' element= {<Register/>} />
      <Route path='/Games' element= {<Games/>} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;
