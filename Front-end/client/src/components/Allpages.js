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
import Layoute1 from "./Layoute1";
import Rojester from './Pages/Login/Rogester'
import Partnership from './Pages/Partnership/PagesPartnership'
import WorkersPage from './Pages/WorkersPage/WorkersPage'
import RequestForm from './Pages/RequestForm/RequestForm'
import ProfilePage1 from './Pages/profile/profilePage1'
// import ProfileHeader from './Pages/profile/ProfileHeader'
// import ProfileGallery from './Pages/profile/ProfileGallery'
import UserProfileForm from './Pages/profile/UserProfileForm'
import Layoute2 from './Layoute2'


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
           {/* <Route path="profilePage1" element={<ProfilePage1 />} /> */}
           {/* <Route path="profileHeader" element={<ProfileHeader />} />
           <Route path="profileGallery" element={<ProfileGallery />} />
           <Route path="profileReviews" element={<ProfileReviews />} /> */}
           {/* <Route path="userProfileForm" element={<UserProfileForm />} /> */}

           </Route> 

           <Route path="/l2" element={<Layoute2 />} >
           {/* <Route path="login" element={<Login />} />
           <Route path="services" element={<Services />} />
           <Route path="BecomeTasker" element={<BecomeTasker />} />
           <Route path="rogester" element={<Rojester />} /> */}
           <Route path="profilePage1" element={<ProfilePage1 />} />
           <Route path="userProfileForm" element={<UserProfileForm />} />

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
