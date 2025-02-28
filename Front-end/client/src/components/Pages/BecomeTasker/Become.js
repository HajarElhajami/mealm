import React, { useState } from 'react';

const Become = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [skill, setSkill] = useState('');

  const cities = [
    'الدار البيضاء', 'الرباط','القنيطرة', 'فاس', 'مراكش', 'أكادير', 'طنجة', 'مكناس', 'وجدة', 'العيون', 'تطوان'
  ];

  const skills = [
    'تصميم المواقع', 'برمجة', 'دعم فني', 'كتابة المحتوى', 'إدارة مشاريع', 'تحليل بيانات', 'ترجمة'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكن إضافة منطق لتخزين البيانات أو إرسالها إلى الخادم
    console.log({ username, email, password, city, skill });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-primaryLight p-8">
      <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg p-10 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-primaryDarkest mb-6">
          كن من العاملين في المهام
        </h1>

        <p className="text-lg text-center text-primaryDarker mb-8">
          انضم إلى فريقنا وكن جزءًا من نجاحنا! نحن نبحث دائمًا عن أشخاص موهوبين ومتحمسين للانضمام إلينا والمشاركة في المهام المثيرة.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-primaryDarker text-lg font-semibold">اسم المستخدم</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mt-2 rounded-lg border border-primaryMid focus:outline-none focus:ring-2 focus:ring-primaryDarkest"
              placeholder="أدخل اسم المستخدم"
              required
            />
          </div>

          <div>
            <label className="block text-primaryDarker text-lg font-semibold">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 rounded-lg border border-primaryMid focus:outline-none focus:ring-2 focus:ring-primaryDarkest"
              placeholder="أدخل البريد الإلكتروني"
              required
            />
          </div>

          <div>
            <label className="block text-primaryDarker text-lg font-semibold">كلمة السر</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 rounded-lg border border-primaryMid focus:outline-none focus:ring-2 focus:ring-primaryDarkest"
              placeholder="أدخل كلمة السر"
              required
            />
          </div>

          <div>
            <label className="block text-primaryDarker text-lg font-semibold">المدينة</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 mt-2 rounded-lg border border-primaryMid focus:outline-none focus:ring-2 focus:ring-primaryDarkest"
              required
            >
              <option value="">اختر المدينة</option>
              {cities.map((cityOption, index) => (
                <option key={index} value={cityOption}>
                  {cityOption}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-primaryDarker text-lg font-semibold">المهارة التي تتقنها</label>
            <select
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="w-full p-3 mt-2 rounded-lg border border-primaryMid focus:outline-none focus:ring-2 focus:ring-primaryDarkest"
              required
            >
              <option value="">اختر المهارة</option>
              {skills.map((skillOption, index) => (
                <option key={index} value={skillOption}>
                  {skillOption}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primaryDarkest text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary transition"
            >
              التقديم الآن
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Become;
