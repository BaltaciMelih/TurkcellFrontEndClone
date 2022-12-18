import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes} from "react-router-dom";
//Pages
import {Home, Games, Register} from "./pages";
//Components
import {Header, Footer} from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/games" element={ <Games/> } />
          <Route path="/register" element={ <Register/> } />
        </Routes>
      <Footer/>
      </BrowserRouter>     
    </>
  );
}

export default App;