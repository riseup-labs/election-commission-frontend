import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NavMenu from "@/components/NavMenu";
import SocialMediaBanner from "@/components/SocialMediaBanner";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kalpurush = localFont({
  src: "./fonts/kalpurush.ttf",
  variable: "--font-kalpurush",
  weight: "400",
  style: "normal",
});

export const metadata = {
  title: "Bangladesh Election Commission",
  description: "Bangladesh Election Commission",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${kalpurush.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Navbar />
        <NavMenu />
        {children}
        <SocialMediaBanner />
        <Footer />
      </body>
    </html>
  );
}
