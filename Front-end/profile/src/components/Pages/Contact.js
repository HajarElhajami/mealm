
import { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm3D() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    
    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "حدث خطأ أثناء الإرسال" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "فشل الاتصال بالخادم" });
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section dir="rtl" className="relative py-16 px-4 bg-white overflow-hidden">
      {/* تأثيرات ثلاثية الأبعاد */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4FD1C5] opacity-10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#2C7A7B] opacity-10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -25, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] to-[#00F5D4]">
              تواصل معنا
            </span>
          </h2>
          <p className="text-xl text-gray-600">نحن هنا لمساعدتك في أي استفسار</p>
        </motion.div>

        {/* بطاقة النموذج ثلاثية الأبعاد */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white"
          style={{
            boxShadow: "0 25px 50px -12px rgba(47, 133, 135, 0.25)",
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)"
          }}
        >
          {/* شريط العنوان */}
          <div className="relative h-4 bg-gradient-to-r from-[#4FD1C5] to-[#2C7A7B] overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: "linear-gradient(90deg, #38B000, #00B4D8, #00F5D4)",
                backgroundSize: "200% 100%"
              }}
            />
          </div>

          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* حقل الاسم */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="absolute right-3 top-3 text-[#2C7A7B]">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="الاسم الكامل"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setActiveField('fullName')}
                  onBlur={() => setActiveField(null)}
                  className="w-full p-4 pr-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#4FD1C5] text-gray-800 transition-all"
                  required
                  style={{
                    boxShadow: activeField === 'fullName' ? "0 0 0 3px rgba(79, 209, 197, 0.3)" : "none"
                  }}
                />
              </motion.div>

              {/* حقل البريد الإلكتروني */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="absolute right-3 top-3 text-[#2C7A7B]">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                  className="w-full p-4 pr-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#4FD1C5] text-gray-800 transition-all"
                  required
                  style={{
                    boxShadow: activeField === 'email' ? "0 0 0 3px rgba(79, 209, 197, 0.3)" : "none"
                  }}
                />
              </motion.div>

              {/* حقل الرسالة */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="absolute right-3 top-3 text-[#2C7A7B]">
                  <MessageSquare size={20} />
                </div>
                <textarea
                  name="message"
                  placeholder="رسالتك..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  className="w-full p-4 pr-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#4FD1C5] text-gray-800 h-40 transition-all"
                  required
                  style={{
                    boxShadow: activeField === 'message' ? "0 0 0 3px rgba(79, 209, 197, 0.3)" : "none"
                  }}
                />
              </motion.div>

              {/* زر الإرسال */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ 
                  y: -3,
                  boxShadow: "0 10px 20px -5px rgba(47, 133, 135, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#00F5D4] to-[#00B4D8] text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {loading ? "جاري الإرسال..." : (
                    <>
                      <Send size={20} className="ml-2" />
                      إرسال الرسالة
                    </>
                  )}
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-[#2C7A7B] to-[#4FD1C5] opacity-0 hover:bg-gradient-to-r from-[#00B4D8] to-[#00F5D4]  transition-opacity duration-300"
                />
              </motion.button>
            </form>

            {status && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-lg text-center ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
              >
                {status.message}
              </motion.div>
            )}
          </div>

          {/* حواف سفلية متموجة */}
          <div className="relative h-4 bg-gradient-to-r from-[#2C7A7B] to-[#4FD1C5] overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 4
              }}
              style={{
                background: "linear-gradient(90deg, #38B000, #00B4D8, #00F5D4)",
                backgroundSize: "200% 100%"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}












