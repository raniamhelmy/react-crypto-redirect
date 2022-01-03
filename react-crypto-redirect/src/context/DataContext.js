import React, {createContext, useContext ,useState } from 'react';

export const DataContext = createContext();

export default function DataContextProvider({children}) {
  const [isLoading, setIsLoading] = useState(true);
  const [coinList, setCoinList]=useState([]);
  const [searchTerm, setSearchTerm] = useState('a');
  let [query,setQuery]=useState('');
  const [path,setPath]=useState('');
   const [coin, setCoin]= useState([]);  
  
    
    return (
        <DataContext.Provider value={{ isLoading, setIsLoading, coinList, setCoinList, searchTerm, setSearchTerm,query,setQuery,path,setPath,coin, setCoin }}>
            {children}
        </DataContext.Provider>
    )
}
export const useGlobalContext = () => {
  return useContext(DataContext);
}
