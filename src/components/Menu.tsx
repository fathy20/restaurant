import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Download } from "lucide-react";

const categories = [
  { id: "chicken", label: "🍗 دجاج مقلي" },
  { id: "burger", label: "🍔 برجر" },
  { id: "grill", label: "🔥 مشاوي" },
];

const items: Record<string, { name: string; desc: string; img: string }[]> = {
  chicken: [
    { name: "دجاج مقلي كلاسيك", desc: "قطع دجاج مقرمشة بخلطة الضيافة السرية، ذهبية من الخارج طرية من الداخل", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&h=350&fit=crop" },
    { name: "وينجز حارة", desc: "أجنحة دجاج مقلية بصلصة حارة مميزة، مثالية لمحبي الإثارة", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&h=350&fit=crop" },
    { name: "فيليه مقلي", desc: "صدر دجاج كامل مقلي بعجينة خاصة، يقدم مع صلصة الثوم", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?w=500&h=350&fit=crop" },
    { name: "وجبة عائلية", desc: "8 قطع دجاج مقلي مع البطاطس والمشروبات — مثالية للعائلة", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&h=350&fit=crop" },
  ],
  burger: [
    { name: "برجر الضيافة الكلاسيك", desc: "لحم بقري طازج 100% مع الجبن والخضار وصلصتنا الخاصة", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=350&fit=crop" },
    { name: "دبل برجر", desc: "طبقتان من اللحم الطازج مع جبن مزدوج وإضافات مختارة", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&h=350&fit=crop" },
    { name: "تشيكن برجر", desc: "فيليه دجاج مقلي مقرمش مع الخس والطماطم وصلصة الثوم", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&h=350&fit=crop" },
    { name: "برجر مشوي", desc: "لحم مشوي على الفحم بدل القلي — لمن يفضل الطعم الأصيل", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=350&fit=crop" },
  ],
  grill: [
    { name: "كباب مشوي", desc: "كباب لحم طازج متبل بالبهارات الخاصة، مشوي على الفحم الطبيعي", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&h=350&fit=crop" },
    { name: "دجاج مشوي", desc: "دجاج كامل متبل 24 ساعة بخلطة الضيافة، مشوي ببطء حتى الكمال", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?w=500&h=350&fit=crop" },
    { name: "كفتة مشوية", desc: "كفتة لحم بالبقدونس والبصل، مشوية وتقدم مع الطحينة والسلطة", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=350&fit=crop" },
    { name: "مشاوي مشكلة", desc: "تشكيلة فاخرة من الكباب والكفتة والدجاج — وجبة الأبطال", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=350&fit=crop" },
  ],
};

export default function Menu() {
  const [active, setActive] = useState("chicken");

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
          <div className="w-16 h-0.5 bg-djafa-red mx-auto" />
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActive(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat.id
                  ? "bg-djafa-yellow text-djafa-black shadow-lg shadow-djafa-yellow/30"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:border-djafa-yellow/40 hover:text-djafa-yellow"
              }`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {items[active].map((item, i) => (
              <motion.div key={item.name}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl overflow-hidden bg-white/3 border border-white/8 hover:border-djafa-yellow/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="h-44 overflow-hidden">
                  <img src={item.img} alt={item.name} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-djafa-yellow transition-colors">{item.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* PDF CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`${import.meta.env.BASE_URL}حلويات_منزلية_بالشكولاتة.pdf`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-djafa-yellow text-djafa-yellow font-bold rounded-xl hover:bg-djafa-yellow hover:text-djafa-black transition-all duration-300">
            <FileText size={18} /> عرض المنيو الكامل
          </a>
          <a href={`${import.meta.env.BASE_URL}حلويات_منزلية_بالشكولاتة.pdf`} download
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 border border-white/15 text-gray-300 font-bold rounded-xl hover:border-white/30 hover:text-white transition-all duration-300">
            <Download size={18} /> تحميل المنيو
          </a>
        </motion.div>
      </div>
    </section>
  );
}
