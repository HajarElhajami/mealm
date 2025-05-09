
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import appStore from "../Image/31.png";
import googlePlay from "../Image/32.jpeg";

export default function Footer() {
  return (
  <footer dir="rtl" className="bg-gradient-to-r from-[#94D1C3] to-[#234B44] text-white py-3 px-5 md:py-7 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
        <div>
        <Link to="/" className="text-3xl hover:text-secondary text-white">معلم</Link>
          <p className="text-gray-300 mt-5">خدمات مهنية عالية الجودة تربطك بأفضل <br/>الحرفيين في منطقتك.</p>
        </div>

        <div>
             <h3 className="text-xl font-semibold mb-5">روابط سريعة</h3>
             <ul className="space-y-5">
                 <li><Link to="/" className="text-gray-300 hover:text-[#D4AF37] transition">الرئيسية</Link></li>
                 <li><Link to="/services" className="text-gray-300 hover:text-[#D4AF37] transition">الخدمات</Link></li>
                 <li><Link to="/works" className="text-gray-300 hover:text-[#D4AF37] transition">الأعمال</Link></li>
                 <li><Link to="/reviews" className="text-gray-300 hover:text-[#D4AF37] transition">التقييمات</Link></li>
                 <li><Link to="/contact" className="text-gray-300 hover:text-[#D4AF37] transition">اتصل بنا</Link></li>
             </ul>
        </div>
      <div className="">
        <div className="text-right">
          <h2 className="text-xl text-center font-bold mb-3">قم بتحميل تطبيقنا</h2>
          <p className="text-white text-sm mb-4">تعامل مع قائمة مهامك أينما كنت باستخدام تطبيقنا المحمول.</p>
          <div className="flex justify-end gap-5 items-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={appStore} alt="App Store" className="w-[100%] rounded-lg border-white border-2" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={googlePlay} alt="Google Play" className="w-[89%] rounded-lg border-white border-2" />
            </a>
          </div>
        </div>

      <div className="text-center mt-8">
        <h3 className="text-lg font-semibold mb-2">تابعنا على الشبكات الاجتماعية</h3>
   <div className="flex justify-center">

  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">      
  <div className="relative w-[95px] h-[115px]">
   <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="gradient-facebook" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0000ff" />
        <stop offset="50%" stopColor="#42A5F5" />
        <stop offset="100%" stopColor="#4DD0E1" />
      </linearGradient>
    </defs>
    <path 
      d="M32 7C53-3 50 25 68 31s5.37705 39.535266-17 42c-20.599976 2.268997-12.902118-14.696072-31-14-26 1-9-42 12-52zm-9.171732 70.949766c-4.095558 0-7.415664-3.29269-7.415664-7.354432 0-4.06174 3.320106-7.35443 7.415664-7.35443 4.09556 0 7.415665 3.29269 7.415665 7.35443s-3.320106 7.354432-7.415665 7.354432z" 
      fill="url(#gradient-facebook)" 
    />
   </svg>
   <div className="absolute inset-0 pb-4 pr-3 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl" style={{ clipPath: "polygon(30% 5%, 70% 0%, 95% 40%, 85% 90%, 40% 100%, 5% 85%, 0% 50%)" }}>
    <FaFacebookF />
   </div>
  </div>
 </a>

  <a href="https://www.Twitter.com" target="_blank" rel="noopener noreferrer">
  <div className="relative w-[95px] h-[115px]">
   <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="gradient-twitter" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00BCD4" />
        <stop offset="50%" stopColor="#24A5F5" />
        <stop offset="100%" stopColor="#90CAF9" />
      </linearGradient>
    </defs>
    <path 
      d="M64.390766 7.893908c9.13892 9.586965-3.91575 14.742016.007852 26.63074 3.923603 11.888725 14.324106 14.96342 8.658127 27.114154-5.66598 12.150732-26.532488 3.603945-34.986257 10.31272-8.45377 6.708774-18.30274 6.258113-20.89926-9.745485-2.596518-16.0036-21.680047-20.760404-6.134962-40.13869 15.545086-19.378288 44.21558-23.760404 53.3545-14.17344z"
      fill="url(#gradient-twitter)" 
    />
   </svg>
   <div className="absolute inset-0 pb-4 pr-3 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl" style={{ clipPath: "polygon(25% 10%, 75% 5%, 100% 45%, 90% 85%, 50% 100%, 10% 85%, 0% 40%)" }}>
    <FaTwitter />
   </div>
  </div>
  </a>

  <a href="https://www.Instagram.com" target="_blank" rel="noopener noreferrer">
  <div className="relative w-[95px] h-[115px]">
   <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="gradient-instagram" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset='0%' stop-color='#FBBC6E'/>
      <stop offset='50.773063%' stop-color='#D8456A'/>
      <stop offset='100%' stop-color='#4459A9'/>

      </linearGradient>
    </defs>
    <path 
      d='M45.331115 21.477975c14.95994 1.83685 29.52978-1.394228 32.937636 12.07628 3.40786 13.470507-13.03519 15.467577-22.95696 30.31343C45.39003 78.71354 31 79 19 67 7 55-4 20 12.514925 8.4126c16.514925-11.5874 17.85625 11.228525 32.81619 13.065375zm5.127594-3.769112c-4.09556 0-7.41567-3.29269-7.41567-7.354432C43.04304 6.29269 46.36315 3 50.45871 3c4.095557 0 7.415663 3.29269 7.415663 7.35443 0 4.061742-3.320106 7.354433-7.415664 7.354433z'    
      fill="url(#gradient-instagram)" 
    />
    </svg>
    <div className="absolute inset-0 pb-4 pr-6 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl" style={{ clipPath: "polygon(25% 10%, 75% 5%, 100% 45%, 90% 85%, 50% 100%, 10% 85%, 0% 40%)" }}>
     <FaInstagram />
   </div>
  </div>
  </a>

  <a href="https://www.LinkedinIn.com" target="_blank" rel="noopener noreferrer">
  <div className="relative w-[95px] h-[115px]">
   <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="gradient-linkedin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset='0%' stop-color='#1565C0'/>
      <stop offset='50.773063%' stop-color='#1E88E5'/>
      <stop offset='100%' stop-color='#42A5F5'/>

      </linearGradient>
    </defs>
      <path 
        d='M23.18745 12.944335c-6.54792 27.757068-21.791687 24.90854-17.407975 39.16266 4.383713 14.25412 15.53734 9.09612 28.702498 17.354234 13.165158 8.25811 22.386095 16.8613 37.302005-15.81006s-42.04861-68.4639-48.596528-40.706835z'
        fill="url(#gradient-linkedin)" 
      />
    </svg>
    <div className="absolute inset-0 pb-4 pr-4 flex items-center justify-center text-white text-2xl transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl" style={{ clipPath: "polygon(25% 10%, 75% 5%, 100% 45%, 90% 85%, 50% 100%, 10% 85%, 0% 40%)" }}>
      <FaLinkedinIn />
    </div>
   </div>
   </a>
   </div>
      </div>
      </div>
      </div>
      <div className="text-center text-white mt-6 border-t border-white pt-4">
        &copy; {new Date().getFullYear()} معلم. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
