
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Search, Menu, X, Wrench, Plug, PaintRoller, TreePine, Truck, Flame } from "lucide-react";
// import { motion } from "framer-motion";
// import img1 from "../Image/1.png";
// import { Bell } from "lucide-react";



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
//             {/* Search Input */}
//             <div className="mt-16 flex items-center justify-center relative w-full px-4">
//               <input
//                 type="text"
//                 placeholder="ما الخدمة التي تحتاجها اليوم؟"
//                 className="w-full max-w-lg md:max-w-2xl px-6 pr-12 py-3 text-lg border border-primaryMid rounded-full shadow-sm text-black focus:ring-2 focus:ring-primaryMid focus:outline-none"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <button className="absolute right-4 md:right-[25%] bg-[#86C4B8] text-white p-3 sm:p-4 rounded-full hover:bg-[#406F67] transition">
//                 <Search size={20} />
//               </button>
//             </div>

//             {/* Search Results */}
//             {searchTerm && (
//               <div className="mt-8 bg-white p-6 rounded-lg shadow-lg text-right max-w-3xl mx-auto space-y-4 text-primaryDarkest">
//                 {searchTerm && (
//           <button onClick={() => setSearchTerm("")} className=" mr-[100%] text-gray-500 hover:text-gray-700">
//               <X size={20} />
//               </button>
//                )}
//                 <div>
//                   <h3 className="font-bold text-lg">المدن:</h3>
//                   {filteredCities.length > 0 ? (
//                     filteredCities.map((city, idx) => <p key={idx}>{city}</p>)
//                   ) : <p className="text-gray-500">لا توجد نتائج</p>}
//                 </div>

//                 <div>
//                   <h3 className="font-bold text-lg">الخدمات:</h3>
//                   {filteredServices.length > 0 ? (
//                     filteredServices.map((service, idx) => (
//                       <p key={idx}>{service.name}</p>
//                     ))
//                   ) : <p className="text-gray-500">لا توجد نتائج</p>}
//                 </div>

//                 <div>
//                   <h3 className="font-bold text-lg">العمال:</h3>
//                   {filteredWorkers.length > 0 ? (
//                     filteredWorkers.map(worker => (
//                       <div key={worker._id} className="border p-2 rounded shadow-sm">
//                         <p>👤 {worker.name}</p>
//                         <p>🔧 {worker.skill}</p>
//                         <p>🏙️ المدينة: {worker.city}</p>
//                         <p>📞 {worker.phone}</p>
//                       </div>
//                     ))
//                   ) : <p className="text-gray-500">لا توجد نتائج</p>}
//                 </div>
//               </div>
//             )}
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
import { Search, Menu, X, Wrench, Plug, PaintRoller, TreePine, Truck, Flame, Bell } from "lucide-react";
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
  const [cities, setCities] = useState([" الدار البيضاء ", " الرباط ", " مراكش "," وجدة " ," طنجة ", " تطوان " ," أكادير " ," مكناس " ," فاس " ," القنيطرة " ," سلا "]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [filteredWorkers, setFilteredWorkers] = useState([]);
  const [notificationCount, setNotificationCount] = useState(3); // حالة لعدد الإشعارات

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
        
        {/* زر الإشعارات للجوال */}
        <div className="flex items-center gap-4 md:hidden">
          <button className="text-primaryDarkest relative">
            <Bell size={24} />
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>
          <button className="text-primaryDarkest" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

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
        
        {/* القائمة لسطح المكتب */}
        <nav className="hidden md:flex space-x-8 gap-10 items-center">
        <button className="text-primaryDarkest relative hover:text-secondary transition">
            <Bell size={20} />
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>
          <Link to="/l1/services" className="text-[16px] text-primaryDarkest hover:text-secondary">الخدمات</Link>
          
          {/* زر الإشعارات لسطح المكتب */}
          {/* <button className="text-primaryDarkest relative hover:text-secondary transition">
            <Bell size={20} />
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button> */}
          
          <div>
            <Link to="/l1/login" className="text-[16px] text-primaryDarkest hover:text-secondary">تسجيل الدخول</Link>
            <span className="text-[16px] text-center text-primaryDarkest"> / </span>
            <Link to="/l1/rogester" className="text-[16px] text-primaryDarkest hover:text-secondary">التسجيل</Link>
          </div>
          <Link
            to="/l1/BecomeTasker"
            className="text-[16px] border border-secondary text-primaryDarkest px-4 py-2 rounded-lg hover:bg-gradient-to-r from-[#406F67] to-[#80C6A2] hover:text-white transition"
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
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Search, Menu, X, Wrench, Plug, PaintRoller, TreePine, Truck, Flame, Bell, CircleDot, User } from "lucide-react";import { motion } from "framer-motion";
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
//   const [cities, setCities] = useState([" الدار البيضاء ", " الرباط ", " مراكش "," وجدة " ," طنجة ", " تطوان " ," أكادير " ," مكناس " ," فاس " ," القنيطرة " ," سلا "]);
//   const [filteredCities, setFilteredCities] = useState([]);
//   const [filteredServices, setFilteredServices] = useState([]);
//   const [filteredWorkers, setFilteredWorkers] = useState([]);
  
