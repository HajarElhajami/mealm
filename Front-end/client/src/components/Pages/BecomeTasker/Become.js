
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ThreeScene from "../Login/ThreeScene";
// import { FaUser, FaLock, FaEnvelope, FaMapMarkerAlt, FaWrench, FaPhone } from "react-icons/fa";

// const Become = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [city, setCity] = useState("");
//   const [skill, setSkill] = useState("");
//   const [workers, setWorkers] = useState([]);

//   const cities = [
//     "الدار البيضاء",
//     "الرباط",
//     "القنيطرة",
//     "سلا",
//     "فاس",
//     "مكناس",
//     "مراكش",
//     "أكادير",
//     "وجدة",
//     "طنجة",
//     "تطوان",
//   ];

//   const skills = [
//     "سباك",
//     "كهربائي",
//     "صباغ",
//     "عمال النظافة",
//     "بستاني",
//     "نقل وحمل الأغراض",
//     "خدمات اخرى",
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !email || !password || !phone || !city || !skill) {
//       alert("❌ يرجى ملء جميع الحقول");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/worker/workers", {
//         name,
//         email,
//         password,
//         phone,
//         city,
//         skill,
//       });

//       alert("✅ تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.");
//       setName("");
//       setEmail("");
//       setPassword("");
//       setPhone("");
//       setCity("");
//       setSkill("");

//       if (response.data.success) {
//         alert(`مرحبًا ${response.data.name}!✅ تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.`);
//         window.location.href = "/";
//       }
//     } catch (error) {
//       console.error("❌ خطأ في التسجيل:", error);
//       alert(error.response?.data?.message || "❌ حدث خطأ أثناء التسجيل");
//     }
//   };

//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/worker/workers");
//         setWorkers(response.data);
//       } catch (error) {
//         console.error("❌ خطأ في تحميل البيانات:", error);
//       }
//     };

//     fetchWorkers();
//   }, []);

//   const deleteWorker = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/worker/workers/${id}`);
//       setWorkers(workers.filter(worker => worker._id !== id));
//     } catch (error) {
//       console.error("❌ خطأ في حذف العامل:", error);
//       alert("❌ حدث خطأ أثناء حذف العامل");
//     }
//   };

//   return (
//     <div className="h-screen w-screen overflow-hidden relative flex justify-center items-center">
//       <ThreeScene />
//       <div className="relative bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-6 sm:p-5  w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-auto">
//         <h1 className="text-4xl font-bold text-center text-white mb-5 hidden lg:block">
//           كن من العاملين في المهام
//         </h1>

//         <hr className="border-white w-[55%] ml-[22%] mb-4 hidden lg:block" />
//         <p className="text-lg text-center text-white mb-5">
//           انضم إلى فريقنا وكن جزءًا من نجاحنا نحن نبحث دائمًا عن أشخاص موهوبين ومتحمسين للانضمام إلينا والمشاركة في المهام المثيرة
//         </p>

//         <form onSubmit={handleSubmit}>
//           <div className="relative mb-5">
//             <input
//               type="text"
//               placeholder="اسم المستخدم"
//               className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
//           </div>

//           <div className="relative mb-5">
//             <input
//               type="email"
//               placeholder="البريد الإلكتروني"
//               className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
//           </div>

//           <div className="relative mb-5">
//             <input
//               type="password"
//               placeholder="كلمة المرور"
//               className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
//           </div>

//           <div className="relative mb-5">
//             <input
//               type="tel"
//               placeholder="رقم الهاتف"
//               className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
//           </div>

//           <div className="relative mb-5">
//             <select
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
//               required
//             >
//               <option value="" className="bg-primaryDarker text-white">
//                  المدينة
//               </option>
//               {cities.map((cityOption, index) => (
//                 <option className="text-white bg-primaryDark" key={index} value={cityOption}>
//                   {cityOption}
//                 </option>
//               ))}
//             </select>
//             <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
//           </div>

//           <div className="relative mb-5">
//             <select
//               value={skill}
//               onChange={(e) => setSkill(e.target.value)}
//               className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
//               required
//             >
//               <option value="" className="bg-primaryDarker text-white">
//                  المهارة
//               </option>
//               {skills.map((skillOption, index) => (
//                 <option className="text-white bg-primaryDark" key={index} value={skillOption}>
//                   {skillOption}
//                 </option>
//               ))}
//             </select>
//             <FaWrench className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
//           </div>

//           <button type="/profilePage1" className="w-full bg-[#406F67] mt-2 text-white py-3 rounded-full font-semibold shadow-md hover:bg-[#6BA89D] transition">
//             تقديم الطلب
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Become;












import React, { useState, useEffect } from "react";
import axios from "axios";
import ThreeScene from "../Login/ThreeScene"; // افترض أنه مشهد ثلاثي الأبعاد
import { FaUser, FaLock, FaEnvelope, FaMapMarkerAlt, FaWrench, FaPhone, FaCamera } from "react-icons/fa";

const Become = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [skill, setSkill] = useState("");
  const [nationalIdImage, setNationalIdImage] = useState(null); // لإضافة صورة البطاقة الوطنية
  const [workers, setWorkers] = useState([]);

  const cities = [
    "الدار البيضاء",
    "الرباط",
    "القنيطرة",
    "سلا",
    "فاس",
    "مكناس",
    "مراكش",
    "أكادير",
    "وجدة",
    "طنجة",
    "تطوان",
  ];

  const skills = [
    "سباك",
    "كهربائي",
    "صباغ",
    "عمال النظافة",
    "بستاني",
    "نقل وحمل الأغراض",
    "خدمات اخرى",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !phone || !city || !skill || !nationalIdImage) {
      alert("❌ يرجى ملء جميع الحقول");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("city", city);
    formData.append("skill", skill);
    formData.append("nationalIdImage", nationalIdImage);

    try {
      const response = await axios.post("http://localhost:5000/api/worker/workers", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("✅ تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setCity("");
      setSkill("");
      setNationalIdImage(null);

      if (response.data.success) {
        alert(`مرحبًا ${response.data.name}!✅ تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.`);
        window.location.href = "/";
      }
    } catch (error) {
      console.error("❌ خطأ في التسجيل:", error);
      alert(error.response?.data?.message || "❌ حدث خطأ أثناء التسجيل");
    }
  };

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/worker/workers");
        setWorkers(response.data);
      } catch (error) {
        console.error("❌ خطأ في تحميل البيانات:", error);
      }
    };

    fetchWorkers();
  }, []);

  const deleteWorker = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/worker/workers/${id}`);
      setWorkers(workers.filter(worker => worker._id !== id));
    } catch (error) {
      console.error("❌ خطأ في حذف العامل:", error);
      alert("❌ حدث خطأ أثناء حذف العامل");
    }
  };

  const handleFileChange = (e) => {
    setNationalIdImage(e.target.files[0]);
  };

  const openImageModal = (imageUrl) => {
    // فتح الصورة في نافذة منبثقة
    const modal = window.open(imageUrl, "_blank", "width=800,height=600");
    modal.focus();
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative flex justify-center items-center">
      <ThreeScene />
      <div className="relative bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-6 sm:p-5 w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-5 hidden lg:block">
          كن من العاملين في المهام
        </h1>

        <hr className="border-white w-[55%] ml-[22%] mb-4 hidden lg:block" />
        <p className="text-lg text-center text-white mb-4">
          انضم إلى فريقنا وكن جزءًا من نجاحنا نحن نبحث دائمًا عن أشخاص موهوبين ومتحمسين للانضمام إلينا والمشاركة في المهام المثيرة
        </p>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="اسم المستخدم"
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="relative mb-4">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="relative mb-4">
            <input
              type="password"
              placeholder="كلمة المرور"
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="relative mb-4">
            <input
              type="tel"
              placeholder="رقم الهاتف"
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="relative mb-4">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              required
            >
              <option value="" className="bg-primaryDarker text-white">
                المدينة
              </option>
              {cities.map((cityOption, index) => (
                <option className="text-white bg-primaryDark" key={index} value={cityOption}>
                  {cityOption}
                </option>
              ))}
            </select>
            <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="relative mb-4">
            <select
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              required
            >
              <option value="" className="bg-primaryDarker text-white">
                المهارة
              </option>
              {skills.map((skillOption, index) => (
                <option className="text-white bg-primaryDark" key={index} value={skillOption}>
                  {skillOption}
                </option>
              ))}
            </select>
            <FaWrench className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="relative mb-4">
            <div
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none flex justify-between items-center cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()} // تفعيل حقل رفع الصورة عند الضغط
            >
              <span>{nationalIdImage ? "تم اختيار صورة البطاقة" : "رفع صورة البطاقة الوطنية"}</span>
              <FaCamera className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
            </div>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              required
            />
          </div>

          <button type="submit" className="w-full bg-[#406F67] mt-2 text-white py-3 rounded-full font-semibold shadow-md hover:bg-[#6BA89D] transition">
            تقديم الطلب
          </button>
        </form>
      </div>
    </div>
  );
};

export default Become;
