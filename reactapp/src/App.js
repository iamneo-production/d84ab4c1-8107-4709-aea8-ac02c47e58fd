import './App.css';
import Order from './components/Order';
 import React from "react";
 import Header from './components/Header';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = ()=>{
  return(
    <div>
          <div><Header></Header></div>
    <Router> 
    <Routes>
    <Route exact path="/" element={<Order/>} />
    {/* <Route path="/orders" element={<Order />} /> */}
    </Routes>
    </Router>
    </div>
      
  )

}

export default App;
