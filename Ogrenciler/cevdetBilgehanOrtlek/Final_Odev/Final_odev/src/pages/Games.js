import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Games() {
  return (
    <>
      <Navbar navbarGizle="" />
      <div>Games</div>
      <Footer homeControl="d-flex" registerControl="d-none" />
    </>
  );
}

export default Games;
