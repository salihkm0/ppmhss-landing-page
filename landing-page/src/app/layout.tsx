import type { Metadata } from "next";
import "./globals.css";
import PublicLayoutWrapper from "@/components/PublicLayoutWrapper";

export const metadata: Metadata = {
  title: "PPM HSS Kottukkara | Panakkad Pookkoya Thangal Memorial Higher Secondary School",
  description: "Official portal of P.P.M. Higher Secondary School, Kottukkara, Kondotty, Kerala. Established in 1976. Affiliated with DHSE Kerala.",
  keywords: "PPM HSS, Kottukkara, Higher Secondary School, Malappuram schools, Kerala DHSE, Admissions, Academic Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth overflow-x-hidden">
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-800 antialiased selection:bg-[#008744] selection:text-white overflow-x-hidden w-full max-w-full">
        <PublicLayoutWrapper>{children}</PublicLayoutWrapper>
      </body>
    </html>
  );
}
