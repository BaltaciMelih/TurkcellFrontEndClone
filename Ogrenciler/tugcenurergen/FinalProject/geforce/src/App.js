import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import RegisterForm from "./pages/auth/RegisterForm";
import GamePage from "./pages/games/GamePage";
import Footer from "./components/footer/Footer";
import FooterDark from "./components/footer/FooterDark";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home  />}></Route>
        <Route path="/register" element={<RegisterForm  />} />
        <Route path="/games" element={<GamePage/>} />
      </Routes>
      <Footer />
      <FooterDark />
    </BrowserRouter>
  );
}

export default App;
