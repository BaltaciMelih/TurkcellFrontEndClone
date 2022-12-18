import {useState,React} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import GamesBanner from '../Components/GamesBanner/gamesBanner';
import BrowseGames from '../Components/BrowseGames/BrowseGames';
import { useEffect } from 'react';
import Axios from "axios";
import  Footer  from '../Components/Footer/Footer';
import SearchButton from '../Components/SearchButton/SearchButton';


function Games() {
  // const [Products, setProducts] = useState([])
  // const [Skip, setSkip] = useState(0)
  // const [Limit, setLimit] = useState(8)
  // const [Filters,setFilters] = useState({
  //   gameGenres:[]
  // })
  // useEffect(() => {
  //   const variables = {
  //     skip: Skip,
  //     limit: Limit,
  //   }
  //   // getProducts(variables)
  // },[])
  // // const getProducts = (variables) => {
  // //   Axios.post('http://localhost:3004/data',variables)
  // //   .then(response => {
  // //     if (response.data.success){
  // //       setProducts([...Products, ...response.data.products])
  // //     } else {
  // //       alert('Hata oluştu.')
  // //     }
  // //   })
  // // }

  // const showFilteredResults = (filters) => {
    
  //   const variables = {
  //     skip: 0,
  //     limit: Limit,
  //     filters: filters
  //   }
  //   //  getProducts(variables)
  //   setSkip(0)
  // }

  // const handleFilters = (filters, category) => {
  //     console.log(filters)
  //     const newFilters = {...Filters}

  //     newFilters[category] = filters
      
  //     showFilteredResults(newFilters)
  //     setFilters(newFilters)

  //   }
  return (
    <div>
        <Navbar/>
        <SearchButton/>
        {/* <GamesBanner handleFilters={filters => handleFilters(filters,"gameGenres")}/> */}
        <BrowseGames/>
        <Footer/>

    </div>
  )
}

export default Games