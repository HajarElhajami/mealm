
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-DeepJungleGreen text-white h-[90%] p-6 absolute right-0 mt-[68px]">
      <h2 className="text-2xl font-semibold text-center mb-8">لوحة التحكم</h2>
      <nav className="space-y-4 text-right">
        <Link to="/" className="block p-2 text-white hover:bg-primary hover:text-DeepJungleGreen rounded">
          الرئيسية
        </Link>
        <Link to="/users" className="block p-2 text-white hover:bg-primary hover:text-DeepJungleGreen rounded">
          إدارة الزبناء
        </Link>
        <Link to="/clients" className="block p-2 text-white hover:bg-primary hover:text-DeepJungleGreen rounded">
          إدارة العملاء
        </Link>
        <Link to="/customer" className="block p-2 text-white hover:bg-primary hover:text-DeepJungleGreen rounded">
          إدارة العميل 
        </Link>
        <Link to="/orders" className="block p-2 text-white hover:bg-primary hover:text-DeepJungleGreen rounded">
          إدارة الطلبات
        </Link>
        <Link to="/reviews" className="block p-2 text-white hover:bg-primary hover:text-DeepJungleGreen rounded">
          إدارة التقييمات
        </Link>
        <Link to="/settings" className="block p-2 text-white hover:bg-primary hover:text-DeepJungleGreen rounded">
          الإعدادات
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

