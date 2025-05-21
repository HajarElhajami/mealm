
// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import { Menu, X, Bell, Globe, ChevronDown, LogOut } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const languageContent = {
//   ar: {
//     brand: "معلم",
//     navItems: [
//       { name: "الرئيسية", link: "/" },
//       { name: "الخدمات", link: "/services" },
//       { name: "الأعمال", link: "/works" },
//       { name: "التقييمات", link: "/reviews" },
//       { name: "اتصل بنا", link: "/contact" }
//     ],
//     logout: "تسجيل الخروج",
//     language: "اللغة",
//     languages: {
//       ar: "العربية",
//       fr: "الفرنسية",
//       en: "الإنجليزية"
//     },
//     dir: "rtl"
//   },
//   fr: {
//     brand: "Muallem",
//     navItems: [
//       { name: "Accueil", link: "/" },
//       { name: "Services", link: "/services" },
//       { name: "Travaux", link: "/works" },
//       { name: "Avis", link: "/reviews" },
//       { name: "Contact", link: "/contact" }
//     ],
//     logout: "Déconnexion",
//     language: "Langue",
//     languages: {
//       ar: "Arabe",
//       fr: "Français",
//       en: "Anglais"
//     },
//     dir: "ltr"
//   },
//   en: {
//     brand: "Muallem",
//     navItems: [
//       { name: "Home", link: "/" },
//       { name: "Services", link: "./" },
//       { name: "Works", link: "/works" },
//       { name: "Reviews", link: "/reviews" },
//       { name: "Contact", link: "/contact" }
//     ],
//     logout: "Logout",
//     language: "Language",
//     languages: {
//       ar: "Arabic",
//       fr: "French",
//       en: "English"
//     },
//     dir: "ltr"
//   }
// };

// const Header = ({ onLanguageChange, isAuthenticated = true }) => {
//   const [currentLanguage, setCurrentLanguage] = useState('ar');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
//   const [notificationCount] = useState(3);
//   const [isHovering, setIsHovering] = useState(null);

//   const content = languageContent[currentLanguage];

//   const handleLanguageChange = (lang) => {
//     setCurrentLanguage(lang);
//     setIsLanguageDropdownOpen(false);
//     if (onLanguageChange) onLanguageChange(lang);
//   };

//   const handleLogout = () => {
//     console.log("تم تسجيل الخروج");
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <header 
//         dir={content.dir}
//         className="bg-gradient-to-b from-white to-gray-50 shadow-lg sticky top-0 z-50"
//         style={{
//           boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
//           backdropFilter: 'blur(5px)',
//           WebkitBackdropFilter: 'blur(5px)',
//           borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
//         }}
//       >
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center justify-between">
//             {/* الشعار ثلاثي الأبعاد */}
//             <Link 
//               to="/" 
//               className="text-3xl font-extrabold relative"
//               onMouseEnter={() => setIsHovering('logo')}
//               onMouseLeave={() => setIsHovering(null)}
//             >
//               <motion.span
//                 className="bg-clip-text text-transparent bg-gradient-to-r from-[#2c5364] to-[#0a2e2a]"
//                 animate={{
//                   textShadow: isHovering === 'logo' ? 
//                     '0 0 8px rgba(44, 83, 100, 0.6)' : 'none',
//                   scale: isHovering === 'logo' ? 1.05 : 1
//                 }}
//                 transition={{ type: 'spring', stiffness: 400, damping: 10 }}
//               >
//                 {content.brand}
//               </motion.span>
//               <motion.span
//                 className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-[#A9E7DA] to-[#86C4B8] opacity-0"
//                 animate={{
//                   opacity: isHovering === 'logo' ? 1 : 0,
//                   y: isHovering === 'logo' ? 2 : 0
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {content.brand}
//               </motion.span>
//             </Link>

