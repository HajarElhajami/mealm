// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layoute from "./Layout";
// import Home from "./Home/Home";
// import SectionEdit from "./Settings/SectionEdit";
// import Login from './Home/Login'



// function Allpages() {
//   return (
//     <Router>
//       <Routes> 

//            <Route path="/" element={<Layoute />} >
//            <Route path="/:workerId" element={<Home />} />
//            <Route path="/:workerId/edit" element={<SectionEdit />} />
//            <Route path="/Login" element={<Login />} />

//       </Route>
//       </Routes>
//     </Router>
//   )
// }

// export default Allpages;























import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import SectionEdit from "./Settings/SectionEdit";
import Login from './Home/Login';
import WorksGallery  from './Pages/WorksGallery'
import Layoute1 from './Layoute1'




function Allpages() {
  return (
    <Router>
      <Routes>

      <Route path="/l1" element={<Layoute1 />} >
          <Route path="Login" element={<Login />} />

           

       </Route> 

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:workerId" element={<Home />} />
          <Route path="/:workerId/edit" element={<SectionEdit />} />
          <Route path="/worksGallery " element={<WorksGallery  />} />


          {/* <Route path="/login" element={<Login />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default Allpages;