import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTimes, FaClock, FaUser } from "react-icons/fa";

const ordersData = [
  { id: 1, customer: "أحمد علي", service: "تصليح كهرباء", status: "قيد التنفيذ", date: "2025-03-15", phone: "0567891234", city: "الرياض", address: "حي النرجس" },
  { id: 2, customer: "فاطمة الزهراء", service: "سباكة", status: "مكتمل", date: "2025-03-14", phone: "0541239876", city: "جدة", address: "حي السلام" },
  { id: 3, customer: "محمد سالم", service: "دهان", status: "مرفوض", date: "2025-03-13", phone: "0534567890", city: "الدمام", address: "حي الروضة" },
];

export default function OrdersAdmin() {
  const [orders, setOrders] = useState(ordersData);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleStatusChange = (id, newStatus) => {
    setOrders(
      orders.map((order) => (order.id === id ? { ...order, status: newStatus } : order))
    );
  };

  const filteredOrders = orders.filter((order) =>
    order.customer.includes(search) || order.service.includes(search)
  );

  return (
    <div dir="rtl" className="min-h-screen w-[100%] flex items-center justify-center p-6">
      <div className="bg-white/70 p-9 rounded-2xl shadow-2xl w-full max-w-7xl border border-primaryDarkest">
        <h2 className="text-3xl font-bold text-center text-[#406F67] mb-6">إدارة الطلبات</h2>
        <input
          type="text"
          placeholder="ابحث عن طلب..."
          className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-700 text-right mb-5"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-xl shadow-md text-right">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-3">#</th>
                <th className="p-3">اسم العميل</th>
                <th className="p-3">الخدمة</th>
                <th className="p-3">الحالة</th>
                <th className="p-3">التاريخ</th>
                <th className="p-3">إدارة</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">{order.service}</td>
                  <td className={`p-3 font-semibold ${order.status === "مكتمل" ? "text-green-600" : order.status === "مرفوض" ? "text-red-600" : "text-yellow-600"}`}>
                    {order.status}
                  </td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3 flex gap-2">
                    <button className="text-blue-500 text-lg p-2 rounded-lg hover:bg-blue-200"
                      onClick={() => navigate(`/admin/customer/${order.id}`, { state: order })}>
                      <FaUser />
                    </button>
                    <button className="text-yellow-500 text-lg p-2 rounded-lg hover:bg-yellow-200" onClick={() => handleStatusChange(order.id, "قيد التنفيذ")}>
                      <FaClock />
                    </button>
                    <button className="text-green-500 text-lg p-2 rounded-lg hover:bg-green-200" onClick={() => handleStatusChange(order.id, "مكتمل")}>
                      <FaCheck />
                    </button>
                    <button className="text-red-500 text-lg p-2 rounded-lg hover:bg-red-200" onClick={() => handleStatusChange(order.id, "مرفوض")}>
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
