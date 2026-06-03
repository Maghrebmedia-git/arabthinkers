"use client";

import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { setActiveTab } = useApp();

  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 text-slate-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-[#c5a880]/15 p-2 rounded-lg">
                <svg className="w-5 h-5 text-[#c5a880]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-[#c5a880]" style={{ fontFamily: "Cairo, sans-serif" }}>
                مركز فكر العرب
              </h4>
            </div>
            <p className="leading-relaxed text-slate-400">
              منصة بحثية استراتيجية تهتم بالجوانب الفكرية الاستراتيجية للتحديات التي يواجهها العالم العربي في المجالات الأمنية، السياسية، الاقتصادية، الدفاعية، والاجتماعية.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="font-bold text-slate-300 mb-3" style={{ fontFamily: "Cairo, sans-serif" }}>
              خرائط الطريق والمسارات
            </h5>
            <ul className="space-y-2">
              {[
                "تفكيك الاستراتيجية الروسية",
                "تداعيات حرب إيران وأمريكا",
                "قواعد السلوك ونتنياهو",
                "المنظومة الفلسفية الصينية",
              ].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => setActiveTab("studies")}
                    className="hover:text-[#c5a880] transition flex items-center gap-1"
                  >
                    <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Security note */}
          <div className="bg-slate-800/20 p-4 rounded-xl border border-slate-800/50">
            <span className="text-[10px] font-bold text-[#c5a880] uppercase tracking-wider block mb-1">
              ميثاق أمن البيانات والمعلومات
            </span>
            <p className="text-slate-400 leading-relaxed">
              نعتمد على نظام إدارة هوية يسجل كل تصفح، وتعتمد المنظومة خوادم محلية مملوكة بالكامل دون استخدام خوادم خارجية عامة لضمان استقلالية وأمان المعلومات الاستشارية شديدة السرية.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>&copy; 2026 مركز فكر العرب للأبحاث والدراسات الاستراتيجية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4 text-sm">
            {["twitter", "linkedin", "telegram"].map((s) => (
              <a key={s} href="#" className="hover:text-[#c5a880] transition">
                {s === "twitter" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                )}
                {s === "linkedin" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                )}
                {s === "telegram" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
