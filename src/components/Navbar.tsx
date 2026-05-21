import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onFeedbackOpen: () => void;
}

export default function Navbar({ onFeedbackOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "من نحن", href: "#about" },
    { name: "المنيو", href: "#menu" },
    { name: "فروعنا", href: "#branches" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-djafa-black/97 backdrop-blur-md py-3 shadow-lg shadow-black/50" : "bg-djafa-black/80 backdrop-blur-sm py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="شعار مطعم الضيافة" className="h-12 md:h-14 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}
              className="relative text-sm font-medium text-gray-300 hover:text-djafa-yellow transition-colors tracking-wider group">
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-djafa-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href={`${import.meta.env.BASE_URL}menu.pdf`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-djafa-yellow transition-colors tracking-wider group relative">
            <FileText size={15} />
            PDF
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-djafa-yellow transition-all duration-300 group-hover:w-full" />
          </a>
          <button onClick={onFeedbackOpen}
            className="px-5 py-2 border border-djafa-yellow text-djafa-yellow text-sm font-semibold rounded-md hover:bg-djafa-yellow hover:text-djafa-black transition-all duration-300">
            ملاحظاتك
          </button>
          <a href="tel:+218910000000"
            className="px-6 py-2 bg-djafa-red text-white font-semibold rounded-md hover:bg-red-700 transition-colors text-sm">
            اطلب الآن
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-djafa-charcoal border-t border-white/10 py-6 px-6 flex flex-col space-y-4 md:hidden shadow-lg">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-djafa-yellow transition-colors">
                {link.name}
              </a>
            ))}
            <a href={`${import.meta.env.BASE_URL}menu.pdf`} target="_blank" rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-djafa-yellow transition-colors">
              <FileText size={18} /> PDF
            </a>
            <button onClick={() => { setIsMobileMenuOpen(false); onFeedbackOpen(); }}
              className="text-right text-lg font-medium text-djafa-yellow">
              ملاحظاتك
            </button>
            <a href="tel:+218910000000" onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 bg-djafa-red text-white font-semibold rounded-md text-center">
              اطلب الآن
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