//             {/* القائمة الرئيسية (للكمبيوتر) */}
//             <nav className="hidden md:flex items-center gap-5 space-x-8">
//               {content.navItems.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   onMouseEnter={() => setIsHovering(`nav-${index}`)}
//                   onMouseLeave={() => setIsHovering(null)}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Link
//                     to={item.link}
//                     className="relative text-gray-700 font-medium px-3 py-2"
//                   >
//                     <motion.span
//                       className="relative z-10"
//                       animate={{
//                         color: isHovering === `nav-${index}` ? '#0a2e2a' : '#374151'
//                       }}
//                     >
//                       {item.name}
//                     </motion.span>
//                     {isHovering === `nav-${index}` && (
//                       <motion.span
//                         className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A9E7DA] to-[#86C4B8] rounded-full"
//                         layoutId="navUnderline"
//                         transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
//                       />
//                     )}
//                   </Link>
//                 </motion.div>
//               ))}
//             </nav>

//             {/* عناصر التحكم */}
//             <div className="flex items-center space-x-4">
//               {/* زر الإشعارات ثلاثي الأبعاد */}
//               <motion.button 
//                 className="relative p-2"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <div className="relative">
//                   <Bell size={20} className="text-gray-600" />
//                   {notificationCount > 0 && (
//                     <motion.span 
//                       className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ type: 'spring' }}
//                     >
//                       {notificationCount}
//                     </motion.span>
//                   )}
//                 </div>
//               </motion.button>

//               {/* تغيير اللغة ثلاثي الأبعاد */}
//               <div className="relative">
//                 <motion.button
//                   onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
//                   className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
//                   whileHover={{ y: -2, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
//                   whileTap={{ y: 0 }}
//                 >
//                   <Globe size={18} className="text-gray-600" />
//                   <span className="text-sm font-medium">{content.language}</span>
//                   <motion.span
//                     animate={{ rotate: isLanguageDropdownOpen ? 180 : 0 }}
//                   >
//                     <ChevronDown size={16} />
//                   </motion.span>
//                 </motion.button>

//                 <AnimatePresence>
//                   {isLanguageDropdownOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -20, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: -20, scale: 0.95 }}
//                       className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-1 z-50 overflow-hidden"
//                       style={{
//                         boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//                         border: '1px solid rgba(0, 0, 0, 0.1)'
//                       }}
//                     >
//                       {Object.entries(content.languages).map(([code, name]) => (
//                         <motion.button
//                           key={code}
//                           onClick={() => handleLanguageChange(code)}
//                           className={`w-full text-left px-4 py-2 text-sm ${currentLanguage === code ? 
//                             'bg-gradient-to-r from-[#A9E7DA] to-[#86C4B8] text-white' : 
//                             'hover:bg-gray-50 text-gray-700'}`}
//                           whileHover={{ 
//                             x: content.dir === 'rtl' ? -5 : 5,
//                             backgroundColor: currentLanguage !== code ? 'rgba(0,0,0,0.05)' : undefined
//                           }}
//                         >
//                           {name}
//                         </motion.button>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* زر تسجيل الخروج (للكمبيوتر) */}
//               {isAuthenticated && (
//                 <motion.button
//                   onClick={handleLogout}
//                   className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors"
//                   style={{
//                     background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
//                     boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
//                   }}
//                   whileHover={{ 
//                     y: -2,
//                     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
//                     background: 'linear-gradient(135deg, #f8f9fa 0%, #dee2e6 100%)'
//                   }}
//                   whileTap={{ y: 0 }}
//                 >
//                   <LogOut size={18} className="text-red-600" />
//                   <span className="font-medium text-red-600">{content.logout}</span>
//                 </motion.button>
//               )}

//               {/* زر القائمة (للموبايل) */}
//               <motion.button
//                 className="md:hidden p-2 rounded-full"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 style={{
//                   background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
//                   boxShadow: '5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff'
//                 }}
//               >
//                 {isMenuOpen ? 
//                   <X size={24} className="text-gray-700" /> : 
//                   <Menu size={24} className="text-gray-700" />}
//               </motion.button>
//             </div>
//           </div>
//         </div>

