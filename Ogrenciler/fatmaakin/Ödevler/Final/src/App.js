// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Home,Games,Register} from './pages/index'
import {Header,Footer} from './companents/index'

function App() {
  return (
  <BrowserRouter>
  <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/games' element={<Games/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
