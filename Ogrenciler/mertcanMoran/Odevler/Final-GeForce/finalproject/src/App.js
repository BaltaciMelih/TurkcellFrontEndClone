import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import GamesPage from "./pages/GamesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/games" element={<GamesPage />} />
        <Route exact path="/register" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
