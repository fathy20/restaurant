import { motion } from "motion/react";
import { menuItems } from "../data/menuData";
import { MenuItem } from "../types/menu";

// Display featured items from different categories
const featuredDishes: MenuItem[] = [
  menuItems.find(item => item.id === 'grill-1')!,
  menuItems.find(item => item.id === 'grill-4')!,
  menuItems.find(item => item.id === 'appetizer-1')!,
  menuItems.find(item => item.id === 'dessert-1')!,
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="py-16 md:py-24 bg-djafa-charcoal relative border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-djafa-yellow uppercase tracking-widest text-xs md:text-sm font-semibold mb-3 md:mb-4 block">
              تميز الطهي
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 md:mb-4">
              قائمة طعام متنوعة
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light px-4">
              تشكيلة مختارة من أشهى أطباقنا، تجمع بين أجود المكونات وفن الطهي الأصيل.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-[16px] overflow-hidden group flex flex-col sm:flex-row"
            >
              <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={dish.image}
                  alt={dish.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 sm:p-6 sm:w-3/5 flex flex-col justify-center relative">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-serif font-semibold text-white group-hover:text-djafa-yellow transition-colors">
                      {dish.nameAr}
                    </h3>
                    <span className="text-xs md:text-sm text-gray-500 font-serif">
                      {dish.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mt-3 md:mt-4 font-light">
                  {dish.descriptionAr}
                </p>

                <div className="mt-4 md:mt-6">
                  <button className="text-xs uppercase tracking-wider font-semibold text-white border-b border-djafa-yellow pb-1 hover:text-djafa-yellow transition-colors">
                    اطلب الآن
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a
            href={`${import.meta.env.BASE_URL}menu.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download="قائمة-مطعم-الضيافة.pdf"
            className="inline-block px-6 md:px-8 py-3 md:py-4 text-sm md:text-base border-2 border-djafa-yellow rounded-[12px] text-white hover:bg-djafa-yellow hover:text-djafa-black transition-all duration-300 font-semibold"
          >
            عرض المنيو الكامل
          </a>
        </div>
      </div>
    </section>
  );
}
