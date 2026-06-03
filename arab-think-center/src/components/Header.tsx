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
            <div className="bg-gradient-to-br from-[#c5a880] to-yellow-600 p-2.5 rounded-lg shadow-lg">
              <svg className="w-7 h-7 text-[#0f172a]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
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
