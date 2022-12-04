import React, { Component } from 'react';
import "./App.css";
import DenemeClass from "./DenemeClass";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  state={
    foods:[]
   }
   async componentDidMount(){
 
        const baseUrl="http://localhost:3002/foods/";
        await fetch(baseUrl)
          .then((response) => response.json())
           .then((data) => this.setState({foods:data}))
           .catch((err) => console.log(err));
        }

   
    render() {
    return (
      <div className="App">
        <h1>Hoşgeldin  </h1>
        <DenemeClass 
        foods={this.state.foods}
        />
      </div>
    );
    }
}

export default App;