//         {/* القائمة المنسدلة (للموبايل) */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden w-full fixed right-0 left-0 bg-white shadow-2xl overflow-hidden"
//               style={{
//                 borderTop: '1px solid rgba(0,0,0,0.1)',
//                 backdropFilter: 'blur(10px)',
//                 WebkitBackdropFilter: 'blur(10px)'
//               }}
//             >
//               <div className="px-6 py-4">
//                 <nav className="flex flex-col space-y-4">
//                   {content.navItems.map((item, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ x: 50, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       <Link
//                         to={item.link}
//                         className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
//                         onClick={() => setIsMenuOpen(false)}
//                         style={{
//                           boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.1)'
//                         }}
//                       >
//                         {item.name}
//                       </Link>
//                     </motion.div>
//                   ))}
                  
//                   <motion.div
//                     initial={{ x: 50, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: content.navItems.length * 0.1 }}
//                   >
//                     <div className="border-t border-gray-200 my-3 w-full"></div>
//                   </motion.div>

//                   {/* زر تسجيل الخروج (للموبايل) */}
//                   {isAuthenticated && (
//                     <motion.button
//                       onClick={handleLogout}
//                       className="flex items-center justify-center space-x-2 py-3 px-4 rounded-lg mt-2"
//                       initial={{ x: 50, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: (content.navItems.length + 1) * 0.1 }}
//                       style={{
//                         background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
//                         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//                       }}
//                       whileHover={{ y: -2 }}
//                       whileTap={{ y: 0 }}
//                     >
//                       <LogOut size={18} className="text-red-600" />
//                       <span className="text-red-600 font-medium">{content.logout}</span>
//                     </motion.button>
//                   )}
//                 </nav>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>
//     </>
//   );
// };

// export default Header;











































































































import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, Bell, Globe, ChevronDown, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languageContent = {
  ar: {
    brand: "معلم",
    navItems: [
      { name: "الرئيسية", link: "/" },
      { name: "الخدمات", link: "/services" },
      { name: "الأعمال", link: "/works" },
      { name: "التقييمات", link: "/reviews" },
      { name: "اتصل بنا", link: "/l1/Contact" }
    ],
    logout: "تسجيل الخروج",
    language: "اللغة",
    languages: {
      ar: "العربية",
      fr: "الفرنسية",
      en: "الإنجليزية"
    },
    logoutConfirm: {
      title: "تأكيد تسجيل الخروج",
      message: "هل أنت متأكد أنك تريد تسجيل الخروج؟",
      confirm: "نعم، سجل خروج",
      cancel: "إلغاء"
    },
    dir: "rtl"
  },
  fr: {
    brand: "Muallem",
    navItems: [
      { name: "Accueil", link: "/" },
      { name: "Services", link: "/services" },
      { name: "Travaux", link: "/works" },
      { name: "Avis", link: "/reviews" },
      { name: "Contact", link: "/contact" }
    ],
    logout: "Déconnexion",
    language: "Langue",
    languages: {
      ar: "Arabe",
      fr: "Français",
      en: "Anglais"
    },
    logoutConfirm: {
      title: "Confirmer la déconnexion",
      message: "Êtes-vous sûr de vouloir vous déconnecter?",
      confirm: "Oui, déconnecter",
      cancel: "Annuler"
    },
    dir: "ltr"
  },
  en: {
    brand: "Muallem",
    navItems: [
      { name: "Home", link: "/" },
      { name: "Services", link: "./" },
      { name: "Works", link: "/works" },
      { name: "Reviews", link: "/reviews" },
      { name: "Contact", link: "/contact" }
    ],
    logout: "Logout",
    language: "Language",
    languages: {
      ar: "Arabic",
      fr: "French",
      en: "English"
    },
    logoutConfirm: {
      title: "Confirm Logout",
      message: "Are you sure you want to logout?",
      confirm: "Yes, Logout",
      cancel: "Cancel"
    },
    dir: "ltr"
  }
};