//   // حالة الإشعارات
//   const [notifications, setNotifications] = useState([]);
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [isWorkerAccepted, setIsWorkerAccepted] = useState(false);

//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/worker/workers");
//         setWorkers(res.data.workers);
        
//         // تحقق من حالة القبول (في الواقع سيكون عبر API)
//         const accepted = localStorage.getItem('workerAccepted') === 'true';
//         setIsWorkerAccepted(accepted);
        
//         // جلب الإشعارات المناسبة للحالة
//         const initialNotifications = accepted ? [
//           {
//             id: 1,
//             title: "تم قبول طلبك!",
//             message: "مرحباً بك كعامل في منصة معلم. يمكنك الآن فتح حسابك الشخصي.",
//             date: new Date().toISOString().split('T')[0],
//             read: false,
//             type: "acceptance"
//           }
//         ] : [
//           {
//             id: 1,
//             title: "طلبك قيد المراجعة",
//             message: "نقوم بمراجعة طلب انضمامك وسنخبرك بالنتيجة قريباً",
//             date: "2023-10-08",
//             read: false,
//             type: "status"
//           }
//         ];
        
//         setNotifications(initialNotifications);
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

//   // محاكاة قبول العامل
//   const simulateAcceptance = () => {
//     const acceptanceNotification = {
//       id: Date.now(),
//       title: "تم قبول طلبك!",
//       message: "مرحباً بك كعامل في منصة معلم. يمكنك الآن فتح حسابك الشخصي.",
//       date: new Date().toISOString().split('T')[0],
//       read: false,
//       type: "acceptance"
//     };

//     setNotifications(prev => [acceptanceNotification, ...prev]);
//     localStorage.setItem('workerAccepted', 'true');
//     setIsWorkerAccepted(true);
//   };

//   // تحديد إذا كان هناك إشعارات غير مقروءة
//   const hasUnreadNotifications = notifications.some(n => !n.read);

//   // تعيين الإشعار كمقروء
//   const markAsRead = (id) => {
//     setNotifications(prev =>
//       prev.map(n => (n.id === id ? { ...n, read: true } : n))
//     );
//   };
//   return (
//     <div>
//       <header dir="rtl" className="flex items-center font-bold justify-between py-4 px-6 w-full relative">
//   <Link to="/" className="text-3xl hover:text-secondary text-primaryDarkest">معلم</Link>
  
//   <div className="flex items-center gap-4">
//     {/* زر الإشعارات في الموبايل وخارج القائمة */}
//     <button 
//       className="md:hidden text-primaryDarkest relative"
//       onClick={() => setShowNotifications(!showNotifications)}
//     >
//       <Bell size={24} />
//       {hasUnreadNotifications && (
//         <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//       )}
//     </button>
    
//     {/* زر القائمة للموبايل */}
//     <button className="md:hidden text-primaryDarkest" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//       {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
//     </button>
//   </div>

        
//         {/* القائمة المنسدلة للموبايل */}
//         {isMenuOpen && (
//           <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-lg z-50 p-4 md:hidden">
//             <nav className="flex flex-col space-y-4">
//               <Link to="/l1/services" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>الخدمات</Link>
              
