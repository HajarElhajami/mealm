
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Search, Menu, X, Wrench, Plug, PaintRoller, TreePine, Truck, Flame } from "lucide-react";
// import { motion } from "framer-motion";
// import img1 from "../Image/1.png";

// const services = [
//   { name: "سباك", icon: Wrench, link: "/plumber" },
//   { name: "كهربائي", icon: Plug, link: "/electrician" },
//   { name: "صباغ", icon: PaintRoller, link: "/painter" },
//   { name: "عمال النظافة", icon: img1, link: "/cleaner" },
//   { name: "بستاني", icon: TreePine, link: "/gardener" },
//   { name: "نقل وحمل الأغراض", icon: Truck, link: "/mover" },
//   { name: "الخدمات الأكثر طلبًا", icon: Flame, link: "/popularServices" },
// ];

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div>
//       <header dir="rtl" className="flex items-center font-bold justify-between py-4 px-6 w-full relative">
//         <Link to="/" className="text-3xl hover:text-secondary text-primaryDarkest">معلم</Link>
//          <button className="md:hidden text-primaryDarkest" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
//         </button>
//       {isMenuOpen && (
//         <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-lg z-50 p-4 md:hidden">
//           <nav className="flex flex-col space-y-4">
//             <Link to="/l1/services" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
//               الخدمات
//             </Link>
//             <Link to="/l1/login" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
//              تسجيل الدخول
//            </Link>
//            <Link to="/l1/rogester" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
//             التسجيل
//            </Link>
//            <Link to="/l1/BecomeTasker" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
//             كن من العاملين في المهام
//           </Link>
//           <hr />
//       {services.map((service, index) => {
//         const IconComponent = service.icon;
//         return (
//           <Link
//             key={index}
//             to={service.link}
//             className="flex items-center space-x-2 gap-2 text-primaryDarkest hover:text-secondary md:hidden"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             {typeof IconComponent === "string" ? (
//               <img src={IconComponent} alt={service.name} className="w-6 h-6" />
//             ) : (
//               <IconComponent size={24} />
//             )}
//             <span>{service.name}</span>
//           </Link>
//            );
//          })}
//          </nav>
//         </div>
//         )}
//         <nav className="hidden md:flex space-x-8 gap-10 items-center">
//           <Link to="/l1/services" className="text-[16px] text-primaryDarkest hover:text-secondary">الخدمات </Link>
//           <div>
//             <Link to="/l1/login" className="text-[16px] text-primaryDarkest hover:text-secondary">تسجيل الدخول</Link>
//             <span className="text-[16px] text-center text-primaryDarkest"> / </span>
//             <Link to="/l1/rogester" className="text-[16px] text-primaryDarkest hover:text-secondary">التسجيل</Link>
//           </div>
//           <Link
//             to="/l1/BecomeTasker"
//             className="text-[16px] border border-secondary text-primaryDarkest px-4 py-2 rounded-lg hover:bg-primaryDarkest hover:text-white transition"
//           >
//             كن من العاملين في المهام
//           </Link>
//         </nav>
//       </header>
//       <hr className="border-[#94D1C3]" />
//        <div>
//            <div className="relative overflow-hidden">
//              <div className="relative w-full overflow-hidden">
//                <motion.div
//                 className="absolute -top-10 -left-10 w-96 h-96 rounded-full"
//                 style={{
//                   background: "linear-gradient(135deg, #CFF5EC, #94D1C3)",
//                 }}
//                 animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
//                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//               />
      
//               <motion.div
//                 className="absolute top-20 right-20 w-80 h-80 rounded-full"
//                 style={{
//                   background: "linear-gradient(135deg, #86C4B8, #A9E7DA)",
//                 }}
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//               />
      
//               <motion.div
//                 className="absolute bottom-[10%] left-32 w-40 h-40 rounded-full"
//                 style={{
//                   background: "linear-gradient(135deg, #406F67, #CFF5EC)",
//                 }}
//                 animate={{ scale: [1, 1.3, 1] }}
//                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//               />
      
//               <div className="absolute right-10 bottom-[17%] grid grid-cols-4 gap-8">
//                 {[...Array(16)].map((_, i) => (
//                   <div key={i} className="w-2 h-2 bg-primaryDarkest rounded-full"></div>
//                 ))}
//               </div>
      
