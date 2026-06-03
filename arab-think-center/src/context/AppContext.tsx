"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ActiveTab, ToolTab, ReadingTheme, ArticleCategory } from "@/types";

interface AppContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filterCategory: ArticleCategory | "all";
  setFilterCategory: (cat: ArticleCategory | "all") => void;
  readingTheme: ReadingTheme;
  setReadingTheme: (theme: ReadingTheme) => void;
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  toolTab: ToolTab;
  setToolTab: (tab: ToolTab) => void;
  selectedNetyScen: number;
  setSelectedNetyScen: (idx: number) => void;
  openChinaRule: number | null;
  setOpenChinaRule: (idx: number | null) => void;
  selectedArticleIndex: number;
  setSelectedArticleIndex: (idx: number) => void;
  openArticle: (index: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<ArticleCategory | "all">("all");
  const [readingTheme, setReadingTheme] = useState<ReadingTheme>("");
  const [fontSize, setFontSize] = useState(16);
  const [toolTab, setToolTab] = useState<ToolTab>("netanyahu");
  const [selectedNetyScen, setSelectedNetyScen] = useState(0);
  const [openChinaRule, setOpenChinaRule] = useState<number | null>(0);
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(0);

  const increaseFontSize = () => setFontSize((f) => Math.min(f + 1, 24));
  const decreaseFontSize = () => setFontSize((f) => Math.max(f - 1, 12));

  const openArticle = (index: number) => {
    setSelectedArticleIndex(index);
    setActiveTab("studies");
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        mobileMenuOpen,
        setMobileMenuOpen,
        searchQuery,
        setSearchQuery,
        filterCategory,
        setFilterCategory,
        readingTheme,
        setReadingTheme,
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        toolTab,
        setToolTab,
        selectedNetyScen,
        setSelectedNetyScen,
        openChinaRule,
        setOpenChinaRule,
        selectedArticleIndex,
        setSelectedArticleIndex,
        openArticle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
