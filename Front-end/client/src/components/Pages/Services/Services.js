
import { Wrench, Plug, PaintRoller, TreePine, Truck, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "../../Image/1.png";

const services = [
  { name: "سباك", icon: Wrench, description: "إصلاح الأنابيب وتركيب الأدوات الصحية", link: "/plumber" },
  { name: "كهربائي", icon: Plug, description: "صيانة وتمديد الأسلاك الكهربائية للمنازل", link: "/electrician" },
  { name: "صباغ", icon: PaintRoller, description: "طلاء الجدران بأحدث الألوان", link: "/painter" },
  { name: "بستاني", icon: TreePine, description: "تنسيق الحدائق والعناية بالنباتات", link: "/gardener" },
  { name: "نقل وحمل الأغراض", icon: Truck, description: "نقل الأثاث والأغراض الثقيلة بأمان", link: "/mover" },
  { name: "عمال النظافة", icon: img1, description: "تنظيف المنازل والمكاتب باحترافية", link: "/cleaner" },
  { name: "الخدمات الأكثر طلبًا", icon: Flame, description: "أكثر الخدمات استخدامًا في منطقتك", link: "/popularServices" }
];

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-[#2E6E65] to-[#A9E7DA] min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          خدماتنا الاحترافية
        </h2>
        <p className="text-gray-200 text-lg md:text-xl mb-12">
          اختر الخدمة التي تحتاجها وسنكون في خدمتك بأعلى جودة
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 text-center gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center justify-center mb-4">
              {typeof service.icon === "string" ? (
                <img src={service.icon} alt={service.name} className="w-12 h-12" />
              ) : (
                <service.icon className="w-12 h-12" />
              )}
            </div>
            <h3 className="text-2xl font-semibold text-[#2E6E65] mb-3">{service.name}</h3>
            <p className="text-gray-600 text-sm mb-6">{service.description}</p>
            <Link
              to={service.link}
              className="inline-block bg-gradient-to-r from-[#2E6E65] to-[#5EA79B] text-white px-5 py-3 rounded-full shadow-md hover:opacity-90 transition-all duration-300"
            >
              اطلب الخدمة
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
