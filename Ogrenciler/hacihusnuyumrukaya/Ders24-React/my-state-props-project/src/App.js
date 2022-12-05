import React, { Component } from 'react';
import "./App.css";
import DenemeClass from "./DenemeClass";
import SearchBar from "./SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
class App extends Component {
  state={
    foods:[],

    searchFilter:""
   }
   async componentDidMount(){
 
        // const baseUrl="http://localhost:3002/foods/";
        // await fetch(baseUrl)
        //   .then((response) => response.json())
        //    .then((data) => this.setState({foods:data}))
        //    .catch((err) => console.log(err));
          //  const baseUrl="http://localhost:3002/foods/";
        const response=await axios.get("http://localhost:3002/foods");
        console.log(response);
        this.setState({foods:response.data})
        }

  // deleteFoods=(food)=>{
  //   const newFoodList=this.state.foods.filter(
  //     f=>f.id!==food.id
  //   );

  //  this.setState(state=>({
  //     foods:newFoodList
  //  }))
  // }

  //FETCH APİ
  // deleteFoods=async (food)=>{
  //   const baseUrl=`http://localhost:3002/foods/${food.id}`;
  //   await fetch(baseUrl,{
  //     method:"DELETE"
  //   })
  //   const newFoodList=this.state.foods.filter(
  //     f=>f.id!==food.id
  //   );

  //  this.setState(state=>({
  //     foods:newFoodList
  //  }))
  // }

  //AXİOS
  deleteFoods=async (food)=>{
    
    axios.delete(`http://localhost:3002/foods/${food.id}`);
    const newFoodList=this.state.foods.filter(
      f=>f.id!==food.id
    );

   this.setState(state=>({
      foods:newFoodList
   }))
  }



  searchFood=(event)=>{
    this.setState({searchFilter:event.target.value})
  }
    render() {

       let filteredFoods=this.state.foods.filter(
         (food)=>{
           return food.foodName.toLowerCase().indexOf(this.state.searchFilter.toLowerCase())!==-1
         }
       )
       console.log(filteredFoods);

    return (
      <div >
        <div className='container'>
          <div className='row'>
              <div className='col-lg-12'>
                <SearchBar
                searchFoodProps={this.searchFood}
                />
              </div>
          </div>
        </div>
        <DenemeClass 
        foods={filteredFoods}
        deleteFoodsProp={this.deleteFoods}
        />
      </div>
    );
    }
}

export default App;