//               <div className="absolute top-20 right-20 grid grid-cols-3 gap-5">
//                 {[...Array(9)].map((_, i) => (
//                   <div key={i} className="w-2 h-2 bg-light rounded-full"></div>
//                 ))}
//               </div>
      
//               <div className="relative z-10 text-center pt-16 px-6 md:px-20">
//                 <h1 className="text-4xl md:text-5xl font-bold text-primaryDarkest">
//                   خدمات سريعة وموثوقة.. في <br /> <br /> أي وقت وبكل سهولة
//                 </h1>

//              <div className="mt-16 flex items-center justify-center relative w-full px-4">
//               <input
//                 type="text"
//                 placeholder="ما الخدمة التي تحتاجها اليوم؟"
//                 className="w-full max-w-lg md:max-w-2xl px-6 pr-12 py-3 text-lg border border-primaryMid rounded-full shadow-sm text-black focus:ring-2 focus:ring-primaryMid focus:outline-none"
//               />
//               <button className="absolute right-4 md:right-[25%] bg-[#86C4B8] text-white p-3 sm:p-4 rounded-full hover:bg-[#406F67] transition">
//                 <Search size={20} />
//               </button>
//              </div>
      
//                 <div className=" hidden md:block md:flex justify-center space-x-[88px] mt-20 ">
                  
//                   {services.map((service, index) => {
//                     const IconComponent = service.icon;
//                     return (
//                       <Link
//                         key={index}
//                         to={service.link} 
//                         className="flex flex-col font-bold items-center text-gray-700 hover:text-primaryDarkest transition"
//                       >
//                         {typeof IconComponent === 'string' ? ( 
//                           <img src={IconComponent} alt={service.name} className="hover:text-primaryDarkest w-[43px] h-[43px]" />
//                         ) : (
//                           <IconComponent size={42} /> 
//                         )}<br/>
//                         <span className="text-font-bold text-[18px]">{service.name}</span>
//                       </Link>
//                     );
//                   })}
//                 </div>
//                 <hr className="border-[#94D1C3] my-12" />
//               </div>
//             </div>
//            </div>
//           </div>
//          </div>
//   );
// }

// export default Header;

























import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Search, Menu, X, Wrench, Plug, PaintRoller, TreePine, Truck, Flame } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../Image/1.png";


