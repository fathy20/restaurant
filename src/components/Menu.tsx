import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Download } from "lucide-react";

const categories = [
  { id: "chicken", label: "🍗 دجاج مقلي" },
  { id: "burger", label: "🍔 برجر" },
  { id: "grill", label: "🔥 مشاوي" },
  { id: "sides", label: "🍟 إضافات" },
  { id: "drinks", label: "🥤 مشروبات" },
];

const items: Record<string, { name: string; desc: string }[]> = {
  chicken: [
    { name: "دجاج مقلي كلاسيك", desc: "قطع دجاج مقرمشة بخلطة الضيافة السرية، ذهبية من الخارج طرية من الداخل" },
    { name: "وينجز حارة", desc: "أجنحة دجاج مقلية بصلصة حارة مميزة، مثالية لمحبي الإثارة" },
    { name: "فيليه مقلي", desc: "صدر دجاج كامل مقلي بعجينة خاصة، يقدم مع صلصة الثوم" },
    { name: "وجبة عائلية", desc: "8 قطع دجاج مقلي مع البطاطس والمشروبات — مثالية للعائلة" },
    { name: "ستريبس دجاج", desc: "شرائح دجاج مقلية مقرمشة تقدم مع صلصة الاختيار" },
    { name: "دجاج بوبكورن", desc: "قطع دجاج صغيرة مقرمشة، وجبة خفيفة لذيذة" },
  ],
  burger: [
    { name: "برجر الضيافة الكلاسيك", desc: "لحم بقري طازج 100% مع الجبن والخضار وصلصتنا الخاصة" },
    { name: "دبل برجر", desc: "طبقتان من اللحم الطازج مع جبن مزدوج وإضافات مختارة" },
    { name: "تشيكن برجر", desc: "فيليه دجاج مقلي مقرمش مع الخس والطماطم وصلصة الثوم" },
    { name: "برجر مشوي", desc: "لحم مشوي على الفحم بدل القلي — لمن يفضل الطعم الأصيل" },
    { name: "برجر الجبن المزدوج", desc: "برجر غني بطبقتين من الجبن الذائب وصلصة خاصة" },
  ],
  grill: [
    { name: "كباب مشوي", desc: "كباب لحم طازج متبل بالبهارات الخاصة، مشوي على الفحم الطبيعي" },
    { name: "دجاج مشوي", desc: "دجاج كامل متبل 24 ساعة بخلطة الضيافة، مشوي ببطء حتى الكمال" },
    { name: "كفتة مشوية", desc: "كفتة لحم بالبقدونس والبصل، مشوية وتقدم مع الطحينة والسلطة" },
    { name: "مشاوي مشكلة", desc: "تشكيلة فاخرة من الكباب والكفتة والدجاج — وجبة الأبطال" },
    { name: "ريش مشوية", desc: "ريش لحم طازجة متبلة ومشوية على الفحم بطريقة احترافية" },
  ],
  sides: [
    { name: "بطاطس مقلية", desc: "بطاطس ذهبية مقرمشة، تقدم ساخنة مع صلصة الاختيار" },
    { name: "كول سلو", desc: "سلطة الكرنب الطازجة بصلصة خفيفة، مثالية مع الدجاج" },
    { name: "خبز ثوم", desc: "خبز محمص بالثوم والزبدة، مقرمش ولذيذ" },
    { name: "أرز بالشعرية", desc: "أرز مطبوخ بالشعرية والزبدة، طبق جانبي أصيل" },
    { name: "سلطة خضراء", desc: "سلطة طازجة من الخضار الموسمية مع عصير الليمون" },
  ],
  drinks: [
    { name: "مشروبات غازية", desc: "تشكيلة من المشروبات الغازية الباردة" },
    { name: "عصير طازج", desc: "عصائر فواكه طازجة يومياً" },
    { name: "ماء معدني", desc: "ماء معدني بارد" },
    { name: "شاي", desc: "شاي ساخن بالنعناع أو السادة" },
    { name: "قهوة", desc: "قهوة عربية أو تركية حسب الطلب" },
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items[active].map((item, i) => (
              <motion.div key={item.name}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl bg-white/3 border border-white/8 hover:border-djafa-yellow/30 hover:-translate-y-1 transition-all duration-300 group p-6">
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-djafa-yellow transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* PDF CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`${import.meta.env.BASE_URL}menu.pdf`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-djafa-yellow text-djafa-yellow font-bold rounded-xl hover:bg-djafa-yellow hover:text-djafa-black transition-all duration-300">
            <FileText size={18} /> عرض المنيو الكامل
          </a>
          <a href={`${import.meta.env.BASE_URL}menu.pdf`} download
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 border border-white/15 text-gray-300 font-bold rounded-xl hover:border-white/30 hover:text-white transition-all duration-300">
            <Download size={18} /> تحميل المنيو
          </a>
        </motion.div>
      </div>
    </section>
  );
}
