import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import { Home, Contact } from "./pages/index";
// Components
import { Header, Footer } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
