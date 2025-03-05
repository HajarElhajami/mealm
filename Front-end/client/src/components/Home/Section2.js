
import Stayle from './Stayle.css'
import { ShieldCheck, Headset, CheckCircle } from "lucide-react";

export default function Features() {
  return (
    <div className="relative bg-gradient-to-br from-[#406F67] to-[#406F67] py-9 px-6 md:px-20">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/background-pattern.svg')" }}></div>

      <div className="max-w-5xl mx-auto text-center relative">
        <h2 className="text-4xl font-extrabold text-white mb-4 drop-shadow-md">
           رضاكم هو أولويتنا  
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          خدمات عالية الجودة، دعم متواصل، وراحة تامة، لأنكم تستحقون الأفضل 
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10 relative">
        <div className="glass-card">
          <ShieldCheck className="icon-style text-blue-500" />
          <h3 className="card-title">المهام المعتمدة</h3>
          <p className="card-text">
            يتم فحص خلفيات العاملين بدقة لضمان أعلى معايير الأمان والجودة.
          </p>
          <span className="inline-block">مضمون  %100</span>
        </div>

        <div className="glass-card">
          <Headset className="icon-style text-green-500" />
          <h3 className="card-title">دعم مخصص 24/7</h3>
          <p className="card-text">
            دعم متاح طوال اليوم لحل مشاكلكم بسرعة واحترافية.
          </p>
          <span className="inline-block">24/7</span>
        </div>

        <div className="glass-card">
          <CheckCircle className="icon-style text-yellow-500" />
          <h3 className="card-title">تعهد السعادة</h3>
          <p className="card-text">
            نلتزم بتحقيق رضاكم الكامل أو استعادة أموالك.
          </p>
          <span className="inline-block">ضمان الرضا</span>
        </div>
      </div>
    </div>
  );
}
