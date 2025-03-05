import React, { useState } from "react";
import ThreeScene from "../Login/ThreeScene";
import { FaUser, FaLock, FaEnvelope, FaMapMarkerAlt, FaWrench, FaPhone } from "react-icons/fa";

const Become = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(""); // إضافة state لرقم الهاتف
  const [city, setCity] = useState("");
  const [skill, setSkill] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password, phone, city, skill });
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative flex justify-center items-center">
      <ThreeScene />
      <div className="relative bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-6 sm:p-5  w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-5 hidden lg:block">
          كن من العاملين في المهام
        </h1>

        <hr className="border-white w-[55%] ml-[22%] mb-4 hidden lg:block" />
        <p className="text-lg text-center text-white mb-5">
          انضم إلى فريقنا وكن جزءًا من نجاحنا نحن نبحث دائمًا عن أشخاص موهوبين ومتحمسين للانضمام إلينا والمشاركة في المهام المثيرة
        </p>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-5">
            <input
              type="text"
              placeholder="اسم المستخدم"
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="relative mb-5">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          <div className="relative mb-5">
            <input
              type="password"
              placeholder="كلمة المرور"
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          {/* حقل رقم الهاتف */}
          <div className="relative mb-5">
            <input
              type="tel"
              placeholder="رقم الهاتف"
              className="w-full px-10 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>

          {/* حقل المدينة */}
          <div className="relative mb-5">
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

          {/* حقل المهارة */}
          <div className="relative mb-5">
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

          <button type="submit" className="w-full bg-[#406F67] mt-2 text-white py-3 rounded-full font-semibold shadow-md hover:bg-[#6BA89D] transition">
            تقديم الطلب
          </button>
        </form>
      </div>
    </div>
  );
};

export default Become;



