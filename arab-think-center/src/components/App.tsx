"use client";

import { AppProvider, useApp } from "@/context/AppContext";
import Header from "./Header";
import Footer from "./Footer";
import HomePanel from "./panels/HomePanel";
import StudiesPanel from "./panels/StudiesPanel";
import ToolsPanel from "./panels/ToolsPanel";
import AboutPanel from "./panels/AboutPanel";
import ContactPanel from "./panels/ContactPanel";

function AppContent() {
  const { activeTab } = useApp();

  return (
    <div className="text-slate-800">
      <div className="bg-yellow-400 text-center py-2 px-4 text-sm font-semibold text-yellow-900">
        هذا الموقع تجريبي — This is a demo version
      </div>
      <Header />
      <main className="min-h-[calc(100vh-20rem)]">
        {activeTab === "home" && <HomePanel />}
        {activeTab === "studies" && <StudiesPanel />}
        {activeTab === "tools" && <ToolsPanel />}
        {activeTab === "about" && <AboutPanel />}
        {activeTab === "contact" && <ContactPanel />}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
