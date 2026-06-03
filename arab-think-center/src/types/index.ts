export type ArticleCategory =
  | "russia"
  | "iran-us"
  | "sykes-picot"
  | "china"
  | "trump"
  | "netanyahu";

export interface Article {
  title: string;
  category: ArticleCategory;
  category_ar: string;
  imageSrc: string;
  imageAlt: string;
  author: string;
  date: string;
  content: string;
}

export interface NetanyahuScenario {
  title: string;
  drivers: string;
  prediction: string;
  confirmers: string;
  refuter: string;
  arab_impact: string;
}

export interface ChinaRule {
  title: string;
  premise: string;
  app: string;
  danger: string;
}

export interface RussiaScenario {
  title: string;
  probability: string;
  probClass: string;
  desc: string;
  drivers: string;
}

export type ActiveTab = "home" | "studies" | "tools" | "about" | "contact";
export type ToolTab = "netanyahu" | "china" | "russia";
export type ReadingTheme = "" | "sepia-theme" | "dark-reading-theme";
