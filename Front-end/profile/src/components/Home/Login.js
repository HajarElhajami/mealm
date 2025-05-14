// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FaUser, FaLock } from "react-icons/fa";
// import bb from ''

// const LoginForm3D = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       if (response.data.success) {
//         // Save token to localStorage or context
//         localStorage.setItem("userToken", response.data.token);
        
//         // Redirect based on user role
//         if (response.data.user.role === "worker") {
//           navigate("/worker-dashboard");
//         } else {
//           navigate("/client-dashboard");
//         }
//       }
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "فشل تسجيل الدخول. الرجاء المحاولة مرة أخرى."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#406F67] to-[#80C6A2] p-4">
//       <div className="w-full max-w-md">
//         {/* 3D Card Effect */}
//         <div 
//           className="bg-white rounded-lg shadow-2xl transform transition-all duration-500 hover:rotate-y-12"
//           style={{
//             transformStyle: "preserve-3d",
//             perspective: "1000px",
//           }}
//         >
//           <div className="p-8">
//             <h2 className="text-3xl font-bold text-center text-[#406F67] mb-8">
//               تسجيل الدخول
//             </h2>
            
//             {error && (
//               <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-center">
//                 {error}
//               </div>
//             )}

//             <form onSubmit={handleSubmit}>
//               {/* Email Field */}
//               <div className="mb-6 relative group">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#406F67]">
//                   <FaUser />
//                 </div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border-b-2 border-[#406F67] focus:outline-none focus:border-[#80C6A2] transition-all"
//                   placeholder="البريد الإلكتروني"
//                   required
//                 />
//                 <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#80C6A2] transition-all duration-300 group-hover:w-full"></div>
//               </div>

//               {/* Password Field */}
//               <div className="mb-8 relative group">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#406F67]">
//                   <FaLock />
//                 </div>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border-b-2 border-[#406F67] focus:outline-none focus:border-[#80C6A2] transition-all"
//                   placeholder="كلمة المرور"
//                   required
//                 />
//                 <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#80C6A2] transition-all duration-300 group-hover:w-full"></div>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-[#406F67] to-[#80C6A2] text-white py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70"
//               >
//                 {isLoading ? "جاري التحقق..." : "تسجيل الدخول"}
//               </button>
//             </form>

//             <div className="mt-6 text-center">
//               <a href="/forgot-password" className="text-[#406F67] hover:text-[#80C6A2] transition-colors">
//                 نسيت كلمة المرور؟
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm3D;





























 









// import { FaUser, FaLock } from 'react-icons/fa';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginForm3D = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         email,
//         password
//       });

//       if (response.data.success) {
//         // حفظ التوكن في localStorage
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('user', JSON.stringify(response.data.user));
        
//         // توجيه إلى صفحة العميل
//         if (response.data.user.role === 'client') {
//             navigate('/client-dashboard');
//           } else if (response.data.user.role === 'worker') {
//             navigate('/worker-dashboard');
//           }
//                 }
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل تسجيل الدخول');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Inline styles
//   const styles = {
//     pageContainer: {
//       minHeight: "100vh",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       background: "linear-gradient(to bottom right, #406F67, #80C6A2)",
//       padding: "1rem"
//     },
//     formContainer: {
//       width: "100%",
//       maxWidth: "28rem"
//     },
//     card: {
//       backgroundColor: "white",
//       borderRadius: "0.5rem",
//       boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//       transformStyle: "preserve-3d",
//       perspective: "1000px",
//       transition: "all 0.5s ease",
//       ':hover': {
//         transform: "rotateY(12deg)"
//       }
//     },
//     cardContent: {
//       padding: "2rem"
//     },
//     title: {
//       fontSize: "1.875rem",
//       fontWeight: "bold",
//       textAlign: "center",
//       color: "#406F67",
//       marginBottom: "2rem"
//     },
//     errorBox: {
//       marginBottom: "1rem",
//       padding: "0.75rem",
//       backgroundColor: "#FEE2E2",
//       color: "#B91C1C",
//       borderRadius: "0.375rem",
//       textAlign: "center"
//     },
//     inputGroup: {
//       marginBottom: "1.5rem",
//       position: "relative"
//     },
//     inputIcon: {
//       position: "absolute",
//       top: "50%",
//       left: "0.75rem",
//       transform: "translateY(-50%)",
//       color: "#406F67"
//     },
//     inputField: {
//       width: "100%",
//       paddingLeft: "2.5rem",
//       paddingRight: "1rem",
//       paddingTop: "0.75rem",
//       paddingBottom: "0.75rem",
//       borderBottomWidth: "2px",
//       borderBottomColor: "#406F67",
//       outline: "none",
//       transition: "all 0.3s ease",
//       ':focus': {
//         borderBottomColor: "#80C6A2"
//       }
//     },
//     inputUnderline: {
//       position: "absolute",
//       bottom: "0",
//       left: "0",
//       width: "0",
//       height: "0.125rem",
//       backgroundColor: "#80C6A2",
//       transition: "all 0.3s ease"
//     },
//     submitButton: {
//       width: "100%",
//       background: "linear-gradient(to right, #406F67, #80C6A2)",
//       color: "white",
//       padding: "0.75rem 1rem",
//       borderRadius: "0.5rem",
//       boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//       transition: "all 0.3s ease",
//       ':hover': {
//         boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
//         transform: "scale(1.05)"
//       },
//       ':disabled': {
//         opacity: "0.7"
//       }
//     },
//     forgotPassword: {
//       marginTop: "1.5rem",
//       textAlign: "center"
//     },
//     forgotLink: {
//       color: "#406F67",
//       ':hover': {
//         color: "#80C6A2"
//       },
//       transition: "color 0.3s ease"
//     }
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.formContainer}>
//         <div style={styles.card}>
//           <div style={styles.cardContent}>
//             <h2 style={styles.title}>تسجيل الدخول</h2>
            
