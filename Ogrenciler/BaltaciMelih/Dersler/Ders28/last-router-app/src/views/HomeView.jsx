import React from "react";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
  const link = useNavigate();
  return (
    <div>
      Anasayfa <br />
      <button onClick={() => link("/user")}>User Sayfasına git</button>
    </div>
  );
};

export default HomeView;
