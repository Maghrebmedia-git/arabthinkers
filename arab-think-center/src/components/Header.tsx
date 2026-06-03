"use client";

import { useApp } from "@/context/AppContext";
import { ActiveTab } from "@/types";

const navItems: { label: string; tab: ActiveTab }[] = [
  { label: "الرئيسية", tab: "home" },
  { label: "الدراسات والتقارير", tab: "studies" },
  { label: "أدوات تفاعلية", tab: "tools" },
  { label: "من نحن", tab: "about" },
  { label: "اتصل بنا", tab: "contact" },
];

export default function Header() {
  const { activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen, searchQuery, setSearchQuery } = useApp();

  return (
    <header className="bg-[#0f172a] text-white border-b border-slate-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setActiveTab("home")}
          >
            <img src="/fkir.png" alt="logo" className="w-12 h-12 rounded-xl shadow-lg" />
            <div>
              <h1 className="text-xl font-bold tracking-wide text-[#c5a880]" style={{ fontFamily: "Cairo, sans-serif" }}>
                مركز فكر العرب
              </h1>
              <p className="text-xs text-slate-400">رؤية، تشخيص، وحلول عملية</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1 text-sm font-medium">
            {navItems.map(({ label, tab }) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg transition duration-200 ${
                  activeTab === tab
                    ? "text-[#c5a880] bg-slate-800/60"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Search + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && setActiveTab("studies")}
                placeholder="ابحث في الدراسات..."
                className="bg-slate-800 text-white placeholder-slate-400 text-xs rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-[#c5a880] w-48"
              />
              <svg className="absolute right-2.5 top-2.5 w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-slate-800 px-4 py-3 space-y-1">
          {navItems.map(({ label, tab }) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setMobileMenuOpen(false); }}
              className="block w-full text-right px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            >
              {label}
            </button>
          ))}
          <div className="relative pt-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث..."
              className="w-full bg-slate-800 text-white placeholder-slate-400 text-xs rounded-lg pl-3 pr-8 py-2 focus:outline-none"
            />
            <svg className="absolute right-2.5 top-4.5 w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      )}
    </header>
  );
}
