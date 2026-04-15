import { motion } from "motion/react";
import { Award, Zap, ChefHat, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "الجودة الثابتة",
    desc: "المذاق الذي أحببتموه عام 1994 هو نفسه الذي نقدمه اليوم — لا مساومة على المكونات أبداً.",
  },
  {
    icon: Zap,
    title: "السرعة والإتقان",
    desc: "ندرك قيمة وقتكم، لذا نجمع بين سرعة التحضير ودقة التنفيذ في كل طلب.",
  },
  {
    icon: ChefHat,
    title: "الوصفات الخاصة",
    desc: "لمستنا الخاصة في التتبيل والتحضير تجعل كل طبق تجربة فريدة لا تجدها في مكان آخر.",
  },
  {
    icon: Users,
    title: "القرب من العميل",
    desc: "تواجدنا في 5 فروع استراتيجية عبر طرابلس يعكس رغبتنا الدائمة في أن نكون الأقرب إليكم.",
  },
];

const offerings = [
  { emoji: "🍗", title: "الدجاج المقلي", desc: "مقرمش ذهبي بخلطة الضيافة السرية التي لا مثيل لها" },
  { emoji: "🍔", title: "البرجر", desc: "لحم طازج 100% مع إضافات مختارة بعناية فائقة" },
  { emoji: "🔥", title: "المشاوي", desc: "طعم الشواء التقليدي الأصيل الذي يرضي جميع الأذواق" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-djafa-black relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-djafa-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-djafa-yellow text-xs tracking-[0.3em] uppercase font-semibold">من نحن</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4">
            أصالة المذاق منذ <span className="text-djafa-yellow">1994</span>
          </h2>

        </motion.div>

        {/* ── Story + Image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif font-bold text-djafa-yellow mb-5">القصة: أصالة المذاق منذ 1994</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              في قلب العاصمة طرابلس، وتحديداً من <span className="text-djafa-yellow font-semibold">شارع الصريم</span>، وُلدت فكرة بسيطة لكنها طموحة: تقديم وجبة سريعة تجمع بين الجودة العالية والطعم الأصيل الذي يبقى في الذاكرة.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              لم يكن الأمر مجرد مطعم — كان وعداً. وعد بأن كل زبون يغادر راضياً، وأن كل وجبة تحمل نفس الشغف الذي بدأنا به. بفضل ثقة زبائننا الكرام التي رافقتنا لأكثر من ثلاثة عقود، تحولت "الضيافة" من فرع واحد إلى علامة تجارية رائدة تنتشر في أهم أحياء طرابلس، حاملةً معها نفس الالتزام بالتميز في كل فرع جديد.
            </p>

            {/* Vision & Mission */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white/3 border border-white/8">
                <h4 className="text-djafa-yellow font-bold mb-2">👁 رؤيتنا</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  أن نظل الوجهة الأولى لعشاق الدجاج المقلي عالي الجودة، من خلال الحفاظ على طعمنا الأصيل منذ عام 1994، وتقديم تجربة مميزة تُرضي جميع عملائنا.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/3 border border-white/8">
                <h4 className="text-djafa-yellow font-bold mb-2">📌 رسالتنا</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  نسعى لتقديم منتجاتنا بجودة عالية وطعم أصيل، من خلال استخدام مكونات مختارة بعناية، وتقديم خدمة متميزة وتجربة فريدة تضمن رضا عملائنا في كل زيارة.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src={`${import.meta.env.BASE_URL}food-bg.jpeg`}
                alt="مطعم الضيافة - أجواء داخلية"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-djafa-yellow text-djafa-black p-5 rounded-2xl shadow-xl">
              <span className="block text-3xl font-serif font-bold">+30</span>
              <span className="text-xs font-semibold uppercase tracking-wider">سنة من التميز</span>
            </div>
          </motion.div>
        </div>

        {/* ── Core Values ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
            💎 قيمنا — <span className="text-djafa-yellow">سر نجاحنا</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-djafa-yellow/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-djafa-red/15 flex items-center justify-center mb-4 group-hover:bg-djafa-red/25 transition-colors">
                <v.icon size={22} className="text-djafa-red" />
              </div>
              <h4 className="text-white font-bold mb-2">{v.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── What We Offer ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-djafa-red/10 to-transparent border border-djafa-red/20"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 text-center">ماذا نقدم؟</h3>
          <p className="text-gray-400 text-center text-sm mb-8 max-w-xl mx-auto">
            متخصصون في فنون الطهي السريع بلمسة احترافية — كل طبق قصة نفخر بروايتها.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl bg-white/3 hover:bg-white/5 transition-colors">
                <span className="text-4xl">{item.emoji}</span>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