const Header = ({ onLanguageChange, isAuthenticated = true }) => {
  const [currentLanguage, setCurrentLanguage] = useState('ar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [notificationCount] = useState(3);
  const [isHovering, setIsHovering] = useState(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [logoutButtonRef, setLogoutButtonRef] = useState(null);

  const content = languageContent[currentLanguage];

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    setIsLanguageDropdownOpen(false);
    if (onLanguageChange) onLanguageChange(lang);
  };

  const handleLogoutClick = (event) => {
    setShowLogoutConfirm(true);
    setIsMenuOpen(false);
    setLogoutButtonRef(event.currentTarget);
  };

  const confirmLogout = () => {
    // إعادة التوجيه إلى الصفحة الرئيسية في الفرونتاند الأول
    window.location.href = "http://localhost:3001";
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <>
      <header 
        dir={content.dir}
        className="bg-gradient-to-b from-white to-gray-50 shadow-lg sticky top-0 z-50"
        style={{
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* الشعار ثلاثي الأبعاد */}
            <Link 
              to="/" 
              className="text-3xl font-extrabold relative"
              onMouseEnter={() => setIsHovering('logo')}
              onMouseLeave={() => setIsHovering(null)}
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#2c5364] to-[#0a2e2a]"
                animate={{
                  textShadow: isHovering === 'logo' ? 
                    '0 0 8px rgba(44, 83, 100, 0.6)' : 'none',
                  scale: isHovering === 'logo' ? 1.05 : 1
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {content.brand}
              </motion.span>
              <motion.span
                className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-[#A9E7DA] to-[#86C4B8] opacity-0"
                animate={{
                  opacity: isHovering === 'logo' ? 1 : 0,
                  y: isHovering === 'logo' ? 2 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {content.brand}
              </motion.span>
            </Link>

            {/* القائمة الرئيسية (للكمبيوتر) */}
            <nav className="hidden md:flex items-center gap-5 space-x-8">
              {content.navItems.map((item, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setIsHovering(`nav-${index}`)}
                  onMouseLeave={() => setIsHovering(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={item.link}
                    className="relative text-gray-700 font-medium px-3 py-2"
                  >
                    <motion.span
                      className="relative z-10"
                      animate={{
                        color: isHovering === `nav-${index}` ? '#0a2e2a' : '#374151'
                      }}
                    >
                      {item.name}
                    </motion.span>
                    {isHovering === `nav-${index}` && (
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A9E7DA] to-[#86C4B8] rounded-full"
                        layoutId="navUnderline"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* عناصر التحكم */}
            <div className="flex items-center space-x-4">
              {/* زر الإشعارات ثلاثي الأبعاد */}
              <motion.button 
                className="relative p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <Bell size={20} className="text-gray-600" />
                  {notificationCount > 0 && (
                    <motion.span 
                      className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring' }}
                    >
                      {notificationCount}
                    </motion.span>
                  )}
                </div>
              </motion.button>

              {/* تغيير اللغة ثلاثي الأبعاد */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  whileHover={{ y: -2, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                  whileTap={{ y: 0 }}
                >
                  <Globe size={18} className="text-gray-600" />
                  <span className="text-sm font-medium">{content.language}</span>
                  <motion.span
                    animate={{ rotate: isLanguageDropdownOpen ? 180 : 0 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {isLanguageDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-1 z-50 overflow-hidden"
                      style={{
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        border: '1px solid rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {Object.entries(content.languages).map(([code, name]) => (
                        <motion.button
                          key={code}
                          onClick={() => handleLanguageChange(code)}
                          className={`w-full text-left px-4 py-2 text-sm ${currentLanguage === code ? 
                            'bg-gradient-to-r from-[#A9E7DA] to-[#86C4B8] text-white' : 
                            'hover:bg-gray-50 text-gray-700'}`}
                          whileHover={{ 
                            x: content.dir === 'rtl' ? -5 : 5,
                            backgroundColor: currentLanguage !== code ? 'rgba(0,0,0,0.05)' : undefined
                          }}
                        >
                          {name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* زر تسجيل الخروج (للكمبيوتر) */}
              {isAuthenticated && (
                <div className="relative">
                  <motion.button
                    onClick={handleLogoutClick}
                    className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors"
                    style={{
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                    whileHover={{ 
                      y: -2,
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #dee2e6 100%)'
                    }}
                    whileTap={{ y: 0 }}
                  >
                    <LogOut size={18} className="text-red-600" />
                    <span className="font-medium text-red-600">{content.logout}</span>
                  </motion.button>

                  {/* بطاقة تأكيد تسجيل الخروج */}
                  <AnimatePresence>
                    {showLogoutConfirm && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 p-4"
                        style={{
                          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                          border: '1px solid rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {content.logoutConfirm.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {content.logoutConfirm.message}
                        </p>
                        <div className="flex justify-end gap-2">
                          <motion.button
                            onClick={cancelLogout}
                            className="px-3 py-1 text-sm rounded-md border border-gray-300 text-gray-700"
                            whileHover={{ backgroundColor: '#f3f4f6' }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {content.logoutConfirm.cancel}
                          </motion.button>
                          <motion.button
                            onClick={confirmLogout}
                            className="px-3 py-1 text-sm rounded-md bg-red-500 text-white"
                            whileHover={{ backgroundColor: '#ef4444' }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {content.logoutConfirm.confirm}
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* زر القائمة (للموبايل) */}
              <motion.button
                className="md:hidden p-2 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
                  boxShadow: '5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff'
                }}
              >
                {isMenuOpen ? 
                  <X size={24} className="text-gray-700" /> : 
                  <Menu size={24} className="text-gray-700" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* القائمة المنسدلة (للموبايل) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden w-full fixed right-0 left-0 bg-white shadow-2xl overflow-hidden"
              style={{
                borderTop: '1px solid rgba(0,0,0,0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <div className="px-6 py-4">
                <nav className="flex flex-col space-y-4">
                  {content.navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.link}
                        className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                          boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.1)'
                        }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: content.navItems.length * 0.1 }}
                  >
                    <div className="border-t border-gray-200 my-3 w-full"></div>
                  </motion.div>

                  {/* زر تسجيل الخروج (للموبايل) */}
                  {isAuthenticated && (
                    <div className="relative">
                      <motion.button
                        onClick={handleLogoutClick}
                        className="flex items-center justify-center space-x-2 py-3 px-4 rounded-lg mt-2 w-full"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (content.navItems.length + 1) * 0.1 }}
                        style={{
                          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                      >
                        <LogOut size={18} className="text-red-600" />
                        <span className="text-red-600 font-medium">{content.logout}</span>
                      </motion.button>

                      {/* بطاقة تأكيد تسجيل الخروج للموبايل */}
                      <AnimatePresence>
                        {showLogoutConfirm && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-white p-4 mt-2 rounded-lg border border-gray-200">
                              <h3 className="text-lg font-bold text-gray-800 mb-2">
                                {content.logoutConfirm.title}
                              </h3>
                              <p className="text-gray-600 text-sm mb-4">
                                {content.logoutConfirm.message}
                              </p>
                              <div className="flex justify-end gap-2">
                                <motion.button
                                  onClick={cancelLogout}
                                  className="px-3 py-1 text-sm rounded-md border border-gray-300 text-gray-700"
                                  whileHover={{ backgroundColor: '#f3f4f6' }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {content.logoutConfirm.cancel}
                                </motion.button>
                                <motion.button
                                  onClick={confirmLogout}
                                  className="px-3 py-1 text-sm rounded-md bg-red-500 text-white"
                                  whileHover={{ backgroundColor: '#ef4444' }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {content.logoutConfirm.confirm}
                                </motion.button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;