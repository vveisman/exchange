import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppWrapper } from "@/context";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paxful: Leading Peer-to-Peer Crypto MarketPlace Worldwide",
  description:
    "Paxful is a platform where you can trade Bitcoin with over 350 payment methods, from gift cards to cash. Join over 12 million users and enjoy secure, fast, and easy transactions with Paxful.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <AppWrapper>
        <body className={`${inter.className} relative`}>
          {/* <Navbar /> */}
          <main className='flex flex-col items-center justify-start '>
            {children}
          </main>
          {/* <Footer /> */}
        </body>
      </AppWrapper>
    </html>
  );
}
