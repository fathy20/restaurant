import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Clock, Phone, ExternalLink, ChevronDown } from "lucide-react";

const branches = [
  {
    name: "فرع شارع الصريم",
    address: "شارع الصريم، طرابلس، ليبيا",
    phone: "+218910000001",
    hours: "12:00 ظهراً – 2:00 صباحاً",
    since: "1994",
    badge: "الفرع الأم",
    mapUrl: "https://maps.google.com/maps?q=شارع+الصريم+طرابلس+ليبيا&output=embed",
    mapsLink: "https://maps.google.com/?q=شارع+الصريم+طرابلس+ليبيا",
    color: "from-djafa-yellow/20 to-transparent",
    borderColor: "border-djafa-yellow",
  },
  {
    name: "فرع رأس حسن",
    address: "رأس حسن، طرابلس، ليبيا",
    phone: "+218910000002",
    hours: "12:00 ظهراً – 2:00 صباحاً",
    since: "2000",
    badge: "الأكثر ازدحاماً",
    mapUrl: "https://maps.google.com/maps?q=رأس+حسن+طرابلس+ليبيا&output=embed",
    mapsLink: "https://maps.google.com/?q=رأس+حسن+طرابلس+ليبيا",
    color: "from-djafa-red/20 to-transparent",
    borderColor: "border-djafa-red",
  },
  {
    name: "فرع شارع الزاوية",
    address: "شارع الزاوية، طرابلس، ليبيا",
    phone: "+218910000003",
    hours: "12:00 ظهراً – 2:00 صباحاً",
    since: "2008",
    badge: "وسط المدينة",
    mapUrl: "https://maps.google.com/maps?q=شارع+الزاوية+طرابلس+ليبيا&output=embed",
    mapsLink: "https://maps.google.com/?q=شارع+الزاوية+طرابلس+ليبيا",
    color: "from-djafa-yellow/20 to-transparent",
    borderColor: "border-djafa-yellow",
  },
  {
    name: "فرع جنزور",
    address: "جنزور، طرابلس، ليبيا",
    phone: "+218910000004",
    hours: "12:00 ظهراً – 2:00 صباحاً",
    since: "2015",
    badge: "المنطقة الغربية",
    mapUrl: "https://maps.google.com/maps?q=جنزور+طرابلس+ليبيا&output=embed",
    mapsLink: "https://maps.google.com/?q=جنزور+طرابلس+ليبيا",
    color: "from-djafa-red/20 to-transparent",
    borderColor: "border-djafa-red",
  },
  {
    name: "فرع عرادة",
    address: "عرادة، طرابلس، ليبيا",
    phone: "+218910000005",
    hours: "12:00 ظهراً – 2:00 صباحاً",
    since: "2020",
    badge: "الأحدث",
    mapUrl: "https://maps.google.com/maps?q=عرادة+طرابلس+ليبيا&output=embed",
    mapsLink: "https://maps.google.com/?q=عرادة+طرابلس+ليبيا",
    color: "from-djafa-yellow/20 to-transparent",
    borderColor: "border-djafa-yellow",
  },
];

export default function Branches() {
  const [selected, setSelected] = useState(0);
  const [mapLoaded, setMapLoaded] = useState(false);

  const branch = branches[selected];

  return (
    <section id="branches" className="py-24 bg-djafa-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(227,30,36,0.05)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="text-djafa-yellow text-xs tracking-[0.3em] uppercase font-semibold">فروعنا</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4">
            نحن في <span className="text-djafa-yellow">خدمتكم</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            نستقبلكم يومياً من <span className="text-djafa-yellow font-semibold">12:00 ظهراً</span> حتى <span className="text-djafa-yellow font-semibold">2:00 صباحاً</span> في فروعنا المنتشرة عبر طرابلس
          </p>

        </motion.div>

        {/* Branch selector tabs — mobile dropdown style on small screens */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {branches.map((b, i) => (
            <motion.button key={i} onClick={() => { setSelected(i); setMapLoaded(false); }}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
                selected === i
                  ? "bg-djafa-yellow text-djafa-black border-djafa-yellow shadow-lg shadow-djafa-yellow/20"
                  : "bg-white/3 border-white/10 text-gray-300 hover:border-white/30 hover:text-white"
              }`}>
              <MapPin size={13} />
              {b.name.replace("فرع ", "")}
            </motion.button>
          ))}
        </div>

        {/* Main card */}
        <AnimatePresence mode="wait">
          <motion.div key={selected}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl overflow-hidden border border-white/10 bg-djafa-black/60 backdrop-blur-sm">

            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Info panel */}
              <div className={`lg:col-span-2 p-8 bg-gradient-to-br ${branch.color} flex flex-col justify-between`}>
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className={`text-xs px-3 py-1 rounded-full border ${branch.borderColor} text-djafa-yellow bg-djafa-yellow/10 font-semibold`}>
                        {branch.badge}
                      </span>
                      <h3 className="text-white font-bold text-2xl mt-3 font-serif">{branch.name}</h3>
                      <p className="text-gray-400 text-sm mt-1">منذ {branch.since}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-djafa-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin size={15} className="text-djafa-yellow" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-0.5">العنوان</p>
                        <p className="text-white text-sm">{branch.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-djafa-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock size={15} className="text-djafa-yellow" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-0.5">أوقات العمل</p>
                        <p className="text-white text-sm">{branch.hours}</p>
                      </div>
                    </div>


                  </div>
                </div>

                <a href={branch.mapsLink} target="_blank" rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 py-3 px-5 bg-djafa-yellow text-djafa-black font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 text-sm shadow-lg shadow-djafa-yellow/20">
                  <ExternalLink size={15} />
                  افتح في خرائط جوجل
                </a>
              </div>

              {/* Map */}
              <div className="lg:col-span-3 relative min-h-[350px] lg:min-h-[450px] bg-djafa-black/40">
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-djafa-black/60">
                    <div className="flex flex-col items-center gap-3 text-gray-400">
                      <div className="w-8 h-8 border-2 border-djafa-yellow/40 border-t-djafa-yellow rounded-full animate-spin" />
                      <span className="text-xs">جاري تحميل الخريطة...</span>
                    </div>
                  </div>
                )}
                <iframe
                  src={branch.mapUrl}
                  width="100%" height="100%"
                  style={{ border: 0, minHeight: 350, display: "block" }}
                  allowFullScreen loading="lazy"
                  title={branch.name}
                  onLoad={() => setMapLoaded(true)}
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  );
}