const services = [
  { name: "سباك", icon: Wrench, link: "/plumber" },
  { name: "كهربائي", icon: Plug, link: "/electrician" },
  { name: "صباغ", icon: PaintRoller, link: "/painter" },
  { name: "عمال النظافة", icon: img1, link: "/cleaner" },
  { name: "بستاني", icon: TreePine, link: "/gardener" },
  { name: "نقل وحمل الأغراض", icon: Truck, link: "/mover" },
  { name: "الخدمات الأكثر طلبًا", icon: Flame, link: "/popularServices" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [workers, setWorkers] = useState([]);
  const [cities, setCities] = useState([" الدار البيضاء ", " الرباط ", " مراكش "," وجدة " ," طنجة ", " تطوان " ," أكادير " ," مكناس " ," فاس " ," القنيطرة " ," سلا "
  ]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [filteredWorkers, setFilteredWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/worker/workers");
        setWorkers(res.data.workers);
      } catch (err) {
        console.error("خطأ في جلب العمال:", err);
      }
    };
    fetchWorkers();
  }, []);

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();

    setFilteredCities(
      cities.filter(city => city.toLowerCase().includes(lowerSearch))
    );

    setFilteredServices(
      services.filter(service => service.name.toLowerCase().includes(lowerSearch))
    );

    setFilteredWorkers(
      workers.filter(worker =>
        worker.name.toLowerCase().includes(lowerSearch) ||
        worker.skill.toLowerCase().includes(lowerSearch) ||
        worker.city?.toLowerCase().includes(lowerSearch)

      )
    );
  }, [searchTerm, workers]);

  return (
    <div>
      <header dir="rtl" className="flex items-center font-bold justify-between py-4 px-6 w-full relative">
        <Link to="/" className="text-3xl hover:text-secondary text-primaryDarkest">معلم</Link>
         <button className="md:hidden text-primaryDarkest" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-lg z-50 p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link to="/l1/services" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
              الخدمات
            </Link>
            <Link to="/l1/login" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
             تسجيل الدخول
           </Link>
           <Link to="/l1/rogester" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
            التسجيل
           </Link>
           <Link to="/l1/BecomeTasker" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
            كن من العاملين في المهام
          </Link>
          <hr />
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <Link
            key={index}
            to={service.link}
            className="flex items-center space-x-2 gap-2 text-primaryDarkest hover:text-secondary md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            {typeof IconComponent === "string" ? (
              <img src={IconComponent} alt={service.name} className="w-6 h-6" />
            ) : (
              <IconComponent size={24} />
            )}
            <span>{service.name}</span>
          </Link>
           );
         })}
         </nav>
        </div>
        )}
        <nav className="hidden md:flex space-x-8 gap-10 items-center">
          <Link to="/l1/services" className="text-[16px] text-primaryDarkest hover:text-secondary">الخدمات </Link>
          <div>
            <Link to="/l1/login" className="text-[16px] text-primaryDarkest hover:text-secondary">تسجيل الدخول</Link>
            <span className="text-[16px] text-center text-primaryDarkest"> / </span>
            <Link to="/l1/rogester" className="text-[16px] text-primaryDarkest hover:text-secondary">التسجيل</Link>
          </div>
          <Link
            to="/l1/BecomeTasker"
            className="text-[16px] border border-secondary text-primaryDarkest px-4 py-2 rounded-lg hover:bg-primaryDarkest hover:text-white transition"
          >
            كن من العاملين في المهام
          </Link>
        </nav>
      </header>
      <hr className="border-[#94D1C3]" />
       <div>
           <div className="relative overflow-hidden">
             <div className="relative w-full overflow-hidden">
               <motion.div
                className="absolute -top-10 -left-10 w-96 h-96 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #CFF5EC, #94D1C3)",
                }}
                animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
      
              <motion.div
                className="absolute top-20 right-20 w-80 h-80 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #86C4B8, #A9E7DA)",
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
      
              <motion.div
                className="absolute bottom-[10%] left-32 w-40 h-40 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #406F67, #CFF5EC)",
                }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
      
              <div className="absolute right-10 bottom-[17%] grid grid-cols-4 gap-8">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primaryDarkest rounded-full"></div>
                ))}
              </div>
      
              <div className="absolute top-20 right-20 grid grid-cols-3 gap-5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-light rounded-full"></div>
                ))}
              </div>
      
              <div className="relative z-10 text-center pt-16 px-6 md:px-20">
                <h1 className="text-4xl md:text-5xl font-bold text-primaryDarkest">
                  خدمات سريعة وموثوقة.. في <br /> <br /> أي وقت وبكل سهولة
                </h1>
            {/* Search Input */}
            <div className="mt-16 flex items-center justify-center relative w-full px-4">
              <input
                type="text"
                placeholder="ما الخدمة التي تحتاجها اليوم؟"
                className="w-full max-w-lg md:max-w-2xl px-6 pr-12 py-3 text-lg border border-primaryMid rounded-full shadow-sm text-black focus:ring-2 focus:ring-primaryMid focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-4 md:right-[25%] bg-[#86C4B8] text-white p-3 sm:p-4 rounded-full hover:bg-[#406F67] transition">
                <Search size={20} />
              </button>
            </div>

            {/* Search Results */}
            {searchTerm && (
              <div className="mt-8 bg-white p-6 rounded-lg shadow-lg text-right max-w-3xl mx-auto space-y-4 text-primaryDarkest">
                {searchTerm && (
          <button onClick={() => setSearchTerm("")} className=" mr-[100%] text-gray-500 hover:text-gray-700">
              <X size={20} />
              </button>
               )}
                <div>
                  <h3 className="font-bold text-lg">المدن:</h3>
                  {filteredCities.length > 0 ? (
                    filteredCities.map((city, idx) => <p key={idx}>{city}</p>)
                  ) : <p className="text-gray-500">لا توجد نتائج</p>}
                </div>

                <div>
                  <h3 className="font-bold text-lg">الخدمات:</h3>
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service, idx) => (
                      <p key={idx}>{service.name}</p>
                    ))
                  ) : <p className="text-gray-500">لا توجد نتائج</p>}
                </div>

                <div>
                  <h3 className="font-bold text-lg">العمال:</h3>
                  {filteredWorkers.length > 0 ? (
                    filteredWorkers.map(worker => (
                      <div key={worker._id} className="border p-2 rounded shadow-sm">
                        <p>👤 {worker.name}</p>
                        <p>🔧 {worker.skill}</p>
                        <p>🏙️ المدينة: {worker.city}</p>
                        <p>📞 {worker.phone}</p>
                      </div>
                    ))
                  ) : <p className="text-gray-500">لا توجد نتائج</p>}
                </div>
              </div>
            )}
                <div className=" hidden md:block md:flex justify-center space-x-[88px] mt-20 ">
                  
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={index}
                        to={service.link} 
                        className="flex flex-col font-bold items-center text-gray-700 hover:text-primaryDarkest transition"
                      >
                        {typeof IconComponent === 'string' ? ( 
                          <img src={IconComponent} alt={service.name} className="hover:text-primaryDarkest w-[43px] h-[43px]" />
                        ) : (
                          <IconComponent size={42} /> 
                        )}<br/>
                        <span className="text-font-bold text-[18px]">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
                <hr className="border-[#94D1C3] my-12" />
              </div>
            </div>
           </div>
          </div>
         </div>
  );
}

