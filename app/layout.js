/** @format */

import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Ersag / Ерсаг",
  description:
    "Купити товари Ерсаг Ersag Україна. Турецька екологічна побутова хімія",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='uk'>
      <body className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow md:pt-[60px] pb-[40px] max-w-5xl m-auto w-full'>
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
