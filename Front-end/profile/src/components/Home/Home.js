// import Section from "./Section";
// import  Services  from './Services';
// import Business from './Business';
// import Ratings from "./Ratings";
// import Slider from "./Slider";

// function Home() {
//     return (
//       <div dir="rtl" className="bg-gradient-to-br from-gray-50 to-gray-100 max-w-7xl mx-auto bg-white overflow-hidden font-sans">
//         <Section/> 
//         <Services/>
//         <Business/>
//         <Ratings/>
//         <Slider/>
//       </div>
//     );
//   }
  
//   export default Home;
  






































import React from "react";
import { useParams } from "react-router-dom";
import Section from "./Section";
import TrustPage from './TrustPage';
import Business from './Business';
import Ratings from "./Ratings";
import Slider from "./Slider";

function Home() {
  const { workerId } = useParams();

  return (
    <div dir="rtl" className="bg-gradient-to-br from-gray-50 to-gray-100 max-w-7xl mx-auto bg-white overflow-hidden font-sans">
      {/* نعرض مكون Section مع بيانات العامل إذا كان هناك workerId */}
      <Section workerId={workerId} />
      
      {/* نعرض باقي المكونات في جميع الحالات */}
      <TrustPage />
      <Business workerId={workerId}/>
      <Ratings  workerId={workerId}/>
      {/* <Slider /> */}
    </div>
  );
}

export default Home;