//             {error && (
//               <div style={styles.errorBox}>
//                 {error}
//               </div>
//             )}

//             <form onSubmit={handleSubmit}>
//               <div style={styles.inputGroup}>
//                 <div style={styles.inputIcon}>
//                   <FaUser />
//                 </div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   style={styles.inputField}
//                   placeholder="البريد الإلكتروني"
//                   required
//                 />
//                 <div style={styles.inputUnderline}></div>
//               </div>

//               <div style={styles.inputGroup}>
//                 <div style={styles.inputIcon}>
//                   <FaLock />
//                 </div>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   style={styles.inputField}
//                   placeholder="كلمة المرور"
//                   required
//                 />
//                 <div style={styles.inputUnderline}></div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 style={{
//                   ...styles.submitButton,
//                   transform: isLoading ? 'none' : '',
//                   boxShadow: isLoading ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : ''
//                 }}
//               >
//                 {isLoading ? "جاري التحقق..." : "تسجيل الدخول"}
//               </button>
//             </form>

//             <div style={styles.forgotPassword}>
//               <a 
//                 href="/forgot-password" 
//                 style={styles.forgotLink}
//               >
//                 نسيت كلمة المرور؟
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm3D;





























// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaLock } from 'react-icons/fa'; // ✅ استيراد الأيقونات

// const LoginForm3D = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//         const response = await axios.post("http://localhost:5000/api/auth/client-login", {
//             email,
//             password,
//           });
          
//       if (response.data.success) {
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('user', JSON.stringify(response.data.user));

//         if (response.data.user.role === 'client') {
//           navigate('/client-dashboard');
//         } else if (response.data.user.role === 'worker') {
//           navigate('/worker-dashboard');
//         }
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل تسجيل الدخول');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const styles = {
//     pageContainer: {
//       minHeight: "100vh",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       background: "linear-gradient(to bottom right, #406F67, #80C6A2)",
//       padding: "1rem"
//     },
//     formContainer: {
//       width: "100%",
//       maxWidth: "28rem"
//     },
//     card: {
//       backgroundColor: "white",
//       borderRadius: "0.5rem",
//       boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//       transformStyle: "preserve-3d",
//       perspective: "1000px",
//       transition: "all 0.5s ease"
//     },
//     cardContent: {
//       padding: "2rem"
//     },
//     title: {
//       fontSize: "1.875rem",
//       fontWeight: "bold",
//       textAlign: "center",
//       color: "#406F67",
//       marginBottom: "2rem"
//     },
//     errorBox: {
//       marginBottom: "1rem",
//       padding: "0.75rem",
//       backgroundColor: "#FEE2E2",
//       color: "#B91C1C",
//       borderRadius: "0.375rem",
//       textAlign: "center"
//     },
//     inputGroup: {
//       marginBottom: "1.5rem",
//       position: "relative"
//     },
//     inputIcon: {
//       position: "absolute",
//       top: "50%",
//       left: "0.75rem",
//       transform: "translateY(-50%)",
//       color: "#406F67"
//     },
//     inputField: {
//       width: "100%",
//       paddingLeft: "2.5rem",
//       paddingRight: "1rem",
//       paddingTop: "0.75rem",
//       paddingBottom: "0.75rem",
//       borderBottomWidth: "2px",
//       borderBottomColor: "#406F67",
//       outline: "none",
//       transition: "all 0.3s ease"
//     },
//     inputUnderline: {
//       position: "absolute",
//       bottom: "0",
//       left: "0",
//       width: "0",
//       height: "0.125rem",
//       backgroundColor: "#80C6A2",
//       transition: "all 0.3s ease"
//     },
//     submitButton: {
//       width: "100%",
//       background: "linear-gradient(to right, #406F67, #80C6A2)",
//       color: "white",
//       padding: "0.75rem 1rem",
//       borderRadius: "0.5rem",
//       boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//       transition: "all 0.3s ease"
//     },
//     forgotPassword: {
//       marginTop: "1.5rem",
//       textAlign: "center"
//     },
//     forgotLink: {
//       color: "#406F67",
//       transition: "color 0.3s ease"
//     }
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.formContainer}>
//         <div style={styles.card}>
//           <div style={styles.cardContent}>
//             <h2 style={styles.title}>تسجيل الدخول</h2>

