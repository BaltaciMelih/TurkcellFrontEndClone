import React from "react";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
  const nav = useNavigate();
  return (
    <div>
      Anasayfa <br />
      <button onClick={() => nav("/user")}>User Sayfasina git</button>
    </div>
  );
};

export default HomeView;