
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Search, Menu, X, Wrench, Plug, PaintRoller, TreePine, Truck, Flame } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../Image/1.png";
import { Bell } from "lucide-react";



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
                        {/* <p>📞 {worker.phone}</p> */}
                      </div>
                    ))
                  ) : <p className="text-gray-500">لا توجد نتائج</p>}
                </div>
              </div>
            )} <motion.div
            className="hidden md:flex justify-center gap-16 mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center group"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={service.link}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-[#94D1C3] to-[#406F67] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      {typeof IconComponent === "string" ? (
                        <img src={IconComponent} alt={service.name} className="w-12 h-12" />
                      ) : (
                        <IconComponent size={42} />
                      )}
                    </motion.div>
                    <span className="mt-4 text-[18px] font-bold text-[#2a5a52] group-hover:text-[#406F67] transition-colors">
                      {service.name}
                    </span>
                  </Link>
                </motion.div>
                 );
                })}
              </motion.div>
                <hr className="border-[#94D1C3] my-16" />
              </div>
            </div>
           </div>
          </div>
         </div>
  );
}

export default Header;













// <div className=" hidden md:block md:flex justify-center space-x-[88px] mt-20 ">
                  
// {services.map((service, index) => {
//   const IconComponent = service.icon;
//   return (
//     <Link
//       key={index}
//       to={service.link} 
//       className="flex flex-col font-bold items-center text-gray-700 hover:text-primaryDarkest transition"
//     >
//       {typeof IconComponent === 'string' ? ( 
//         <img src={IconComponent} alt={service.name} className="hover:text-primaryDarkest w-[43px] h-[43px]" />
//       ) : (
//         <IconComponent size={42} /> 
//       )}<br/>
//       <span className="text-font-bold text-[18px]">{service.name}</span>
//     </Link>
//   );
// })}
// </div>



















// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Search, Menu, X, Wrench, Plug, PaintRoller, TreePine, Truck, Flame, Bell } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
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
//   const [cities] = useState(["الدار البيضاء", "الرباط", "مراكش", "وجدة", "طنجة", "تطوان", "أكادير", "مكناس", "فاس", "القنيطرة", "سلا"]);
//   const [filteredCities, setFilteredCities] = useState([]);
//   const [filteredServices, setFilteredServices] = useState([]);
//   const [filteredWorkers, setFilteredWorkers] = useState([]);
//   const [notificationCount] = useState(3);
//   const [isHovered, setIsHovered] = useState(false);

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
//     setFilteredCities(cities.filter(city => city.toLowerCase().includes(lowerSearch)));
//     setFilteredServices(services.filter(service => service.name.toLowerCase().includes(lowerSearch)));
//     setFilteredWorkers(
//       workers.filter(worker =>
//         worker.name?.toLowerCase().includes(lowerSearch) ||
//         worker.skill?.toLowerCase().includes(lowerSearch) ||
//         worker.city?.toLowerCase().includes(lowerSearch)
//       )
//     );
//   }, [searchTerm, workers, cities]);

//   return (
//     <div className="relative overflow-hidden">
//       {/* تأثيرات الخلفية ثلاثية الأبعاد */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#94D1C3] to-[#406F67] opacity-20"
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//             rotate: [0, 180, 360]
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
        