//             {error && <div style={styles.errorBox}>{error}</div>}

//             <form onSubmit={handleSubmit}>
//               <div style={styles.inputGroup}>
//                 <div style={styles.inputIcon}>
//                   <FaUser />
//                 </div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   style={styles.inputField}
//                   placeholder="البريد الإلكتروني"
//                   required
//                 />
//                 <div style={styles.inputUnderline}></div>
//               </div>

//               <div style={styles.inputGroup}>
//                 <div style={styles.inputIcon}>
//                   <FaLock />
//                 </div>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   style={styles.inputField}
//                   placeholder="كلمة المرور"
//                   required
//                 />
//                 <div style={styles.inputUnderline}></div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 style={{
//                   ...styles.submitButton,
//                   transform: loading ? 'none' : '',
//                   boxShadow: loading ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : ''
//                 }}
//               >
//                 {loading ? "جاري التحقق..." : "تسجيل الدخول"}
//               </button>
//             </form>

//             <div style={styles.forgotPassword}>
//               <a href="/forgot-password" style={styles.forgotLink}>
//                 نسيت كلمة المرور؟
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm3D;



































// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaLock } from 'react-icons/fa';

// const LoginForm3D = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:5000/api/worker/workers', { email, password });

//       if (response.data.success) {
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('user', JSON.stringify(response.data.user));

//         // التوجيه بناءً على الدور
//         if (response.data.user.role === 'client') {
//           navigate('/client-dashboard');
//         } else if (response.data.user.role === 'worker') {
//           navigate('/worker-dashboard');
//         }
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل تسجيل الدخول');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const styles = {
//     pageContainer: {
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       background: 'linear-gradient(to bottom right, #406F67, #80C6A2)',
//       padding: '1rem',
//     },
//     formContainer: {
//       width: '100%',
//       maxWidth: '28rem',
//     },
//     card: {
//       backgroundColor: 'white',
//       borderRadius: '0.5rem',
//       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
//       transformStyle: 'preserve-3d',
//       perspective: '1000px',
//       transition: 'all 0.5s ease',
//     },
//     cardContent: {
//       padding: '2rem',
//     },
//     title: {
//       fontSize: '1.875rem',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       color: '#406F67',
//       marginBottom: '2rem',
//     },
//     errorBox: {
//       marginBottom: '1rem',
//       padding: '0.75rem',
//       backgroundColor: '#FEE2E2',
//       color: '#B91C1C',
//       borderRadius: '0.375rem',
//       textAlign: 'center',
//     },
//     inputGroup: {
//       marginBottom: '1.5rem',
//       position: 'relative',
//     },
//     inputIcon: {
//       position: 'absolute',
//       top: '50%',
//       left: '0.75rem',
//       transform: 'translateY(-50%)',
//       color: '#406F67',
//     },
//     inputField: {
//       width: '100%',
//       paddingLeft: '2.5rem',
//       paddingRight: '1rem',
//       paddingTop: '0.75rem',
//       paddingBottom: '0.75rem',
//       borderBottomWidth: '2px',
//       borderBottomColor: '#406F67',
//       outline: 'none',
//       transition: 'all 0.3s ease',
//     },
//     inputUnderline: {
//       position: 'absolute',
//       bottom: '0',
//       left: '0',
//       width: '0',
//       height: '0.125rem',
//       backgroundColor: '#80C6A2',
//       transition: 'all 0.3s ease',
//     },
//     submitButton: {
//       width: '100%',
//       background: 'linear-gradient(to right, #406F67, #80C6A2)',
//       color: 'white',
//       padding: '0.75rem 1rem',
//       borderRadius: '0.5rem',
//       boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//       transition: 'all 0.3s ease',
//     },
//     forgotPassword: {
//       marginTop: '1.5rem',
//       textAlign: 'center',
//     },
//     forgotLink: {
//       color: '#406F67',
//       transition: 'color 0.3s ease',
//     },
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.formContainer}>
//         <div style={styles.card}>
//           <div style={styles.cardContent}>
//             <h2 style={styles.title}>تسجيل الدخول</h2>

