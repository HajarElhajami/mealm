

// import { useState } from "react";
//   import { Link } from "react-router-dom";
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



//  ]



// function Header1() {
  
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <>

// <header dir="rtl" className="flex items-center font-bold justify-between py-4 px-6 w-full relative">
//         <Link to="/" className="text-3xl hover:text-secondary text-primaryDarkest">معلم</Link>
//           <button className="md:hidden text-primaryDarkest" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
//         </button>
//         {isMenuOpen && (
//           <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-lg z-50 p-4 md:hidden">
//             <nav className="flex flex-col space-y-4">
//               <Link to="/l1/services" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>الخدمات </Link>
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
//     </>

//   );
// }

// export default Header1;









































import { useState } from "react";
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

function Header1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3); // يمكن تغيير الرقم حسب عدد الإشعارات

  return (
    <>
      <header dir="rtl" className="flex items-center font-bold justify-between py-4 px-6 w-full relative">
        <Link to="/" className="text-3xl hover:text-secondary text-primaryDarkest">معلم</Link>
        
        <div className="flex items-center gap-4">
          {/* زر الإشعارات في الموبايل - يظهر خارج القائمة */}
          <button className="md:hidden text-primaryDarkest relative">
            <Bell size={24} />
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>
          
          <button className="md:hidden text-primaryDarkest" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-lg z-50 p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link to="/l1/services" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>الخدمات </Link>
              <Link to="/l1/login" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>تسجيل الدخول</Link>
              <Link to="/l1/rogester" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>التسجيل</Link>
              <Link to="/l1/BecomeTasker" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>كن من العاملين في المهام</Link>
              <hr />
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Link key={index} to={service.link} className="flex items-center space-x-2 gap-2 text-primaryDarkest hover:text-secondary md:hidden">
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
        <button className="text-primaryDarkest relative">
            <Bell size={20} />
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>
          <Link to="/l1/services" className="text-[16px] text-primaryDarkest hover:text-secondary">الخدمات </Link>
          
          {/* زر الإشعارات في الكمبيوتر - يظهر بجانب الخدمات */}
          {/* <button className="text-primaryDarkest relative">
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
    </>
  );
}

export default Header1;


































// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Search, Menu, X, Wrench, Plug, PaintRoller, TreePine, Truck, Flame, Bell } from "lucide-react";
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

// function Header1() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAccepted, setIsAccepted] = useState(false); // حالياً افتراضي false، بدّليها لاحقًا لما يتم القبول

//   return (
//     <>
//       <header dir="rtl" className="flex items-center font-bold justify-between py-4 px-6 w-full relative">
//         <Link to="/" className="text-3xl hover:text-secondary text-primaryDarkest">معلم</Link>
        
//         <div className="flex items-center space-x-4 gap-4">
//           {/* زر الإشعارات */}
//           <button className="text-primaryDarkest hover:text-secondary relative">
//             <Bell size={26} />
//             {/* يمكنك لاحقًا إضافة نقطة حمراء صغيرة فوقه */}
//           </button>

//           {/* إظهار زر افتح حسابك فقط بعد القبول */}
//           {isAccepted && (
//             <Link
//               to="/l1/openAccount"
//               className="text-[16px] border border-secondary text-primaryDarkest px-4 py-2 rounded-lg hover:bg-primaryDarkest hover:text-white transition"
//             >
//               افتح حسابك
//             </Link>
//           )}

//           {/* الهامبرغر مينو للموبايل */}
//           <button className="md:hidden text-primaryDarkest" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
//           </button>
//         </div>

//         {/* قائمة الموبايل */}
//         {isMenuOpen && (
//           <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-lg z-50 p-4 md:hidden">
//             <nav className="flex flex-col space-y-4">
//               {!isAccepted && (
//                 <>
//                   <Link to="/l1/services" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>الخدمات</Link>
//                   <Link to="/l1/login" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>تسجيل الدخول</Link>
//                   <Link to="/l1/rogester" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>التسجيل</Link>
//                   <Link to="/l1/BecomeTasker" className="text-primaryDarkest hover:text-secondary" onClick={() => setIsMenuOpen(false)}>كن من العاملين في المهام</Link>
//                 </>
//               )}
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

//         {/* قائمة الديسكتوب */}
//         <nav className="hidden md:flex space-x-8 gap-10 items-center">
//           {!isAccepted ? (
//             <>
//               <Link to="/l1/services" className="text-[16px] text-primaryDarkest hover:text-secondary">الخدمات</Link>
//               <div>
//                 <Link to="/l1/login" className="text-[16px] text-primaryDarkest hover:text-secondary">تسجيل الدخول</Link>
//                 <span className="text-[16px] text-center text-primaryDarkest"> / </span>
//                 <Link to="/l1/rogester" className="text-[16px] text-primaryDarkest hover:text-secondary">التسجيل</Link>
//               </div>
//               <Link
//                 to="/l1/BecomeTasker"
//                 className="text-[16px] border border-secondary text-primaryDarkest px-4 py-2 rounded-lg hover:bg-primaryDarkest hover:text-white transition"
//               >
//                 كن من العاملين في المهام
//               </Link>
//             </>
//           ) : null}
//         </nav>
//       </header>
//       <hr className="border-[#94D1C3]" />
//     </>
//   );
// }

// export default Header1;
