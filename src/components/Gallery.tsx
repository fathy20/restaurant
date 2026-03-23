import { motion } from "motion/react";

const photos = [
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop", alt: "مشويات مشكلة من مطعم الضيافة", label: "مشويات مشكلة", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", alt: "برجر مطعم الضيافة", label: "برجر طازج" },
  { src: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", alt: "دجاج مقلي مطعم الضيافة", label: "دجاج مقلي" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop", alt: "مشاوي مطعم الضيافة", label: "مشاوي فاخرة" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop", alt: "أجواء مطعم الضيافة", label: "أجواؤنا" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-djafa-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="text-djafa-yellow text-xs tracking-[0.3em] uppercase font-semibold">معرض الصور</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4">
            لحظات من <span className="text-djafa-yellow">الضيافة</span>
          </h2>
          <div className="w-16 h-0.5 bg-djafa-red mx-auto" />
        </motion.div>

        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[500px]">
          {photos.map((photo, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${photo.span || ""}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-sm">{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
