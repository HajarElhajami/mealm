import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layoute from "./Layout";
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
import Layoute1 from "./Layout1";
import Rojester from './Pages/Login/Rogester'
import Partnership from './Pages/Partnership/PagesPartnership'
import WorkersPage from './Pages/WorkersPage/WorkersPage'
import RequestForm from './Pages/RequestForm/RequestForm'
import RightsPage from './Pages/RightsPage/RightsPage'


function Allpages() {
  return (
    <Router>
      <Routes>
      <Route path="/l1" element={<Layoute1 />} >
           <Route path="login" element={<Login />} />
           <Route path="services" element={<Services />} />
           <Route path="BecomeTasker" element={<BecomeTasker />} />
           <Route path="rogester" element={<Rojester />} />
           <Route path="partnership" element={<Partnership />} />
           <Route path="request" element={<RequestForm />} />
           <Route path="RightsPage" element={<RightsPage />} />


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
           <Route path="WorkersPage" element={<WorkersPage />} />


           </Route>
      </Routes>
    </Router>
  )
}

export default Allpages;
