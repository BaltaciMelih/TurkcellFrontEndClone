import React from "react";
import Slider from "../../components/carousel/Slider";
import Comp2 from "../../components/homepageComponents/Comp2";
import Comp3 from "../../components/homepageComponents/Comp3";
import Comp4 from "../../components/homepageComponents/Comp4";
import Comp5 from "../../components/homepageComponents/Comp5";
import Comp6 from "../../components/homepageComponents/Comp6";

const Home = () => {
  return (
    <div>
      <Slider />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <Comp6 />
    </div>
  );
};

export default Home;
