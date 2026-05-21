import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-djafa-charcoal border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-djafa-yellow text-xs tracking-[0.3em] uppercase font-semibold">قائمة الطعام</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4">
            أصنافنا <span className="text-djafa-yellow">المميزة</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
            تصفح قائمة طعامنا اللذيذة والغنية بأشهى الأطباق المحضرة لكم خصيصًا.
          </p>
        </motion.div>

        {/* PDF Viewer - Hidden on mobile for better UX, visible on md and up */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="hidden md:block w-full max-w-5xl mx-auto h-[800px] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative bg-white/5 mb-10"
        >
          <iframe 
            src={`${import.meta.env.BASE_URL}menu.pdf`} 
            className="w-full h-full border-none"
            title="Menu PDF"
          />
        </motion.div>

        {/* PDF CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`${import.meta.env.BASE_URL}menu.pdf`} target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-djafa-yellow text-djafa-yellow font-bold rounded-xl hover:bg-djafa-yellow hover:text-djafa-black transition-all duration-300">
            <FileText size={18} /> عرض المنيو
          </a>
          <a href={`${import.meta.env.BASE_URL}menu.pdf`} download="قائمة_طعام_الضيافة.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 border border-white/15 text-gray-300 font-bold rounded-xl hover:border-white/30 hover:text-white transition-all duration-300">
            <Download size={18} /> تحميل المنيو (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
