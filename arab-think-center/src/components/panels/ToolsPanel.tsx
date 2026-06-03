"use client";

import { useApp } from "@/context/AppContext";
import { netyScenarios, chinaRules, russiaScenarios } from "@/data/scenarios";

export default function ToolsPanel() {
  const {
    toolTab, setToolTab,
    selectedNetyScen, setSelectedNetyScen,
    openChinaRule, setOpenChinaRule,
  } = useApp();

  return (
    <div className="py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#d97706] bg-amber-50 px-3 py-1 rounded-full">
            محاكاة وتحليل بصري
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2" style={{ fontFamily: "Cairo, sans-serif" }}>
            الأدوات الاستشارية التفاعلية
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto mt-2 text-sm">
            أدوات متطورة تساعدك على فك شيفرة السياسات وقواعد السلوك والتنبؤ بالخطوات القادمة للفاعلين الكبار.
          </p>
        </div>

        {/* Tab Nav */}
        <div className="flex justify-center mb-8 border-b border-slate-200 max-w-lg mx-auto">
          {(["netanyahu", "china", "russia"] as const).map((tab) => {
            const labels = { netanyahu: "مصفوفة نتنياهو", china: "ميثاق الصين الـ12", russia: "سيناريوهات روسيا" };
            return (
              <button
                key={tab}
                onClick={() => setToolTab(tab)}
                className={`px-4 py-3 border-b-2 font-bold text-sm transition ${
                  toolTab === tab
                    ? "border-[#c5a880] text-[#c5a880]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>

        {/* Netanyahu Matrix */}
        {toolTab === "netanyahu" && (
          <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-500/10 p-2.5 rounded-xl">
                <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Cairo, sans-serif" }}>
                  محاكي مصفوفة التنبؤ بسلوك بنيامين نتنياهو
                </h4>
                <p className="text-slate-500 text-xs">اختر أحد السيناريوهات الاستراتيجية لرؤية نتائج التنبؤ المنهجي.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {netyScenarios.map((scen, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedNetyScen(idx)}
                  className={`p-4 rounded-xl border text-right transition duration-200 flex flex-col justify-between h-28 ${
                    selectedNetyScen === idx
                      ? "bg-red-600 text-white shadow-lg border-red-600"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                  }`}
                >
                  <span className="text-xs font-bold opacity-75" style={{ fontFamily: "Cairo, sans-serif" }}>
                    سيناريو رقم {idx + 1}
                  </span>
                  <span className="text-sm font-black leading-snug" style={{ fontFamily: "Cairo, sans-serif" }}>
                    {scen.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -ml-20 -mt-20" />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 border-b md:border-b-0 md:border-l border-slate-800 pb-6 md:pb-0 md:pl-6">
                  <span className="text-xs font-bold text-red-400 tracking-wider uppercase">السيناريو النشط</span>
                  <h5 className="text-xl font-black text-[#c5a880] mt-1 leading-snug" style={{ fontFamily: "Cairo, sans-serif" }}>
                    {netyScenarios[selectedNetyScen].title}
                  </h5>
                  <div className="mt-6">
                    <span className="text-[11px] font-bold text-slate-400 block uppercase">المتغيرات المحركة:</span>
                    <p className="text-slate-300 text-xs mt-1">{netyScenarios[selectedNetyScen].drivers}</p>
                  </div>
                </div>
                <div className="md:col-span-8 space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-2">
                      السلوك المتوقع:
                    </span>
                    <p className="text-slate-200 text-sm leading-relaxed">{netyScenarios[selectedNetyScen].prediction}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                    <div>
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">مؤشرات التأكيد:</span>
                      <p className="text-slate-400 text-xs mt-1">{netyScenarios[selectedNetyScen].confirmers}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block">مؤشر الدحض:</span>
                      <p className="text-slate-400 text-xs mt-1">{netyScenarios[selectedNetyScen].refuter}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-800">
                    <span className="text-[11px] font-bold text-[#c5a880] uppercase tracking-wider block">الأثر على المنطقة العربية:</span>
                    <p className="text-slate-300 text-xs mt-1">{netyScenarios[selectedNetyScen].arab_impact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* China Rules */}
        {toolTab === "china" && (
          <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-amber-500/10 p-2.5 rounded-xl">
                <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Cairo, sans-serif" }}>
                  أطلس الاثني عشر قاعدة للتعامل مع المشروع الصيني
                </h4>
                <p className="text-slate-500 text-xs">دليل استراتيجي موسع وعملي لصناع القرار العرب.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {chinaRules.map((rule, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl p-5 hover:shadow-md transition duration-200 ${
                    openChinaRule === idx ? "border-[#c5a880] bg-amber-50/10" : "border-slate-100 bg-white"
                  }`}
                >
                  <div
                    className="flex items-start justify-between cursor-pointer"
                    onClick={() => setOpenChinaRule(openChinaRule === idx ? null : idx)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-lg bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center font-bold text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900" style={{ fontFamily: "Cairo, sans-serif" }}>
                          {rule.title}
                        </h5>
                        {openChinaRule !== idx && (
                          <p className="text-slate-500 text-[11px] mt-1 line-clamp-1">{rule.premise}</p>
                        )}
                      </div>
                    </div>
                    <svg
                      className={`w-3 h-3 text-slate-400 mt-1 transition ${openChinaRule === idx ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {openChinaRule === idx && (
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                      <p className="text-slate-600 text-xs leading-relaxed">{rule.premise}</p>
                      <div className="bg-slate-50 p-3 rounded-xl">
                        <span className="text-[10px] font-bold text-emerald-600 block">التطبيق العملي:</span>
                        <p className="text-slate-600 text-xs mt-1">{rule.app}</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-xl">
                        <span className="text-[10px] font-bold text-red-600 block">مؤشر الخطر:</span>
                        <p className="text-slate-600 text-xs mt-1">{rule.danger}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Russia Scenarios */}
        {toolTab === "russia" && (
          <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-500/10 p-2.5 rounded-xl">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Cairo, sans-serif" }}>
                  مصفوفة السيناريوهات الاستشرافية لسلوك روسيا
                </h4>
                <p className="text-slate-500 text-xs">تحليل رباعي الأبعاد للسيناريوهات المتوقعة للمشروع الروسي.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {russiaScenarios.map((scen, idx) => (
                <div key={idx} className="border border-slate-100 bg-white rounded-2xl p-6 hover:shadow-lg transition duration-200">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-base font-black text-slate-900" style={{ fontFamily: "Cairo, sans-serif" }}>
                      {scen.title}
                    </h5>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${scen.probClass}`}>
                      {scen.probability}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">{scen.desc}</p>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-bold text-[#0f172a] block uppercase tracking-wider">المحركات الجيوسياسية:</span>
                    <p className="text-slate-600 text-[11px] mt-1">{scen.drivers}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
