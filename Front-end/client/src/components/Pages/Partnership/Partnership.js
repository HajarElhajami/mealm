
// import { useState } from "react";
// import { FaBusinessTime, FaUser, FaBuilding, FaGlobe, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
// import ThreeScene from '../Login/ThreeScene';

// export default function CompanyPartnershipForm() {
//   const [form, setForm] = useState({
//     companyName: "",
//     contactName: "",
//     email: "",
//     phone: "",
//     companyWebsite: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("تم إرسال طلب الشراكة بنجاح! سنقوم بالرد في أقرب وقت.");
//   };

//   return (
//     <div className="h-screen w-screen overflow-hidden relative flex justify-center items-center">
//       <ThreeScene />
//       <div className="relative bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-3 sm:p-5  w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-auto">
//         <div className="text-center mb-3 md:mb-8">
//           <FaBusinessTime className="text-white text-5xl md:text-6xl mx-auto" />
//           <h2 className="text-2xl md:text-3xl font-semibold text-white md:mt-3 mt-1.5">طلب شراكة مع معلم</h2>
//           <p className="text-gray-100 md:mt-3 mt-1.5">
//             نحن نبحث دائمًا عن شراكات استراتيجية مع الشركات التي ترغب في التوسع والنمو. أرسل لنا طلبك وسنتواصل معك قريبًا
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-2 md:space-y-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2">
//             <div className="relative">
//               <FaBuilding className="absolute left-4 top-4 text-white" />
//               <input
//                 name="companyName"
//                 type="text"
//                 placeholder="اسم الشركة"
//                 value={form.companyName}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-12 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
//               />
//             </div>
//             <div className="relative">
//               <FaUser className="absolute left-4 top-4 text-white" />
//               <input
//                 name="contactName"
//                 type="text"
//                 placeholder="اسم الشخص المسؤول"
//                 value={form.contactName}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-12 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2">
//             <div className="relative">
//               <FaEnvelope className="absolute left-4 top-4 text-white" />
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="البريد الإلكتروني"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-12 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
//               />
//             </div>
//             <div className="relative">
//               <FaPhone className="absolute left-4 top-4 text-white" />
//               <input
//                 name="phone"
//                 type="tel"
//                 placeholder="رقم الهاتف"
//                 value={form.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-12 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
//               />
//             </div>
//           </div>

//           <div className="relative">
//             <FaGlobe className="absolute left-4 top-4 text-white" />
//             <input
//               name="companyWebsite"
//               type="url"
//               placeholder="رابط موقع الشركة الإلكتروني"
//               value={form.companyWebsite}
//               onChange={handleChange}
//               required
//               className="w-full px-12 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
//             />
//           </div>

//           <div className="relative">
//             <FaCommentDots className="absolute left-4 top-4 text-white" />
//             <textarea
//               name="message"
//               placeholder="رسالتك أو اقتراحك للشراكة"
//               value={form.message}
//               onChange={handleChange}
//               required
//               className="w-full px-12 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#406F67] text-white py-3 rounded-full font-semibold shadow-md hover:bg-[#6BA89D] transition"
//           >
//             إرسال طلب الشراكة
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }





























import axios from "axios";
import { useState } from "react";
import { FaBusinessTime, FaUser, FaBuilding, FaGlobe, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import ThreeScene from '../Login/ThreeScene';

export default function CompanyPartnershipForm() {
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    companyWebsite: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/partners", form);
      alert("تم إرسال طلب الشراكة بنجاح! سنقوم بالرد في أقرب وقت.");
      setForm({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        companyWebsite: "",
        message: "",
      });
    } catch (error) {
      alert("حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى لاحقًا.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative flex justify-center items-center">
      <ThreeScene />
      <div className="relative bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-xl p-3 sm:p-5  w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-auto">
        <div className="text-center mb-3 md:mb-8">
          <FaBusinessTime className="text-white text-5xl md:text-6xl mx-auto" />
          <h2 className="text-2xl md:text-3xl font-semibold text-white md:mt-3 mt-1.5">طلب شراكة مع معلم</h2>
          <p className="text-gray-100 md:mt-3 mt-1.5">
            نحن نبحث دائمًا عن شراكات استراتيجية مع الشركات التي ترغب في التوسع والنمو. أرسل لنا طلبك وسنتواصل معك قريبًا
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2">
            <div className="relative">
              <FaBuilding className="absolute left-4 top-4 text-white" />
              <input
                name="companyName"
                type="text"
                placeholder="اسم الشركة"
                value={form.companyName}
                onChange={handleChange}
                required
                className="w-full px-12 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              />
            </div>
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-white" />
              <input
                name="contactName"
                type="text"
                placeholder="اسم الشخص المسؤول"
                value={form.contactName}
                onChange={handleChange}
                required
                className="w-full px-12 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2">
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-white" />
              <input
                name="email"
                type="email"
                placeholder="البريد الإلكتروني"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-12 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              />
            </div>
            <div className="relative">
              <FaPhone className="absolute left-4 top-4 text-white" />
              <input
                name="phone"
                type="tel"
                placeholder="رقم الهاتف"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-12 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
              />
            </div>
          </div>

          <div className="relative">
            <FaGlobe className="absolute left-4 top-4 text-white" />
            <input
              name="companyWebsite"
              type="url"
              placeholder="رابط موقع الشركة الإلكتروني"
              value={form.companyWebsite}
              onChange={handleChange}
              required
              className="w-full px-12 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
            />
          </div>

          <div className="relative">
            <FaCommentDots className="absolute left-4 top-4 text-white" />
            <textarea
              name="message"
              placeholder="رسالتك أو اقتراحك للشراكة"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-12 py-3 rounded-full bg-transparent border border-white text-white placeholder-white focus:ring-2 focus:ring-[#6BA89D] outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#406F67] text-white py-3 rounded-full font-semibold shadow-md hover:bg-[#6BA89D] transition"
          >
            {loading ? "جارٍ الإرسال..." : "إرسال طلب الشراكة"}
          </button>
        </form>
      </div>
    </div>
  );
}
