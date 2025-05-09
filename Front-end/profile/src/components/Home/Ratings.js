

function Ratings() {
  return (
    <div>
{/* قسم التقييمات */}
<div className="mt-12 px-8">
          <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">تقييمات العملاء</h2>
          
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="border border-[#CFF5EC] rounded-lg p-6 shadow-md">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-bold text-[#406F67]">علي محمد</h4>
                  <div className="text-yellow-400 text-sm mt-1">
                    ★★★★★
                  </div>
                </div>
                <span className="text-sm text-gray-500">منذ أسبوع</span>
              </div>
              <p className="mt-3 text-gray-700">عمل ممتاز ودقة في المواعيد، النظام الكهربائي يعمل بشكل رائع!</p>
            </div>
          </div>
          
          <button className="mt-6 w-full py-3 border-2 border-[#A9E7DA] rounded-lg text-[#406F67] font-medium hover:bg-[#EAF9F6] transition">
            عرض الكل
          </button>
        </div>
    </div>
  );
}

export default Ratings;