//               {!isWorkerAccepted ? (
//                 <>
//                   <Link to="/l1/login" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>تسجيل الدخول</Link>
//                   <Link to="/l1/rogester" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>التسجيل</Link>
//                   <Link to="/l1/BecomeTasker" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>كن من العاملين في المهام</Link>
//                 </>
//               ) : (
//                 <Link to="/l1/profile" className="flex items-center gap-2 text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
//                   <User size={18} /> افتح حسابك
//                 </Link>
//               )}
              
//               {/* زر الإشعارات في الموبايل */}
//               {/* <button 
//                 className="flex items-center gap-2 text-primaryDarkest hover:text-secondary relative"
//                 onClick={() => {
//                   setShowNotifications(!showNotifications);
//                   setIsMenuOpen(true);
//                 }}
//               >
//                 <Bell size={20} />
//                 الإشعارات
//                 {hasUnreadNotifications && (
//                   <span className="absolute right-6 top-0 w-2 h-2 bg-red-500 rounded-full"></span>
//                 )}
//               </button> */}
//             </nav>
            
//             {/* قائمة الإشعارات في الموبايل */}
//             {/* {showNotifications && (
//               <div className="mt-4 bg-gray-50 p-3 rounded-lg">
//                 <h4 className="font-semibold mb-2">الإشعارات</h4>
//                 {notifications.length > 0 ? (
//                   notifications.map(notification => (
//                     <div 
//                       key={notification.id} 
//                       className={`p-2 mb-2 rounded ${!notification.read ? 'bg-blue-50' : ''}`}
//                       onClick={() => markAsRead(notification.id)}
//                     >
//                       <div className="flex items-start gap-2">
//                         {notification.type === 'acceptance' && (
//                           <CircleDot size={16} className="text-green-500 mt-1 flex-shrink-0" />
//                         )}
//                         <div>
//                           <p className="font-medium">{notification.title}</p>
//                           <p className="text-sm text-gray-600">{notification.message}</p>
//                           <p className="text-xs text-gray-400">{notification.date}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-500 text-sm">لا توجد إشعارات</p>
//                 )}
//               </div>
//             )} */}
            
//             <hr />
//             {services.map((service, index) => {
//               const IconComponent = service.icon;
//               return (
//                 <Link
//                   key={index}
//                   to={service.link}
//                   className="flex items-center space-x-2 gap-2 text-primaryDarkest hover:text-secondary md:hidden"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {typeof IconComponent === "string" ? (
//                     <img src={IconComponent} alt={service.name} className="w-6 h-6" />
//                   ) : (
//                     <IconComponent size={24} />
//                   )}
//                   <span>{service.name}</span>
//                 </Link>
//               );
//             })}
//           </div>
//         )}
        
//         {/* القائمة الرئيسية للكمبيوتر */}
//         <nav className="hidden md:flex space-x-8 gap-10 items-center">
//           <Link to="/l1/services" className="text-[16px] text-primaryDarkest hover:text-secondary">الخدمات</Link>
          
//           {/* زر الإشعارات */}
//           <div className="relative">
//             <button 
//               className="p-2 rounded-full hover:bg-gray-100 relative"
//               onClick={() => setShowNotifications(!showNotifications)}
//             >
//               <Bell size={20} />
//               {hasUnreadNotifications && (
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//               )}
//             </button>
            
//             {/* قائمة الإشعارات */}
//             {showNotifications && (
//               <div className="absolute right-0 mt-2 w-80 bg-white shadow-xl rounded-lg z-50 border border-gray-200">
//                 <div className="p-3 border-b border-gray-200 flex justify-between items-center">
//                   <h3 className="font-semibold">الإشعارات</h3>
//                   <Link 
//                     to="/l1/notifications" 
//                     className="text-xs text-blue-500 hover:text-blue-700"
//                     onClick={() => setShowNotifications(false)}
//                   >
//                     عرض الكل
//                   </Link>
//                 </div>
                
