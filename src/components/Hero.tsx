import { motion } from "motion/react";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-djafa-black">
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}bg-logo.png`}
          alt="مطعم الضيافة"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.8) contrast(1.1)" }}
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.75) 100%)",
          backdropFilter: "blur(3px)",
        }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="inline-block border border-djafa-yellow/60 text-djafa-yellow text-xs tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-6 bg-djafa-yellow/10 backdrop-blur-md shadow-lg shadow-djafa-yellow/10">
            ✨ أصالة المذاق منذ 1994
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
            مطعم <span className="text-djafa-yellow" style={{ textShadow: "0 0 30px rgba(255,215,0,0.4)" }}>الضيافة</span>
          </h1>

          <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>
            من قلب طرابلس، نقدم لكم تجربة طعام أصيلة تجمع بين الجودة العالية والطعم الذي لا يُنسى منذ أكثر من ثلاثة عقود
          </p>

          {/* Glassmorphism CTA box */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 p-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl w-full sm:w-auto">
            <Link to="/menu"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-djafa-yellow text-djafa-black font-bold rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg shadow-djafa-yellow/40 text-base w-full sm:w-auto">
              <FileText size={18} /> شاهد المنيو
            </Link>
          </motion.div>
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