//             {error && <div style={styles.errorBox}>{error}</div>}

//             <form onSubmit={handleSubmit}>
//               <div style={styles.inputGroup}>
//                 <div style={styles.inputIcon}>
//                   <FaUser />
//                 </div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   style={styles.inputField}
//                   placeholder="البريد الإلكتروني"
//                   required
//                 />
//                 <div style={styles.inputUnderline}></div>
//               </div>

//               <div style={styles.inputGroup}>
//                 <div style={styles.inputIcon}>
//                   <FaLock />
//                 </div>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   style={styles.inputField}
//                   placeholder="كلمة المرور"
//                   required
//                 />
//                 <div style={styles.inputUnderline}></div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 style={{
//                   ...styles.submitButton,
//                   transform: loading ? 'none' : '',
//                   boxShadow: loading ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : '',
//                 }}
//               >
//                 {loading ? 'جاري التحقق...' : 'تسجيل الدخول'}
//               </button>
//             </form>

//             <div style={styles.forgotPassword}>
//               <a href="/forgot-password" style={styles.forgotLink}>
//                 نسيت كلمة المرور؟
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm3D;
































import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm3D = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [workerData, setWorkerData] = useState(null);
  const { id } = useParams();  // هنا نسترجع المعرف (id) من الرابط إذا كنا في صفحة التحقق
  const navigate = useNavigate();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/worker/login", 
        { email, password }
      );
  
      if (response.data.success) {
        localStorage.setItem("workerToken", response.data.token);
        localStorage.setItem("workerData", JSON.stringify(response.data.user));
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "فشل تسجيل الدخول");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    try {
      // إرسال طلب التحقق من البريد الإلكتروني
      const response = await axios.post(`/api/workers/verify-email/${id}`, { email, password });
      setWorkerData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "حدث خطأ");
    }
  };

  // إذا كان هناك بيانات العامل بعد التحقق من البريد الإلكتروني
  if (workerData) {
    return (
      <div>
        <h2>مرحباً، {workerData.name}</h2>
        <p>المدينة: {workerData.city}</p>
        {/* تابع ملفك الشخصي هنا */}
      </div>
    );
  }

  // إذا كنا في صفحة تسجيل الدخول
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #406F67, #80C6A2)', padding: '1rem' }}>
      <div style={{ width: '100%', maxWidth: '28rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', transformStyle: 'preserve-3d', perspective: '1000px', transition: 'all 0.5s ease' }}>
          <div style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', color: '#406F67', marginBottom: '2rem' }}>
              {id ? 'تأكيد البريد الإلكتروني' : 'تسجيل الدخول'}
            </h2>

            {error && <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#FEE2E2', color: '#B91C1C', borderRadius: '0.375rem', textAlign: 'center' }}>{error}</div>}

            <form onSubmit={id ? handleVerifySubmit : handleLoginSubmit}>
              <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '50%', left: '0.75rem', transform: 'translateY(-50%)', color: '#406F67' }}>
                  <FaUser />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', paddingLeft: '2.5rem', paddingRight: '1rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', borderBottomWidth: '2px', borderBottomColor: '#406F67', outline: 'none', transition: 'all 0.3s ease' }}
                  placeholder="البريد الإلكتروني"
                  required
                />
              </div>

              <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '50%', left: '0.75rem', transform: 'translateY(-50%)', color: '#406F67' }}>
                  <FaLock />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', paddingLeft: '2.5rem', paddingRight: '1rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', borderBottomWidth: '2px', borderBottomColor: '#406F67', outline: 'none', transition: 'all 0.3s ease' }}
                  placeholder="كلمة المرور"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{ width: '100%', background: 'linear-gradient(to right, #406F67, #80C6A2)', color: 'white', padding: '0.75rem 1rem', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}
              >
                {loading ? 'جاري التحقق...' : id ? 'تحقق' : 'تسجيل الدخول'}
              </button>
            </form>

            {!id && (
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <a href="/forgot-password" style={{ color: '#406F67', transition: 'color 0.3s ease' }}>
                  نسيت كلمة المرور؟
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm3D;
