import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layoute from "./Layout";
import Home from "./Home/Home";
import SectionEdit from "./Settings/SectionEdit";
import Login from './Home/Login'


function Allpages() {
  return (
    <Router>
      <Routes> 

           <Route path="/" element={<Layoute />} >
           <Route path="/" element={<Home />} />
           <Route path="/SectionEdit" element={<SectionEdit />} />
           <Route path="/Login" element={<Login />} />

      </Route>
      </Routes>
    </Router>
  )
}

export default Allpages;
