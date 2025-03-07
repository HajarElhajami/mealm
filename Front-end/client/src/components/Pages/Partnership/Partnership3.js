import { motion } from "framer-motion";

export default function PartnershipFinalPage() {
  return (
    <div className="container mx-auto py-10 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#94D1C3] text-white p-12 rounded-lg shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-6">فرصتك لتنمية أعمالك مع <span className="text-[#406F67]">معلم</span>!</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          انضم إلى أكبر منصة تجمع بين العملاء والمهنيين في المغرب، وكن جزءًا من شبكة موثوقة تساعدك على زيادة أرباحك، 
          توسيع نطاق عملك، وتعزيز حضورك الرقمي. لا تفوت الفرصة لتكون ضمن نخبة من المحترفين المتميزين
        </p>
        <motion.a
          href="partnership"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#406F67] text-white hover:bg-white hover:text-[#406F67] font-semibold py-4 px-6 rounded-full shadow-md text-lg"
        >
          انضم الآن وابدأ النجاح
        </motion.a>
      </motion.div>
    </div>
  );
}
