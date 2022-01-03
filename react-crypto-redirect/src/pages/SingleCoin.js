import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useGlobalContext } from "../context/DataContext.js"
import Loading from '../components/Loading';
import './SingleCoin.css';

import * as IoIcons from 'react-icons/io';

const url = 'https://api.coingecko.com/api/v3/coins/';
 


const Print = () => {
    const { coin } = useGlobalContext();
    const { image, market_data } = coin;
    function isExist(arg) {
      try {
        return arg();
      } catch (e) {
        return false;
      }
    }
  
    return (
      <>
        <div className="the--total">
          <div className="coin-data">
            <h1 className="coin-data-title">{coin.name} </h1>
          </div>
          <div className="grid--info">
            <div className="coin--image">
              <img
                src={image ? isExist(() => image.large.toString()) : undefined} alt ={`${coin.name}`}/>
            </div>
            <div className="grid--info--data">
              <p>
                <span className="span--col">Name: </span>
                <span className="co">{coin.name}</span>
              </p>
              <p>
                <span className="span--col">Symbol: </span>
                <span className="co">{coin.symbol}</span>
              </p>
  
              {coin.asset_platform_id === null ? (
                <p>
                  <span className="span--col">Asset Platform: </span>
                  <span className="co"> &nbsp; -</span>
                </p>
              ) : (
                <p>
                  <span className="span--col">Asset Platform: </span>
                  <span className="co">{coin.asset_platform_id}</span>
                </p>
              )}
  
              <p className="co">
                <span className="span--col">Market Cap Rank: </span>#
                {coin.market_cap_rank}
              </p>
  
              <p>
                <span className="span--col">Block Time in Minute: </span>
                <span className="co">{coin.block_time_in_minutes}</span>
              </p>
  
              {coin.genesis_date == null ? (
                <p>
                  <span className="span--col">Genesis Date: </span> &nbsp; -
                </p>
              ) : (
                <p>
                  <span className="span--col">Genesis Date: </span>
                  <span className="co">{coin.genesis_date}</span>
                </p>
              )}
            </div>
          </div>
  
          <div className="data--two">
            <p>
              <span className="span--col">Current Price: </span>
              <span className="co">
                $
                {isExist(() =>
                  market_data.current_price.usd.toLocaleString().toString()
                )}
              </span>
            </p>
  
            <p className="co">
              <span className="span--col">Change Percentage: </span>
              {isExist(() =>
                market_data.ath_change_percentage.usd.toFixed(2).toString()
              ) < 0 ? (
                <span className="co">
                  <span className="red">
                    <IoIcons.IoMdArrowDropdown />
                    {isExist(() =>
                      market_data.ath_change_percentage.usd.toFixed(2).toString()
                    )}
                    %
                  </span>
                </span>
              ) : (
                <span className="co">
                  <span className="green">
                    <IoIcons.IoMdArrowDropup />
                    {isExist(() =>
                      market_data.ath_change_percentage.usd.toFixed(2).toString()
                    )}
                    %
                  </span>
                </span>
              )}
            </p>
  
            <p>
              <span className="span--col">Market Cap: </span>
              <span className="co">
                $
                {isExist(() =>
                  market_data.market_cap.usd.toLocaleString().toString()
                )}
              </span>
            </p>
  
            <p>
              <span className="span--col">Total Volume: </span>
              <span className="co">
                $
                {isExist(() =>
                  market_data.total_volume.usd.toLocaleString().toString()
                )}
              </span>
            </p>
  
            <p>
              <span className="span--col">24h High: </span>
              <span className="co">
                $
                {isExist(() =>
                  market_data.high_24h.usd.toLocaleString().toString()
                )}
              </span>
            </p>
  
            <p>
              <span className="span--col">24h Low: </span>
              <span className="co">
                $
                {isExist(() =>
                  market_data.low_24h.usd.toLocaleString().toString()
                )}
              </span>
            </p>
          </div>
  
          <div className="data--three">
            <p className="co">
              <span className="span--col">Price Change in 24h: </span>
              {isExist(() => market_data.price_change_24h) < 0 ? (
                <span className="red">
                  <IoIcons.IoMdArrowDropdown /> $
                  {isExist(() =>
                    market_data.price_change_24h.toLocaleString().toString()
                  )}
                </span>
              ) : (
                <span className="green">
                  <IoIcons.IoMdArrowDropup /> $
                  {isExist(() =>
                    market_data.price_change_24h.toLocaleString().toString()
                  )}
                </span>
              )}
            </p>
  
            <p className="co">
              <span className="span--col">Price Change % in 24h: </span>
              {isExist(() => market_data.price_change_percentage_24h) < 0 ? (
                <span className="red">
                  <IoIcons.IoMdArrowDropdown />
                  {isExist(() =>
                    market_data.price_change_percentage_24h
                      .toLocaleString()
                      .toString()
                  )}
                  %
                </span>
              ) : (
                <span className="green">
                  <IoIcons.IoMdArrowDropup />
                  {isExist(() =>
                    market_data.price_change_percentage_24h
                      .toLocaleString()
                      .toString()
                  )}
                  %
                </span>
              )}
            </p>
  
            <p className="co">
              <span className="span--col">Price Change % in 7d: </span>
              {isExist(() => market_data.price_change_percentage_7d) < 0 ? (
                <span className="red">
                  <IoIcons.IoMdArrowDropdown />
                  {isExist(() =>
                    market_data.price_change_percentage_7d
                      .toLocaleString()
                      .toString()
                  )}
                  %
                </span>
              ) : (
                <span className="green">
                  <IoIcons.IoMdArrowDropup />
                  {isExist(() =>
                    market_data.price_change_percentage_7d
                      .toLocaleString()
                      .toString()
                  )}
                  %
                </span>
              )}
            </p>
  
            <p className="co">
              <span className="span--col">Price Change % in 14d: </span>
              {isExist(() => market_data.price_change_percentage_14d) < 0 ? (
                <span className="red">
                  <IoIcons.IoMdArrowDropdown />
                  {isExist(() =>
                    market_data.price_change_percentage_14d
                      .toLocaleString()
                      .toString()
                  )}
                  %
                </span>
              ) : (
                <span className="green">
                  <IoIcons.IoMdArrowDropup />
                  {isExist(() =>
                    market_data.price_change_percentage_14d
                      .toLocaleString()
                      .toString()
                  )}
                  %
                </span>
              )}
            </p>
     
          </div>
  
          <div className="footer">
            <div className="nav--footer">
              <p className="span--col">Price Change in 24h: </p>
              <p className="span--col">Price Change % in 24h: </p>
              <p className="span--col">Price Change % in 7d: </p>
              <p className="span--col">Price Change % in 14d: </p>
            </div>
            <div className="footer--data">
              <p className="co doub">
                {isExist(() => market_data.price_change_24h) < 0 ? (
                  <span className="red">
                    <IoIcons.IoMdArrowDropdown /> $
                    {isExist(() =>
                      market_data.price_change_24h.toLocaleString().toString()
                    )}
                  </span>
                ) : (
                  <span className="green">
                    <IoIcons.IoMdArrowDropup /> $
                    {isExist(() =>
                      market_data.price_change_24h.toLocaleString().toString()
                    )}
                  </span>
                )}
              </p>
  
              <p className="co doub">
                {isExist(() => market_data.price_change_percentage_24h) < 0 ? (
                  <span className="red">
                    <IoIcons.IoMdArrowDropdown />
                    {isExist(() =>
                      market_data.price_change_percentage_24h
                        .toLocaleString()
                        .toString()
                    )}
                    %
                  </span>
                ) : (
                  <span className="green">
                    <IoIcons.IoMdArrowDropup />
                    {isExist(() =>
                      market_data.price_change_percentage_24h
                        .toLocaleString()
                        .toString()
                    )}
                    %
                  </span>
                )}
              </p>
  
              <p className="co doub">
                {isExist(() => market_data.price_change_percentage_7d) < 0 ? (
                  <span className="red">
                    <IoIcons.IoMdArrowDropdown />
                    {isExist(() =>
                      market_data.price_change_percentage_7d
                        .toLocaleString()
                        .toString()
                    )}
                    %
                  </span>
                ) : (
                  <span className="green">
                    <IoIcons.IoMdArrowDropup />
                    {isExist(() =>
                      market_data.price_change_percentage_7d
                        .toLocaleString()
                        .toString()
                    )}
                    %
                  </span>
                )}
              </p>
  
              <p className="co doub">
                {isExist(() => market_data.price_change_percentage_14d) < 0 ? (
                  <span className="red">
                    <IoIcons.IoMdArrowDropdown />
                    {isExist(() =>
                      market_data.price_change_percentage_14d
                        .toLocaleString()
                        .toString()
                    )}
                    %
                  </span>
                ) : (
                  <span className="green">
                    <IoIcons.IoMdArrowDropup />
                    {isExist(() =>
                      market_data.price_change_percentage_14d
                        .toLocaleString()
                        .toString()
                    )}
                    %
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="button-container">
            <Link  to="/" className="link--coin but">
              {' '}
              Home
            </Link>
          </div>
        </div>
      </>
    );
  };
  

export default function SingleCoin() {
  const { path, isLoading, setIsLoading, setCoin } =
    useGlobalContext();

    useEffect(() => {
    /*get();*/
    getCoin();
  }, []);

  const getCoin = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${url}${path}`);
      setCoin(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="colo-col">
        {isLoading ? <Loading /> : <Print />}
      </div>
    </>
  );
}