export default Header;

























































// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Search, Menu, X, Wrench, Plug, PaintRoller, TreePine, Truck, Flame } from "lucide-react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import img1 from "../Image/1.png";

// const services = [
//   { name: "سباك", icon: Wrench, link: "/plumber" },
//   { name: "كهربائي", icon: Plug, link: "/electrician" },
//   { name: "صباغ", icon: PaintRoller, link: "/painter" },
//   { name: "عمال النظافة", icon: img1, link: "/cleaner" },
//   { name: "بستاني", icon: TreePine, link: "/gardener" },
//   { name: "نقل وحمل الأغراض", icon: Truck, link: "/mover" },
//   { name: "الخدمات الأكثر طلبًا", icon: Flame, link: "/popularServices" },
// ];

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [workers, setWorkers] = useState([]);
//   const [cities, setCities] = useState([" الدار البيضاء ", " الرباط ", " مراكش "," وجدة " ," طنجة ", " تطوان " ," أكادير " ," مكناس " ," فاس " ," القنيطرة " ," سلا "
//   ]);
//   const [filteredCities, setFilteredCities] = useState([]);
//   const [filteredServices, setFilteredServices] = useState([]);
//   const [filteredWorkers, setFilteredWorkers] = useState([]);

//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/worker/workers");
//         setWorkers(res.data.workers);
//       } catch (err) {
//         console.error("خطأ في جلب العمال:", err);
//       }
//     };
//     fetchWorkers();
//   }, []);

//   useEffect(() => {
//     const lowerSearch = searchTerm.toLowerCase();

//     setFilteredCities(
//       cities.filter(city => city.toLowerCase().includes(lowerSearch))
//     );

//     setFilteredServices(
//       services.filter(service => service.name.toLowerCase().includes(lowerSearch))
//     );

//     setFilteredWorkers(
//       workers.filter(worker =>
//         worker.name.toLowerCase().includes(lowerSearch) ||
//         worker.skill.toLowerCase().includes(lowerSearch) ||
//         worker.city?.toLowerCase().includes(lowerSearch)

//       )
//     );
//   }, [searchTerm, workers]);

//   return (
//     <div>
//       {/* Header */}
//       <header dir="rtl" className="flex items-center font-bold justify-between py-4 px-6 w-full relative">
//         <Link to="/" className="text-3xl hover:text-secondary text-primaryDarkest">معلم</Link>
//         <button className="md:hidden text-primaryDarkest" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
//         </button>
//         {isMenuOpen && (
//           <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-lg z-50 p-4 md:hidden">
//             <nav className="flex flex-col space-y-4">
//               <Link to="/l1/services" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>الخدمات</Link>
//               <Link to="/l1/login" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>تسجيل الدخول</Link>
//               <Link to="/l1/rogester" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>التسجيل</Link>
//               <Link to="/l1/BecomeTasker" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>كن من العاملين في المهام</Link>
//               <hr />
//               {services.map((service, index) => {
//                 const IconComponent = service.icon;
//                 return (
//                   <Link key={index} to={service.link} className="flex items-center space-x-2 gap-2 text-primaryDarkest hover:text-secondary md:hidden">
//                     {typeof IconComponent === "string" ? (
//                       <img src={IconComponent} alt={service.name} className="w-6 h-6" />
//                     ) : (
//                       <IconComponent size={24} />
//                     )}
//                     <span>{service.name}</span>
//                   </Link>
//                 );
//               })}
//             </nav>
//           </div>
//         )}
//         <nav className="hidden md:flex space-x-8 gap-10 items-center">
//           <Link to="/l1/services" className="text-[16px] text-primaryDarkest hover:text-secondary">الخدمات</Link>
//           <div>
//             <Link to="/l1/login" className="text-[16px] text-primaryDarkest hover:text-secondary">تسجيل الدخول</Link>
//             <span className="text-[16px] text-center text-primaryDarkest"> / </span>
//             <Link to="/l1/rogester" className="text-[16px] text-primaryDarkest hover:text-secondary">التسجيل</Link>
//           </div>
//           <Link to="/l1/BecomeTasker" className="text-[16px] border border-secondary text-primaryDarkest px-4 py-2 rounded-lg hover:bg-primaryDarkest hover:text-white transition">كن من العاملين في المهام</Link>
//         </nav>
//       </header>

