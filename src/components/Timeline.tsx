import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const events = [
  {
    year: "1994",
    title: "البداية — شارع الصريم",
    desc: "انطلقت رحلة الضيافة من قلب طرابلس. أول فرع يفتح أبوابه بوصفات سرية وطعم لا يُنسى.",
    icon: "🏪",
    color: "from-djafa-yellow to-amber-500",
  },
  {
    year: "2000",
    title: "التوسع — رأس حسن",
    desc: "بعد 6 سنوات من النجاح، فتحنا فرع رأس حسن لتلبية الطلب المتزايد من عملائنا الكرام.",
    icon: "📈",
    color: "from-djafa-red to-red-700",
  },
  {
    year: "2008",
    title: "الانتشار — شارع الزاوية",
    desc: "تعزيز حضورنا في طرابلس بفرع شارع الزاوية، وتوسيع دائرة الضيافة لتشمل مزيداً من الأحياء.",
    icon: "🗺️",
    color: "from-djafa-yellow to-amber-500",
  },
  {
    year: "2015",
    title: "الوصول — جنزور",
    desc: "الضيافة تصل إلى جنزور. تجربة طعام أصيلة لعائلات المنطقة الغربية من طرابلس.",
    icon: "🌟",
    color: "from-djafa-red to-red-700",
  },
  {
    year: "2020",
    title: "التجديد — عرادة",
    desc: "أحدث فروعنا في عرادة يجمع بين الأصالة والعصرية، مع تطوير شامل لتجربة العملاء.",
    icon: "🚀",
    color: "from-djafa-yellow to-amber-500",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.8", "end 0.2"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-djafa-charcoal relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(227,30,36,0.06)_0%,_transparent_60%)]" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-20">
          <span className="text-djafa-yellow text-xs tracking-[0.3em] uppercase font-semibold">مسيرتنا</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4">
            رحلة <span className="text-djafa-yellow">ثلاثة عقود</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">من فرع واحد إلى خمسة فروع تنتشر في أرجاء طرابلس</p>
          <div className="w-16 h-0.5 bg-djafa-red mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute right-1/2 translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/5 rounded-full" />
          <motion.div
            className="absolute right-1/2 translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-djafa-yellow via-djafa-red to-djafa-yellow rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16">
            {events.map((event, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div key={event.year}
                  initial={{ opacity: 0, x: isRight ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-6">

                  {/* Left side */}
                  <div className={isRight ? "text-left" : ""}>
                    {isRight && (
                      <div className="bg-white/3 border border-white/8 hover:border-djafa-yellow/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group max-w-xs mr-auto">
                        <span className="text-3xl mb-3 block">{event.icon}</span>
                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-djafa-yellow transition-colors">{event.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{event.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot + year */}
                  <div className="flex flex-col items-center gap-2 z-10">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg ring-4 ring-djafa-charcoal`}>
                      <span className="text-djafa-black font-bold text-xs leading-tight text-center">{event.year}</span>
                    </motion.div>
                  </div>

                  {/* Right side */}
                  <div className={!isRight ? "text-right" : ""}>
                    {!isRight && (
                      <div className="bg-white/3 border border-white/8 hover:border-djafa-yellow/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group max-w-xs ml-auto">
                        <span className="text-3xl mb-3 block">{event.icon}</span>
                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-djafa-yellow transition-colors">{event.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{event.desc}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom stat */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-20 grid grid-cols-3 gap-6 text-center">
          {[
            { num: "+30", label: "سنة من التميز" },
            { num: "5", label: "فروع في طرابلس" },
            { num: "∞", label: "زبون سعيد" },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-2xl bg-white/3 border border-white/8">
              <span className="block text-3xl font-serif font-bold text-djafa-yellow mb-1">{stat.num}</span>
              <span className="text-gray-400 text-xs">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
