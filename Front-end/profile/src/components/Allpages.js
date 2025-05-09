import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layoute from "./Layout";
import Home from "./Home/Home";


function Allpages() {
  return (
    <Router>
      <Routes> 

           <Route path="/" element={<Layoute />} >
           <Route path="/" element={<Home />} />
         
      </Route>
      </Routes>
    </Router>
  )
}

export default Allpages;