//         <motion.div
//           className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-[#80C6A2] to-[#2a5a52] opacity-15"
//           animate={{
//             x: [0, -80, 0],
//             y: [0, 60, 0],
//             rotate: [360, 180, 0]
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
        
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-[#CFF5EC] to-[#6BA89D] opacity-15"
//           animate={{
//             x: [0, 120, 0],
//             y: [0, -80, 0],
//             rotate: [180, 360, 180]
//           }}
//           transition={{
//             duration: 30,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
//       </div>

//       {/* شريط التنقل الرئيسي */}
//       <motion.header 
//         dir="rtl"
//         className="relative z-10 flex items-center justify-between py-4 px-6 w-full bg-white/80 backdrop-blur-md shadow-sm"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Link 
//           to="/" 
//           className="text-3xl font-bold hover:text-[#406F67] text-[#2a5a52] transition-colors"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <motion.span className="relative inline-block">
//             معلم
//             <motion.span
//               className="absolute bottom-0 left-0 h-1 bg-[#94D1C3]"
//               initial={{ width: 0 }}
//               animate={{ width: isHovered ? "100%" : 0 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.span>
//         </Link>

//         {/* قائمة الجوال */}
//         <div className="flex items-center gap-4 md:hidden">
//           <button className="text-[#2a5a52] relative">
//             <Bell size={24} />
//             {notificationCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                 {notificationCount}
//               </span>
//             )}
//           </button>
//           <button 
//             className="text-[#2a5a52]" 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
//           </button>
//         </div>

//         {/* قائمة سطح المكتب */}
//         <nav className="hidden md:flex items-center gap-8">
//           <button className="text-[#2a5a52] relative hover:text-[#406F67] transition">
//             <Bell size={20} />
//             {notificationCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                 {notificationCount}
//               </span>
//             )}
//           </button>
          
//           <Link 
//             to="/l1/services" 
//             className="text-[16px] text-[#2a5a52] hover:text-[#406F67] transition-colors"
//           >
//             الخدمات
//           </Link>
          
//           <div className="flex gap-1">
//             <Link 
//               to="/l1/login" 
//               className="text-[16px] text-[#2a5a52] hover:text-[#406F67] transition-colors"
//             >
//               تسجيل الدخول
//             </Link>
//             <span className="text-[16px] text-[#2a5a52]">/</span>
//             <Link 
//               to="/l1/rogester" 
//               className="text-[16px] text-[#2a5a52] hover:text-[#406F67] transition-colors"
//             >
//               التسجيل
//             </Link>
//           </div>
          
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link
//               to="/l1/BecomeTasker"
//               className="text-[16px] border border-[#406F67] text-[#2a5a52] px-4 py-2 rounded-lg hover:bg-gradient-to-r from-[#406F67] to-[#80C6A2] hover:text-white transition-colors"
//             >
//               كن من العاملين في المهام
//             </Link>
//           </motion.div>
//         </nav>
//       </motion.header>

//       {/* قائمة الجوال المنبثقة */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: "100%", opacity: 0 }}
//             transition={{ type: "spring", damping: 25 }}
//             className="fixed inset-y-0 right-0 w-72 bg-white shadow-2xl z-50 p-6 md:hidden"
//           >
//             <nav className="flex flex-col space-y-6 h-full">
//               <button 
//                 className="self-end text-[#2a5a52]"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <X size={30} />
//               </button>
              
//               <Link 
//                 to="/l1/services" 
//                 className="text-[#2a5a52] hover:text-[#406F67] text-lg"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 الخدمات
//               </Link>
              
//               <Link 
//                 to="/l1/login" 
//                 className="text-[#2a5a52] hover:text-[#406F67] text-lg"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 تسجيل الدخول
//               </Link>
              
//               <Link 
//                 to="/l1/rogester" 
//                 className="text-[#2a5a52] hover:text-[#406F67] text-lg"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 التسجيل
//               </Link>
              
//               <Link 
//                 to="/l1/BecomeTasker" 
//                 className="text-[#2a5a52] hover:text-[#406F67] text-lg"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 كن من العاملين في المهام
//               </Link>
              
//               <hr className="border-[#94D1C3]" />
              
//               <div className="space-y-4">
//                 {services.map((service, index) => {
//                   const IconComponent = service.icon;
//                   return (
//                     <motion.div
//                       key={index}
//                       whileHover={{ x: -5 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <Link
//                         to={service.link}
//                         className="flex items-center gap-3 text-[#2a5a52] hover:text-[#406F67]"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         {typeof IconComponent === "string" ? (
//                           <img src={IconComponent} alt={service.name} className="w-6 h-6" />
//                         ) : (
//                           <IconComponent size={24} />
//                         )}
//                         <span>{service.name}</span>
//                       </Link>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* قسم البحث الرئيسي */}
//       <div className="relative z-10 pt-20 pb-32 px-6 text-center">
//         <motion.h1
//           className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2a5a52] mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <span className="relative inline-block">
//             <span className="relative z-10">خدمات سريعة وموثوقة</span>
//             <motion.span
//               className="absolute bottom-0 left-0 w-full h-3 bg-[#94D1C3] opacity-40 -z-1"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//             />
//           </span>
//           <br className="hidden md:block" />
//           <motion.span
//             className="inline-block mt-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             في أي وقت وبكل سهولة
//           </motion.span>
//         </motion.h1>

//         {/* حقل البحث */}
//         <motion.div
//           className="max-w-2xl mx-auto relative"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <input
//             type="text"
//             placeholder="ما الخدمة التي تحتاجها اليوم؟"
//             className="w-full px-6 pr-14 py-4 text-lg border-2 border-[#94D1C3] rounded-full shadow-lg text-[#2a5a52] focus:ring-2 focus:ring-[#406F67] focus:outline-none bg-white/90 backdrop-blur-sm"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <motion.button
//             className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#406F67] to-[#80C6A2] text-white p-3 rounded-full hover:from-[#2a5a52] hover:to-[#6BA89D] transition"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <Search size={20} />
//           </motion.button>
//         </motion.div>

//         {/* نتائج البحث */}
//         <AnimatePresence>
//           {searchTerm && (
//             <motion.div
//               className="mt-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl max-w-3xl mx-auto text-right space-y-4 text-[#2a5a52]"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 onClick={() => setSearchTerm("")}
//                 className="absolute left-6 top-6 text-gray-500 hover:text-gray-700"
//               >
//                 <X size={20} />
//               </button>

//               {filteredCities.length > 0 && (
//                 <div>
//                   <h3 className="font-bold text-lg mb-2">المدن:</h3>
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//                     {filteredCities.map((city, idx) => (
//                       <motion.div
//                         key={idx}
//                         className="px-4 py-2 bg-[#f0f9f7] rounded-lg hover:bg-[#94D1C3] hover:text-white transition-colors cursor-pointer"
//                         whileHover={{ scale: 1.02 }}
//                       >
//                         {city}
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {filteredServices.length > 0 && (
//                 <div>
//                   <h3 className="font-bold text-lg mb-2">الخدمات:</h3>
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//                     {filteredServices.map((service, idx) => (
//                       <motion.div
//                         key={idx}
//                         className="px-4 py-2 bg-[#f0f9f7] rounded-lg hover:bg-[#94D1C3] hover:text-white transition-colors cursor-pointer flex items-center gap-2"
//                         whileHover={{ scale: 1.02 }}
//                       >
//                         {typeof service.icon === "string" ? (
//                           <img src={service.icon} alt={service.name} className="w-5 h-5" />
//                         ) : (
//                           <service.icon size={18} />
//                         )}
//                         {service.name}
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {filteredWorkers.length > 0 && (
//                 <div>
//                   <h3 className="font-bold text-lg mb-2">العمال:</h3>
//                   <div className="space-y-3">
//                     {filteredWorkers.slice(0, 3).map(worker => (
//                       <motion.div
//                         key={worker._id}
//                         className="border border-[#94D1C3] p-3 rounded-lg shadow-sm hover:shadow-md transition"
//                         whileHover={{ y: -2 }}
//                       >
//                         <p className="font-medium">👤 {worker.name}</p>
//                         <p>🔧 {worker.skill}</p>
//                         <p>🏙️ المدينة: {worker.city}</p>
//                         {worker.phone && <p>📞 {worker.phone}</p>}
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {filteredCities.length === 0 && filteredServices.length === 0 && filteredWorkers.length === 0 && (
//                 <p className="text-gray-500 text-center py-4">لا توجد نتائج مطابقة للبحث</p>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* خدمات سريعة (لأجهزة سطح المكتب) */}
//         <motion.div
//           className="hidden md:flex justify-center gap-12 mt-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           {services.map((service, index) => {
//             const IconComponent = service.icon;
//             return (
//               <motion.div
//                 key={index}
//                 className="flex flex-col items-center group"
//                 whileHover={{ y: -10 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Link
//                   to={service.link}
//                   className="flex flex-col items-center"
//                 >
//                   <motion.div
//                     className="w-16 h-16 bg-gradient-to-br from-[#94D1C3] to-[#406F67] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition"
//                     whileHover={{ rotate: 15, scale: 1.1 }}
//                   >
//                     {typeof IconComponent === "string" ? (
//                       <img src={IconComponent} alt={service.name} className="w-10 h-10" />
//                     ) : (
//                       <IconComponent size={32} className="text-white" />
//                     )}
//                   </motion.div>
//                   <span className="mt-3 font-bold text-[#2a5a52] group-hover:text-[#406F67] transition-colors">
//                     {service.name}
//                   </span>
//                 </Link>
//               </motion.div>
        //     );
        //   })}
        // </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Header;