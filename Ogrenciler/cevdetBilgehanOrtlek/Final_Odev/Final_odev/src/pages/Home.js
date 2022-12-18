import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HomePage/Hero/Hero";
import Features from "../components/HomePage/Features/Features";
import Screens from "../components/HomePage/Screens/Screens";
import Games from "../components/HomePage/Games/Games";
import Options from "../components/HomePage/Options/Options";
import Blog from "../components/HomePage/Blog/Blog";
import Logo5 from "../components/HomePage/Logo5/Logo5";
import Footer from "../components/Footer/Footer";


function Home() {
  return <>      <Navbar navbarGizle="" />
    <Hero />
    <Features />
    <Screens />
    <Games />
    <Options />
    <Blog />
    <Logo5 />
    <Footer homeControl="d-flex" registerControl="d-none" /></>;
}

export default Home;
