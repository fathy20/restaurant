import { Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
  </svg>
);

interface FooterProps {
  onFeedbackOpen: () => void;
}

export default function Footer({ onFeedbackOpen }: FooterProps) {
  return (
    <footer className="bg-djafa-charcoal border-t border-white/6 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-center md:text-right">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="مطعم الضيافة" className="h-14 w-auto object-contain mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              أصالة المذاق منذ 1994. نقدم أفضل المشويات والوجبات السريعة في طرابلس، ليبيا.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-5">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/17ge5mGFTU/?mibextid=wwXIfr", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/aldyafa.ly?igsh=bGlmbDZienFid3po", label: "Instagram" },
                { icon: TikTokIcon, href: "https://www.tiktok.com/@aldyafa.ly?_r=1&_t=ZS-94n00DFHMjC", label: "TikTok" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center text-gray-400 hover:bg-djafa-yellow hover:text-djafa-black transition-all duration-300">
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-djafa-yellow text-sm font-bold mb-4 tracking-wider">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {[
                { label: "الرئيسية", href: "#" },
                { label: "من نحن", href: "#about" },
                { label: "فروعنا", href: "#branches" },
                { label: "تواصل معنا", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-djafa-yellow transition-colors">{link.label}</a>
                </li>
              ))}
              <li>
                <Link to="/menu"
                  className="text-gray-400 text-sm hover:text-djafa-yellow transition-colors">المنيو</Link>
              </li>
            </ul>
          </div>

          {/* Contact + Feedback */}
          <div>
            <h4 className="text-djafa-yellow text-sm font-bold mb-4 tracking-wider">تواصل معنا</h4>
            <div className="flex flex-col items-center md:items-start space-y-3 mb-5">
              <a href="mailto:INFO@ALDYAFA.LY" className="flex items-center justify-center md:justify-start gap-2 text-gray-400 text-sm hover:text-djafa-yellow transition-colors">
                <Mail size={14} /> INFO@ALDYAFA.LY
              </a>
            </div>
            <div className="flex justify-center md:justify-start">
              <button onClick={onFeedbackOpen}
                className="flex items-center justify-center gap-2 px-6 py-2.5 border border-djafa-yellow/40 text-djafa-yellow text-sm font-semibold rounded-lg hover:bg-djafa-yellow hover:text-djafa-black transition-all duration-300 w-full sm:w-auto">
                💬 أضف ملاحظتك
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/6 text-center">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} مطعم الضيافة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
