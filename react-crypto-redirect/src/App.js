import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home.js"
import ScrollTop from './components/ScrollTop.js'
import SingleCoin from "./pages/SingleCoin.js"

function App() {
  return (
    <div>
       <Router>
        <ScrollTop/>
        <Switch>

           <Route exact path="/"  component= {Home} />
           <Route path="/coin/:id"  component= {SingleCoin} />

        </Switch>
      </Router>


      
    </div>
  );
}

export default App;
