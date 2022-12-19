
import './App.css';
import Home from "./pages/Home";
import Games from './pages/Games';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route path='/' element = {<Home/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/games' element = {<Games/>}/>
      <Route path='/register' element = {<Register/>}/>
     
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
