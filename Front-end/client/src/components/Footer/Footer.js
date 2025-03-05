import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import appStore from "../Image/31.png";
import googlePlay from "../Image/32.jpeg";

const socialLinks = [
  { id: 1, icon: <FaFacebookF />, bg: "bg-gradient-to-r from-blue-600 to-blue-400", shape: "polygon(25% 0%, 75% 10%, 100% 50%, 80% 90%, 30% 100%, 0% 50%)" },
  { id: 2, icon: <FaTwitter />, bg: "bg-gradient-to-r from-blue-400 to-cyan-400", shape: "polygon(20% 10%, 80% 0%, 100% 40%, 90% 80%, 40% 100%, 0% 60%)" },
  { id: 3, icon: <FaInstagram />, bg: "bg-gradient-to-r from-pink-500 to-red-500 to-orange-400", shape: "polygon(30% 0%, 80% 20%, 100% 50%, 90% 80%, 40% 100%, 10% 80%, 0% 40%)" },
  { id: 4, icon: <FaLinkedinIn />, bg: "bg-gradient-to-r from-blue-800 to-blue-500", shape: "polygon(25% 5%, 75% 0%, 100% 45%, 85% 85%, 40% 100%, 5% 85%, 0% 50%)" },
];

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#406F67] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
        
        {/* القسم الأول: شعار معلم */}
        <div>
          <h2 className="text-2xl font-bold">معلم</h2>
          <p className="text-gray-300 mt-2">خدمات مهنية عالية الجودة تربطك بأفضل الحرفيين في منطقتك.</p>
        </div>

        {/* القسم الثاني: روابط الهيدر */}
        <div>
          <h3 className="text-xl font-semibold mb-3">روابط سريعة</h3>
          <ul className="space-y-2">
            <li><Link to="/l1/services" className="text-gray-300 hover:text-[#D4AF37] transition">الخدمات</Link></li>
            <li><Link to="/l1/login" className="text-gray-300 hover:text-[#D4AF37] transition">تسجيل الدخول</Link></li>
            <li><Link to="/l1/rogester" className="text-gray-300 hover:text-[#D4AF37] transition">التسجيل</Link></li>
            <li><Link to="/l1/BecomeTasker" className="text-gray-300 hover:text-[#D4AF37] transition">كن من العاملين في المهام</Link></li>
          </ul>
        </div>

        {/* القسم الثالث: تحميل التطبيق */}
        <div className="text-right">
          <h3 className="text-lg font-semibold mb-2">قم بتحميل تطبيقنا</h3>
          <p className="text-gray-300 text-sm mb-4">تعامل مع قائمة مهامك أينما كنت باستخدام تطبيقنا المحمول.</p>
          <div className="flex justify-end gap-5 items-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={appStore} alt="App Store" className="w-[100%] rounded-lg border-white border-2" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={googlePlay} alt="Google Play" className="w-[89%] rounded-lg border-white border-2" />
            </a>
          </div>
        </div>
      </div>

      {/* القسم الرابع: أيقونات الشبكات الاجتماعية */}
      <div className="text-center mt-8">
        <h3 className="text-lg font-semibold mb-2">تابعنا على الشبكات الاجتماعية</h3>
        <div className="flex justify-center space-x-4">
          {socialLinks.map(({ id, icon, bg, shape }) => (
            <div
              key={id}
              className={`w-16 h-16 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-110 shadow-lg ${bg}`}
              style={{ clipPath: shape }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* حقوق الملكية */}
      <div className="text-center text-gray-300 mt-6 border-t border-gray-500 pt-4">
        &copy; {new Date().getFullYear()} معلم. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
