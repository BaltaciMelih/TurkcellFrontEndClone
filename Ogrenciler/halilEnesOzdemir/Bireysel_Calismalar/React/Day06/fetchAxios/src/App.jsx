import { Route, Routes } from 'react-router-dom';
import AddUser from './fetchSample/AddCategory';
import AddCategoryWithAxios from './fetchSample/AddCategoryWithAxios';
import CategoryPost from './fetchSample/CategoryPost';
// import InputCategoryPost from './fetchSample/InputCategoryPost';
import UserList from './fetchSample/UserList';
import About from './routeSample/About';
import Contact from './routeSample/Contact';
import Footer from './routeSample/Footer';
import Header from './routeSample/Header';
import Homepage from './routeSample/Homepage';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/hakkimizda' element={<About />}></Route>
        <Route path='/iletisim' element={<Contact />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