//                 <div className="max-h-96 overflow-y-auto">
//                   {notifications.length > 0 ? (
//                     notifications.map(notification => (
//                       <div
//                         key={notification.id}
//                         className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition ${
//                           !notification.read ? 'bg-blue-50' : ''
//                         }`}
//                         onClick={() => markAsRead(notification.id)}
//                       >
//                         <div className="flex items-start gap-2">
//                           {notification.type === 'acceptance' && (
//                             <CircleDot size={16} className="text-green-500 mt-1 flex-shrink-0" />
//                           )}
//                           <div>
//                             <p className="font-medium">{notification.title}</p>
//                             <p className="text-sm text-gray-600">{notification.message}</p>
//                             <p className="text-xs text-gray-400">{notification.date}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <div className="p-4 text-center text-gray-500">لا توجد إشعارات</div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
          
//           {/* حالة المستخدم */}
//           {!isWorkerAccepted ? (
//             <>
//               <div>
//                 <Link to="/l1/login" className="text-[16px] text-primaryDarkest hover:text-secondary">تسجيل الدخول</Link>
//                 <span className="text-[16px] text-center text-primaryDarkest"> / </span>
//                 <Link to="/l1/rogester" className="text-[16px] text-primaryDarkest hover:text-secondary">التسجيل</Link>
//               </div>
//               <Link
//                 to="/l1/BecomeTasker"
//                 className="text-[16px] border border-secondary text-primaryDarkest px-4 py-2 rounded-lg hover:bg-primaryDarkest hover:text-white transition"
//                 onClick={simulateAcceptance} // في الواقع سيتم عبر API
//               >
//                 كن من العاملين في المهام
//               </Link>
//             </>
//           ) : (
//             <Link
//               to="/l1/profile"
//               className="text-[16px] border border-secondary text-primaryDarkest px-4 py-2 rounded-lg hover:bg-primaryDarkest hover:text-white transition"
//             >
//               افتح حسابك
//             </Link>
//           )}
//         </nav>
//       </header>
//       <hr className="border-[#94D1C3]" />
//       <div>
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
//             {/* Search Input */}
//             <div className="mt-16 flex items-center justify-center relative w-full px-4">
//               <input
//                 type="text"
//                 placeholder="ما الخدمة التي تحتاجها اليوم؟"
//                 className="w-full max-w-lg md:max-w-2xl px-6 pr-12 py-3 text-lg border border-primaryMid rounded-full shadow-sm text-black focus:ring-2 focus:ring-primaryMid focus:outline-none"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <button className="absolute right-4 md:right-[25%] bg-[#86C4B8] text-white p-3 sm:p-4 rounded-full hover:bg-[#406F67] transition">
//                 <Search size={20} />
//               </button>
//             </div>

//             {/* Search Results */}
//             {searchTerm && (
//               <div className="mt-8 bg-white p-6 rounded-lg shadow-lg text-right max-w-3xl mx-auto space-y-4 text-primaryDarkest">
//                 {searchTerm && (
//           <button onClick={() => setSearchTerm("")} className=" mr-[100%] text-gray-500 hover:text-gray-700">
//               <X size={20} />
//               </button>
//                )}
//                 <div>
//                   <h3 className="font-bold text-lg">المدن:</h3>
//                   {filteredCities.length > 0 ? (
//                     filteredCities.map((city, idx) => <p key={idx}>{city}</p>)
//                   ) : <p className="text-gray-500">لا توجد نتائج</p>}
//                 </div>

//                 <div>
//                   <h3 className="font-bold text-lg">الخدمات:</h3>
//                   {filteredServices.length > 0 ? (
//                     filteredServices.map((service, idx) => (
//                       <p key={idx}>{service.name}</p>
//                     ))
//                   ) : <p className="text-gray-500">لا توجد نتائج</p>}
//                 </div>

//                 <div>
//                   <h3 className="font-bold text-lg">العمال:</h3>
//                   {filteredWorkers.length > 0 ? (
//                     filteredWorkers.map(worker => (
//                       <div key={worker._id} className="border p-2 rounded shadow-sm">
//                         <p>👤 {worker.name}</p>
//                         <p>🔧 {worker.skill}</p>
//                         <p>🏙️ المدينة: {worker.city}</p>
//                         <p>📞 {worker.phone}</p>
//                       </div>
//                     ))
//                   ) : <p className="text-gray-500">لا توجد نتائج</p>}
//                 </div>
//               </div>
//             )}
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

