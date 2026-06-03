"use client";

export default function AboutPanel() {
  return (
    <div className="py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#0f172a]" style={{ fontFamily: "Cairo, sans-serif" }}>
            حول مركز فكر العرب
          </h3>
          <p className="text-slate-500 max-w-xl mx-auto mt-2 text-sm">
            البنية الهيكلية، المبادئ الحاكمة، وفلسفة العمل من الخفاء إلى الفضاء العام.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0f172a] text-white rounded-3xl p-6 border border-slate-800 shadow-xl">
              <h4 className="text-lg font-bold text-[#c5a880] mb-3" style={{ fontFamily: "Cairo, sans-serif" }}>
                ثلاثة شرايين متوازية للتأثير
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                نحن لا نكتفي بإنتاج أوراق أبحاث أكاديمية بل نعمل عبر ثلاثة مستويات متكاملة:
              </p>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <svg className="w-3 h-3 text-[#c5a880] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <div><strong>التأثير السياسي الحذر:</strong> جمع صانعي القرار على طاولات سرية لبناء توافقات دون إحراج علني.</div>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-3 h-3 text-[#c5a880] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <div><strong>التأثير الاستراتيجي الاستشرافي:</strong> تزويد المؤسسات بخرائط سيناريوهات وتقديرات موقف فورية.</div>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-3 h-3 text-[#c5a880] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <div><strong>التأثير الاجتماعي العام:</strong> تبسيط المعقد وصياغة فهم عميق للرأي العام.</div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-slate-900" style={{ fontFamily: "Cairo, sans-serif" }}>
                المبادئ الحاكمة للمنظومة
              </h4>
              {[
                {
                  title: "الاستقلالية المهندسة:",
                  body: "لا يحق لأي جهة تمويل تجاوز 25% من ميزانيتنا لضمان استقلالية القرارات ومناهج البحث العلمي.",
                },
                {
                  title: "المصداقية كرأس مال:",
                  body: "تخضع جميع مخرجاتنا لمراجعات مزدوجة من خبراء خارجيين مستقلين بالكامل.",
                },
                {
                  title: "السرية الانتقائية الذكية:",
                  body: "بناء قنوات تواصل خلفية نهمس بها ونعرف متى نصمت ومتى نتكلم بأقصى درجات الضبط المعلوماتي.",
                },
              ].map((p) => (
                <div key={p.title}>
                  <span className="text-xs font-bold text-slate-800 block">{p.title}</span>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-6" style={{ fontFamily: "Cairo, sans-serif" }}>
                البنية التنظيمية الرباعية لمركز فكر العرب
              </h4>
              <div className="space-y-6">
                {[
                  {
                    level: "المستوى الأول: مجلس الأمناء",
                    color: "text-[#d97706]",
                    body: "7 إلى 9 خبراء ومثقفين يرسمون السياسات العليا ويضمنون حياد واستقلال المنظومة الفكرية للمركز.",
                  },
                  {
                    level: "المستوى الثاني: الأمانة العامة التنفيذية",
                    color: "text-[#0f172a]",
                    body: "الجهاز التنفيذي اليومي برئاسة المدير العام لتنفيذ الأبحاث والدراسات وتفعيل الشراكات الاستراتيجية.",
                  },
                  {
                    level: "المستوى الثالث: الدوائر الاستشارية الثلاث",
                    color: "text-emerald-600",
                    body: "تضم دائرة صانعي القرار السابقين، الدائرة الأكاديمية الصارمة، ودائرة المجتمع المدني والإعلام.",
                  },
                ].map((item) => (
                  <div key={item.level} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <span className={`text-xs font-bold ${item.color} uppercase block tracking-wider`}>{item.level}</span>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">{item.body}</p>
                  </div>
                ))}

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-xs font-bold text-[#c5a880] uppercase block tracking-wider">المستوى الرابع: الوحدات التشغيلية السبع</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                    {[
                      "1. وحدة التحليل الاستراتيجي",
                      "2. وحدة الاستجابة السريعة",
                      "3. وحدة الحوارات الخلفية",
                      "4. وحدة الإنتاج الإعلامي",
                      "5. وحدة التسويق الرقمي",
                      "6. وحدة الشراكات الدولية",
                      "7. وحدة البرامج التثقيفية",
                    ].map((u) => (
                      <div key={u} className="bg-white p-2 rounded-lg border text-center text-[10px] font-bold text-slate-700">
                        {u}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
