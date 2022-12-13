import React from "react";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
  const link = useNavigate();
  return (
    <div>
      ANASAYFA
      <br />
      <button onClick={() => link("/user")}>
        Kullanıcı-User sayfasına git
      </button>
    </div>
  );
};

export default HomeView;
