"use client";

import Image from "next/image";
import { useState } from "react";
import FlipbookReader from "@/components/FlipbookReader";
import { useApp } from "@/context/AppContext";
import { articles } from "@/data/articles";
import { ArticleCategory } from "@/types";

const catBadgeClass: Record<string, string> = {
  russia: "bg-emerald-50 text-emerald-600",
  "iran-us": "bg-amber-50 text-amber-600",
  china: "bg-red-50 text-red-600",
  netanyahu: "bg-indigo-50 text-indigo-600",
  "sykes-picot": "bg-blue-50 text-blue-600",
  trump: "bg-purple-50 text-purple-600",
};

const themeClasses = {
  "": "",
  "sepia-theme": "sepia-theme",
  "dark-reading-theme": "dark-reading-theme",
};

const filterButtons: { label: string; value: ArticleCategory | "all" }[] = [
  { label: "الكل", value: "all" },
  { label: "روسيا", value: "russia" },
  { label: "إيران وأمريكا", value: "iran-us" },
  { label: "الصين", value: "china" },
  { label: "نتنياهو", value: "netanyahu" },
];

export default function StudiesPanel() {
  const {
    searchQuery, setSearchQuery,
    filterCategory, setFilterCategory,
    readingTheme, setReadingTheme,
    fontSize, increaseFontSize, decreaseFontSize,
    selectedArticleIndex, setSelectedArticleIndex,
  } = useApp();
  const [mobileOpenArticleIndex, setMobileOpenArticleIndex] = useState<number | null>(null);

  const filtered = articles.filter((a) => {
    const matchCat = filterCategory === "all" || a.category === filterCategory;
    const matchSearch =
      searchQuery.trim() === "" ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const article = articles[selectedArticleIndex];

  return (
    <div className="py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 sm:p-4 mb-5 sm:mb-6 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-xs font-bold text-slate-400">تصفية:</span>
            {filterButtons.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setFilterCategory(value)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                  filterCategory === value
                    ? "bg-[#c5a880] text-[#0f172a]"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث فوري..."
              className="w-full bg-slate-100 text-slate-800 placeholder-slate-400 text-xs rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-[#c5a880]"
            />
            <svg className="absolute right-2.5 top-2.5 w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">الفهرس والملفات المتاحة</h4>
            {filtered.map((art) => {
              const realIndex = articles.indexOf(art);
              const isActive = selectedArticleIndex === realIndex;
              return (
                <div
                  key={realIndex}
                  onClick={() => setSelectedArticleIndex(realIndex)}
                  className={`p-3 sm:p-4 rounded-xl border cursor-pointer transition duration-200 shadow-sm flex flex-col justify-between ${
                    isActive
                      ? "border-[#c5a880] bg-[#0f172a] text-white"
                      : "border-slate-100 bg-white text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <div className="relative mb-3 aspect-[16/9] overflow-hidden rounded-lg bg-slate-100">
                    <Image
                      src={art.imageSrc}
                      alt={art.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 25vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                          isActive ? "bg-white/10 text-white" : catBadgeClass[art.category] || "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {art.category_ar}
                      </span>
                      <span className="text-[10px] text-slate-400">{art.date}</span>
                    </div>
                    <h5 className="text-[13px] sm:text-sm font-bold leading-snug" style={{ fontFamily: "Cairo, sans-serif" }}>
                      {art.title}
                    </h5>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100/10">
                    <span className="text-[11px] text-slate-400">{art.author}</span>
                    <svg className="w-3 h-3 text-[#c5a880]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile accordion */}
          <div className="lg:hidden space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">الفهرس والملفات المتاحة</h4>
            {filtered.map((art) => {
              const realIndex = articles.indexOf(art);
              const isOpen = mobileOpenArticleIndex === realIndex;
              return (
                <div key={realIndex}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedArticleIndex(realIndex);
                      setMobileOpenArticleIndex(isOpen ? null : realIndex);
                    }}
                    aria-expanded={isOpen}
                    className={`w-full p-3 sm:p-4 rounded-xl border cursor-pointer transition duration-200 shadow-sm flex flex-col justify-between text-right ${
                      isOpen
                        ? "border-[#c5a880] bg-[#0f172a] text-white"
                        : "border-slate-100 bg-white text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <div className="relative mb-3 aspect-[16/9] overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src={art.imageSrc}
                        alt={art.imageAlt}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                          isOpen ? "bg-white/10 text-white" : catBadgeClass[art.category] || "bg-slate-100 text-slate-600"
                        }`}>
                          {art.category_ar}
                        </span>
                        <span className="text-[10px] text-slate-400">{art.date}</span>
                      </div>
                      <h5 className="text-[13px] sm:text-sm font-bold leading-snug" style={{ fontFamily: "Cairo, sans-serif" }}>
                        {art.title}
                      </h5>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100/10">
                      <span className="text-[11px] text-slate-400">{art.author}</span>
                      <span className="text-xs font-bold text-[#c5a880]">{isOpen ? "إخفاء المقال" : "عرض المقال"}</span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-2 bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
                      <div className="bg-slate-100 border-b border-slate-200 px-3 py-2.5 flex flex-wrap items-center justify-between gap-2 text-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-600">القراءة:</span>
                          {(["", "sepia-theme", "dark-reading-theme"] as const).map((t) => (
                            <button
                              key={t}
                              onClick={() => setReadingTheme(t)}
                              title={t === "" ? "فاتح" : t === "sepia-theme" ? "ورق بردي" : "داكن"}
                              className={`w-6 h-6 rounded-full border-2 shadow-sm ${
                                readingTheme === t ? "border-[#c5a880]" : "border-slate-300"
                              } ${
                                t === "" ? "bg-white" : t === "sepia-theme" ? "bg-[#f4ece1]" : "bg-[#0f172a]"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex items-center bg-slate-200 rounded-lg p-1 border border-slate-300">
                          <button onClick={decreaseFontSize} className="px-3 py-1 text-xs hover:bg-white rounded font-black text-slate-800">-</button>
                          <span className="px-2 text-xs font-black min-w-[44px] text-center text-slate-800">خط {fontSize}</span>
                          <button onClick={increaseFontSize} className="px-3 py-1 text-xs hover:bg-white rounded font-black text-slate-800">+</button>
                        </div>
                      </div>
                      <FlipbookReader article={art} fontSize={fontSize} themeClass={themeClasses[readingTheme]} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Reader */}
          <div className="hidden lg:block lg:col-span-8 xl:col-span-9">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-slate-100 overflow-hidden flex flex-col">
              {/* Controls */}
              <div className="bg-slate-100 border-b border-slate-200 px-3 sm:px-6 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-2 sm:gap-4 text-slate-800">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-600">تخصيص القراءة:</span>
                  <div className="flex gap-2">
                    {(["", "sepia-theme", "dark-reading-theme"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setReadingTheme(t)}
                        title={t === "" ? "فاتح" : t === "sepia-theme" ? "ورق بردي" : "داكن"}
                        className={`w-6 h-6 rounded-full border-2 shadow-sm transition hover:scale-110 ${
                          readingTheme === t ? "border-[#c5a880]" : "border-slate-300"
                        } ${
                          t === "" ? "bg-white" : t === "sepia-theme" ? "bg-[#f4ece1]" : "bg-[#0f172a]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex items-center bg-slate-200 rounded-lg p-1 border border-slate-300">
                    <button onClick={decreaseFontSize} className="px-2 sm:px-3 py-1 text-xs hover:bg-white rounded transition font-black text-slate-800">
                      -
                    </button>
                    <span className="px-2 sm:px-3 text-xs font-black min-w-[44px] sm:min-w-[50px] text-center text-slate-800">
                      خط {fontSize}
                    </span>
                    <button onClick={increaseFontSize} className="px-2 sm:px-3 py-1 text-xs hover:bg-white rounded transition font-black text-slate-800">
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition"
                    title="طباعة"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                  </button>
                </div>
              </div>

              <FlipbookReader article={article} fontSize={fontSize} themeClass={themeClasses[readingTheme]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
