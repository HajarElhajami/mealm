// import Slider from 'react-slick';

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };


// function Business() {
//   return (
//     <div>
// {/* معرض الأعمال مع سلايدر */}
// <div className="mt-12 px-8 pb-8">
//           <h2 className="text-2xl font-bold text-[#406F67] border-b-2 border-[#A9E7DA] pb-2">معرض الأعمال</h2>
          
//           <div className="mt-6">
//             <Slider {...sliderSettings}>
//               {[
//                 { id: 1, color: "3b82f6", text: "عمل1" },
//                 { id: 2, color: "10b981", text: "عمل2" },
//                 { id: 3, color: "f59e0b", text: "عمل3" },
//                 { id: 4, color: "ef4444", text: "عمل4" },
//                 { id: 5, color: "8b5cf6", text: "عمل5" },
//                 { id: 6, color: "ec4899", text: "عمل6" }
//               ].map(item => (
//                 <div key={item.id} className="px-2">
//                   <img 
//                     src={`https://via.placeholder.com/300/${item.color}/ffffff?text=${item.text}`}
//                     alt={`Work ${item.id}`}
//                     className="h-48 w-full object-cover rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//         <br/>
//     </div>
//   );
// }

// export default Business;








































import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Business = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    customPaging: i => (
      <motion.div
        className="w-3 h-3 rounded-full bg-gray-300"
        whileHover={{ scale: 1.5, backgroundColor: "#0d9488" }}
      />
    ),
    appendDots: dots => (
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </motion.div>
    )
  };

  const works = [
    { 
      id: 1, 
      title: "تركيب نظام ذكي",
      description: "نظام كهربائي متكامل للمنازل الذكية",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 2, 
      title: "تحديث كهربائي",
      description: "تحديث النظام الكهربائي لفيلا سكنية",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 3, 
      title: "تصميم إضاءة",
      description: "تصميم إضاءة مبتكر لمجمع تجاري",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 4, 
      title: "صيانة دورية",
      description: "صيانة شاملة لنظام كهربائي تجاري",
      image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 5, 
      title: "حلول طاقة",
      description: "تركيب أنظمة طاقة بديلة",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 6, 
      title: "تشطيب كهربائي",
      description: "تشطيب كهربائي لمنزل فاخر",
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0f766e] to-[#86efac] mb-4"
            whileHover={{ scale: 1.02 }}
          >
            معرض أعمالنا
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            whileHover={{ x: 5 }}
          >
            تعرف على جودة خدماتنا من خلال مشاريعنا الأخيرة       
         </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* تأثيرات خلفية */}
          <motion.div 
            className="absolute -left-20 top-1/2 w-40 h-40 bg-[#5eead4] rounded-full filter blur-3xl opacity-20 -z-10"
            animate={{
              x: [-50, 50, -50],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute -right-20 bottom-1/4 w-60 h-60 bg-[#99f6e4] rounded-full filter blur-3xl opacity-20 -z-10"
            animate={{
              x: [50, -50, 50],
              y: [20, -20, 20],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* السلايدر */}
          <Slider {...sliderSettings}>
            {works.map((work) => (
              <motion.div 
                key={work.id}
                className="px-3"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl h-96"
                  initial={{ rotateY: 15 }}
                  whileInView={{ rotateY: 0 }}
                  whileHover={{ 
                    y: -20,
                    boxShadow: "0 25px 50px -12px rgba(13, 148, 136, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* طبقة ثلاثية الأبعاد */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#0d9488] to-[#115e59] rounded-3xl transform rotate-2 -z-10 opacity-20"
                    whileHover={{ rotate: 5 }}
                  />
                  
                  {/* الصورة */}
                  <motion.div
                    className="h-2/3 overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* معلومات المشروع */}
                  <motion.div 
                    className="bg-white p-5 text-center h-1/3"
                    whileHover={{ backgroundColor: "#f0fdfa" }}
                  >
                    <motion.h3 
                      className="text-xl font-bold text-[#0f766e] mb-1"
                      whileHover={{ x: 5 }}
                    >
                      {work.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      {work.description}
                    </motion.p>
                    <motion.button
                      className="mt-3 text-sm bg-[#14b8a6] text-white px-4 py-2 rounded-full hover:bg-[#0f766e] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      عرض التفاصيل
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Business;