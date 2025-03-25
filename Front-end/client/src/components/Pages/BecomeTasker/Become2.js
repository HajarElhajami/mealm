
import React from "react";

const Become2 = () => {
  return (
    <div className="text-center py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-primaryDarkest mb-8 animate-fadeIn">
        عمل مرن بين يديك
      </h2>
      <p className="text-gray-700 mb-12 text-lg leading-relaxed animate-fadeInDelay">
        ابحث عن الوظائف المحلية التي تناسب مهاراتك وجدولك الزمني. مع منصتنا، لديك الحرية والدعم لتكون مدير نفسك
      </p>

      <div className="grid md:grid-cols-3 gap-16">
        <div className="bg-white p-10 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out hover:rotate-3 hover:shadow-xl transform-gpu hover:translate-y-[-15px]">
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-full mx-auto mb-6 shadow-lg hover:shadow-xl">
            {/* <FaClock className="text-white text-3xl" /> */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">كن مدير نفسك</h3>
          </div>
          {/* <h3 className="text-2xl font-semibold text-gray-900 mb-4">كن مدير نفسك</h3> */}
          <p className="text-gray-600 text-lg">
            اعمل بالطريقة التي تناسبك، متى وأينما تريد. قدّم خدماتك في أكثر من 50 مجالًا وحدد جدولًا مرنًا ومنطقة العمل الخاصة بك.
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out hover:rotate-3 hover:shadow-xl transform-gpu hover:translate-y-[-15px]">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 p-6 rounded-full mx-auto mb-6 shadow-lg hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">حدد أسعارك بنفسك</h3>
          </div>
          {/* <h3 className="text-2xl font-semibold text-gray-900 mb-4">حدد أسعارك بنفسك</h3> */}
          <p className="text-gray-600 text-lg">
            تحتفظ بـ 100% من أرباحك، بالإضافة إلى البقشيش! أرسل الفواتير وتلقَّ دفعاتك مباشرة من خلال نظام دفع آمن.
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out hover:rotate-3 hover:shadow-xl transform-gpu hover:translate-y-[-15px]">
          <div className="bg-gradient-to-r from-purple-400 to-indigo-500 p-6 rounded-full mx-auto mb-6 shadow-lg hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">نمِّ عملك</h3>
          </div>
          {/* <h3 className="text-2xl font-semibold text-gray-900 mb-4">نمِّ عملك</h3> */}
          <p className="text-gray-600 text-lg">
            نوصلك بالعملاء في منطقتك، ونوفر لك طرقًا لتسويق نفسك حتى تتمكن من التركيز على ما تجيده.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Become2;
