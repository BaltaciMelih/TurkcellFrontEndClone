import React,{Component} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { Home, Login, Product,Admin } from "../../pages/index";
class Router extends Component {
    state={
    products:[],
  
     }
     async componentDidMount(){
  
          const response=await axios.get("http://localhost:3002/products");
          console.log(response);
          this.setState({products:response.data})
         
          }
  
          render() {
            return (
              <div>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Home products={this.state.products}/>}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/admin" element={<Admin products={this.state.products}/>}></Route>
                    <Route path="/product" element={<Product  products={this.state.products}/>}></Route>
                  </Routes>
                </BrowserRouter>
              </div>
            );
          }
  }
  
  export default Router;
  