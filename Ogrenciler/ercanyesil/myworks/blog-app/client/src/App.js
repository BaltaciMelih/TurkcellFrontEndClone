import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import addArticle from './components/addArticle';
import articleList from './components/articleList';
import Title from './components/Title'

function App() {
  return (
    <BrowserRouter>
      <Title />
        <Routes>
          <Route exact path="/" component={articleList} />
          <Route path="/add" component={addArticle} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
