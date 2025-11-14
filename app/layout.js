/** @format */

import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ersag.com.ua'),
  title: {
    default: "Ersag / Ерсаг - Турецька екологічна побутова хімія в Україні",
    template: "%s | Ersag / Ерсаг"
  },
  description:
    "Купити товари Ерсаг Ersag Україна. Турецька екологічна побутова хімія високої якості. Широкий асортимент екологічних засобів для дому. Доставка по всій Україні.",
  keywords: [
    "Ersag",
    "Ерсаг",
    "турецька побутова хімія",
    "екологічна побутова хімія",
    "купити Ersag Україна",
    "екологічні засоби для дому",
    "побутова хімія Ersag",
    "турецька хімія",
    "екологічні миючі засоби"
  ],
  authors: [{ name: "Ersag Ukraine" }],
  creator: "Ersag Ukraine",
  publisher: "Ersag Ukraine",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/",
    siteName: "Ersag / Ерсаг",
    title: "Ersag / Ерсаг - Турецька екологічна побутова хімія в Україні",
    description:
      "Купити товари Ерсаг Ersag Україна. Турецька екологічна побутова хімія високої якості. Широкий асортимент екологічних засобів для дому.",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Ersag - Турецька екологічна побутова хімія",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ersag / Ерсаг - Турецька екологічна побутова хімія",
    description:
      "Купити товари Ерсаг Ersag Україна. Турецька екологічна побутова хімія високої якості.",
    images: ["/images/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Додайте ваші коди верифікації, коли вони будуть доступні
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
