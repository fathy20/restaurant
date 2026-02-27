import { motion } from "motion/react";

interface AtmosphereImage {
  src: string;
  srcWebP: string;
  srcSet: string;
  alt: string;
}

const images: AtmosphereImage[] = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop",
    srcWebP: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop&fm=webp",
    srcSet: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop&fm=webp 800w, https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop&fm=webp 1200w, https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop&fm=webp 2940w",
    alt: "أجواء داخلية راقية في مطعم الضيافة مع إضاءة دافئة وديكور عصري"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop",
    srcWebP: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop&fm=webp",
    srcSet: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop&fm=webp 800w, https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop&fm=webp 1200w, https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop&fm=webp 2874w",
    alt: "تفاصيل طاولة الطعام مع أدوات المائدة الأنيقة في مطعم الضيافة"
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2940&auto=format&fit=crop",
    srcWebP: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2940&auto=format&fit=crop&fm=webp",
    srcSet: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop&fm=webp 800w, https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200&auto=format&fit=crop&fm=webp 1200w, https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2940&auto=format&fit=crop&fm=webp 2940w",
    alt: "واجهة مطعم الضيافة الخارجية في المساء مع إضاءة جذابة"
  }
];

export default function Atmosphere() {
  return (
    <section id="atmosphere" className="py-24 bg-djafa-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-djafa-yellow uppercase tracking-widest text-sm font-semibold mb-4 block">
              التجربة
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              أجواء عائلية
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-md font-light"
          >
            مصممة لتعكس دفء الضيافة التقليدية مع لمسة عصرية أنيقة. مساحة تهتم بكل التفاصيل لتوفير تجربة طعام عائلية مريحة وراقية.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:row-span-2 relative rounded-2xl overflow-hidden group h-64 lg:h-auto"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10"></div>
            <img
              src={images[0].srcWebP}
              srcSet={images[0].srcSet}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
              alt={images[0].alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden group h-64"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10"></div>
            <img
              src={images[1].srcWebP}
              srcSet={images[1].srcSet}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt={images[1].alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden group h-64"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10"></div>
            <img
              src={images[2].srcWebP}
              srcSet={images[2].srcSet}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt={images[2].alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
