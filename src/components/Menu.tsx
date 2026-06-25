import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Flame, Star, Leaf, Clock } from "lucide-react";

// Types
type Category = {
  id: string;
  name: string;
  icon: JSX.Element;
  color: string;
};

type Product = {
  id: string;
  name: string;
  description?: string;
  category: string;
  image: string;
  badge?: string;
};

// Data
const categories: Category[] = [
  { id: 'meals', name: 'الوجبات', icon: <ShoppingCart size={28} />, color: 'bg-djafa-red/20 text-djafa-red border-djafa-red/30' },
  { id: 'boxes', name: 'البوكسات', icon: <Star size={28} />, color: 'bg-white/10 text-white border-white/20' },
  { id: 'sandwiches', name: 'السندويتشات', icon: <Flame size={28} />, color: 'bg-djafa-yellow/20 text-djafa-yellow border-djafa-yellow/30' },
];

const products: Product[] = [
  // Boxes
  { id: 'bx1', name: 'بوكس شاورما صغير', category: 'boxes', image: '/menu/بوكس شاورما صغير.png' },
  { id: 'bx2', name: 'بوكس شاورما كبير', category: 'boxes', image: '/menu/بوكس شاورما كبير.png' },

  // Meals
  { id: 'm1', name: 'وجبة اسكالوب مشوي', category: 'meals', image: '/menu/وجبة اسكالوب مشوي.png' },
  { id: 'm2', name: 'وجبة اسكالوب مقلي', category: 'meals', image: '/menu/وجبة اسكالوب مقلي.png' },
  { id: 'm3', name: 'وجبة شاورما', category: 'meals', image: '/menu/وجبة شاورما.png' },
  { id: 'm4', name: 'وجبة شيش طاووق', category: 'meals', image: '/menu/وجبة شيش طاووق.png' },
  { id: 'm5', name: 'وجبة فيتو', category: 'meals', image: '/menu/وجبة فيتو.png' },
  { id: 'm6', name: 'وجبة كريسبي الرهيب', category: 'meals', image: '/menu/وجبة كريسبي الرهيب.png' },
  { id: 'm7', name: 'وجبة نص دجاجة', category: 'meals', image: '/menu/وجبة نص دجاجة.png' },

  // Sandwiches
  { id: 's1', name: 'كباب', category: 'sandwiches', image: '/menu/sandwich-kebab-meat.png' },
  { id: 's2', name: 'اسكالوب دجاج', category: 'sandwiches', image: '/menu/sandwich-escalope-fried.png' },
  { id: 's3', name: 'سندوتش فيتو', category: 'sandwiches', image: '/menu/sandwich-escalope-grilled.png' },
  { id: 's4', name: 'كرسبي الرهيب', category: 'sandwiches', image: '/menu/تشكن بانيه.png' },
  { id: 's5', name: 'برجر دجاج', category: 'sandwiches', image: '/menu/burger-chicken.png' },
  { id: 's6', name: 'سندوتش شاورما', category: 'sandwiches', image: '/menu/سندوتش شاورما.png' },
  { id: 's7', name: 'سندوتش شيش طاووق', category: 'sandwiches', image: '/menu/sandwich-shish-tawook.png' },
  { id: 's8', name: 'سندوتش زنجر حار', category: 'sandwiches', image: '/menu/sandwich-zinger-spicy.png', badge: 'حار 🌶️' },
  { id: 's9', name: 'برجر لحم', category: 'sandwiches', image: '/menu/burger-meat.png' },
  { id: 's10', name: 'سندوتش كرسبي', category: 'sandwiches', image: '/menu/sandwich-crispy.png' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('meals');

  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-djafa-black border-y border-white/5 relative overflow-hidden" dir="rtl">
      {/* Decorative Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-djafa-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-djafa-yellow/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-djafa-yellow text-xs tracking-[0.3em] uppercase font-semibold">تصفح وجباتنا</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4">
            قائمة <span className="text-djafa-yellow">الطعام</span>
          </h2>
        </motion.div>

        {/* Categories Horizontal Scroll */}
        <div className="flex overflow-x-auto hide-scrollbar pb-6 gap-4 md:justify-center px-2 snap-x snap-mandatory">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="flex flex-col items-center gap-3 min-w-[100px] snap-center group focus:outline-none"
              >
                <div className={`
                  w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 border-2
                  ${isActive ? 'scale-110 shadow-[0_0_20px_rgba(255,215,0,0.3)] bg-djafa-yellow border-djafa-yellow text-djafa-black' : category.color + ' group-hover:border-djafa-yellow/50 group-hover:scale-105'}
                `}>
                  {category.icon}
                </div>
                <span className={`font-bold text-sm transition-colors duration-300 ${isActive ? 'text-djafa-yellow' : 'text-gray-400 group-hover:text-white'}`}>
                  {category.name}
                </span>
                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div layoutId="active-category" className="h-1 w-8 bg-djafa-yellow rounded-full mt-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Products List */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-djafa-yellow/30 hover:bg-white/10 transition-all duration-500 group flex flex-col h-full"
              >
                <div className="flex flex-col p-4 sm:p-5 gap-4 h-full">
                  {/* Product Image */}
                  <div className="w-full h-56 shrink-0 rounded-2xl overflow-hidden relative">
                    <img
                      src={`${import.meta.env.BASE_URL}${product.image.startsWith('/') ? product.image.slice(1) : product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Floating Badge */}
                    {product.badge && (
                      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-djafa-black text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="flex-1 flex flex-col justify-center text-center w-full">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-djafa-yellow transition-colors">{product.name}</h3>
                    {product.description && (
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {product.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-auto">
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl"
            >
              <Clock size={48} className="mx-auto text-gray-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">لا توجد منتجات حالياً</h3>
              <p className="text-gray-400">سيتم إضافة منتجات جديدة قريباً في هذا القسم.</p>
            </motion.div>
          )}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-16 flex justify-center w-full px-4 md:px-0">
          <a
            href="https://wa.me/218910000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 md:px-10 py-3.5 md:py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#1ebd58] transition-all duration-300 shadow-xl shadow-[#25D366]/20 text-base md:text-lg group hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            اطلب الآن
          </a>
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
