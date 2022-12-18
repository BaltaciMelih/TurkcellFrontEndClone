import React,{Component} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home,Register,Games} from "../../pages/index";
class Router extends Component {
 
 
  
          render() {
            return (
              <div>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/games" element={<Games />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                  </Routes>
                </BrowserRouter>
              </div>
            );
          }
  }
  
  export default Router;
  