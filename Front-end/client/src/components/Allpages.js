import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layoute from "./Layoute";
import Home from "./Home/Home";
import BecomeTasker from './Pages/BecomeTasker/PagesBecome'
import Services from './Pages/Services/Services'
import Login from './Pages/Login/Login';
import Cleaner from './PagesHome/Cleaner'
import Electrician from './PagesHome/Electrician'
import Gardener from './PagesHome/Gardener'
import Mover from './PagesHome/Mover'
import Painter from './PagesHome/Painter'
import PopularServices from './PagesHome/PopularServices'
import Plumber from './PagesHome/Plumber'
import AdditionalServices from './PagesPlumber/AdditionalServices'
import Emergencies from './PagesPlumber/Emergencies'
import SystemInspection from './PagesPlumber/SystemInspection'
import HeatingSystems from './PagesPlumber/HeatingSystems'
import WaterHeaters from './PagesPlumber/WaterHeaters'
import Drainage from './PagesPlumber/Drainage'
import LeakRepair from './PagesPlumber/LeakRepair'
import WaterSystems from './PagesPlumber/WaterSystems'
import Layoute1 from "./Layoute1";
import Rojester from './Pages/Login/Rogester'
import Partnership from './Pages/Partnership/Partnership'


function Allpages() {
  return (
    <Router>
      <Routes>
      <Route path="/l1" element={<Layoute1 />} >
           <Route path="login" element={<Login />} />
           <Route path="services" element={<Services />} />
           <Route path="BecomeTasker" element={<BecomeTasker />} />
           <Route path="rogester" element={<Rojester />} />
           </Route> 

           <Route path="/" element={<Layoute />} >
           <Route path="/" element={<Home />} />
           <Route path="Cleaner" element={<Cleaner />} />
           <Route path="Electrician" element={<Electrician />} />
           <Route path="Gardener" element={<Gardener />} />
           <Route path="Mover" element={<Mover />} />
           <Route path="Painter" element={<Painter />} />
           <Route path="PopularServices" element={<PopularServices />} />
           <Route path="/Plumber" element={<Plumber />} />
           <Route path="AdditionalServices" element={<AdditionalServices />} />
           <Route path="Emergencies" element={<Emergencies />} />
           <Route path="SystemInspection" element={<SystemInspection />} />
           <Route path="HeatingSystems" element={<HeatingSystems />} />
           <Route path="WaterHeaters" element={<WaterHeaters />} />
           <Route path="Drainage" element={<Drainage />} />
           <Route path="LeakRepair" element={<LeakRepair />} />
           <Route path="WaterSystems" element={<WaterSystems />} />
           <Route path="partnership" element={<Partnership />} />


           </Route>
      </Routes>
    </Router>
  )
}

export default Allpages;
