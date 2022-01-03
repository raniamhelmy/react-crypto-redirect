import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../context/DataContext.js"
import Loading from "./Loading"
import "./CoinList.css"

 function CoinList() {
  const {isLoading, coinList, searchTerm,setPath}=  useGlobalContext();

  let counter =0;
  const allCoins = coinList.filter(coin =>{ counter++;return (
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()))}
    );
  

  const coinOne = allCoins.map((item) => {
          const {id,image,symbol,name,current_price,price_change_percentage_24h,market_cap,market_cap_rank} = item
  
          return {
            id,
            name,
            image,
            symbol,
            currentprice: current_price,
            priceChange:price_change_percentage_24h,
            mcap: market_cap,
            mcapRank: market_cap_rank,
          }
        })

if(coinOne.length < 1 && counter!==0){
    return(
      <h4 className="no-coin">Sorry, No Coin to Display</h4>
    )}
   
 return (
     <div className="coinlist">
      { isLoading ? <Loading/> :coinOne.map((ing, index) => {    
          return(
             <div key={index}>
              <Link className='link--coin' to={`/coin/${ing.id}`} onClick={() => setPath(ing.id)}>
                <div className="each--coin--container" >
                   <img className="each--coin--img" src={ing.image} alt={ing.name}/>
                    <p className="header">{ing.name}</p>
                    <p className="color">{ing.symbol}</p>
                    {ing.priceChange === null ? '': ing.priceChange < 0 ? (
                        <p className="red">
                          {ing.priceChange.toFixed(2)}%
                        </p>
                      ) : (
                          <p className="green">
                            {ing.priceChange.toFixed(2)}%
                          </p>
                        )}
                    <p className="color">${ing.currentprice.toLocaleString()}</p>
                    <p className="color"><span className='title'>Mkt Cap:$</span> {ing.mcap.toLocaleString()}</p>
                    <p className="header"><span className='title'>#</span> {ing.mcapRank}</p>
                    
                </div>
                  </Link>
             </div>
         )}
    )}
       
            
            
    </div>
    )
}

export default CoinList;