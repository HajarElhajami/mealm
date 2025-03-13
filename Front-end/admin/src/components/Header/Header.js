// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/login");
//   };

//   return (
//     <header className="bg-DeepJungleGreen text-white flex justify-between items-center p-4 shadow-md">
//         <button 
//           onClick={handleLogout} 
//           className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition">
//            تسجيل الخروج
//         </button>
//       <nav className="flex gap-4">
//         <Link to="http://localhost:3000/" className="hover:text-gray-300 text-2xl font-bold transition"> معلم </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;




































import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; 

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-DeepJungleGreen text-white flex justify-around gap-[20%] items-center p-4 shadow-md">

      <div className="relative" ref={menuRef}>
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="text-white text-3xl hover:text-gray-300 transition"
        >
          <FaUserCircle />
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg p-2">
            <Link 
              to="/profile" 
              className="block px-4 py-2 hover:bg-gray-200 rounded transition"
            >
              عرض الملف الشخصي
            </Link>
            <button 
              onClick={handleLogout} 
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200 rounded transition"
            >
              تسجيل الخروج
            </button>
          </div>
        )}
      </div>
      <nav className="flex gap-4">
        <Link to="/http://localhost:3000/" className="hover:text-gray-300 text-2xl font-bold transition"> معلم </Link>
      </nav>

    </header>
  );
};

export default Header;
