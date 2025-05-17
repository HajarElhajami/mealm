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

function Allpages() {
  return (
    <Router>
      <Routes>
        {/* المسار الرئيسي */}
        <Route path="/" element={<Layout />}>
          {/* الصفحة الرئيسية */}
          <Route index element={<Home />} />
          
          {/* صفحة العامل (سيتم عرضها ضمن Home) */}
          <Route path="/:workerId" element={<Home />} />
          
          {/* صفحة التعديل */}
          <Route path="/:workerId/edit" element={<SectionEdit />} />
          
          {/* صفحة تسجيل الدخول */}
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Allpages;