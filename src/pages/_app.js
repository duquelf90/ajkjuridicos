import "../../styles/globals.css";
import "rc-drawer/assets/index.css";
import { DefaultSeo } from "next-seo";
import {HeroUIProvider} from "@heroui/react";
import { SEOpt } from "../../next-seo.config";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <DefaultSeo {...SEOpt} />
      <HeroUIProvider>
        <Component {...pageProps} />
      </HeroUIProvider>
    </main>
  );
}
