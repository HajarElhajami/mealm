import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    { name: "عبد الصمد", service: "معلم", review: "كان يوسف معلم زوين بزاف، صايب ليا جدران الدار بسرعة ودقة، ما خلا حتى بلاصة خاسرة. غادي نعاود نطلبو مرة أخرى بلا تردد" },
    { name: "سفيان", service: "سباك", review: "عز الدين سباك محترف، صلح ليا تسرب الماء في الكوزينة فاقل من ساعة، وكان خدام نقي وخدوم بزاف" },
    { name: "نور الدين", service: "كهربائي", review: "كهربائي خبير، عزيز دار ليا التمديدات الكهربائية للدار بطريقة آمنة ومحترفة، وكان خدام مزيان وكيشرح الخدمة ليك" },
    { name: "يوسف", service: "صباغ", review: "حسن الصباغ قام بعمل رائع، الصباغة كانت متقونة والنتيجة كانت فوق التوقعات، الدار ولات جديدة" },
    { name: "محمد", service: "عمال النظافة", review: "عمال النظافة خدمو بجدية ونظفو الدار من أصغر تفصيل، كلشي ولا يلمع بحال الجديد. شكرا لهم" },
    { name: "أيوب", service: "بستاني", review: "بستاني متمكن، نسق ليا الحديقة ديالي وخلاها تبارك الله زوينة ومرتبة. كيخدم بحب وشغف" },
    { name: "عبد الحق", service: "نقل وحمل الأغراض", review: "نقل الأغراض كان ساهل بزاف مع هاد الخدمة، جاو في الوقت وحطو ليا كلشي بلا خسائر وبلا صداع" },
  ];

  return (
    <div className="rtl text-right font-sans p-10" dir="rtl">
      <h2 className="text-3xl text-primaryDarkest text-center font-bold mt-4">شاهد ما يقوله العملاء السعداء عن <strong className="text-3xl font-bold text-primaryMid"> " معلم "</strong></h2>
      <div className="grid grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="p-5">
            <h3 className="text-xl font-semibold flex items-center justify-between">
              {review.name}
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
              </div>
            </h3>
            <p className="mt-2 text-gray-700">{review.review}</p>
            <strong className="block mt-2 text-green-600">{review.service}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
