import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#050505] pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Map - Now first for RTL */}
          <div className="h-64 md:h-80 lg:h-full min-h-[250px] md:min-h-[300px] rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 lg:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1621530000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="موقع مطعم الضيافة"
            ></iframe>
          </div>

          {/* Contact Info - Now second for RTL */}
          <div className="lg:order-1">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 md:mb-8">
              اتصل بنا
            </h2>

            <div className="space-y-5 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <MapPin className="text-djafa-yellow shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-1 text-sm md:text-base">الموقع</h4>
                  <p className="text-gray-400 font-light text-sm md:text-base">
                    شارع الفخامة 123، حي الطهي
                    <br />
                    المدينة، المحافظة 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Phone className="text-djafa-yellow shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-1 text-sm md:text-base">الحجوزات</h4>
                  <p className="text-gray-400 font-light text-sm md:text-base" dir="ltr">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Clock className="text-djafa-yellow shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-1 text-sm md:text-base">ساعات العمل</h4>
                  <p className="text-gray-400 font-light text-sm md:text-base">
                    الإثنين - الخميس: 11:00 صباحاً - 11:00 مساءً
                    <br />
                    الجمعة - الأحد: 11:00 صباحاً - 1:00 صباحاً
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10">
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base bg-[#25D366] text-white font-medium rounded-[12px] hover:bg-[#1DA851] transition-colors"
              >
                <MessageCircle size={18} />
                اطلب عبر واتساب
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-lg md:text-xl font-bold text-white tracking-wider">
              Djafa
            </span>
            <span className="text-xs text-gray-500 mt-1 text-center md:text-start">
              © {new Date().getFullYear()} مطعم الضيافة. جميع الحقوق محفوظة.
            </span>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="#"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-djafa-yellow hover:text-djafa-black transition-all"
              aria-label="انستغرام"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-djafa-yellow hover:text-djafa-black transition-all"
              aria-label="فيسبوك"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
