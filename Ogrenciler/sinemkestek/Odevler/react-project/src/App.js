import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home, Admin, Login, Shop, ProductDetails, About } from "./pages/index";
import { Layout } from "./components/index";

function App() {
  return (
    <div className="App">
      <Layout></Layout>
    </div>
  );
}

export default App;
