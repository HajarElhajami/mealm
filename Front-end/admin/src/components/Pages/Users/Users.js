import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/users/get");
        console.log("📢 البيانات المسترجعة:", response.data); // ✅ تأكد أن البيانات تظهر هنا
        // تحديث الحالة للتعامل مع الـ users في الـ response
        setCustomers(response.data.users);  // هنا نستخدم response.data.users
      } catch (err) {
        setError("حدث خطأ أثناء جلب البيانات، يرجى المحاولة لاحقاً.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCustomers();
  }, []);  

  // Delete customer function
  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setCustomers(customers.filter(user => user._id !== id)); // Update the state to remove the deleted customer
    } catch (error) {
      console.error("Error deleting customer:", error);
      alert("حدث خطأ أثناء حذف المستخدم");
    }
  };

  if (loading) {
    return <div>جاري تحميل البيانات...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 text-right" dir="rtl">
      <h2 className="text-2xl font-bold text-center mb-6">إدارة الزبناء</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">📌 قائمة الزبائن</h3>
        <table className="w-full border-collapse border border-gray-300 text-right">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">الإسم</th>
              <th className="border p-2">البريد الإلكتروني</th>
              <th className="border p-2">كلمة المرور</th>
              <th className="border p-2">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map(user => (
                <tr key={user._id} className="text-center">
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">******</td>
                  <td className="border p-2">
                    <button
                      onClick={() => deleteCustomer(user._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-600">لا يوجد زبائن مسجلين.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
