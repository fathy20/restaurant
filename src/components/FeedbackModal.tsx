import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Upload, Send, Truck, ShoppingBag } from "lucide-react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImagePreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-lg bg-djafa-charcoal rounded-3xl border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

            {/* Header */}
            <div className="sticky top-0 bg-djafa-charcoal/95 backdrop-blur-sm px-6 py-5 border-b border-white/8 flex items-center justify-between z-10">
              <div>
                <h2 className="text-white font-bold text-xl">ملاحظاتك تهمنا</h2>
                <p className="text-gray-400 text-sm mt-0.5">شاركنا تجربتك لنتحسن أكثر</p>
              </div>
              <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/15 transition-all">
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div className="p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-white font-bold text-xl mb-2">شكراً لك!</h3>
                <p className="text-gray-400">تم إرسال ملاحظتك بنجاح. سنتواصل معك قريباً.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Order type */}
                <div>
                  <label className="text-gray-300 text-sm font-medium mb-2 block">نوع الطلب</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" onClick={() => setOrderType("delivery")}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border transition-all ${orderType === "delivery" ? "bg-djafa-yellow/15 border-djafa-yellow text-djafa-yellow" : "bg-white/3 border-white/10 text-gray-400 hover:border-white/20"}`}>
                      <Truck size={16} /> توصيل
                    </button>
                    <button type="button" onClick={() => setOrderType("pickup")}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border transition-all ${orderType === "pickup" ? "bg-djafa-yellow/15 border-djafa-yellow text-djafa-yellow" : "bg-white/3 border-white/10 text-gray-400 hover:border-white/20"}`}>
                      <ShoppingBag size={16} /> استلام
                    </button>
                  </div>
                </div>

                {/* Fields */}
                {[
                  { name: "email", type: "email", placeholder: "البريد الإلكتروني", required: true },
                  { name: "name", type: "text", placeholder: "اسم العميل", required: true },
                  { name: "city", type: "text", placeholder: "المدينة", required: true },
                  { name: "phone", type: "tel", placeholder: "رقم الهاتف", required: true },
                  { name: "invoice", type: "text", placeholder: "رقم الفاتورة (اختياري)", required: false },
                ].map((field) => (
                  <input key={field.name} type={field.type} placeholder={field.placeholder} required={field.required}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-djafa-yellow/50 focus:bg-white/8 transition-all text-sm" />
                ))}

                {/* Message */}
                <textarea placeholder="اكتب ملاحظتك هنا..." rows={4} required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-djafa-yellow/50 focus:bg-white/8 transition-all resize-none text-sm" />

                {/* Image upload */}
                <div>
                  <label className="text-gray-300 text-sm font-medium mb-2 block">إرفاق صورة (اختياري)</label>
                  <div onClick={() => fileRef.current?.click()}
                    className="border-2 border-dashed border-white/15 rounded-xl p-4 text-center cursor-pointer hover:border-djafa-yellow/40 transition-colors">
                    {imagePreview ? (
                      <img src={imagePreview} alt="preview" className="max-h-32 mx-auto rounded-lg object-cover" />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-gray-500">
                        <Upload size={20} />
                        <span className="text-xs">اضغط لرفع صورة</span>
                      </div>
                    )}
                  </div>
                  <input ref={fileRef} type="file" accept="image/*" onChange={handleImage} className="hidden" />
                </div>

                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-djafa-red text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg shadow-djafa-red/20">
                  <Send size={16} /> إرسال الملاحظة
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
