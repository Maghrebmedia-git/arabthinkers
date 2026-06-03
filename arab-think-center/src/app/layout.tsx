import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "600", "700", "800"],
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "مركز فكر العرب | رؤية، تشخيص، وحلول عملية",
  description: "منصة بحثية استراتيجية تهتم بالجوانب الفكرية الاستراتيجية للتحديات التي يواجهها العالم العربي",
  icons: {
    icon: "/fkir.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-[#c5a880] selection:text-[#0f172a]">
        {children}
      </body>
    </html>
  );
}
