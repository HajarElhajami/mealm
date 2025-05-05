// import { useEffect, useState } from "react";
// import { Mail, User, MessageCircle } from "lucide-react";

// export default function AdminMessages() {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/messages");
//         const data = await response.json();
//         setMessages(data.messages); // ← لاحظ الإضافة هنا
//       } catch (err) {
//         setError("فشل جلب الرسائل من الخادم");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMessages();
//   }, []);  

//   return (
//     <div dir="rtl" className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-[#234B44] text-center">📩 الرسائل الواردة</h1>

//       {loading && <p className="text-center">جاري تحميل الرسائل...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {!loading && messages.length === 0 && (
//         <p className="text-center text-gray-500">لا توجد رسائل حتى الآن</p>
//       )}

//       {!loading && messages.length > 0 && (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-lg shadow-md">
//             <thead>
//               <tr className="bg-[#234B44] text-white">
//                 <th className="py-3 px-4 text-right">الاسم</th>
//                 <th className="py-3 px-4 text-right">البريد الإلكتروني</th>
//                 <th className="py-3 px-4 text-right">الرسالة</th>
//               </tr>
//             </thead>
//             <tbody>
//               {messages.map((msg) => (
//                 <tr key={msg._id} className="border-b hover:bg-gray-50">
//                   <td className="py-3 px-4 flex items-center gap-2">
//                     <User size={16} className="text-[#234B44]" />
//                     {msg.fullName}
//                   </td>
//                   <td className="py-3 px-4 flex items-center gap-2">
//                     <Mail size={16} className="text-[#234B44]" />
//                     {msg.email}
//                   </td>
//                   <td className="py-3 px-4 flex items-center gap-2">
//                     <MessageCircle size={16} className="text-[#234B44]" />
//                     {msg.message}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

























import { useEffect, useState } from "react";
import { Mail, User, MessageCircle, Clock, X } from "lucide-react";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null); // لتخزين الرسالة المختارة

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/messages");
        const data = await response.json();
        const sortedMessages = data.messages.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setMessages(sortedMessages);
      } catch (err) {
        setError("فشل جلب الرسائل من الخادم");
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div dir="rtl" className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#234B44] text-center">
        📩 الرسائل الواردة
      </h1>

      {loading && <p className="text-center">جاري تحميل الرسائل...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-500">لا توجد رسائل حتى الآن</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!loading &&
          messages.map((msg) => (
            <div
              key={msg._id}
              onClick={() => setSelectedMessage(msg)}
              className="bg-white rounded-2xl shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105"
            >
              <div className="flex items-center mb-2 text-[#234B44] font-semibold">
                <User size={18} className="ml-2" />
                {msg.fullName}
              </div>
              <div className="flex items-center mb-2 text-gray-700">
                <Mail size={18} className="ml-2 text-[#234B44]" />
                {msg.email}
              </div>
              <div className="flex items-start mb-2 text-gray-800 max-h-16 overflow-hidden">
                <MessageCircle size={18} className="ml-2 text-[#234B44]" />
                <p className="break-words line-clamp-3">{msg.message}</p>
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <Clock size={16} className="ml-2" />
                {new Date(msg.createdAt).toLocaleString("fr-FR")}
              </div>
            </div>
          ))}
      </div>

      {/* Modal لعرض الرسالة كاملة */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-3 left-3 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#234B44] text-center">
              📄 تفاصيل الرسالة
            </h2>
            <div className="mb-3">
              <div className="flex items-center mb-2 text-[#234B44] font-semibold">
                <User size={18} className="ml-2" />
                {selectedMessage.fullName}
              </div>
              <div className="flex items-center mb-2 text-gray-700">
                <Mail size={18} className="ml-2 text-[#234B44]" />
                {selectedMessage.email}
              </div>
              <div className="flex items-start mb-2 text-gray-800">
                <MessageCircle size={18} className="ml-2 text-[#234B44]" />
                <div className="max-h-60 overflow-y-auto p-2 bg-gray-100 rounded w-full">
                  <p className="break-words whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <Clock size={16} className="ml-2" />
                {new Date(selectedMessage.createdAt).toLocaleString("fr-FR")}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
