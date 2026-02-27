import { motion } from "motion/react";

export default function Story() {
  return (
    <section id="story" className="py-16 md:py-24 lg:py-32 bg-djafa-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-[1px] w-8 md:w-12 bg-djafa-yellow"></div>
              <span className="text-djafa-yellow uppercase tracking-widest text-xs md:text-sm font-semibold">
                قصتنا
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 md:mb-8 leading-tight">
              إرث من{" "}
              <span className="text-djafa-yellow italic">النكهات</span> والتقاليد
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6 font-light">
              في مطعم الضيافة، نؤمن بأن الضيافة الحقيقية تُذاق قبل أن تُشعر. انطلقنا من شغف عميق بالمطبخ الشرقي الأصيل والتميز في فن الطهي، لنقدم تجربة طعام استثنائية تجمع بين عراقة التقاليد وفخامة العصر الحديث.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-light">
              كل طبق نقدمه يُحضّر بأجود المكونات الطازجة، مع لمسة من التراث الأصيل، والتزام تام بالكمال. نرحب بكم على موائدنا، حيث كل وجبة احتفال بالنكهات الشرقية الفاخرة.
            </p>

            <div className="flex items-center gap-4 md:gap-6">
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-serif text-white">
                  +15
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  سنة خبرة
                </span>
              </div>
              <div className="w-[1px] h-8 md:h-10 bg-white/10"></div>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-serif text-white">
                  100%
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  طازج
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square">
              <div className="absolute inset-0 bg-djafa-yellow/10 mix-blend-overlay z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop"
                alt="أجواء مطعم الضيافة الداخلية الفاخرة مع ديكور شرقي أصيل"
                loading="lazy"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element - hidden on mobile */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-24 md:w-32 h-24 md:h-32 border-l-2 border-b-2 border-djafa-yellow rounded-bl-3xl -z-10"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-24 md:w-32 h-24 md:h-32 border-r-2 border-t-2 border-djafa-red rounded-tr-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
