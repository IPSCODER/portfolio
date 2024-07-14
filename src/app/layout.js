import { Inter } from "next/font/google";
import "@/assets/css/globals.scss";
import "@/assets/css/card.scss"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata= {
title: 'Pravin Sawant | Software Developer',
description: 'Pravin Sawant. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
authors: [{ name: 'pravin sawant' }, { name: 'pravin sawant', url: 'https://www.pravinswant.in' }],
metadataBase: new URL('https://www.pravinswant.in'),
  creator: 'pravin sawant',
  publisher: 'pravin sawant',
  keywords: ["pravin", "sawant","pravin sawant", "software developer", 'Next.js', 'React', 'JavaScript',"pravin sawant","front end developer","full stack developer","react developer","web developer"],
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': 'https://www.pravinswant.in',
    },
    
  },
  openGraph: {
    images: './favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar/>
        {children}
        <Footer/>
        </main>
        </body>
    </html>
  );
}
