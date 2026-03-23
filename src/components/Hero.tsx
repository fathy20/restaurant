import { motion } from "motion/react";
import { FileText, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-djafa-black">
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}0.jpg`}
          alt="مطعم الضيافة - أفضل مشويات وأكل بيتي في طرابلس"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="inline-block border border-djafa-yellow/50 text-djafa-yellow text-xs tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-6 bg-djafa-yellow/10 backdrop-blur-sm">
            أصالة المذاق منذ 1994
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            مطعم <span className="text-djafa-yellow">الضيافة</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            وجهتك الأولى لأفضل مشويات وأكل بيتي
          </p>

          <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            من قلب طرابلس، نقدم لكم تجربة طعام أصيلة تجمع بين الجودة العالية والطعم الذي لا يُنسى منذ أكثر من ثلاثة عقود
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${import.meta.env.BASE_URL}حلويات_منزلية_بالشكولاتة.pdf`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-djafa-yellow text-djafa-black font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-djafa-yellow/30 text-base">
              <FileText size={18} /> شاهد المنيو
            </a>
            <a href="tel:+218910000000"
              className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-bold rounded-xl hover:border-djafa-yellow hover:text-djafa-yellow transition-all duration-300 text-base backdrop-blur-sm">
              <Phone size={18} /> اتصل بنا
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <span className="text-xs uppercase tracking-widest mb-2">تصفح</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
