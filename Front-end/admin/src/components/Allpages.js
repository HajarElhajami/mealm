import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Layoute from "./Layoute";
import Users from "./Pages/Users/Users";
import Settings from "./Pages/Settings/Settings";
import Reviews from "./Pages/Reviews/Reviews";
import Orders from "./Pages/Orders/Orders";
import Clients from "./Pages/Clients/Clients";
import Customer from "./Pages/Customer/Customer";
import Partners from "./Pages/Partners/Partners";
import Messages from './Pages/Messages/Messages'


function Allpages() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Layoute />} >
              <Route index element={<Home />} />
              <Route path="users" element={<Users />}/>
              <Route path="settings" element={<Settings />}/>
              <Route path="reviews" element={<Reviews />}/>
              <Route path="orders" element={<Orders />}/>
              <Route path="clients" element={<Clients />}/>
              <Route path="customer/:id" element={<Customer />}/>
              <Route path="partners" element={<Partners />}/>
              <Route path="messages" element={<Messages />}/>

            </Route>
          </Routes>
    </Router>
  );
}

export default Allpages;
