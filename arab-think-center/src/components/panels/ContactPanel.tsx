"use client";

import { useState } from "react";

export default function ContactPanel() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
            <div className="bg-[#0f172a] text-white px-8 py-10 relative">
              <h3 className="text-2xl font-bold text-[#c5a880]" style={{ fontFamily: "Cairo, sans-serif" }}>
                تواصل مع مركز فكر العرب
              </h3>
              <p className="text-slate-300 text-xs mt-2">
                نرحب بطلبات الاستشارات المتخصصة وقنوات التعاون الخلفية الجادة مع المؤسسات وصناع القرار.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2" style={{ fontFamily: "Cairo, sans-serif" }}>
                  تم إرسال رسالتكم بنجاح
                </h4>
                <p className="text-slate-500 text-sm">
                  سيقوم المستشار الفني المعني بدراسة طلبكم والتواصل معكم عبر القنوات الآمنة.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2">الاسم الكامل / الجهة</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2">البريد الإلكتروني المعتمد</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">طبيعة الاستفسار أو الطلب</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880]">
                    <option>استشارة سياسية / أمنية متخصصة</option>
                    <option>طلب انضمام لفريق الأبحاث</option>
                    <option>تواصل دبلوماسي / قنوات خلفية</option>
                    <option>ملاحظات على الدراسات والتقارير</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">تفاصيل الرسالة</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c5a880] hover:bg-[#b39268] text-[#0f172a] font-bold py-3.5 rounded-xl shadow-lg transition duration-200"
                >
                  إرسال الطلب بشكل آمن ومشفّر
                </button>
              </form>
            )}
          </div>

          <div className="text-center mt-6 text-slate-400 text-xs space-y-1">
            <p>يتم تشفير وتوجيه المراسلات عبر شبكة خوادم خاصة ومستقلة بالكامل.</p>
            <p>
              البريد المعتمد:{" "}
              <span className="text-[#c5a880] font-mono">info@arabthinkers.org</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
