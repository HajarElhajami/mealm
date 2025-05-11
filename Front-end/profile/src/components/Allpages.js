import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layoute from "./Layout";
import Home from "./Home/Home";
import Settings from "./Settings/ClientSettings";


function Allpages() {
  return (
    <Router>
      <Routes> 

           <Route path="/" element={<Layoute />} >
           <Route path="/" element={<Home />} />
           <Route path="/settings" element={<Settings />} />

      </Route>
      </Routes>
    </Router>
  )
}

export default Allpages;
