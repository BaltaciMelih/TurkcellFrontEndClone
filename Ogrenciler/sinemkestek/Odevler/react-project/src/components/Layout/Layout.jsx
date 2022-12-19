import React from "react";

import { Footer, Header } from "../index";
import Routers from "../../Routers/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
