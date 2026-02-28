import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-djafa-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
          alt="أجواء مطعم الضيافة الدافئة مع مشويات طازجة وأطباق شهية"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            مطعم الضيافة
            <br />
            <span className="text-3xl md:text-5xl font-light text-djafa-yellow mt-2 block">
              وجهتك الأولى لأفضل مشويات وأكل بيتي
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            استمتع بتجربة طعام لا تُنسى مع تشكيلة فاخرة من المشويات الطازجة، الكباب والكفتة المميزة، والمقبلات الشهية في أجواء عائلية راقية تجمع بين الأصالة والضيافة العربية
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href={`${import.meta.env.BASE_URL}menu.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-djafa-yellow text-djafa-black font-bold rounded-[12px] hover:bg-djafa-red hover:text-white transition-all duration-300 shadow-lg text-lg"
            >
              منيو
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-mono">
          تصفح
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