//       <hr className="border-[#94D1C3]" />

//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="relative w-full overflow-hidden">
//           {/* Bubbles Animation */}
//           <motion.div className="absolute -top-10 -left-10 w-96 h-96 rounded-full" style={{ background: "linear-gradient(135deg, #CFF5EC, #94D1C3)" }} animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} />
//           <motion.div className="absolute top-20 right-20 w-80 h-80 rounded-full" style={{ background: "linear-gradient(135deg, #86C4B8, #A9E7DA)" }} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />
//           <motion.div className="absolute bottom-[10%] left-32 w-40 h-40 rounded-full" style={{ background: "linear-gradient(135deg, #406F67, #CFF5EC)" }} animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} />

//           {/* Title & Search */}
//           <div className="relative z-10 text-center pt-16 px-6 md:px-20">
//             <h1 className="text-4xl md:text-5xl font-bold text-primaryDarkest">
//               خدمات سريعة وموثوقة.. <br /><br /> في أي وقت وبكل سهولة
//             </h1>

          //   {/* Search Input */}
          //   <div className="mt-16 flex items-center justify-center relative w-full px-4">
          //     <input
          //       type="text"
          //       placeholder="ما الخدمة التي تحتاجها اليوم؟"
          //       className="w-full max-w-lg md:max-w-2xl px-6 pr-12 py-3 text-lg border border-primaryMid rounded-full shadow-sm text-black focus:ring-2 focus:ring-primaryMid focus:outline-none"
          //       value={searchTerm}
          //       onChange={(e) => setSearchTerm(e.target.value)}
          //     />
          //     <button className="absolute right-4 md:right-[25%] bg-[#86C4B8] text-white p-3 sm:p-4 rounded-full hover:bg-[#406F67] transition">
          //       <Search size={20} />
          //     </button>
          //   </div>

          //   {/* Search Results */}
          //   {searchTerm && (
          //     <div className="mt-8 bg-white p-6 rounded-lg shadow-lg text-right max-w-3xl mx-auto space-y-4 text-primaryDarkest">
          //       {searchTerm && (
          // <button onClick={() => setSearchTerm("")} className=" mr-[100%] text-gray-500 hover:text-gray-700">
          //     <X size={20} />
          //     </button>
          //      )}
          //       <div>
          //         <h3 className="font-bold text-lg">المدن:</h3>
          //         {filteredCities.length > 0 ? (
          //           filteredCities.map((city, idx) => <p key={idx}>{city}</p>)
          //         ) : <p className="text-gray-500">لا توجد نتائج</p>}
          //       </div>

          //       <div>
          //         <h3 className="font-bold text-lg">الخدمات:</h3>
          //         {filteredServices.length > 0 ? (
          //           filteredServices.map((service, idx) => (
          //             <p key={idx}>{service.name}</p>
          //           ))
          //         ) : <p className="text-gray-500">لا توجد نتائج</p>}
          //       </div>

          //       <div>
          //         <h3 className="font-bold text-lg">العمال:</h3>
          //         {filteredWorkers.length > 0 ? (
          //           filteredWorkers.map(worker => (
          //             <div key={worker._id} className="border p-2 rounded shadow-sm">
          //               <p>👤 {worker.name}</p>
          //               <p>🔧 {worker.skill}</p>
          //               <p>🏙️ المدينة: {worker.city}</p>
          //               <p>📞 {worker.phone}</p>
          //             </div>
          //           ))
          //         ) : <p className="text-gray-500">لا توجد نتائج</p>}
          //       </div>
          //     </div>
          //   )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
