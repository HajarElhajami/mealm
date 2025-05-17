// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { FaUser, FaLock } from 'react-icons/fa';

// const LoginForm3D = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [workerData, setWorkerData] = useState(null);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/api/worker/login', {
//         email,
//         password
//       });
  
//       const { token, workerId } = response.data;
      
//       localStorage.setItem('workerToken', token);
//       localStorage.setItem('workerId', workerId);
//       localStorage.setItem('showWelcomeMessage', 'true');
      
//       navigate(`/${workerId}`);
      
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(error.response?.data?.message || 'فشل تسجيل الدخول');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifySubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`http://localhost:5000/api/workers/verify-email/${id}`, { 
//         email, 
//         password 
//       });
//       setWorkerData(response.data);
//     } catch (err) {
//       setError(err.response?.data?.message || "حدث خطأ");
//     }
//   };

//   if (workerData) {
//     return (
//       <div>
//         <h2>مرحباً، {workerData.name}</h2>
//         <p>المدينة: {workerData.city}</p>
//       </div>
//     );
//   }

//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #406F67, #80C6A2)', padding: '1rem' }}>
//       <div style={{ width: '100%', maxWidth: '28rem' }}>
//         <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', transformStyle: 'preserve-3d', perspective: '1000px', transition: 'all 0.5s ease' }}>
//           <div style={{ padding: '2rem' }}>
//             <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', color: '#406F67', marginBottom: '2rem' }}>
//               {id ? 'تأكيد البريد الإلكتروني' : 'تسجيل الدخول'}
//             </h2>

//             {error && <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#FEE2E2', color: '#B91C1C', borderRadius: '0.375rem', textAlign: 'center' }}>{error}</div>}

//             <form onSubmit={id ? handleVerifySubmit : handleLogin}>
//               <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
//                 <div style={{ position: 'absolute', top: '50%', left: '0.75rem', transform: 'translateY(-50%)', color: '#406F67' }}>
//                   <FaUser />
//                 </div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   style={{ width: '100%', paddingLeft: '2.5rem', paddingRight: '1rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', borderBottomWidth: '2px', borderBottomColor: '#406F67', outline: 'none', transition: 'all 0.3s ease' }}
//                   placeholder="البريد الإلكتروني"
//                   required
//                 />
//               </div>

//               <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
//                 <div style={{ position: 'absolute', top: '50%', left: '0.75rem', transform: 'translateY(-50%)', color: '#406F67' }}>
//                   <FaLock />
//                 </div>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   style={{ width: '100%', paddingLeft: '2.5rem', paddingRight: '1rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', borderBottomWidth: '2px', borderBottomColor: '#406F67', outline: 'none', transition: 'all 0.3s ease' }}
//                   placeholder="كلمة المرور"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 style={{ width: '100%', background: 'linear-gradient(to right, #406F67, #80C6A2)', color: 'white', padding: '0.75rem 1rem', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}
//               >
//                 {loading ? 'جاري التحقق...' : id ? 'تحقق' : 'تسجيل الدخول'}
//               </button>
//             </form>

//             {!id && (
//               <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
//                 <a href="/forgot-password" style={{ color: '#406F67', transition: 'color 0.3s ease' }}>
//                   نسيت كلمة المرور؟
//                 </a>
//               </div>
//             )}
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
  const { id } = useParams();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/worker/login', {
        email,
        password
      });
  
      if (response.data.success) {
        localStorage.setItem('workerToken', response.data.token);
        localStorage.setItem('workerId', response.data._id);
        navigate(`/${response.data._id}`); // التوجيه إلى الصفحة الشخصية
      }
      localStorage.setItem('showWelcomeMessage', 'true');
    } catch (error) {
      // معالجة الأخطاء
    } finally {
      setLoading(false);
    }
  };

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/workers/verify-email/${id}`, { 
        email, 
        password 
      });
      setWorkerData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "حدث خطأ");
    }
  };

  if (workerData) {
    return (
      <div>
        <h2>مرحباً، {workerData.name}</h2>
        <p>المدينة: {workerData.city}</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #406F67, #80C6A2)', padding: '1rem' }}>
      <div style={{ width: '100%', maxWidth: '28rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', transformStyle: 'preserve-3d', perspective: '1000px', transition: 'all 0.5s ease' }}>
          <div style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', color: '#406F67', marginBottom: '2rem' }}>
              {id ? 'تأكيد البريد الإلكتروني' : 'تسجيل الدخول'}
            </h2>

            {error && <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#FEE2E2', color: '#B91C1C', borderRadius: '0.375rem', textAlign: 'center' }}>{error}</div>}

            <form onSubmit={id ? handleVerifySubmit : handleLogin}>
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
