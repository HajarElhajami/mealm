import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPartnerRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/partners");
        setRequests(res.data.requests);
      } catch (err) {
        setError("فشل تحميل الطلبات");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) return <div className="text-center p-4">جارٍ التحميل...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4" dir="rtl">
      <h2 className="text-2xl font-bold mb-4">طلبات الشراكة من الشركات</h2>
      {requests.length === 0 ? (
        <p className="text-gray-500">لا توجد طلبات بعد.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requests.map((req) => (
           <div key={req._id} className="border rounded-lg p-4 shadow bg-white">
           <h3 className="font-semibold text-lg mb-2">{req.companyName}</h3>
           <p><strong>الشخص المسؤول:</strong> {req.contactName}</p>
           <p><strong>البريد الإلكتروني:</strong> {req.email}</p>
           <p><strong>الهاتف:</strong> {req.phone}</p>
           <p>
             <strong>الموقع الإلكتروني:</strong>{" "}
             <a
               href={req.companyWebsite}
               className="text-blue-500 underline"
               target="_blank"
               rel="noreferrer"
             >
               {req.companyWebsite}
             </a>
           </p>
           <p className="break-words max-h-40 overflow-auto">
             <strong>الرسالة:</strong> {req.message}
           </p>
           <p className="text-sm text-gray-500 mt-2">
             تم الإرسال في: {new Date(req.createdAt).toLocaleString()}
           </p>
         </div>         
          ))}
        </div>
      )}
    </div>
  );
}
