import "./App.css";
import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import GamesPage from "./pages/GamesPage";

import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gamespage" element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
