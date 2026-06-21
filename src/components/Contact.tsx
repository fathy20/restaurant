import { motion } from "motion/react";
import { Mail, Facebook, Instagram } from "lucide-react";

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
);



const socials = [
  { Icon: Facebook, label: "Facebook", handle: "@aldyafa.ly", href: "https://www.facebook.com/share/17ge5mGFTU/?mibextid=wwXIfr", bg: "hover:bg-blue-600" },
  { Icon: Instagram, label: "Instagram", handle: "@aldyafa.ly", href: "https://www.instagram.com/aldyafa.ly?igsh=bGlmbDZienFid3po", bg: "hover:bg-pink-600" },
  { Icon: TikTokIcon, label: "TikTok", handle: "@aldyafa.ly", href: "https://www.tiktok.com/@aldyafa.ly?_r=1&_t=ZS-94n00DFHMjC", bg: "hover:bg-neutral-800" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-djafa-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="text-djafa-yellow text-xs tracking-[0.3em] uppercase font-semibold">تواصل معنا</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4">
            نسعد <span className="text-djafa-yellow">بسماعكم</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            يمكنكم التواصل معنا عبر البريد أو الهاتف، ومتابعتنا على منصات التواصل الاجتماعي
          </p>

        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="grid grid-cols-1 max-w-sm mx-auto gap-4">
            <a
              href="mailto:INFO@ALDYAFA.LY"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/3 border border-white/8 hover:border-djafa-yellow/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-djafa-red/15 flex items-center justify-center flex-shrink-0 group-hover:bg-djafa-red/25 transition-colors">
                <Mail size={20} className="text-djafa-red" />
              </div>
              <div>
                <p className="text-djafa-yellow text-xs tracking-widest uppercase mb-0.5">البريد الإلكتروني</p>
                <span className="text-white group-hover:text-djafa-yellow transition-colors text-sm uppercase">INFO@ALDYAFA.LY</span>
              </div>
            </a>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">تابعنا على مواقع التواصل</h3>
            <div className="space-y-3">
              {socials.map(({ Icon, label, handle, href, bg }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-white/20 ${bg} transition-all duration-300 group`}>
                  <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                    <Icon />
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm block">{label}</span>
                    <span className="text-gray-400 text-xs">{handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
