// import { FaUser, FaLock } from "react-icons/fa";
// import ThreeScene from "./ThreeScene";

// function Rojester() {
//     return (
//       <div className="h-screen w-screen overflow-hidden relative pt-[6%] pl-20 container">
//       <ThreeScene />
//       {/* <div className="flex justify-center pt-[20%] items-center min-h-screen bg-cover bg-center relative"> */}
//       <div className="relative bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-8 h-[70%] w-[35%]">
//               <h1 className="text-3xl font-bold text-center text-white mb-8">تسجيل </h1>
      
//               <form>
//                 <div className="relative mb-5">
//                   <input type="text" placeholder="اسم المستخدم" className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none" />
//                   <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
//                 </div>
      
//                 <div className="relative mb-5">
//                   <input type="password" placeholder="كلمة المرور" className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none" />
//                   <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
//                 </div>
      
//                 <div className="flex justify-between text-white text-sm mb-5">
//                   <label className="flex items-center">
//                     <input type="checkbox" className="mr-2" /> تذكرني
//                   </label>
//                   <a href="#" className="underline">نسيت كلمة المرور؟</a>
//                 </div>
      
//                 <button type="submit" className="w-full bg-[#406F67] text-white py-3 rounded-full font-semibold shadow-md hover:bg-[#6BA89D] transition">تسجيل الدخول</button>
      
//                 <div className="text-center text-white mt-5">
//                   <p>ليس لديك حساب؟ <a href="#" className="font-semibold underline">سجل الآن</a></p>
//                 </div>
//               </form>
//     </div>
//     </div>
//     // </div>

//     );
//   }
  
//   export default Rojester;
  





































import { FaUser, FaLock } from "react-icons/fa";
import ThreeScene from "./ThreeScene";

function Rojester() {
  return (
    <div className="h-screen w-screen overflow-hidden relative md:pl-[30%] pl-[10%] flex flex-col justify-center container">
      <ThreeScene />
      <div className="relative bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-8 h-[75%] w-[90%] sm:w-[55%] sm:h-auto sm:p-5">
        <h1 className="text-3xl font-bold text-center text-white mb-9">تسجيل </h1>

        <form>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="اسم المستخدم"
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
            />
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              placeholder="كلمة المرور"
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
            />
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="flex justify-between text-white text-sm mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> تذكرني
            </label>
            <a href="#" className="underline">نسيت كلمة المرور؟</a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#406F67] text-white py-3 rounded-full font-semibold shadow-md hover:bg-[#6BA89D] transition"
          >
            تسجيل الدخول
          </button>

          <div className="text-center text-white mt-6">
            <p>
              ليس لديك حساب؟ <a href="#" className="font-semibold underline">سجل الآن</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Rojester;
