import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Providers from "./providers";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import "./i18n";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} flex min-h-screen flex-col items-center justify-between px-12 dark:bg-[#0d213b] bg-[#FAF7F5] dark:text-slate-200 text-black`}
      >
        <Suspense fallback={<Loading />}>
          <Providers>
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
