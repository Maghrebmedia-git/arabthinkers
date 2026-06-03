"use client";

import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { articles } from "@/data/articles";

const cards = [
  {
    badge: "دراسة استراتيجية",
    badgeClass: "text-emerald-600 bg-emerald-50",
    title: "تفكيك الاستراتيجية الروسية وتحليل الاستجابات العالمية",
    desc: "تحليل شامل وعميق للاستراتيجية الروسية، متجاوزاً التصريحات الرسمية إلى الجذور الفكرية والسلوكية والجيوسياسية من الفكر الإمبراطوري إلى واقعية التفكيك.",
    index: 0,
  },
  {
    badge: "تقرير استشرافي",
    badgeClass: "text-amber-600 bg-amber-50",
    title: "الحرب الأمريكية الإيرانية وتداعياتها على شرق آسيا",
    desc: "قراءة استشرافية من منظور شرق آسيوي للصراع الإيراني الأمريكي وتداعياته العميقة على موازين الطاقة وسلاسل التوريد.",
    index: 1,
  },
  {
    badge: "دراسة سوسيولوجية-سياسية",
    badgeClass: "text-blue-600 bg-blue-50",
    title: "العراق وإيران والثوابت والمنطقة الرمادية",
    desc: "دراسة نظرية جامعة في فلسفة الدولة والعدالة والكرامة الحضارية ومعادلة التماسك والتفكك عبر نموذج تباين العراق وإيران.",
    index: 2,
  },
  {
    badge: "أطروحة فكرية",
    badgeClass: "text-red-600 bg-red-50",
    title: "المشروع السياسي والفكري والاستراتيجي الصيني",
    desc: "دراسة مقارنة للمشاريع الحضارية الكبرى وفهم عميق للرؤية الاستراتيجية الصينية القائمة على الفلسفات التاريخية وهندسة تيانشيا.",
    index: 3,
  },
  {
    badge: "تشخيص سلوكي",
    badgeClass: "text-purple-600 bg-purple-50",
    title: "ظاهرة ترامب والشخصانية السياسية الأمريكية",
    desc: "تشخيص فني وسلوكي لأبعاد الشخصية الترامبية واستقراء نموذج السلوك وتأثيراته الهيكلية على تآكل الهيمنة والمؤسسات الأمريكية.",
    index: 4,
  },
  {
    badge: "تنبؤ استراتيجي",
    badgeClass: "text-indigo-600 bg-indigo-50",
    title: "بنيامين نتنياهو: خريطة الدوافع ومصفوفة التنبؤ",
    desc: "بناء نموذج تنبؤي فائق الدقة لسلوك نتنياهو في مواجهة السيناريوهات الاستراتيجية والقضائية والائتلافية الحساسة.",
    index: 5,
  },
];

const stats = [
  { value: "6", label: "ملفات دراسات كبرى مصنفة" },
  { value: "12", label: "قاعدة ذهبية للتعامل مع الصين" },
  { value: "7", label: "قواعد للتعامل مع روسيا" },
  { value: "2026", label: "رصد محدث للقرن الحادي والعشرين" },
];

export default function HomePanel() {
  const { setActiveTab, openArticle } = useApp();

  return (
    <div className="py-6 sm:py-12">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="bg-gradient-to-br from-[#0f172a] to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -ml-20 -mb-20" />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#c5a880]/20 text-[#c5a880] mb-6 border border-[#c5a880]/30">
              التحليل الجيوسياسي والاستراتيجي الأعمق
            </span>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight sm:leading-none mb-6" style={{ fontFamily: "Cairo, sans-serif" }}>
              تفكيك أزمات الحاضر وصياغة{" "}
              <span className="text-[#c5a880]">خرائط طريق للمستقبل</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              يقدم مركزنا تحليلات جيوسياسية رفيعة المستوى تسبر الجذور الفكرية العميقة والأنماط السلوكية للدول والفاعلين المؤثرين في منطقة الشرق الأوسط والعالم، مع تقديم رؤى وحلول عملية مبتكرة تخدم صناع القرار.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setActiveTab("studies")}
                className="bg-[#c5a880] hover:bg-[#b39268] text-[#0f172a] font-bold px-6 py-3.5 rounded-xl shadow-lg transition duration-200 hover:-translate-y-0.5"
              >
                تصفح الدراسات والأبحاث
              </button>
              <button
                onClick={() => setActiveTab("tools")}
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-medium px-6 py-3.5 rounded-xl transition duration-200"
              >
                جرب الأدوات التفاعلية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-[#0f172a]" style={{ fontFamily: "Cairo, sans-serif" }}>
            أبرز الأوراق البحثية والتقارير الاستراتيجية
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto mt-2 text-sm">
            دراسات جيوسياسية معمقة تغطي أهم الفاعلين الإقليميين والدوليين وأثرهم المباشر على الأمن القومي العربي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.index}
              className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <button
                  type="button"
                  onClick={() => openArticle(card.index)}
                  className="relative block aspect-[16/9] w-full bg-slate-100"
                  aria-label={card.title}
                >
                  <Image
                    src={articles[card.index].imageSrc}
                    alt={articles[card.index].imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </button>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${card.badgeClass}`}>
                      {card.badge}
                    </span>
                  </div>
                  <h4
                    className="text-lg font-bold text-slate-900 mb-2 hover:text-[#c5a880] cursor-pointer"
                    style={{ fontFamily: "Cairo, sans-serif" }}
                    onClick={() => openArticle(card.index)}
                  >
                    {card.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">{card.desc}</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button
                  onClick={() => openArticle(card.index)}
                  className="text-sm font-bold text-[#c5a880] hover:text-[#b39268] flex items-center gap-1.5 self-start"
                >
                  اقرأ كامل الورقة
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-slate-900 text-white py-12 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#c5a880] mb-1" style={{ fontFamily: "Cairo, sans-serif" }}>
                  {s.value}
                </div>
                <div className="text-slate-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="bg-[#c5a880]/10 p-5 rounded-2xl">
            <svg className="w-12 h-12 text-[#d97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Cairo, sans-serif" }}>
              لماذا تم تأسيس مركز فكر العرب؟
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              تعاني المنطقة العربية من فجوة بنيوية حادة بين إنتاج المعرفة واستخدامها في صنع القرار. يسعى مركزنا ليكون الجسر الحقيقي والتأثير المباشر في السياسات وصياغة الفهم الشعبي.
            </p>
            <button
              onClick={() => setActiveTab("about")}
              className="text-sm font-bold text-[#d97706] hover:text-amber-700 flex items-center gap-1.5 mt-4"
            >
              اقرأ المزيد عن هيكلنا ومبادئنا الحاكمة
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
