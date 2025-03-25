import { useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaPhone, FaCity, FaMapMarkerAlt, FaTools, FaCalendar, FaHourglassHalf } from "react-icons/fa";

export default function CustomerAdmin() {
  const location = useLocation();
  const navigate = useNavigate();
  const customer = location.state || {};

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white/70 p-9 rounded-2xl shadow-2xl w-full max-w-lg border border-primaryDarkest">
        <h2 className="text-3xl font-bold text-center text-[#406F67] mb-6">إدارة العميل</h2>

        <p className="text-lg font-semibold mb-4 flex items-center gap-3"><FaUser className="text-blue-600" /> {customer.customer}</p>
        <p className="text-lg font-semibold mb-4 flex items-center gap-2"><FaPhone className="text-green-600" /> {customer.phone}</p>
        <p className="text-lg font-semibold mb-4 flex items-center gap-2"><FaCity className="text-purple-600" /> {customer.city}</p>
        <p className="text-lg font-semibold mb-4 flex items-center gap-2"><FaMapMarkerAlt className="text-red-600" /> {customer.address}</p>
        <p className="text-lg font-semibold mb-4 flex items-center gap-2"><FaTools className="text-yellow-600" /> {customer.service}</p>
        <p className="text-lg font-semibold mb-4 flex items-center gap-2"><FaCalendar className="text-gray-600" /> {customer.date}</p>
        <p className={`text-lg font-semibold mb-4 flex items-center gap-2 ${customer.status === "مكتمل" ? "text-green-600" : customer.status === "مرفوض" ? "text-red-600" : "text-yellow-600"}`}>
          <FaHourglassHalf /> {customer.status}
        </p><br/>

        <button
            className="w-full bg-gradient-to-r from-[#86C4B8] to-[#406F67] text-white p-3 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
            onClick={() => navigate(-1)}
        >
          العودة إلى الطلبات
        </button>
      </div>
    </div>
  );
}
