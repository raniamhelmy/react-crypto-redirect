import React, {useEffect} from 'react'
import { useGlobalContext } from "../context/DataContext.js"
import"./Search.css"
import axios from 'axios'
import CoinList from "./CoinList"


const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

export default function Search( ) {
  const { setIsLoading, setCoinList, searchTerm, setSearchTerm}=  useGlobalContext();
  let {setQuery,query}=  useGlobalContext();
  

  const getCoinsList= async ()=>{
   setIsLoading(true);

   try{
      const response= await axios.get(`${url}`);      
      setCoinList(response.data);
      setIsLoading(false);

      }
      catch (error){
        console.log('Error happened:',error);
        setIsLoading(false);
      }
  
    }

const updateSearch= e =>{
  setSearchTerm(e.target.value);
  setQuery(e.target.value);
}

const getSearch= e =>{
  e.preventDefault();
  setQuery(searchTerm);
  query='';
  setQuery(query);
  setSearchTerm('');
  window.scrollTo(0, 0);

}


useEffect(()=>{
    /*Call get(); Function*/
    getCoinsList();
},[searchTerm,query]);


    return (
      <>
          <div className="search--container">
              
              <div className="coin_search">
                    <input className="coin_input" value={query} placeholder="Search By Coin Name..." onChange={updateSearch}/>
              </div>
          </div>

          <CoinList/>

          <div className="button-container">
                <form onSubmit={getSearch}>
                  <button className="but butt">Clear Search</button>
                </form>
          </div>
        
        
      </>
    )
}
